const https = require('https');

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' })
        };
    }

    try {
        if (!event.body) {
             return { statusCode: 400, body: JSON.stringify({ message: 'No body provided' }) };
        }

        const body = JSON.parse(event.body);
        const { formType, email } = body;
        const turnstileToken = body['cf-turnstile-response'];

        // Verify Turnstile token
        const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
        if (turnstileSecret && turnstileToken) {
            const turnstileResult = await verifyTurnstile(turnstileToken, turnstileSecret);
            if (!turnstileResult.success) {
                console.error('Turnstile verification failed:', turnstileResult);
                return {
                    statusCode: 400,
                    body: JSON.stringify({ message: 'Overenie zlyhalo. Skúste to znova.' }),
                };
            }
        }

        // Validation
        if (!email) {
             return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Email is required' }),
            };
        }

        const apiKey = process.env.SMTP2GO_API_KEY;
        const businessEmail = process.env.BUSINESS_EMAIL;
        const fromEmail = process.env.SMTP2GO_FROM_EMAIL;

        if (!apiKey || !businessEmail || !fromEmail) {
            console.error('Missing env vars');
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Server configuration error.' }),
            };
        }

        let subject, textBody, htmlBody;

        if (formType === 'pricelist') {
            subject = 'Žiadosť o cenník (Website)';
            textBody = `Nový záujem o cenník.\n\nEmail: ${email}`;
            htmlBody = `
                <h2>Nová žiadosť o cenník</h2>
                <p><strong>Email klienta:</strong> ${email}</p>
                <p>Vyžiadané zo stránky produktu.</p>
            `;
        } else {
            // Default contact form
            const { name, message } = body;
            subject = `Nová správa od: ${name || 'Návštevník'}`;
            textBody = `Meno: ${name}\nEmail: ${email}\nSpráva: ${message}`;
            htmlBody = `
                <h2>Nová správa z kontaktného formulára</h2>
                <p><strong>Meno:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Správa:</strong></p>
                <p>${message ? message.replace(/\n/g, '<br>') : 'Bez správy'}</p>
            `;
        }

        const smtp2goPayload = {
            api_key: apiKey,
            sender: fromEmail,
            to: [businessEmail],
            subject: subject,
            text_body: textBody,
            html_body: htmlBody
        };

        const result = await sendEmailViaSMTP2GO(smtp2goPayload);

        if (result.success) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Email sent successfully!' }),
            };
        } else {
            console.error('SMTP2GO Error:', result.error);
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Failed to send email.' }),
            };
        }

    } catch (error) {
        console.error('Function Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
        };
    }
};

function sendEmailViaSMTP2GO(payload) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify(payload);

        const options = {
            hostname: 'api.smtp2go.com',
            port: 443,
            path: '/v3/email/send',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let responseBody = '';

            res.on('data', (chunk) => {
                responseBody += chunk;
            });

            res.on('end', () => {
                try {
                    const response = JSON.parse(responseBody);
                    // SMTP2GO success check
                    if (res.statusCode === 200 && response.data && response.data.succeeded > 0) {
                        resolve({ success: true });
                    } else {
                        resolve({ success: false, error: response });
                    }
                } catch (e) {
                    resolve({ success: false, error: 'Invalid response from email service' });
                }
            });
        });

        req.on('error', (error) => {
            resolve({ success: false, error: error.message });
        });

        req.write(postData);
        req.end();
    });
}

// Verify Cloudflare Turnstile token
function verifyTurnstile(token, secret) {
    return new Promise((resolve) => {
        const postData = new URLSearchParams({
            secret: secret,
            response: token
        }).toString();

        const options = {
            hostname: 'challenges.cloudflare.com',
            port: 443,
            path: '/turnstile/v0/siteverify',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let responseBody = '';

            res.on('data', (chunk) => {
                responseBody += chunk;
            });

            res.on('end', () => {
                try {
                    const response = JSON.parse(responseBody);
                    resolve(response);
                } catch (e) {
                    resolve({ success: false, error: 'Invalid response from Turnstile' });
                }
            });
        });

        req.on('error', (error) => {
            resolve({ success: false, error: error.message });
        });

        req.write(postData);
        req.end();
    });
}