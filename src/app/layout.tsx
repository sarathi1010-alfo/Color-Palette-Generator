import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://alfo-palette-generator.vercel.app"),
  title: {
    default: "ColorForge | Professional Color Palette Generator",
    template: "%s | ColorForge"
  },
  description: "Create, explore, and share professional color palettes for your next design project. Zero-backend, high-performance palette generator.",
  keywords: ["color palette", "color generator", "design tool", "ui design", "web design", "branding", "tailwind colors", "color inspiration"],
  authors: [{ name: "ColorForge Team" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alfo-palette-generator.vercel.app",
    siteName: "ColorForge",
    title: "ColorForge | Professional Color Palette Generator",
    description: "Create, explore, and share professional color palettes for your next design project.",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "ColorForge | Professional Color Palette Generator",
    description: "Create, explore, and share professional color palettes for your next design project.",
    images: ["/og-image.png"],
    creator: "@colorforge"
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
      <body
        className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
