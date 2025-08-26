import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/utils";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer/Footer";
import { HeaderMobile } from "@/components/Header/__mobile/HeaderMobile";

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
  title: "K2.inked",
  description: "K2.inked - Studio tatuażu w sercu Warszawy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={cn(
          inconsolata.variable,
          marcellusSC.variable,
          "font-inconsolata text-dark flex min-h-screen flex-col antialiased",
        )}
      >
        <HeaderMobile />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
