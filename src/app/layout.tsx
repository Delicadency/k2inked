import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/utils";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const inconsolata = localFont({
  src: "./Fonts/Inconsolata.woff2",
  variable: "--font-inconsolata",
  weight: "400 500 600 700",
});

const marcellusSC = localFont({
  src: "./Fonts/MarcellusSC.woff2",
  variable: "--font-marcellus-sc",
  weight: "500 700",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://k2.inked.vercel.app"), // to change later to real domain
  title: {
    default: "K2.inked — Studio tatuażu Warszawa",
    template: "%s | K2.inked — Studio tatuażu Warszawa",
  },
  description:
    "K2.inked — profesjonalne studio tatuażu w sercu Warszawy. Autorskie projekty, higiena, precyzja i indywidualne podejście. Zarezerwuj termin.",
  keywords: [
    "tatuaż Warszawa",
    "studio tatuażu Warszawa",
    "tattoo Warsaw",
    "piercing Warszawa",
    "dotwork",
    "blackwork",
    "fineline",
    "realism",
    "k2inked",
    "K2 inked",
  ],
  applicationName: "K2.inked",
  authors: [{ name: "Agata Kuklińska" }],
  creator: "Agata Kuklińska",
  publisher: "K2.inked",
  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "K2.inked — Studio tatuażu Warszawa",
    description:
      "Profesjonalne studio tatuażu w sercu Warszawy. Zobacz portfolio artystek i umów wizytę.",
    siteName: "K2.inked",
    locale: "pl_PL",
    images: [
      {
        url: "/og/k2-og.jpg", // <-- export a 1200x630 image, add later
        width: 1200,
        height: 630,
        alt: "K2.inked — Studio tatuażu Warszawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K2.inked — Studio tatuażu Warszawa",
    description:
      "Profesjonalne studio tatuażu, higiena i precyzja. Zarezerwuj termin w K2.inked.",
    // images: ["/og/k2-og.jpg"], <-- to add later if needed
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "beauty",
  verification: {
    // To replace later with real codes
    google: "", // e.g. "google-site-verification-code"
    //other: { "facebook-domain-verification": [""] },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" data-scroll-behavior="smooth">
      <body
        className={cn(
          inconsolata.variable,
          marcellusSC.variable,
          "font-inconsolata text-dark flex min-h-screen flex-col antialiased",
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
