'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { BrandedText } from './branded-text';

export function Footer() {
  const pathname = usePathname();
  const isBookFlowPage = pathname === '/bookflow';
  
  const brandType = isBookFlowPage ? 'bookflow' : 'cimulink';
  const logoSrc = isBookFlowPage ? '/bookflow_logo.svg' : '/cimulink_logo.svg';

  return (
    <footer className="border-t bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {isBookFlowPage ? (
              <Link href="/bookflow" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src={logoSrc} alt={brandType} className="h-8 w-8" />
                <BrandedText 
                  brand={brandType}
                  size="md"
                />
              </Link>
            ) : (
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src={logoSrc} alt={brandType} className="h-8 w-8" />
                <BrandedText 
                  brand={brandType}
                  size="md"
                />
              </Link>
            )}
          </div>
          {isBookFlowPage && (
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
                ← Back to <BrandedText brand="cimulink" size="sm" className="text-sm font-semibold" />
              </Link>
            </div>
          )}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © 2025 <BrandedText brand="cimulink" size="sm" className="text-sm font-semibold" />. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}