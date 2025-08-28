import React from 'react';
import { cn } from '@/lib/utils';

interface BrandedTextProps {
  brand: 'cimulink' | 'BookLink';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function BrandedText({ brand, className, size = 'md' }: BrandedTextProps) {
  const sizeClasses = {
    sm: 'text-lg font-semibold',
    md: 'text-xl font-bold',
    lg: 'text-2xl font-bold',
    xl: 'text-3xl font-extrabold'
  };

  if (brand === 'cimulink') {
    return (
      <span className={cn(
        'font-montserrat tracking-tight',
        sizeClasses[size],
        className
      )}>
        <span style={{ color: '#062161' }}>Cimu</span>
        <span style={{ color: '#29B2AC' }}>link</span>
      </span>
    );
  }

  if (brand === 'BookLink') {
    return (
      <span className={cn(
        'font-montserrat tracking-tight',
        sizeClasses[size],
        className
      )}>
        <span style={{ color: '#062161' }}>Book</span>
        <span style={{ color: '#29B2AC' }}>Link</span>
      </span>
    );
  }

  return null;
}