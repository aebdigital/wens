"use client";

import { useState, useEffect, useCallback } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setProgress(scrollPercent);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress-bar"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
