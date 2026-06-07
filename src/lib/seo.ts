import { Metadata } from "next";

export const siteConfig = {
  name: "Color Palette Generator",
  description: "The fastest, most visual color palette tool on the web — generate, explore, copy, and export beautiful palettes in seconds.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://paletteflow.alfo.online",
  ogImage: "/api/og",
  links: {
    twitter: "https://twitter.com/alfo",
  },
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
  canonicalUrl,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
} = {}): Metadata {
  const isVercelDomain = process.env.NEXT_PUBLIC_VERCEL_URL && process.env.NEXT_PUBLIC_VERCEL_URL.includes("vercel.app");
  const actualNoIndex = noIndex || isVercelDomain;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
        },
      ],
      url: canonicalUrl || siteConfig.url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : `${siteConfig.url}${image}`],
      creator: "@alfo",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl || siteConfig.url,
    },
    ...(actualNoIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
