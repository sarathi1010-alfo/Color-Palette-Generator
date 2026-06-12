import { constructMetadata } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = constructMetadata({
  title: "Terms and Conditions | PaletteFlow",
  description: "Terms and conditions of use for PaletteFlow.",
  canonicalUrl: "https://paletteflow.alfo.online/terms-and-conditions",
});

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20">
          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-8">Terms and Conditions</h1>
            <p className="text-sm text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using PaletteFlow, you accept and agree to be bound by the terms and provision of this agreement.
                If you do not agree to abide by these terms, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily use PaletteFlow for personal, non-commercial, and commercial purposes.
                The color palettes generated can be used freely in your projects.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p>
                The materials on PaletteFlow are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied,
                and hereby disclaim and negate all other warranties including, without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p>
                In no event shall PaletteFlow or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on PaletteFlow.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Revisions</h2>
              <p>
                We may revise these terms of service for its website at any time without notice. By using this website
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>
          </div>
      </main>
    </div>
  );
}
