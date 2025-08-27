import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Poppins } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/enhanced/gradient-text';
import { EnhancedNavigation } from '@/components/ui/enhanced/navigation';

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

export const metadata: Metadata = {
  title: 'Cimulink BookFlow | Inventory & Financial Management for Publishers',
  description: 'Automate your publishing backoffice operations with BookFlow - the purpose-built platform for inventory management and financial tracking.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} ${poppins.variable}`}>
        <EnhancedNavigation />
        <main>{children}</main>
        <footer className="border-t bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <img src="/bookflow_logo.svg" alt="BookFlow" className="h-8 w-8" />
                <GradientText 
                  text="BookFlow" 
                  className="text-xl font-semibold font-playfair"
                  gradient="linear-gradient(90deg, #3b82f6 0%, #1d4ed8 50%, #3b82f6 100%)"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center md:text-right">
                © 2025 Cimulink. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
