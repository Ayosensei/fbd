"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { EmblaCarouselType } from 'embla-carousel';
import { IoClose } from "react-icons/io5"; // Ensure you have react-icons installed

type Review = {
  imageUrl: string;
};

type PropType = {
  reviews: Review[];
};

const TestimonialCarousel: React.FC<PropType> = ({ reviews }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // NEW: State for the Lightbox (Full Screen View)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    onSelect(emblaApi); 
    
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onScroll, onSelect]);

  return (
    <div className="w-full relative">
      <div className="overflow-hidden py-10" ref={emblaRef}>
        <div className="flex touch-pan-y mb-8">
          {reviews.map((review, index) => {
            const isSelected = index === selectedIndex;

            return (
              <div 
                className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-[85%] pl-4 md:basis-1/2 lg:basis-1/4" 
                key={index}
              >
                <div 
                  // CHANGED: Opens the Lightbox instead of just scrolling
                  onClick={() => setLightboxImage(review.imageUrl)}
                  className={`
                    h-full rounded-lg border bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-500 ease-in-out cursor-zoom-in group
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
                      // PERFORMANCE 1: Priority load the first image so it doesn't flicker
                      priority={index === 0}
                      // PERFORMANCE 2: Tell browser actual display size to download smaller files
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scrollbar Indicator */}
      <div className="flex justify-center px-4">
        <div className="h-1.5 w-full max-w-md overflow-hidden rounded-full bg-gray-800">
          <div 
            className="h-full rounded-full bg-purple-600 transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)} // Close on background click
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2"
            onClick={() => setLightboxImage(null)}
          >
            <IoClose size={40} />
          </button>

          {/* Full Image Container */}
          <div 
            className="relative w-full max-w-7xl aspect-auto h-[80vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
            <Image
              src={lightboxImage}
              alt="Full view"
              fill
              className="object-contain"
              sizes="100vw"
              priority // Load immediately
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;