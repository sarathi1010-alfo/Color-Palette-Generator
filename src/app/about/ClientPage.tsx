"use client";
import { Footer } from "@/components/layout/Footer";

import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Coffee, Code, Palette, Zap } from "lucide-react";

export default function AboutClientPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20 space-y-24">
        <section className="space-y-8 text-center">
            <h1 className="text-6xl font-display font-bold">Design tool for the modern web.</h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
                ALFO was built with a simple goal: to make color theory accessible,
                instant, and tactile for designers and developers alike.
            </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-surface border border-border space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Zap className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Speed First</h3>
                <p className="text-text-secondary leading-relaxed">
                    We believe creativity happens best in a flow state. ALFO is
                    optimized for speed — from keyboard shortcuts to zero-latency
                    client-side processing.
                </p>
            </div>
            <div className="p-8 rounded-3xl bg-surface border border-border space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                    <Code className="text-blue-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Developer Ready</h3>
                <p className="text-text-secondary leading-relaxed">
                    Colors aren&apos;t just for looking at; they&apos;re for building.
                    Our export tools ensure that moving from a palette to code takes
                    almost no time.
                </p>
            </div>
        </section>

        <section className="space-y-8">
            <h2 className="text-3xl font-display font-bold">The Philosophy</h2>
            <div className="prose dark:prose-invert max-w-none text-text-secondary text-lg leading-relaxed space-y-6">
                <p>
                    Most design tools are either too simple to be useful or too complex
                    to be fast. ALFO sits in the middle — providing professional-grade
                    algorithms wrapped in an interface that anyone can master in seconds.
                </p>
                <p>
                    Built by <strong>Alfo Tech Industries</strong>, this tool is part
                    of our mission to build open, high-performance utilities for the
                    creative community.
                </p>
            </div>
        </section>

        <section className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center">
                    <Coffee size={32} className="text-text-secondary" />
                </div>
                <div>
                    <p className="font-bold">Built for creators.</p>
                    <p className="text-sm text-text-secondary">Handcrafted in the browser.</p>
                </div>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="px-6 py-3 rounded-xl bg-surface border border-border font-bold hover:bg-border transition-colors">Twitter</a>
                <a href="#" className="px-6 py-3 rounded-xl bg-surface border border-border font-bold hover:bg-border transition-colors">GitHub</a>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
