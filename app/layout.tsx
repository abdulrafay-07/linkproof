import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

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
        {children}
      </body>
    </html>
  );
};