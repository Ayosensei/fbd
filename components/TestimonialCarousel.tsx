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
  // align: 'center' keeps the focused image in the middle
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Update the progress bar
  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  // Update the selected index (for the scaling effect)
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  // NEW: Function to scroll to a specific slide when clicked
  const onSlideClick = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    onSelect(emblaApi); 
    
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onScroll, onSelect]);

  return (
    <div className="w-full">
      <div className="overflow-hidden py-10" ref={emblaRef}>
        <div className="flex touch-pan-y mb-8">
          {reviews.map((review, index) => {
            const isSelected = index === selectedIndex;

            return (
              <div 
                className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-[85%] pl-4 md:basis-1/2 lg:basis-1/4" 
                key={index}
              >
                {/* ADDED: onClick handler to scroll to this slide 
                    ADDED: cursor-pointer to indicate interactivity
                */}
                <div 
                  onClick={() => onSlideClick(index)}
                  className={`
                    h-full rounded-lg border bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 ease-in-out cursor-pointer
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
                      className="object-cover pointer-events-none" // Prevents image drag from interfering with click
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