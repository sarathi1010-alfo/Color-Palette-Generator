"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfServicePage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20 space-y-12">
        <section className="space-y-4">
          <h1 className="text-5xl font-display font-bold">Terms of Service</h1>
          <p className="text-text-secondary">Last Updated: {currentDate}</p>
        </section>

        <section className="prose dark:prose-invert max-w-none text-text-secondary text-lg leading-relaxed space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using alfo.online and its ecosystem of tools, you accept and agree to be bound by the terms and provision of this agreement.
              In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">2. Description of Service</h2>
            <p>
              alfo.online provides users with a collection of web-based tools and resources.
              You understand and agree that the service may include advertisements and that these advertisements are necessary for alfo.online to provide the service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">3. User Conduct</h2>
            <p>
              You agree not to use the service to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Upload, post, email, transmit or otherwise make available any content that is unlawful, harmful, threatening, abusive, or otherwise objectionable.</li>
              <li>Interfere with or disrupt the service or servers or networks connected to the service.</li>
              <li>Attempt to gain unauthorized access to any portion of the service or any other systems or networks.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">4. Intellectual Property</h2>
            <p>
              The visual interfaces, graphics, design, compilation, information, data, computer code (including source code or object code), products, software, services, and all other elements of the service provided by alfo.online are protected by intellectual property and other laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">5. Limitation of Liability</h2>
            <p>
              You expressly understand and agree that alfo.online shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use or the inability to use the service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@alfo.online" className="text-primary hover:underline">
                legal@alfo.online
              </a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
