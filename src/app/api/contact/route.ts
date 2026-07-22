import { NextRequest, NextResponse } from "next/server";

async function verifyTurnstile(token: string, secret: string): Promise<{ success: boolean }> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  return res.json();
}

async function sendEmailViaSMTP2GO(payload: {
  api_key: string;
  sender: string;
  to: string[];
  subject: string;
  text_body: string;
  html_body: string;
  attachments?: {
    filename: string;
    url: string;
    mimetype: string;
  }[];
}): Promise<{ success: boolean }> {
  const res = await fetch("https://api.smtp2go.com/v3/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return { success: res.ok && data?.data?.succeeded > 0 };
}

const escapeHtml = (value: unknown) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const CUSTOMER_REPLY_SUBJECT = "WENS DOOR – cenníky 2025";

const CUSTOMER_REPLY_TEXT = `Dobrý deň.

Ďakujeme za prejavený záujem o naše výrobky.
Presnú cenovú ponuku vypracujeme po upresnení stavebných otvorov, série dverí a predbežnej povrchovej úpravy.
Špecifické požiadavky naceníme po osobitnej konzultácii.
V prípade otázok a nejasností nás prosím kontaktujte.

S pozdravom

Lucia Kyselicová
obchodné oddelenie

Vápenická 12
971 01 Prievidza

tel./fax: 00421 46 542 20 57
mobil: 00421 902 917 892
e-mail: kyselicova@wens.sk
web: www.wens.sk`;

const CUSTOMER_REPLY_HTML = `
  <p>Dobrý deň.</p>
  <p>
    Ďakujeme za prejavený záujem o naše výrobky.<br>
    Presnú cenovú ponuku vypracujeme po upresnení stavebných otvorov, série dverí a predbežnej povrchovej úpravy.<br>
    Špecifické požiadavky naceníme po osobitnej konzultácii.<br>
    V prípade otázok a nejasností nás prosím kontaktujte.
  </p>
  <p>S pozdravom</p>
  <p><strong>Lucia Kyselicová</strong><br><em>obchodné oddelenie</em></p>
  <p><em>Vápenická 12<br>971 01 Prievidza</em></p>
  <p>
    <em>tel./fax:</em> <strong>00421 46 542 20 57</strong><br>
    <em>mobil:</em> <strong>00421 902 917 892</strong><br>
    <em>e-mail:</em> <strong><a href="mailto:kyselicova@wens.sk">kyselicova@wens.sk</a></strong><br>
    <em>web:</em> <strong><a href="https://www.wens.sk/">www.wens.sk</a></strong>
  </p>
`;

function getPricelistAttachments() {
  const siteUrl = (process.env.SITE_URL || "https://wens.sk").replace(/\/$/, "");

  return [
    {
      filename: "Cenník dverí Wens 2025.pdf",
      url: `${siteUrl}/downloads/wens-cennik-dvere-2025.pdf`,
      mimetype: "application/pdf",
    },
    {
      filename: "Cenník zárubní Wens 2025.pdf",
      url: `${siteUrl}/downloads/wens-cennik-zarubne-2025.pdf`,
      mimetype: "application/pdf",
    },
  ];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, email } = body;
    const turnstileToken = body["cf-turnstile-response"];

    // Verify Turnstile token
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      if (!turnstileToken) {
        return NextResponse.json(
          { message: "Dokončite prosím overenie." },
          { status: 400 }
        );
      }

      const result = await verifyTurnstile(turnstileToken, turnstileSecret);
      if (!result.success) {
        return NextResponse.json(
          { message: "Overenie zlyhalo. Skúste to znova." },
          { status: 400 }
        );
      }
    }

    if (!email) {
      return NextResponse.json(
        { message: "Email je povinný." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Zadajte prosím platnú e-mailovú adresu." },
        { status: 400 }
      );
    }

    const apiKey = process.env.SMTP2GO_API_KEY;
    const businessEmail = process.env.BUSINESS_EMAIL;
    const fromEmail = process.env.SMTP2GO_FROM_EMAIL;

    if (!apiKey || !businessEmail || !fromEmail) {
      console.error("Missing env vars: SMTP2GO_API_KEY, BUSINESS_EMAIL, or SMTP2GO_FROM_EMAIL");
      return NextResponse.json(
        { message: "Konfiguračná chyba servera." },
        { status: 500 }
      );
    }

    let subject: string;
    let textBody: string;
    let htmlBody: string;

    if (formType === "pricelist") {
      subject = "Žiadosť o cenník (Website)";
      textBody = `Nový záujem o cenník.\n\nEmail: ${email}`;
      htmlBody = `
        <h2>Nová žiadosť o cenník</h2>
        <p><strong>Email klienta:</strong> ${escapeHtml(email)}</p>
        <p>Vyžiadané zo stránky produktu.</p>
      `;
    } else {
      const { name, message } = body;
      if (!name || !message) {
        return NextResponse.json(
          { message: "Vyplňte prosím všetky povinné polia." },
          { status: 400 }
        );
      }
      subject = `Nová správa od: ${String(name || "Návštevník")}`;
      textBody = `Meno: ${name}\nEmail: ${email}\nSpráva: ${message}`;
      htmlBody = `
        <h2>Nová správa z kontaktného formulára</h2>
        <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Správa:</strong></p>
        <p>${message ? escapeHtml(message).replace(/\n/g, "<br>") : "Bez správy"}</p>
      `;
    }

    const emails = [sendEmailViaSMTP2GO({
      api_key: apiKey,
      sender: fromEmail,
      to: [businessEmail],
      subject,
      text_body: textBody,
      html_body: htmlBody,
    })];

    if (formType === "pricelist") {
      emails.push(sendEmailViaSMTP2GO({
        api_key: apiKey,
        sender: fromEmail,
        to: [email],
        subject: CUSTOMER_REPLY_SUBJECT,
        text_body: CUSTOMER_REPLY_TEXT,
        html_body: CUSTOMER_REPLY_HTML,
        attachments: getPricelistAttachments(),
      }));
    }

    const results = await Promise.all(emails);

    if (results.every((result) => result.success)) {
      return NextResponse.json({ message: "Email odoslaný úspešne!" });
    } else {
      console.error("SMTP2GO failed to deliver one or more contact-form emails", results);
      return NextResponse.json(
        { message: "Nepodarilo sa odoslať email." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { message: "Nastala chyba. Skúste to znova neskôr." },
      { status: 500 }
    );
  }
}
