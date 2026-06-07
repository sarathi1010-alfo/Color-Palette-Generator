import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
}

export function constructMetadata({
  title = "Color Palette Generator — Build Beautiful Colors. Instantly.",
  description = "The fastest, most visual color palette tool on the web — generate, explore, copy, and export beautiful palettes in seconds.",
  keywords = ["color palette generator", "color scheme", "ui colors", "design tools", "free design utility", "tailwind colors", "css colors"],
  image = "/og-image.jpg",
  url = "https://alfo-palette-generator.vercel.app",
  type = "website",
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: "ALFO",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@alfo_online",
    },
    alternates: {
      canonical: url,
    },
    metadataBase: new URL("https://alfo-palette-generator.vercel.app"),
    other: {
      "google-adsense-account": "ca-pub-6393936268623951",
    },
  };
}

// Generate JSON-LD Schema
export function generateSchema(toolName: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": toolName,
    "description": description,
    "url": url,
    "applicationCategory": "DesignApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
}
