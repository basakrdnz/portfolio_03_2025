import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta'
});

export const metadata: Metadata = {
  title: {
    default: 'Başak Karadeniz — Product-Driven Developer',
    template: '%s | Başak Karadeniz',
  },
  description: 'Flutter ve Web teknolojileriyle uçtan uca dijital ürünler geliştiren, test odaklı ve kullanıcı deneyimi merkezli software developer.',
  keywords: ['basak karadeniz', 'product-driven developer', 'flutter', 'react', 'software testing', 'portfolio'],
  authors: [{ name: 'Başak Karadeniz' }],
  creator: 'Başak Karadeniz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://basak.dev',
    siteName: 'Başak Karadeniz Portfolio',
    title: 'Başak Karadeniz — Product-Driven Developer',
    description: 'Flutter ve Web teknolojileriyle uçtan uca dijital ürünler geliştiren, test odaklı ve kullanıcı deneyimi merkezli software developer.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Başak Karadeniz — Product-Driven Developer',
    description: 'Flutter ve Web teknolojileriyle uçtan uca dijital ürünler geliştiren, test odaklı ve kullanıcı deneyimi merkezli software developer.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.className} ${plusJakarta.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
