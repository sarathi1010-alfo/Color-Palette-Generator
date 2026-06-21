"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MessageSquare, Clock, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate form submission - in production, this would connect to an API
    setTimeout(() => {
      setFormState("success");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20 space-y-16">
        <section className="space-y-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold">Contact Us</h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Have questions about ALFO? Need help with a feature? We&apos;re here to help.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 p-8 rounded-3xl bg-surface border border-border space-y-6">
            <div className="flex items-center space-x-3">
              <MessageSquare className="text-primary" size={24} />
              <h2 className="text-2xl font-bold">Send us a message</h2>
            </div>
            
            {formState === "success" ? (
              <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                  <Mail className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-500">Message sent!</h3>
                <p className="text-text-secondary">
                  Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
                </p>
                <button 
                  onClick={() => setFormState("idle")}
                  className="text-primary font-bold underline hover:text-primary/80"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-text-secondary uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-text-secondary uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-text-secondary uppercase tracking-wide">
                    Subject
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General inquiry</option>
                    <option value="support">Technical support</option>
                    <option value="feedback">Feature request or feedback</option>
                    <option value="partnership">Partnership or collaboration</option>
                    <option value="advertising">Advertising inquiry</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-text-secondary uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-background font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-surface border border-border space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" size={20} />
                <h3 className="font-bold">Email</h3>
              </div>
              <a href="mailto:support@alfotech.io" className="text-text-secondary hover:text-primary transition-colors break-all">
                support@alfotech.io
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-surface border border-border space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="text-primary" size={20} />
                <h3 className="font-bold">Response Time</h3>
              </div>
              <p className="text-text-secondary">
                We typically respond within <strong>24-48 hours</strong> during business days.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-surface border border-border space-y-4">
              <div className="flex items-center space-x-3">
                <HelpCircle className="text-primary" size={20} />
                <h3 className="font-bold">What to contact us about</h3>
              </div>
              <ul className="text-text-secondary space-y-2 text-sm">
                <li>• Technical issues or bugs</li>
                <li>• Feature requests</li>
                <li>• Partnership opportunities</li>
                <li>• Advertising inquiries</li>
                <li>• General questions</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
