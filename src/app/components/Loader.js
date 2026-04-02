'use client';

import React, { useEffect, useState, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import gsap from 'gsap';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    // Hide loader after a reasonable delay (e.g., 3.5 seconds to match original feel)
    const timer = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.5,
          ease: 'power2.inOut',
          onComplete: () => setIsVisible(false),
        });
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-matte-black z-[10000] flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="w-64 h-64 md:w-96 md:h-96">
        <DotLottieReact
          src="https://lottie.host/1f509ad7-993a-4be5-be2a-72481d8e6e05/LH79kLAxOe.lottie"
          loop
          autoplay
        />
      </div>
      
      <div className="mt-8 text-center">
        <h1 className="text-3xl font-serif text-latte tracking-[0.2em]">
          CA PHE BISTRO
        </h1>
        <p className="mt-4 text-xs tracking-[0.5em] text-caramel/60 animate-pulse uppercase">
          Brewing Something Beautiful
        </p>
      </div>
    </div>
  );
}
