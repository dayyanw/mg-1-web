import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HoppingBuddies } from "@/components/hopping-buddies";
import { SiteBackdrop } from "@/components/site-backdrop";
import { SiteNav } from "@/components/site-nav";
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
  title: {
    default: "MG-1 — Information & support",
    template: "%s · MG-1",
  },
  description:
    "MG-1 habit tracking app: product information and support contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <SiteBackdrop />
        <HoppingBuddies />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <SiteNav />
          {children}
        </div>
      </body>
    </html>
  );
}
