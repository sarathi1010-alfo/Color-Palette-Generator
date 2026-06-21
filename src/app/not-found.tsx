import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8">
        <h1 className="text-9xl font-display font-bold text-text-primary">404</h1>
        <div className="space-y-4 max-w-md">
          <h2 className="text-3xl font-bold">Page not found</h2>
          <p className="text-text-secondary text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/"
            className="bg-text-primary text-background px-8 py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-xl"
          >
            Back to Home
          </Link>
          <Link
            href="/palettes"
            className="bg-surface border border-border px-8 py-4 rounded-2xl font-bold hover:bg-border transition-colors"
          >
            Browse Palettes
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
