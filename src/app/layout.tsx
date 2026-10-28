import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { JsonLd } from "@/components/JsonLd";
import { buildOrganizationSchema } from "@/lib/seo/buildSchema";
import Script from "next/script";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";

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
  title: "Color Palette Generator | Harmonious Schemes - PaletteFlow",
  description: "Generate balanced, accessible color palettes in seconds. Spacebar generator, WCAG contrast checking, hex code export, and color theory modes.",
  alternates: {
    canonical: "https://paletteflow.alfo.online/",
  },
  openGraph: {
    title: "Color Palette Generator | Harmonious Schemes - PaletteFlow",
    description: "Generate balanced, accessible color palettes in seconds. Spacebar generator, WCAG contrast checking, hex code export, and color theory modes.",
    url: "https://paletteflow.alfo.online/",
    siteName: "PaletteFlow",
    type: "website",
    images: [
      {
        url: "https://paletteflow.alfo.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "PaletteFlow - Color Palette Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Palette Generator | Harmonious Schemes - PaletteFlow",
    description: "Generate balanced, accessible color palettes in seconds. Spacebar generator, WCAG contrast checking, hex code export, and color theory modes.",
    images: ["https://paletteflow.alfo.online/og-image.png"],
  },
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HZQ3QT11QC" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HZQ3QT11QC');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <JsonLd schema={buildOrganizationSchema()} />
      </head>
      <body
        className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          id="skip-link"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <AnalyticsEvents />
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
