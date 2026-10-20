"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    // Helper to safely call gtag even if the script hasn't fully loaded yet
    const safeGtag = (...args: any[]) => {
      if (typeof window !== "undefined") {
        if (typeof (window as any).gtag === "function") {
          (window as any).gtag(...args);
        } else {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push(args);
        }
      }
    };

    // 1. Scroll Depth Tracking
    const scrollThresholds = [25, 50, 75, 90, 100];
    const reachedThresholds = new Set<number>();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollHeight <= 0) return;

      const scrollPercent = (scrollPosition / scrollHeight) * 100;

      for (const threshold of scrollThresholds) {
        if (scrollPercent >= threshold && !reachedThresholds.has(threshold)) {
          reachedThresholds.add(threshold);
          safeGtag("event", "scroll_depth", {
            event_category: "Engagement",
            event_label: `${threshold}%`,
            value: threshold,
            page_path: pathname,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 2. Page Interaction Timer
    const timerIntervals = [10, 30, 60];
    const timers: NodeJS.Timeout[] = [];
    let timeSpent = 0;

    // Track the initial fixed intervals
    timerIntervals.forEach((seconds) => {
      const timer = setTimeout(() => {
        safeGtag("event", "time_on_page", {
          event_category: "Engagement",
          event_label: `${seconds} seconds`,
          value: seconds,
          page_path: pathname,
        });
      }, seconds * 1000);
      timers.push(timer);
    });

    // Track every subsequent 60 seconds
    const intervalTimer = setInterval(() => {
      timeSpent += 60;
      if (timeSpent > 60) { // Start firing after the initial 60s which is already tracked
         safeGtag("event", "time_on_page", {
           event_category: "Engagement",
           event_label: `${timeSpent} seconds`,
           value: timeSpent,
           page_path: pathname,
         });
      }
    }, 60000);

    // 3. Key Events (Clicks)
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Look up the DOM tree for a button or link
      const clickableElement = target.closest("button, a") as HTMLElement;

      if (clickableElement) {
        const tagName = clickableElement.tagName.toLowerCase();
        let label = clickableElement.getAttribute("aria-label") ||
                    clickableElement.innerText ||
                    clickableElement.id ||
                    "unknown";

        // Truncate label if it's too long (e.g., long text in a link)
        label = label.slice(0, 50).trim();

        safeGtag("event", "click_interaction", {
          event_category: "Engagement",
          event_label: `${tagName}: ${label}`,
          page_path: pathname,
          link_url: clickableElement.getAttribute("href") || undefined,
        });
      }
    };

    document.addEventListener("click", handleClick, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
      timers.forEach(clearTimeout);
      clearInterval(intervalTimer);
    };
  }, [pathname]);

  return null;
}
