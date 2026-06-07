"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20 space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-display font-bold">Contact Us</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have a question, feedback, or a feature request? We&apos;d love to hear from you.
            Fill out the form below or drop us an email.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-surface border border-border space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Mail className="text-primary" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Email Us</h3>
                    <p className="text-text-secondary">
                        For general inquiries, support, or partnership opportunities.
                    </p>
                    <a href="mailto:hello@alfo.online" className="inline-block text-primary font-bold hover:underline">
                        hello@alfo.online
                    </a>
                </div>

                <div className="p-8 rounded-3xl bg-surface border border-border space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                        <MessageSquare className="text-blue-500" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Social Media</h3>
                    <p className="text-text-secondary">
                        Reach out to us on Twitter for quick updates and chats.
                    </p>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-block text-primary font-bold hover:underline">
                        @alfo_online
                    </a>
                </div>
            </div>

            <div className="p-8 rounded-3xl bg-surface border border-border">
                <form className="space-y-6" action="https://formspree.io/f/your_form_id" method="POST">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-bold text-text-primary">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-text-primary">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-bold text-text-primary">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                            placeholder="How can we help?"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center space-x-2 bg-text-primary text-background px-6 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform active:scale-95"
                    >
                        <span>Send Message</span>
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
