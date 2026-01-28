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
    default: 'Basak Karadeniz - Front-end Developer',
    template: '%s | Basak Karadeniz',
  },
  description: 'Front-end developer passionate about creating beautiful and functional web experiences.',
  keywords: ['front-end developer', 'react', 'next.js', 'portfolio', 'web developer'],
  authors: [{ name: 'Basak Karadeniz' }],
  creator: 'Basak Karadeniz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://basak.dev',
    siteName: 'Basak Karadeniz Portfolio',
    title: 'Basak Karadeniz - Front-end Developer',
    description: 'Front-end developer passionate about creating beautiful and functional web experiences.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basak Karadeniz - Front-end Developer',
    description: 'Front-end developer passionate about creating beautiful and functional web experiences.',
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
