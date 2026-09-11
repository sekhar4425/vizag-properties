import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  alignment?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  centered = true,
  alignment,
  className,
}: SectionHeadingProps) {
  const isCentered = alignment ? alignment === 'center' : centered;
  return (
    <div className={cn('flex flex-col', isCentered ? 'items-center text-center' : 'items-start text-left', className)}>
      {eyebrow && (
        <span className="font-body text-sm font-medium tracking-widest text-gold uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg text-muted', isCentered && 'max-w-2xl mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
