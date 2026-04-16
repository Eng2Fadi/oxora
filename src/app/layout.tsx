import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oxora",
  description: "AI LinkedIn Growth System",
  openGraph: {
    title: "Oxora",
    description: "AI LinkedIn Growth System",
    siteName: "Oxora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxora",
    description: "AI LinkedIn Growth System",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
