'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const images = [
  { id: 1, src: '/gallery/Screenshot 2026-03-29 190959.png', alt: 'Espresso Craft' },
  { id: 2, src: '/gallery/Screenshot 2026-03-29 191111.png', alt: 'Bistro Interior' },
  { id: 3, src: '/gallery/Screenshot 2026-03-29 191159.png', alt: 'Late Art Close-up' },
  { id: 4, src: '/gallery/Screenshot 2026-03-29 191232.png', alt: 'Morning Brew' },
  { id: 5, src: '/gallery/Screenshot 2026-03-29 194021.png', alt: 'Café Aesthetics' },
  { id: 6, src: '/gallery/Screenshot 2026-03-29 194111.png', alt: 'Freshly Ground' },
  { id: 7, src: '/gallery/Screenshot 2026-03-29 194134.png', alt: 'Artisan Pour' },
  { id: 8, src: '/gallery/Screenshot 2026-03-29 194222.png', alt: 'Bistro Vibes' },
  { id: 9, src: '/gallery/Screenshot 2026-03-29 194255.png', alt: 'Cozy Corner' },
  { id: 10, src: '/gallery/Screenshot 2026-03-29 194327.png', alt: 'Coffee Roasting' },
  { id: 11, src: '/gallery/Screenshot 2026-03-29 194352.png', alt: 'Barista Skills' },
  { id: 12, src: '/gallery/Screenshot 2026-03-29 194416.png', alt: 'Perfect Cup' },
  { id: 13, src: '/gallery/Screenshot 2026-03-29 194441.png', alt: 'Brewing Ritual' },
  { id: 14, src: '/gallery/Screenshot 2026-03-29 194505.png', alt: 'Classic Bistro' },
  { id: 15, src: '/gallery/Screenshot 2026-03-29 203029.png', alt: 'Specialty Beans' },
  { id: 16, src: '/gallery/coffee4.png', alt: 'Premium Selection' },
];

export default function GallerySection() {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    // The core of the seamless loop:
    // Move from 0 to -50% (exactly one full set)
    // repeat: -1 for infinite, ease: "none" for constant speed
    tweenRef.current = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 100, // Very slow, premium speed
      ease: "none",
      repeat: -1,
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) tweenRef.current.play();
  };

  // Duplicate the 16-image set exactly once to facilitate the seamless reset
  const doubleImages = [...images, ...images];

  return (
    <section className="py-24 bg-matte-black overflow-hidden select-none">
      <div className="container mx-auto px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-latte mb-4">
          Atmospheric Moments
        </h2>
        <div className="w-24 h-1 bg-caramel mx-auto rounded-full" />
      </div>

      <div 
        className="relative flex cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        <div 
          className="flex gap-6 whitespace-nowrap will-change-transform"
          ref={marqueeRef}
        >
          {doubleImages.map((img, index) => (
            <div 
              key={`${img.id}-${index}`} 
              className="relative w-[300px] md:w-[500px] aspect-[4/3] flex-shrink-0 group overflow-hidden rounded-2xl"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-matte-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                <span className="text-latte font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
