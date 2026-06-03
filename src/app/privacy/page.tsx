"use client";

import { Navbar } from "@/components/layout/Navbar";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-20">
        <PageWrapper className="max-w-4xl">
          <section className="space-y-8">
            <h1 className="text-5xl font-display font-bold">Privacy Policy</h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Last updated: March 2024
            </p>

            <div className="prose dark:prose-invert max-w-none text-text-secondary text-lg leading-relaxed space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                <p>
                  At ALFO Palette Generator, we respect your privacy. This policy explains how we collect and use information
                  when you use our color palette tools.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Local Storage</h2>
                <p>
                  We use browser Local Storage to save your favorite palettes and custom settings. This data is stored
                  locally on your device and is not transmitted to our servers.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. Analytics</h2>
                <p>
                  We use Google Analytics to understand how our site is used. This helps us improve the user experience.
                  Google Analytics may collect information such as your IP address, browser type, and pages visited.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Advertising</h2>
                <p>
                  We use Google AdSense to show advertisements. Google uses cookies to serve ads based on your prior visits
                  to our website or other websites. You can opt out of personalized advertising by visiting
                  Google Ads Settings.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at
                  hello@alfotech.industries
                </p>
              </section>
            </div>
          </section>
        </PageWrapper>
      </main>
    </div>
  );
}
