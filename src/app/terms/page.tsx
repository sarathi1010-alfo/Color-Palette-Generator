"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20 space-y-12">
        <h1 className="text-5xl font-display font-bold">Terms & Conditions</h1>

        <section className="prose dark:prose-invert max-w-none text-text-secondary space-y-6">
          <p>Last updated: June 3, 2026</p>

          <h2 className="text-2xl font-bold text-text-primary">1. Acceptance of Terms</h2>
          <p>
            By accessing or using ALFO, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use the service.
          </p>

          <h2 className="text-2xl font-bold text-text-primary">2. Use of the Service</h2>
          <p>
            ALFO provides a color palette generation tool for personal and commercial use. You are responsible for any use of the palettes generated through our service.
          </p>

          <h2 className="text-2xl font-bold text-text-primary">3. Intellectual Property</h2>
          <p>
            The ALFO application, including its interface, code, and original brand assets, is the property of Alfo Tech Industries.
            The color palettes generated are not subject to copyright by ALFO and can be used freely by the user.
          </p>

          <h2 className="text-2xl font-bold text-text-primary">4. Limitation of Liability</h2>
          <p>
            ALFO is provided &quot;as is&quot; without any warranties. We are not liable for any damages arising from the use of our service.
          </p>

          <h2 className="text-2xl font-bold text-text-primary">5. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Alfo Tech Industries operates.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
