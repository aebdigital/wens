
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        if (!event.body) {
             return { statusCode: 400, body: JSON.stringify({ message: 'No body provided' }) };
        }

        const body = JSON.parse(event.body);
        const { formType, email } = body;
        
        // Validation
        if (!email) {
             return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Email is required' }),
            };
        }

        const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
        const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL;
        const SMTP2GO_FROM_EMAIL = process.env.SMTP2GO_FROM_EMAIL;

        if (!SMTP2GO_API_KEY || !BUSINESS_EMAIL || !SMTP2GO_FROM_EMAIL) {
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
            htmlBody = "
                <h2>Nová žiadosť o cenník</h2>
                <p><strong>Email klienta:</strong> ${email}</p>
                <p>Vyžiadané zo stránky produktu.</p>
            ";
        } else {
            // Default contact form
            const { name, message } = body;
            subject = `Nová správa od: ${name || 'Návštevník'}`;
            textBody = `Meno: ${name}\nEmail: ${email}\nSpráva: ${message}`;
            htmlBody = "
                <h2>Nová správa z kontaktného formulára</h2>
                <p><strong>Meno:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Správa:</strong></p>
                <p>${message ? message.replace(/\n/g, '<br>') : 'Bez správy'}</p>
            ";
        }

        const mailData = {
            api_key: SMTP2GO_API_KEY,
            sender: SMTP2GO_FROM_EMAIL,
            to: [BUSINESS_EMAIL],
            subject: subject,
            text_body: textBody,
            html_body: htmlBody,
        };

        const response = await fetch('https://api.smtp2go.com/v3/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mailData),
        });

        const data = await response.json();

        if (response.ok && data.data && data.data.succeeded > 0) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Email sent successfully!' }),
            };
        } else {
            console.error('SMTP2GO Error:', data);
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Failed to send email.' }),
            };
        }

    } catch (error) {
        console.error('Function Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};
