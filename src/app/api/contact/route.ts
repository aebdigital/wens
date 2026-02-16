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
}): Promise<{ success: boolean }> {
  const res = await fetch("https://api.smtp2go.com/v3/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return { success: res.ok && data?.data?.succeeded > 0 };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, email } = body;
    const turnstileToken = body["cf-turnstile-response"];

    // Verify Turnstile token
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret && turnstileToken) {
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
        <p><strong>Email klienta:</strong> ${email}</p>
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
      subject = `Nová správa od: ${name || "Návštevník"}`;
      textBody = `Meno: ${name}\nEmail: ${email}\nSpráva: ${message}`;
      htmlBody = `
        <h2>Nová správa z kontaktného formulára</h2>
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Správa:</strong></p>
        <p>${message ? String(message).replace(/\n/g, "<br>") : "Bez správy"}</p>
      `;
    }

    const result = await sendEmailViaSMTP2GO({
      api_key: apiKey,
      sender: fromEmail,
      to: [businessEmail],
      subject,
      text_body: textBody,
      html_body: htmlBody,
    });

    if (result.success) {
      return NextResponse.json({ message: "Email odoslaný úspešne!" });
    } else {
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
