import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The 7-Figure YouTube Scriptwriting Masterclass",
  description:
    "Turn your writing skills into a high-income digital business. Master YouTube scriptwriting, land international clients, and earn premium rates — without showing your face.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased" style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
