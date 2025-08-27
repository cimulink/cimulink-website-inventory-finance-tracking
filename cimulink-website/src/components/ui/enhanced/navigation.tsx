'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { BrandedText } from './branded-text';

interface NavigationProps {
  className?: string;
}

// Hamburger icon component with smooth animation
const HamburgerIcon = ({ className, isOpen, ...props }: React.SVGAttributes<SVGElement> & { isOpen?: boolean }) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className={cn(
        "origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]",
        isOpen && "translate-x-0 translate-y-0 rotate-[315deg]"
      )}
    />
    <path
      d="M4 12H20"
      className={cn(
        "origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]",
        isOpen && "rotate-45"
      )}
    />
    <path
      d="M4 12H20"
      className={cn(
        "origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]",
        isOpen && "translate-y-0 rotate-[135deg]"
      )}
    />
  </svg>
);

// Parent Cimulink navigation links
const cimulinksNavigationLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#core-competencies', label: 'Expertise' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

// BookFlow navigation links
const bookflowNavigationLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#pain-points', label: 'Challenges' },
  { href: '#why-choose-us', label: 'Solutions' },
  { href: '#features', label: 'Features' },
  { href: '#contact', label: 'Contact' },
];

export function EnhancedNavigation({ className }: NavigationProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();
  const containerRef = useRef<HTMLElement>(null);
  
  // Determine which branding and navigation to use based on current route
  const isBookFlowPage = pathname === '/bookflow';
  const navigationLinks = isBookFlowPage ? bookflowNavigationLinks : cimulinksNavigationLinks;
  const brandType = isBookFlowPage ? 'bookflow' : 'cimulink';
  const logoSrc = isBookFlowPage ? '/bookflow_logo.svg' : '/cimulink_logo.svg';

  // Enhanced mobile detection using ResizeObserver (shadcn pattern)
  useEffect(() => {
    const checkWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setIsMobile(width < 1000); // 1000px breakpoint to prevent overlap with navigation items
      }
    };

    checkWidth();

    const resizeObserver = new ResizeObserver(checkWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map(link => ({
        id: link.href.substring(1),
        element: document.getElementById(link.href.substring(1))
      }));

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationLinks]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  return (
    <header 
      ref={containerRef}
      className={cn(
        "fixed top-0 z-[100] w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm px-4 md:px-6",
        className
      )}
    >
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {isBookFlowPage ? (
            <button 
              onClick={() => scrollToSection('#hero')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity min-w-0"
            >
              <img src={logoSrc} alt={brandType} className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0" />
              <div className="hidden min-[680px]:block">
                <BrandedText 
                  brand={brandType}
                  size="lg"
                />
              </div>
            </button>
          ) : (
            <Link 
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity min-w-0"
            >
              <img src={logoSrc} alt={brandType} className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0" />
              <div className="hidden min-[680px]:block">
                <BrandedText 
                  brand={brandType}
                  size="lg"
                />
              </div>
            </Link>
          )}
        </div>
        
        {/* Center - Desktop Navigation */}
        {!isMobile && (
          <NavigationMenu className="flex">
            <NavigationMenuList className="gap-1">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "cursor-pointer font-poppins transition-all duration-200",
                      activeSection === link.href.substring(1)
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}
        
        {/* Right side - Mobile Menu + CTA */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Mobile Navigation */}
          {isMobile && (
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <Button
                  className="group h-8 w-8 sm:h-9 sm:w-9 hover:bg-accent hover:text-accent-foreground flex-shrink-0"
                  variant="ghost"
                  size="icon"
                  aria-expanded={isOpen}
                >
                  <HamburgerIcon isOpen={isOpen} />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-48 p-2">
                <NavigationMenu className="max-w-none">
                  <NavigationMenuList className="flex-col items-start gap-1">
                    {navigationLinks.map((link) => (
                      <NavigationMenuItem key={link.href} className="w-full">
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className={cn(
                            "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-poppins text-left cursor-pointer",
                            activeSection === link.href.substring(1)
                              ? "bg-primary/10 text-primary"
                              : "text-foreground/80"
                          )}
                        >
                          {link.label}
                        </button>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          )}
          
          {/* CTA Button */}
          <Button 
            asChild
            size="sm"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 font-poppins shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap text-xs sm:text-sm font-medium px-2 sm:px-4 h-8 sm:h-9 rounded-md flex-shrink-0"
          >
            <a 
              href="https://calendly.com/ajay_k_gupta/30min" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {isMobile ? "Book Call" : "Book Discovery Call"}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}