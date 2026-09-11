'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Building } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // If no images exist or they are demo paths that might not be available
  const hasImages = images && images.length > 0;
  
  // Create an array of actual image paths or fallbacks for demo
  const displayImages = hasImages ? images : ['/placeholder'];

  return (
    <div className="w-full mb-10">
      {/* Main Image */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-muted mb-4 shadow-sm border border-border">
        {hasImages ? (
          <Image
            src={displayImages[activeIndex]}
            alt={`${title} - Image ${activeIndex + 1}`}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-muted">
            <Building className="w-16 h-16 mb-4 text-gray-300" />
            <span className="text-gray-500 font-medium">Image not available</span>
          </div>
        )}
        
        {/* Navigation Arrows could be added here */}
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x hide-scrollbar">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative flex-shrink-0 w-24 h-20 sm:w-32 sm:h-24 rounded-lg overflow-hidden snap-start transition-all",
                activeIndex === idx ? "ring-2 ring-gold ring-offset-2 opacity-100" : "opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${idx + 1}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 120px, 160px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
