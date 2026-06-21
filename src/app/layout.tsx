import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { JsonLd } from "@/components/JsonLd";
import { buildOrganizationSchema } from "@/lib/seo/buildSchema";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  ...resolveMetadata(buildLandingMeta({
    title: "Color Palette Generator",
    description: "The fastest, most visual color palette tool on the web — generate, explore, copy, and export beautiful palettes in seconds.",
    slug: "/",
  }), true),
  other: {
    "google-adsense-account": "ca-pub-6393936268623951",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <JsonLd schema={buildOrganizationSchema()} />
        {/* MONETAG AD START */}
        <meta name="monetag" content="b8e2d5bad0fa15328f0bc86f1ee49713" />
        {/* MONETAG AD END */}
      </head>
      <body
        className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
        {/* ADSTERRA SOCIAL BAR START */}
        <script defer src="https://pl29826863.effectivecpmnetwork.com/b0/c5/d9/b0c5d95f0be54b1c5f9b5bbf2f069579.js"></script>
        {/* ADSTERRA SOCIAL BAR END */}
      </body>
    </html>
  );
}
