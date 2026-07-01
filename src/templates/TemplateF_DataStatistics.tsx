import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { BarChart3, TrendingUp } from "lucide-react";
import { SeoMeta } from "@/types/seo";

// [YEAR] Color [INDUSTRY/TREND] Statistics: The Data You Need

export const metadata = resolveMetadata(buildLandingMeta({
  title: "[YEAR] Color [INDUSTRY/TREND] Statistics: The Data You Need",
  description: "Explore the latest [YEAR] color statistics for [INDUSTRY]. Get data-driven insights into trends, user preferences, and conversion benchmarks.",
  slug: "/guides/stats-example",
}));

const metaDataObj: SeoMeta = {
  title: "[YEAR] Color [INDUSTRY/TREND] Statistics: The Data You Need",
  description: "Explore the latest [YEAR] color statistics for [INDUSTRY]. Get data-driven insights into trends, user preferences, and conversion benchmarks.",
  slug: "/guides/stats-example",
  pageType: "article",
  author: { name: "PaletteFlow Research" },
  publishedAt: new Date().toISOString()
};

export default function StatisticsTemplate() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl">
          <header className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <BarChart3 className="w-4 h-4" />
              <span>Industry Report</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              [YEAR] Color <span className="text-primary italic">[INDUSTRY/TREND]</span> Statistics
            </h1>
            <div className="bg-surface border border-primary/20 p-8 rounded-3xl">
               <p className="text-xl text-text-primary leading-relaxed m-0 italic">
                 <strong>The Bottom Line:</strong> [3-sentence AI citation summarizing the key findings of the report for quick reference.]
               </p>
            </div>
          </header>

          <article className="prose prose-invert prose-lg max-w-none space-y-16 text-text-secondary">
            <section className="space-y-8">
                <h2 className="text-3xl font-display font-bold text-text-primary m-0">Key [YEAR] Statistics</h2>
                <div className="not-prose overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-surface border border-border rounded-2xl">
                        <thead>
                            <tr className="border-b border-border text-text-primary">
                                <th className="p-4">Metric</th>
                                <th className="p-4">[YEAR-1]</th>
                                <th className="p-4">[YEAR]</th>
                                <th className="p-4">Change</th>
                            </tr>
                        </thead>
                        <tbody className="text-text-secondary">
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-bold text-text-primary">Trend Metric 1</td>
                                <td className="p-4">24%</td>
                                <td className="p-4">31%</td>
                                <td className="p-4 text-green-500">+7%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="space-y-8">
                <h2 className="text-3xl font-display font-bold text-text-primary">Trend Breakdown: [Finding 1]</h2>
                <p>Deep dive into the data-driven trend...</p>
            </section>

            <section className="space-y-8">
                <h2 className="text-3xl font-display font-bold text-text-primary">Trend Breakdown: [Finding 2]</h2>
                <p>Deep dive into the data-driven trend...</p>
            </section>

            <section className="bg-surface p-10 rounded-[2.5rem] border border-border not-prose space-y-6">
                <div className="flex items-center space-x-3 text-primary">
                    <TrendingUp />
                    <h2 className="text-2xl font-bold m-0 text-text-primary">Visual Data Summary</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-background rounded-2xl text-center">
                        <div className="text-4xl font-display font-bold text-primary">82%</div>
                        <div className="text-sm text-text-secondary mt-2">Preferred Choice</div>
                    </div>
                </div>
            </section>

            <section className="pt-12 border-t border-border space-y-6">
                <h2 className="text-2xl font-bold text-text-primary">Methodology & Sources</h2>
                <p className="text-sm">Description of data collection and links to authoritative sources.</p>
            </section>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
