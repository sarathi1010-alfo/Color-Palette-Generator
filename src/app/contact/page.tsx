"use client";

import { Navbar } from "@/components/layout/Navbar";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-20">
        <PageWrapper className="max-w-4xl">
          <section className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-display font-bold">Get in touch</h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Have questions or feedback? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-surface border border-border space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Email us</h3>
                <p className="text-text-secondary leading-relaxed">
                  For support, feedback, or business inquiries, reach out to:
                </p>
                <a
                  href="mailto:hello@alfotech.industries"
                  className="block text-xl font-medium hover:text-primary transition-colors"
                >
                  hello@alfotech.industries
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-surface border border-border space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <MessageSquare className="text-blue-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Social</h3>
                <p className="text-text-secondary leading-relaxed">
                  Follow us for updates and design inspiration:
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="font-bold hover:text-primary transition-colors">Twitter</a>
                    <a href="#" className="font-bold hover:text-primary transition-colors">GitHub</a>
                </div>
              </div>
            </div>

            <section className="p-8 rounded-3xl border border-border space-y-8">
                <h2 className="text-2xl font-bold">Send a message</h2>
                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Message</label>
                        <textarea
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="How can we help?"
                        />
                    </div>
                    <button className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                        Send Message
                    </button>
                </div>
            </section>
          </section>
        </PageWrapper>
      </main>
    </div>
  );
}
