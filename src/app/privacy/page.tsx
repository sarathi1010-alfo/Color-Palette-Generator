import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "Privacy Policy | Color Palette Generator",
  description: "Privacy Policy for PaletteFlow. Learn how we handle and protect your data, cookies, and local storage usage.",
  slug: "/privacy",
}));

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20 space-y-12">
        <h1 className="text-5xl font-display font-bold">Privacy Policy</h1>

        <div className="prose dark:prose-invert max-w-none text-text-secondary leading-relaxed space-y-6">
          <p>Last updated: January 1, 2026</p>

          <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">1. Information We Collect</h2>
          <p>
            PaletteFlow is a free utility tool that does not require an account or login to function.
            We do not collect personal identifiable information (PII) such as names, emails, or phone numbers
            unless you explicitly provide them through a contact form.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">2. Cookies and Local Storage</h2>
          <p>
            We use browser Local Storage to save your preferences, such as your saved color palettes and theme settings
            (dark/light mode). This data remains on your device and is not sent to our servers.
          </p>
          <p>
            We also use third-party cookies for analytics (e.g., Google Analytics) and advertising (e.g., Google AdSense)
            to understand how our tool is used and to support the continuous development of this free resource.
            These third-party providers may use cookies to serve ads based on your prior visits to our website or other websites.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">3. Third-Party Services</h2>
          <p>
            Our website may contain links to other websites or services. We are not responsible for the privacy practices
            or the content of such third-party sites. Please review the privacy policies of those third-party sites directly.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">4. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@alfo.online.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
