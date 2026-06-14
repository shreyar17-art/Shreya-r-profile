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
  title: "Shreya Rajasekar (Shreya R) | Certified AI Code Reviewer & Evaluator Portfolio",
  description: "AI-powered interactive portfolio of Shreya Rajasekar (Shreya R), a Certified AI Code Reviewer and Software Engineering Evaluator specializing in LLM Benchmarking, RLHF, and Security Auditing.",
  keywords: ["AI Code Reviewer", "Software Engineering Evaluator", "LLM Benchmarking", "RLHF Preference Labeling", "OWASP Top 10 Security", "CAUDAL", "Shreya Rajasekar", "Shreya R", "IntelliForge AI"],
  authors: [{ name: "Shreya Rajasekar (Shreya R)" }],
  metadataBase: new URL("https://shreya-r-profile.vercel.app"),
  openGraph: {
    title: "Shreya Rajasekar (Shreya R) | Certified AI Code Reviewer Portfolio",
    description: "Explore the portfolio of Shreya Rajasekar, specializing in LLM benchmarking, security auditing, and RLHF evaluation.",
    url: "https://shreya-r-profile.vercel.app",
    siteName: "Shreya Rajasekar Portfolio",
    images: [{ url: "/api/og" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreya Rajasekar (Shreya R) | Certified AI Code Reviewer & Evaluator",
    description: "AI-powered interactive portfolio of Shreya Rajasekar (Shreya R).",
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
