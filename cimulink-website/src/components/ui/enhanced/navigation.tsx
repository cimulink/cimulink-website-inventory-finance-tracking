'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
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
import { GradientText } from './gradient-text';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const navigationLinks = [
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

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    
    return () => window.removeEventListener('resize', checkWidth);
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
  }, []);

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
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#hero')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src="/bookflow_logo.svg" alt="BookFlow" className="h-10 w-10" />
            <GradientText 
              text="BookFlow" 
              className="text-2xl font-bold font-playfair"
              gradient="linear-gradient(90deg, #3b82f6 0%, #1d4ed8 50%, #3b82f6 100%)"
            />
          </button>
          
          {/* Desktop Navigation */}
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
          
          {/* Mobile Navigation */}
          {isMobile && (
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                >
                  {isOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-48 p-2">
                <div className="flex flex-col gap-1">
                  {navigationLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className={cn(
                        "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground font-poppins text-left",
                        activeSection === link.href.substring(1)
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/80"
                      )}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          )}
          
          {/* CTA Button */}
          <Button 
            asChild
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 font-poppins shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a 
              href="https://calendly.com/ajay_k_gupta/30min" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Discovery Call
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}