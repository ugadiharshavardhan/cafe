'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutTeaser() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });

    // Background color transition (Dark -> Warm Espresso)
    tl.to(containerRef.current, {
      backgroundColor: '#3B2F2F',
      duration: 1,
    });

    // Text Reveal
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }
    );

    // Image Parallax
    gsap.fromTo(
      imageRef.current,
      { y: 100 },
      {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: -100,
        ease: 'none',
      }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[80vh] w-full flex flex-col md:flex-row items-center py-24 px-8 md:px-24 overflow-hidden transition-colors duration-1000"
    >
      <div className="flex-1 z-10 space-y-8 md:pr-12">
        <h2 
          ref={textRef}
          className="text-5xl md:text-7xl font-serif text-latte"
        >
          Our Story
        </h2>
        <p className="text-xl text-latte/80 leading-relaxed font-light">
          Born in the heart of Hyderabad, Ca Phe Bistro is more than just a café. It's a sanctuary for those who appreciate the finer notes of a perfectly extracted bean.
        </p>
        <p className="text-lg text-caramel/90">
          We blend traditional brewing techniques with modern cinematic aesthetics to create an experience that wakes up all your senses.
        </p>
        <button className="px-8 py-3 border-b-2 border-caramel text-caramel hover:text-latte hover:border-latte transition-all duration-300">
          Discover Our Heritage
        </button>
      </div>

      <div className="flex-1 mt-12 md:mt-0 relative h-[60vh] w-full overflow-hidden rounded-2xl shadow-2xl">
        <div 
          ref={imageRef}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-matte-black/20" />
        </div>
      </div>
    </section>
  );
}
