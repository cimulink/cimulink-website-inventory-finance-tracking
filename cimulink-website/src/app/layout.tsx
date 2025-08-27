import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Poppins, Montserrat } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/enhanced/gradient-text';
import { EnhancedNavigation } from '@/components/ui/enhanced/navigation';
import { Footer } from '@/components/ui/enhanced/footer';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});
const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: 'Cimulink | Custom Software Development for Inventory, Finance & Warehouse Management',
  description: 'Custom software solutions for inventory management, financial tracking, and warehouse operations. Specialized solutions like BookFlow for publishers and institutions.',
  icons: {
    icon: [{ url: '/favicon.svg' }, { url: '/cimulink_logo.svg', sizes: '48x48', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/cimulink_logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} ${poppins.variable} ${montserrat.variable}`}>
        <EnhancedNavigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
