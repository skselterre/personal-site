import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { profile } from "@/content/profile";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], preload: false });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.headline}`,
  description: profile.description,
  openGraph: {
    title: `${profile.name} | ${profile.headline}`,
    description: profile.description,
    type: "website",
  },
};

// Runs before paint: restore a saved theme. Default is dark.
const boot = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body className="min-h-[100dvh]">
        <a href="#main" className="sr-only z-50 rounded-xs bg-accent text-sm font-medium text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-2.5 focus:px-4 focus:py-2.5">
          Skip to content
        </a>
        <Nav />
        <main id="main" className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
