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
  // Initialize Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  
  // State to track the scroll progress (0 to 100)
  const [scrollProgress, setScrollProgress] = useState(0);

  // This function calculates how far we've scrolled
  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  // Set up the event listeners when the component loads
  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi); // Set initial position
    
    // Listen for scroll events and update the bar
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="w-full">
      {/* The Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y mb-8"> {/* Added mb-8 for spacing above scrollbar */}
          {reviews.map((review, index) => (
            <div 
              className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-[85%] pl-4 md:basis-1/2 lg:basis-1/4" 
              key={index}
            >
              <div className="h-full rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition hover:border-purple-500/50">
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
          ))}
        </div>
      </div>

      {/* The Scrollbar Indicator */}
      <div className="flex justify-center px-4">
        {/* The Track (Dark Gray) */}
        <div className="h-1.5 w-full max-w-md overflow-hidden rounded-full bg-gray-800">
          {/* The Thumb (Purple) - moves based on scrollProgress */}
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