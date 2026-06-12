import { constructMetadata } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = constructMetadata({
  title: "Privacy Policy | PaletteFlow",
  description: "Privacy policy and data collection practices for PaletteFlow.",
  canonicalUrl: "https://paletteflow.alfo.online/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20">
          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
            <p className="text-sm text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p>
                PaletteFlow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. We collect minimal information to provide our services.
                We use cookies and similar technologies primarily for essential site operations and to analyze traffic through standard analytics tools.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p>
                Any information collected is used solely to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Serve relevant advertisements (via Google AdSense)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Client-Side Processing</h2>
              <p>
                Tools such as the Image Extractor perform all processing client-side within your browser.
                Your images are never uploaded to our servers. All generated palettes and colors are handled locally.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
              <p>
                We use third-party services like Google AdSense for monetization. These third parties may use cookies
                to serve ads based on your prior visits to our website or other websites. You can opt out of personalized
                advertising by visiting Google&apos;s Ads Settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at via our main website.
              </p>
            </section>
          </div>
      </main>
    </div>
  );
}
