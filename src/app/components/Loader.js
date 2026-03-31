'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);
  const cupRef = useRef(null);
  const fillRef = useRef(null);
  const textRef = useRef(null);
  const steamRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.5,
          ease: 'power2.inOut',
          onComplete: () => setIsVisible(false),
        });
      },
    });

    // Coffee filling animation
    tl.to(fillRef.current, {
      height: '100%',
      duration: 3,
      ease: 'power2.inOut',
    })
    .to(textRef.current, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1.5,
      ease: 'power2.out',
    }, '-=1')
    .to(steamRef.current, {
      opacity: 0.6,
      duration: 1,
    }, '-=0.5');

    // Separate infinite steam animation
    gsap.to(steamRef.current, {
      y: -20,
      duration: 2,
      ease: 'power1.out',
      repeat: -1,
      yoyo: true,
      delay: 2.5,
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(steamRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-matte-black z-[10000] flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative w-24 h-24 mb-8">
        {/* Cup outline */}
        <div 
          ref={cupRef}
          className="absolute inset-0 border-2 border-latte/30 rounded-b-3xl rounded-t-sm"
        >
          {/* Coffee fill */}
          <div 
            ref={fillRef}
            className="absolute bottom-0 left-0 w-full h-0 bg-espresso rounded-b-[22px]"
          />
        </div>
        
        {/* Steam */}
        <div 
          ref={steamRef}
          className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-2 opacity-0"
        >
          <div className="w-1 h-8 bg-latte/20 rounded-full blur-[2px]" />
          <div className="w-1 h-12 bg-latte/20 rounded-full blur-[2px]" />
          <div className="w-1 h-8 bg-latte/20 rounded-full blur-[2px]" />
        </div>
      </div>

      <h1 
        ref={textRef}
        className="text-3xl font-serif text-latte tracking-[0.2em] opacity-0 blur-md transition-all duration-1000"
      >
        CA PHE BISTRO
      </h1>
      <p className="mt-4 text-xs tracking-[0.5em] text-caramel/60 animate-pulse">
        BREWING SOMETHING BEAUTIFUL
      </p>
    </div>
  );
}
