# WENS DOOR website

Next.js website for [wens.sk](https://wens.sk).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment variables

The contact form and analytics integrations use these variables:

```env
SMTP2GO_API_KEY=
SMTP2GO_FROM_EMAIL=
BUSINESS_EMAIL=
TURNSTILE_SECRET_KEY=
SITE_URL=https://wens.sk
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-VE7V9FQS1W
```

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` optionally overrides the website's default `G-VE7V9FQS1W` measurement ID. Google Analytics 4 loads after the visitor accepts analytical cookies and reports engagement metrics such as average engagement time per page.
- `SITE_URL` is the public origin SMTP2GO uses to retrieve the two PDF attachments for customer pricelist auto-replies.
- A pricelist request sends the existing notification to `BUSINESS_EMAIL` and a separate confirmation with both pricelists to the submitted customer address.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy

The repository includes Netlify configuration in `netlify.toml`. Add the environment variables above to the Netlify site before deploying.
