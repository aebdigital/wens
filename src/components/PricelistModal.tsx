"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Script from "next/script";

const TURNSTILE_SITE_KEY = "0x4AAAAAACGYVT8BFuj5uz3n";

export default function PricelistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => {
      setEmail("");
      setStatus("idle");
      setMessage("");
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }
    }, 300);
  }, []);

  useEffect(() => {
    const open = () => {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
      // Render turnstile widget after modal opens
      setTimeout(() => {
        if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
          widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
            sitekey: TURNSTILE_SITE_KEY,
            theme: "light",
          });
        }
      }, 100);
    };

    window.addEventListener("open-pricelist-modal", open);
    return () => window.removeEventListener("open-pricelist-modal", open);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, close]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const turnstileResponse = document.querySelector<HTMLInputElement>(
      '[name="cf-turnstile-response"]'
    );
    const turnstileToken = turnstileResponse?.value || "";

    if (!turnstileToken) {
      setStatus("error");
      setMessage("Prosím dokončite overenie.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "pricelist",
          email,
          "cf-turnstile-response": turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Cenník bol úspešne vyžiadaný. Skontrolujte si email.");
        setEmail("");
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
        }
        setTimeout(close, 3000);
      } else {
        throw new Error(data.message || "Chyba pri odosielaní");
      }
    } catch {
      setStatus("error");
      setMessage("Nepodarilo sa odoslať žiadosť. Skúste to prosím neskôr.");
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }
    }
  };

  if (!isOpen) return (
    <Script
      src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
      strategy="lazyOnload"
    />
  );

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="lazyOnload"
      />
      <div
        className="pricelist-modal-overlay"
        style={{ display: "flex" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="pricelist-modal-content">
          <button
            onClick={close}
            className="absolute top-3 right-3 w-[30px] h-[30px] rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl text-gray-600 transition-colors duration-200"
            aria-label="Zatvoriť"
          >
            &times;
          </button>

          <h2 className="text-2xl font-semibold text-[rgb(34,34,34)] mb-3">
            Vyžiadať cenník
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Zadajte váš email a my vám pošleme aktuálny cenník našich produktov.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Váš email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded text-sm text-primary bg-white focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>
            <div className="mb-4 flex justify-center">
              <div ref={turnstileRef} />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full max-w-[300px] mx-auto block bg-accent text-white font-bold px-8 py-4 uppercase tracking-wide text-sm transition-all duration-300 hover:bg-accent-dark hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "ODOSIELAM..." : "VYŽIADAŤ CENNÍK"}
            </button>
            {message && (
              <div
                className={`mt-4 p-3 rounded text-sm text-center ${
                  status === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
    };
  }
}
