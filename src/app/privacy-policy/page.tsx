"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { useEffect, useState } from "react";

export default function PrivacyPolicyPage() {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }));
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20 space-y-12">
        <section className="space-y-4">
          <h1 className="text-5xl font-display font-bold">Privacy Policy</h1>
          <p className="text-text-secondary">Last Updated: {currentDate}</p>
        </section>

        <section className="prose dark:prose-invert max-w-none text-text-secondary text-lg leading-relaxed space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">1. Information We Collect</h2>
            <p>
              We collect minimal information necessary to provide and improve our services.
              This may include analytics data (such as pages visited, time spent, and browser type)
              through Google Analytics. We do not collect personally identifiable information
              unless explicitly provided by you (e.g., through a contact form).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">2. How We Use Your Information</h2>
            <p>
              The information we collect is used to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Analyze usage patterns to improve user experience.</li>
              <li>Monitor website performance and security.</li>
              <li>Serve personalized advertisements (if applicable) via Google AdSense.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">3. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our service and hold certain information.
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">4. GDPR & CCPA Compliance</h2>
            <p>
              Depending on your location, you may have rights under the General Data Protection Regulation (GDPR) or
              the California Consumer Privacy Act (CCPA). These rights include accessing, correcting, or deleting your personal data.
              To exercise these rights, please contact us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@alfo.online" className="text-primary hover:underline">
                privacy@alfo.online
              </a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
