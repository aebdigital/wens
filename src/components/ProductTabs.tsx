"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Tab {
  href: string;
  label: string;
  activePrefix?: string;
}

interface ProductTabsProps {
  tabs: Tab[];
  activePath: string;
}

export default function ProductTabs({ tabs, activePath }: ProductTabsProps) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (tab: Tab) => {
    const prefix = tab.activePrefix || tab.href;
    return activePath.startsWith(prefix);
  };
  const activeTab = tabs.find((t) => isActive(t));

  return (
    <>
      {/* Desktop: horizontal glassmorphism tabs */}
      <div className="hidden md:flex flex-nowrap justify-center">
        {tabs.map((tab, i) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`px-5 py-3 text-white font-medium text-sm uppercase tracking-[0.5px] transition-all duration-300 text-center whitespace-nowrap border border-white/30 backdrop-blur-[5px] ${i < tabs.length - 1 ? "border-r-0" : ""
              } ${isActive(tab)
                ? "bg-black/60 backdrop-blur-[10px] border-white/40"
                : "bg-white/15 hover:bg-white/25 hover:border-white/50 hover:-translate-y-px"
              }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {/* Mobile: dropdown */}
      <div className="md:hidden relative w-full">
        {dropdownOpen && (
          <div
            className="fixed inset-0 bg-white/70 backdrop-blur-[5px] z-[100] md:hidden"
            onClick={() => setDropdownOpen(false)}
          />
        )}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={`w-full px-5 py-4 bg-white/15 backdrop-blur-[10px] text-white border border-white/50 font-medium text-sm uppercase tracking-[0.5px] flex justify-between items-center transition-colors duration-300 hover:bg-white/25 relative z-[102]`}
        >
          {activeTab?.label || tabs[0].label}
          <span
            className={`text-xs transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
              }`}
          >
            ▼
          </span>
        </button>
        <div
          className={`absolute top-full left-0 w-full bg-white border border-gray-300 border-t-0 z-[101] overflow-hidden transition-all duration-300 ${dropdownOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.href}
              onClick={() => {
                setDropdownOpen(false);
                router.push(tab.href);
              }}
              className={`block w-full px-5 py-4 text-left text-sm font-medium border-t border-gray-300 transition-colors duration-200 ${isActive(tab)
                ? "bg-gray-200 font-semibold text-primary"
                : "bg-white text-primary hover:bg-gray-100"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
