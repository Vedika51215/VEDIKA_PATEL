import type { Metadata } from "next";
import { Space_Grotesk, Rye, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const rye = Rye({
  variable: "--font-benguiat", // using Rye as a substitute for Benguiat
  weight: "400",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vedika Patel | Cyber Security & Dev",
  description: "Stranger Things themed cinematic portfolio for Vedika Patel, a Cyber Security enthusiast and Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${rye.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
