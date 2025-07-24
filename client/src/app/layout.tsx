import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prompt Playground",
  description: "A fun place to create and explore prompts!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-[#A7C1AC] to-[#ECEEDF]`}
      >
        <header className="sticky top-0 z-30 bg-[#81948A] text-white border-b border-[#A7C1AC] shadow-sm">
          <nav className="max-w-4xl mx-auto flex flex-col items-center justify-between px-4 py-4 gap-2">
            <div className="flex items-center gap-3 mb-1">
              <img src="/globe.svg" alt="Site Icon" className="w-8 h-8" />
              <h1
                className="text-3xl font-extrabold tracking-tight"
                style={{ color: "#ECEEDF" }}
              >
                Prompt Playground
              </h1>
            </div>
            <div className="flex gap-4">
              <Link
                href="/"
                className="text-lg font-semibold hover:underline transition"
                style={{ color: "#D3DAC3" }}
              >
                Home
              </Link>
              <Link
                href="/new"
                className="inline-flex items-center gap-2 bg-[#A7C1AC] text-[#81948A] px-4 py-2 rounded-full font-medium shadow hover:bg-[#D3DAC3] hover:text-[#81948A] transition duration-200"
              >
                <span className="text-lg">＋</span> New Prompt
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8 animate-fadein">
          {children}
        </main>
        <style>{`
          @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
          .animate-fadein { animation: fadein 1s ease; }
        `}</style>
      </body>
    </html>
  );
}
