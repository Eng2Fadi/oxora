import type { Metadata } from "next";
import "./globals.css";
import { PageShell } from "@/components/Layout";
import { brand } from "@/components/site-data";
import { AppProviders } from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL(brand.domain),
  title: { default: brand.name, template: `%s | ${brand.name}` },
  description: brand.tagline,
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    url: brand.domain,
    siteName: brand.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.tagline
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <AppProviders>
          <PageShell>{children}</PageShell>
        </AppProviders>
      </body>
    </html>
  );
}
