import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Component Showcase - Beautiful UI Components",
  description: "A stunning collection of modern, reusable UI components built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}

