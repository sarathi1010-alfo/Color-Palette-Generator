import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { constructMetadata } from "@/lib/seo";
import seoData from "@/data/seo-pages.json";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{
    tool: string;
    useCase: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const toolData = seoData.find((t) => t.toolSlug === resolvedParams.tool);
  const useCaseData = toolData?.useCases.find((u) => u.slug === resolvedParams.useCase);

  if (!useCaseData) {
    return constructMetadata();
  }

  return constructMetadata({
    title: `${useCaseData.title} | ALFO`,
    description: useCaseData.description,
    keywords: [useCaseData.keyword, toolData!.toolName.toLowerCase(), "free design tools"],
    url: `https://alfo-palette-generator.vercel.app/use-cases/${resolvedParams.tool}/${resolvedParams.useCase}`,
  });
}

export async function generateStaticParams() {
  const paths = [];
  for (const tool of seoData) {
    for (const useCase of tool.useCases) {
      paths.push({
        tool: tool.toolSlug,
        useCase: useCase.slug,
      });
    }
  }
  return paths;
}

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const toolData = seoData.find((t) => t.toolSlug === resolvedParams.tool);
  const useCaseData = toolData?.useCases.find((u) => u.slug === resolvedParams.useCase);

  if (!toolData || !useCaseData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20 space-y-16">
        <section className="text-center space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            {toolData.toolName} Use Case
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
            {useCaseData.title}
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            {useCaseData.description}
          </p>
        </section>

        <section className="p-8 rounded-3xl bg-surface border border-border prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-text-secondary">
            {useCaseData.content}
          </p>
        </section>

        <section className="space-y-8 border-t border-border pt-16">
            <h2 className="text-3xl font-display font-bold text-center">Why use ALFO for {useCaseData.keyword}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                        <h4 className="font-bold">100% Free & No Login</h4>
                        <p className="text-text-secondary text-sm">Jump straight in and start working without friction.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                        <h4 className="font-bold">Lightning Fast</h4>
                        <p className="text-text-secondary text-sm">Built on modern architecture for instant results.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                        <h4 className="font-bold">Developer Ready Exports</h4>
                        <p className="text-text-secondary text-sm">Copy straight to CSS, Tailwind, or JSON instantly.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                        <h4 className="font-bold">Accessible by Default</h4>
                        <p className="text-text-secondary text-sm">WCAG checks built-in to keep your designs inclusive.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="flex justify-center pt-8">
            <Link
                href={toolData.toolHref}
                className="flex items-center space-x-3 bg-text-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-2xl"
            >
                <span>Launch {toolData.toolName}</span>
                <ArrowRight size={20} />
            </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
