"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { EmblaCarouselType } from 'embla-carousel';

type Review = {
  imageUrl: string;
};

type PropType = {
  reviews: Review[];
};

const TestimonialCarousel: React.FC<PropType> = ({ reviews }) => {
  // CHANGED: Added 'loop: true' and align: 'center' for a better spotlight effect
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  
  const [scrollProgress, setScrollProgress] = useState(0);
  // NEW: Track the currently selected index
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  // NEW: Update state when a new slide is selected
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    onSelect(emblaApi); // Set initial selection
    
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('select', onSelect); // Listen for slide changes
  }, [emblaApi, onScroll, onSelect]);

  return (
    <div className="w-full">
      <div className="overflow-hidden py-10" ref={emblaRef}>
        <div className="flex touch-pan-y mb-8">
          {reviews.map((review, index) => {
            // Check if this specific slide is the selected one
            const isSelected = index === selectedIndex;

            return (
              <div 
                className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-[85%] pl-4 md:basis-1/2 lg:basis-1/4" 
                key={index}
              >
                {/* CONDITIONAL STYLING:
                   - transition-all duration-500: Makes the size change smooth
                   - isSelected: Scale up (1.1), add purple border, add shadow, full opacity
                   - !isSelected: Scale down (0.9), lower opacity
                */}
                <div 
                  className={`
                    h-full rounded-lg border bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 ease-in-out
                    ${isSelected 
                      ? 'scale-110 border-purple-500 opacity-100 shadow-xl shadow-purple-500/20 z-10' 
                      : 'scale-90 border-gray-800 opacity-50 hover:opacity-80 hover:border-gray-600'
                    }
                  `}
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-md">
                    <Image
                      src={review.imageUrl}
                      alt={`Testimonial review ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* The Scrollbar Indicator */}
      <div className="flex justify-center px-4">
        <div className="h-1.5 w-full max-w-md overflow-hidden rounded-full bg-gray-800">
          <div 
            className="h-full rounded-full bg-purple-600 transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;