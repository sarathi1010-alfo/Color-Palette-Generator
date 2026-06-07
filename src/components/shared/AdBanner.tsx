"use client";

import { useEffect, useState } from "react";

interface AdBannerProps {
  slotId: string;
  className?: string;
  format?: "auto" | "fluid" | "rectangle";
  responsive?: boolean;
}

export function AdBanner({ slotId, className = "", format = "auto", responsive = true }: AdBannerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (typeof window !== "undefined") {
        // @ts-expect-error AdSense injects this global
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  if (process.env.NODE_ENV !== "production") {
    return (
      <div className={`bg-surface border border-dashed border-border flex items-center justify-center text-text-secondary text-sm font-mono ${className}`} style={{ minHeight: '90px' }}>
        [Ad Placeholder: {slotId}]
      </div>
    );
  }

  return (
    <div className={`overflow-hidden flex justify-center ${className}`}>
      {mounted && (
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%" }}
          data-ad-client="ca-pub-6393936268623951"
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      )}
    </div>
  );
}
