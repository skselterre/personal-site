import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { profile } from "@/content/profile";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.headline}`,
  description: profile.description,
  openGraph: {
    title: `${profile.name} | ${profile.headline}`,
    description: profile.description,
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#050505" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-[100dvh] overflow-x-hidden">
        <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-violet-700/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-emerald-500/15 blur-3xl" />
        </div>
        <Nav />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
