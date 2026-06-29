import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import Link from "next/link";
import { Palette, Layers } from "lucide-react";
import { SeoMeta } from "@/types/seo";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "WCAG Contrast Checker Guide: Making Your Designs Accessible",
  description: "Learn about WCAG 2.1/2.2 standards, the 4.5:1 ratio, and how to use a WCAG contrast checker for accessible color palettes.",
  slug: "/guides/wcag-contrast-checker-color-accessibility",
}));

const metaDataObj: SeoMeta = {
  title: "WCAG Contrast Checker Guide: Making Your Designs Accessible",
  description: "Learn about WCAG 2.1/2.2 standards, the 4.5:1 ratio, and how to use a WCAG contrast checker for accessible color palettes.",
  slug: "/guides/wcag-contrast-checker-color-accessibility",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function WcagGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl">
          <div className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <Palette className="w-4 h-4" />
              <span>Accessibility Guide</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              WCAG Contrast Checker Guide: Making Your Designs Accessible
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Ensure your digital products are usable by everyone by mastering WCAG contrast standards and accessible color selection.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Understanding WCAG Contrast Ratios</h2>

              <div className="bg-surface border border-border p-6 rounded-2xl">
                <p className="font-bold text-text-primary mb-2">Quick Answer:</p>
                <p className="m-0 text-text-secondary">
                  WCAG requires a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text to ensure readability for visually impaired users. Using a WCAG contrast checker helps verify these ratios automatically during the design process.
                </p>
              </div>

              <p>
                The Web Content Accessibility Guidelines (WCAG) dictate how to make web content more accessible. A crucial part of this is color contrast. Good contrast isn&apos;t just about compliance; it ensures your content is legible for users with low vision, color blindness, or those reading on mobile devices in bright sunlight. You can start building compliant schemes on our <Link href="/" className="text-primary hover:underline">main generator page</Link>.
              </p>
              <p>
                When we talk about digital accessibility, color contrast is often the most frequently failed criteria on the web. A study by WebAIM found that low contrast text is the most common accessibility failure, affecting over 83% of the top one million homepages. This is an entirely preventable error. By integrating contrast checking into your initial design phase—rather than treating it as an afterthought before deployment—you save significant refactoring time and ensure a universally usable product.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">WCAG 2.1 and 2.2 Standards Explained</h2>
              <p>
                Currently, WCAG 2.1 and the newer 2.2 guidelines focus heavily on the mathematical ratio between foreground text and background colors:
              </p>

              <h3 className="text-2xl font-bold text-text-primary">AA Level Compliance</h3>
              <p>
                For level AA compliance, standard text must have a contrast ratio of at least <strong>4.5:1</strong>. Large text (usually 18pt, or 14pt bold) requires a softer ratio of <strong>3:1</strong>. Graphical objects and UI components also require a 3:1 ratio.
              </p>
              <p>
                What does 4.5:1 actually mean? The contrast ratio is a mathematical measurement of the difference in perceived luminance (brightness) between two colors. It ranges from 1:1 (white text on a white background) to 21:1 (black text on a white background). Achieving AA compliance is generally considered the baseline legal standard for most commercial and government websites in North America and Europe.
              </p>

              <h3 className="text-2xl font-bold text-text-primary">AAA Level Compliance</h3>
              <p>
                For the stricter AAA compliance, normal text needs a <strong>7.1:1</strong> ratio, while large text needs a <strong>4.5:1</strong> ratio. While not legally mandated for all sites, aiming for AAA ensures maximum inclusivity.
              </p>
              <p>
                Designing for AAA compliance requires discipline. It often restricts the use of soft pastels or light grays as text colors. However, for applications geared toward elderly populations, medical software, or specialized educational tools, hitting that 7.1:1 ratio is absolutely crucial for user success.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Common Contrast Pitfalls</h2>
              <p>
                Designers frequently make a few predictable mistakes when dealing with color contrast:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Placeholder Text:</strong> Form inputs often use light gray placeholder text that fails contrast checks, making it difficult for users to know what information is required.</li>
                <li><strong>Disabled States:</strong> While disabled buttons don&apos;t strictly have to meet contrast rules, making them too light can confuse users about the UI state.</li>
                <li><strong>Text over Images:</strong> Placing text directly over a busy photograph without a dark overlay or text shadow almost guarantees a contrast failure in certain areas of the image.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Checking Contrast in Real-Time</h2>
              <p>
                Manual contrast calculation is tedious. Modern workflows demand real-time verification. When you build a palette on PaletteFlow, our built-in tools check your foreground against your background instantly.
                Whether you are crafting a brand new look or pulling inspiration from our <Link href="/palettes" className="text-primary hover:underline">explore library</Link>, always verify your colors pass the test before deployment.
              </p>
              <p>
                Don&apos;t wait until a QA engineer flags an accessibility bug. Use our dedicated Contrast Checker to tweak hex values on the fly. Sometimes, simply darkening a shade by 5-10% in the HSL spectrum is all it takes to shift a failing combination into a compliant one, without ruining the aesthetic integrity of your design.
              </p>
            </section>

          </article>

          <div className="mt-20 p-8 md:p-12 bg-surface border border-border rounded-3xl text-center space-y-8">
             <h3 className="text-4xl font-display font-bold text-text-primary">Check Your Contrast Now</h3>
             <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Don&apos;t guess on accessibility. Use our tools to verify your colors instantly.
             </p>
             <Link
                href="/tools/contrast-checker"
                className="inline-flex items-center space-x-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl"
             >
                <Layers size={20} />
                <span>Open Contrast Checker →</span>
             </Link>
          </div>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
