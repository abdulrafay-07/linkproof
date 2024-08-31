import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
});

export const metadata: Metadata = {
  title: 'linkproof',
  description: 'proofread your linkedin posts using AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow relative dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
            <Navbar />
            <div className="absolute pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            {children}
          </main>
          <Footer />
          <Toaster />
          <Analytics />
        </div>
      </body>
    </html>
  );
};