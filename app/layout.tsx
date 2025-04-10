import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arvion Tech - Digital Excellence',
  description: 'Transform your business with cutting-edge digital solutions. Web development, UI/UX design, custom software, and more.',
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/dufs2ywc7/image/upload/v1743935445/Arvion_Logo3_eofkaf.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: 'https://res.cloudinary.com/dufs2ywc7/image/upload/v1743935445/Arvion_Logo3_eofkaf.png',
        type: 'image/png',
        sizes: '192x192',
      },
    ],
    apple: [
      {
        url: 'https://res.cloudinary.com/dufs2ywc7/image/upload/v1743935445/Arvion_Logo3_eofkaf.png',
        sizes: '180x180',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="white"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <div className="relative min-h-screen flex flex-col bg-gradient-to-tr from-[#0552b9]/25 via-[#1887eb]/10 to-[#733cff]/30">
              <SiteHeader />
              <main className="flex-grow">{children}</main>
              <SiteFooter />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}