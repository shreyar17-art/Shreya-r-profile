import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Shreya R | Software Engineer Portfolio",
  description: "AI-powered interactive portfolio of Shreya R, a Software Engineer specializing in Full-Stack development, Cloud Infrastructure, and AI Code Evaluation.",
  keywords: ["Software Engineer", "AI Code Evaluation", "Full-Stack Developer", "Cloud Infrastructure", "Shreya R", "IntelliForge AI"],
  authors: [{ name: "Shreya R" }],
  metadataBase: new URL("https://shreya-r-profile.vercel.app"),
  openGraph: {
    title: "Shreya R | Software Engineer Portfolio",
    description: "AI-powered interactive portfolio of Shreya R, a Software Engineer specializing in Full-Stack development, Cloud Infrastructure, and AI Code Evaluation.",
    url: "https://shreya-r-profile.vercel.app",
    siteName: "Shreya R Portfolio",
    images: [{ url: "/api/og" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreya R | Software Engineer Portfolio",
    description: "AI-powered interactive portfolio of Shreya R.",
    images: ["/api/og"],
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
