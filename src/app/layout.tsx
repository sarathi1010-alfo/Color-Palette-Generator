import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

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
  title: "Color Palette Generator — Build Beautiful Colors. Instantly.",
  description: "The fastest, most visual color palette tool on the web — generate, explore, copy, and export beautiful palettes in seconds.",
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
        {process.env.NODE_ENV === "production" && (
          <>
            {/* Google Tag Manager */}
            <Script
              id="google-tag-manager"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-WNR968SW');
                `,
              }}
            />
            {/* End Google Tag Manager */}

            {/* Google Analytics */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-HZQ3QT11QC"
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-HZQ3QT11QC');
                `,
              }}
            />
            {/* End Google Analytics */}
          </>
        )}
      </head>
      <body
        className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {process.env.NODE_ENV === "production" && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WNR968SW"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
