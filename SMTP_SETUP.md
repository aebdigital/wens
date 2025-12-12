# SMTP2GO Setup Instructions

## 1. Get Your API Key
1. Log in to your SMTP2GO dashboard.
2. Go to **Settings > API Keys**.
3. Create a new API Key with "Mail Send" permissions.
4. Copy the API Key.

## 2. Verify Sender Domain
1. Go to **Settings > Sender Domains**.
2. Add your domain (`wens.sk`).
3. Follow the DNS instructions to verify ownership (CNAME records).
4. Verify a "Single Sender" email (e.g., `info@wens.sk`) if you haven't verified the whole domain yet.

## 3. Configure Netlify Environment Variables
1. Go to your Netlify Dashboard > Site Settings > Build & Deploy > Environment.
2. Add the following variables:

| Key | Value | Description |
|-----|-------|-------------|
| `SMTP2GO_API_KEY` | `api-xxxxxxxxxxxx` | Your SMTP2GO API Key |
| `BUSINESS_EMAIL` | `info@wens.sk` | Where you want to receive emails |
| `SMTP2GO_FROM_EMAIL` | `info@wens.sk` | The verified sender email |

## 4. Deploy
1. Push your changes to the repository.
2. Netlify will detect the `netlify.toml` and `netlify/functions` directory.
3. The function will be deployed at `/.netlify/functions/contact`.

## Troubleshooting
- **500 Error**: Check if environment variables are set correctly in Netlify.
- **Email not delivered**: Check SMTP2GO "Reports" to see if it was rejected/bounced.
- **Form not submitting**: Check browser console for JavaScript errors.
