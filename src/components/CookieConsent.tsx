"use client";

import { useState, useEffect, useCallback } from "react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "wens-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else {
      try {
        setPreferences(JSON.parse(stored));
      } catch {
        setVisible(true);
      }
    }
  }, []);

  const handleOpenSettings = useCallback(() => {
    setShowSettings(true);
  }, []);

  useEffect(() => {
    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () =>
      window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, [handleOpenSettings]);

  const acceptAll = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(prefs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setVisible(false);
    setShowSettings(false);
  };

  const saveSettings = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    setVisible(false);
    setShowSettings(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {visible && (
        <div className="cookie-consent">
          <div className="max-w-[95%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300 leading-relaxed">
              Táto webová stránka používa cookies na zlepšenie
              používateľského zážitku a analýzu návštevnosti.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={acceptAll}
                className="bg-accent text-white font-semibold px-6 py-2.5 rounded text-sm uppercase tracking-wide transition-colors duration-300 hover:bg-accent-dark"
              >
                Prijať všetky
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="border border-white/30 text-white font-semibold px-6 py-2.5 rounded text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white/10"
              >
                Nastavenia
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="cookie-settings-modal" onClick={() => setShowSettings(false)}>
          <div
            className="cookie-settings-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Close */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl font-bold"
                onClick={() => setShowSettings(false)}
                aria-label="Zatvoriť"
              >
                &times;
              </button>

              <h3 className="text-xl font-semibold text-primary mb-2">
                Nastavenia cookies
              </h3>
              <p className="text-sm text-secondary mb-6 leading-relaxed">
                Vyberte, ktoré cookies chcete povoliť.
              </p>

              {/* Toggle Items */}
              <div className="flex flex-col gap-5">
                {/* Necessary */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-primary text-sm">
                      Nevyhnutné
                    </p>
                    <p className="text-xs text-secondary">
                      Základné fungovanie stránky
                    </p>
                  </div>
                  <label className="cookie-toggle">
                    <input type="checkbox" checked disabled />
                    <span className="cookie-toggle-slider" />
                  </label>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-primary text-sm">
                      Analytické
                    </p>
                    <p className="text-xs text-secondary">
                      Analýza návštevnosti a správania
                    </p>
                  </div>
                  <label className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          analytics: e.target.checked,
                        })
                      }
                    />
                    <span className="cookie-toggle-slider" />
                  </label>
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-primary text-sm">
                      Marketingové
                    </p>
                    <p className="text-xs text-secondary">
                      Personalizované reklamy a obsah
                    </p>
                  </div>
                  <label className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          marketing: e.target.checked,
                        })
                      }
                    />
                    <span className="cookie-toggle-slider" />
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-accent text-white font-semibold py-3 rounded text-sm uppercase tracking-wide transition-colors duration-300 hover:bg-accent-dark"
                >
                  Prijať všetky
                </button>
                <button
                  onClick={saveSettings}
                  className="flex-1 border border-gray-300 text-primary font-semibold py-3 rounded text-sm uppercase tracking-wide transition-colors duration-300 hover:bg-gray-100"
                >
                  Uložiť nastavenia
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
