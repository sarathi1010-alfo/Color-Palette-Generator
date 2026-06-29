import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import Link from "next/link";
import { Palette } from "lucide-react";
import { SeoMeta } from "@/types/seo";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";

const metaDataObj: SeoMeta = {
  title: "How to Choose a Color Palette for UI Design",
  description: "A comprehensive guide on how to choose a color palette for UI design. Learn the 3-step process to create harmonious, accessible color schemes.",
  slug: "/blog/choose-ui-color-palette",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export const metadata = resolveMetadata(buildLandingMeta(metaDataObj));

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl">
          <div className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <Palette className="w-4 h-4" />
              <span>Design Guide</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              How to Choose a Color Palette for UI Design
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Choosing the right colors for your user interface is more than just picking your favorite hues. It&apos;s about creating a harmonious, accessible experience that guides the user and reinforces your brand identity.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">How to choose a color palette for UI design?</h2>

              {/* AI Snapshot - 30-40 words */}
              <div className="bg-surface border-l-4 border-primary p-6 rounded-r-xl">
                <p className="font-semibold text-text-primary m-0">
                  To choose a UI color palette, select a primary brand color, pick an analogous or complementary accent color, and generate neutral shades for text and backgrounds. Always verify WCAG contrast ratios for accessibility before finalizing.
                </p>
              </div>

              <p>
                The process of building a color palette from scratch can feel daunting. However, by breaking it down into a systematic approach, any designer or developer can create professional-grade color schemes. This guide will walk you through the essential steps, from understanding basic color theory to applying your palette to real UI components. Color is one of the most powerful tools in a designer&apos;s arsenal. It can attract attention, set a mood, influence users&apos; emotions, and even affect their perception of your brand&apos;s credibility. Yet, despite its importance, many designers struggle with creating effective color palettes. This comprehensive guide will equip you with the knowledge and tools you need to master UI color selection, ensuring your designs are not only beautiful but also accessible and user-friendly. We&apos;ll delve deep into the psychology of color, the mechanics of color theory, the practicalities of creating balanced palettes, and the crucial step of accessibility testing. By the end of this article, you&apos;ll be able to approach color selection with confidence and precision.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Step 1: Define Your Primary Color</h2>
              <p>
                Your primary color is the anchor of your entire UI. It&apos;s the color most closely associated with your brand and will be used for key interactive elements like call-to-action (CTA) buttons, active states, and important highlights. Choosing this color is the most critical decision in the palette creation process, as it sets the tone for everything else. This color should ideally be derived from your brand identity guidelines. If you&apos;re starting from scratch, you have the freedom (and the responsibility) to choose a color that perfectly encapsulates the essence of the product you&apos;re building.
              </p>

              <h3 className="text-2xl font-bold text-text-primary">Consider Brand Psychology</h3>
              <p>
                Colors carry inherent psychological associations. Blue often conveys trust, security, and professionalism, making it wildly popular in finance, healthcare, and enterprise tech. Green signifies growth, health, wealth, or success, often used in eco-friendly products or financial apps. Red can evoke urgency, passion, or danger, frequently used for sales or critical alerts. Purple is associated with luxury, creativity, and wisdom. Yellow exudes optimism, clarity, and warmth. Choose a primary color that aligns with the core emotion you want your application to evoke. However, remember that context matters. Red might mean &apos;danger&apos; in a banking app, but &apos;excitement&apos; in an entertainment platform. Always align your color choice with the specific context of your product and the cultural associations of your target audience.
              </p>

              <h3 className="text-2xl font-bold text-text-primary">Use Real-World Inspiration</h3>
              <p>
                Don&apos;t create in a vacuum. Look at competitors in your space, pull colors from your physical product if applicable, or use an image extraction tool to pull dominant colors from mood boards. The real world is full of perfectly balanced color palettes—in nature, in architecture, in art. Pay attention to the colors around you. If you need inspiration, you can always visit our <Link href="/" className="text-primary hover:underline">main tool page</Link> to generate ideas instantly. Start by exploring different themes and observing how the primary colors dictate the overall feel. Experiment with different hues until you find one that resonates strongly with your product&apos;s core message.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Step 2: Build the Supporting Palette</h2>
              <p>
                Once you have a primary color, you need to surround it with a supporting cast. This is where color theory comes into play. You don&apos;t want your UI to be a chaotic mix of random colors; you want a cohesive system that guides the user&apos;s eye and creates a sense of harmony. A supporting palette typically includes accent colors, which add visual interest, and a range of semantic colors for communicating specific states.
              </p>

              <h3 className="text-2xl font-bold text-text-primary">Choosing Accents with Color Theory</h3>
              <p>
                Accent colors are used to highlight secondary information, provide feedback (like success or error states), or add visual interest without overpowering the primary color. To choose these colors systematically, we turn to the color wheel and established harmonies.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Analogous:</strong> Colors adjacent to your primary color on the color wheel. This creates a low-contrast, harmonious, and serene feel. Analogous palettes are excellent for interfaces that need to feel calm and unified, such as wellness apps or reading platforms. They provide subtle variation without causing visual fatigue.</li>
                <li><strong>Complementary:</strong> The color directly opposite your primary color. This creates high contrast and is excellent for drawing attention to specific elements. Use complementary colors sparingly—perhaps for your primary call-to-action button or critical alerts. Too much complementary contrast can be jarring and overwhelming to the user.</li>
                <li><strong>Triadic:</strong> Three colors equally spaced around the wheel. This offers vibrant contrast while maintaining balance. Triadic palettes are often used in products aimed at children, gaming interfaces, or brands that want to project a playful, dynamic, and energetic personality. Balancing a triadic palette requires skill, as the colors compete for attention; typically, one color should dominate while the others act as accents.</li>
                <li><strong>Monochromatic:</strong> This involves using variations in lightness and saturation of your single primary color. It&apos;s a foolproof way to create a clean, elegant, and sophisticated look. Monochromatic palettes are heavily used in modern, minimalist design, allowing the content itself to take center stage.</li>
              </ul>

              <p>
                 To see these relationships in action and browse hundreds of pre-made examples spanning these various harmonies, <Link href="/palettes" className="text-primary hover:underline">explore our library</Link> of curated color schemes. Studying these examples will help you internalize how these theoretical relationships translate into practical UI application.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Step 3: Establish Neutrals and Semantic Colors</h2>
              <p>
                The vibrant primary and accent colors are the stars of the show, but neutrals are the stage they perform on. Neutrals (grays, whites, and blacks) make up the vast majority of your UI, serving as backgrounds, borders, typography, and subtle UI elements. Their importance cannot be overstated; poorly chosen neutrals can make a design look cheap or dirty, while well-crafted neutrals elevate the entire interface.
              </p>

              <h3 className="text-2xl font-bold text-text-primary">Creating Depth with Tinted Neutrals</h3>
              <p>
                Instead of using pure black (`#000000`) or pure white (`#FFFFFF`), create a scale of tinted neutrals. Add a tiny amount of your primary color to your grays. This subtle tint creates a much more cohesive and premium feel than harsh, desaturated grays. For example, if your primary color is a deep blue, your dark grays for text should have a slight blue undertone, and your light grays for backgrounds should be cool rather than warm. You&apos;ll typically need a robust scale of at least 5-9 shades of your neutral color to cover everything from primary text and secondary text to subtle background panels, hover states, and borders.
              </p>

              <h3 className="text-2xl font-bold text-text-primary">Semantic Colors: Communicating with Consistency</h3>
              <p>
                Semantic colors communicate meaning and state. In almost all Western UIs, these follow established conventions. Ignoring these conventions can severely impair user experience, as users rely on these colors to quickly understand the status of their actions.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Success (Green):</strong> Used for confirming actions, successful form submissions, or positive trends.</li>
                <li><strong>Warning (Yellow/Orange):</strong> Used for cautionary messages, actions that might have unintended consequences, or indicating a state that needs attention but isn&apos;t immediately critical.</li>
                <li><strong>Error/Danger (Red):</strong> Used for critical errors, destructive actions (like deleting an account), or invalid form inputs.</li>
                <li><strong>Information (Blue):</strong> Used for general informative messages, helpful tips, or guidance. (If your primary color is already blue, you might need to adjust the shade slightly or rely more on icons to differentiate semantic information from primary actions).</li>
              </ul>
              <p>When selecting your semantic colors, ensure they still feel like part of the same family as your primary palette. You might need to adjust their saturation or lightness slightly so they don&apos;t clash with your brand colors, while still maintaining their recognizable meaning.</p>
            </section>

            <section className="space-y-6 border-t border-border pt-8 mt-12">
              <h2 className="text-3xl font-display font-bold text-text-primary">The Final Crucial Step: Accessibility Testing</h2>
              <p>
                A beautiful palette is completely useless if your users can&apos;t read your content. Accessibility is a fundamental, non-negotiable aspect of modern UI design. The Web Content Accessibility Guidelines (WCAG) dictate that text and interactive elements must have sufficient contrast against their backgrounds to be legible for users with visual impairments, including color blindness and low vision.
              </p>
              <p>
                Always, always test your color combinations. Your primary text color against your main background should ideally hit the AAA standard (a 7:1 contrast ratio) for body text, ensuring maximum readability. At the very minimum, it must meet the AA standard (a 4.5:1 contrast ratio). Do not rely on your eyes alone; human perception of contrast can be flawed and heavily influenced by surrounding colors and monitor calibration.
              </p>
              <p>
                 Use contrast checking tools rigorously to verify your palette before implementing it in code. Check every combination: text on background, text on buttons, icons on backgrounds. Furthermore, ensure you are not relying on color alone to convey critical information. Always pair semantic colors with icons or clear text labels (e.g., an error message shouldn&apos;t just be red text; it should also include an error icon or explicit wording). Building an accessible color palette isn&apos;t just about compliance; it&apos;s about creating a robust, inclusive product that provides an excellent experience for every single user.
              </p>
              <p>
                By following this structured approach—starting with a strong primary anchor, leveraging color theory for accents, crafting cohesive tinted neutrals, and rigorously testing for accessibility—you transform color selection from a guessing game into a predictable, repeatable science, guaranteeing professional results every time.
              </p>
            </section>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
