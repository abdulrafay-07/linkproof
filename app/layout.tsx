import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/components/navbar';

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
        <main className='h-full min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative'>
          <div className='absolute pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};