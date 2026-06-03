"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20 space-y-12">
        <h1 className="text-5xl font-display font-bold">Privacy Policy</h1>

        <section className="prose dark:prose-invert max-w-none text-text-secondary space-y-6">
          <p>Last updated: June 3, 2026</p>

          <h2 className="text-2xl font-bold text-text-primary">1. Information We Collect</h2>
          <p>
            ALFO is a zero-backend application. We do not collect, store, or process any personal information on our servers.
            All palette data and favorites are stored locally in your browser&apos;s localStorage.
          </p>

          <h2 className="text-2xl font-bold text-text-primary">2. Cookies and Analytics</h2>
          <p>
            We use Google Analytics to understand how users interact with our tool. This helps us improve the user experience.
            Google Analytics may use cookies to collect anonymous usage data.
          </p>

          <h2 className="text-2xl font-bold text-text-primary">3. Advertising</h2>
          <p>
            We use Google AdSense to display advertisements. Google uses cookies to serve ads based on a user&apos;s prior visits to our website or other websites.
          </p>

          <h2 className="text-2xl font-bold text-text-primary">4. Data Security</h2>
          <p>
            Since your data is stored locally on your device, the security of your data depends on the security of your device and browser.
          </p>

          <h2 className="text-2xl font-bold text-text-primary">5. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
