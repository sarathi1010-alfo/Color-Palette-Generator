"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AlertTriangle, Info, Palette, Shield } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20 space-y-16">
        <section className="space-y-6 text-center">
          <div className="w-20 h-20 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto">
            <AlertTriangle className="text-orange-500" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold">Disclaimer</h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Important information about the use of ALFO and the colors generated.
          </p>
        </section>

        <section className="space-y-12">
          <div className="p-8 rounded-3xl bg-surface border border-border space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <Palette className="text-blue-500" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Color Accuracy</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none text-text-secondary space-y-4">
              <p>
                ALFO generates color palettes using mathematical algorithms based on color theory principles. 
                However, we cannot guarantee that the colors displayed on your screen will match exactly across 
                different devices, monitors, or browsers.
              </p>
              <p>
                <strong>Important considerations:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Color perception varies between different display technologies (LCD, OLED, CRT) and 
                  individual monitor calibrations.
                </li>
                <li>
                  Browser color profiles and operating system settings can affect how colors are rendered.
                </li>
                <li>
                  For professional printing or critical design work, always verify colors using physical 
                  color swatches or professional calibration tools.
                </li>
                <li>
                  ALFO is not responsible for any discrepancies between digital colors and their physical 
                  representations in print or other media.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-border space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <Shield className="text-green-500" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Accessibility Compliance</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none text-text-secondary space-y-4">
              <p>
                ALFO provides WCAG contrast ratio calculations as a helpful tool for designers. However, 
                these calculations are provided for informational purposes only and should not be considered 
                as legal or official accessibility certification.
              </p>
              <p>
                <strong>Please note:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Contrast ratios are calculated based on standard formulas but may not account for all 
                  real-world viewing conditions.
                </li>
                <li>
                  Accessibility compliance involves more than just color contrast. Always conduct comprehensive 
                  accessibility testing for your projects.
                </li>
                <li>
                  ALFO does not provide legal advice regarding ADA, WCAG, or other accessibility regulations.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-border space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <Info className="text-purple-500" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Professional Use</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none text-text-secondary space-y-4">
              <p>
                While ALFO is designed to be a professional-grade tool, users are responsible for verifying 
                that the generated colors meet their specific project requirements.
              </p>
              <p>
                <strong>Before using generated palettes in production:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Test colors in your actual application environment with real content.
                </li>
                <li>
                  Consider your target audience and their potential visual impairments.
                </li>
                <li>
                  Verify brand compliance if working with established brand guidelines.
                </li>
                <li>
                  Conduct user testing when possible to ensure color choices support usability goals.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-border space-y-6">
            <h2 className="text-2xl font-bold">No Warranty</h2>
            <div className="prose dark:prose-invert max-w-none text-text-secondary space-y-4">
              <p>
                ALFO is provided &quot;as is&quot; without any warranties, express or implied. We make no 
                representations or warranties regarding the accuracy, reliability, or suitability of the 
                color palettes generated for any particular purpose.
              </p>
              <p>
                In no event shall Alfo Tech Industries be liable for any damages arising from the use or 
                inability to use the colors generated by this tool, including but not limited to direct, 
                indirect, incidental, or consequential damages.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-12 border-t border-border">
          <p className="text-center text-text-secondary">
            Last updated: June 2026
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
