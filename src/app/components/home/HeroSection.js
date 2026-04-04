'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useBooking } from '../BookingProvider';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const { openOptions } = useBooking();

  useEffect(() => {
    // Subtle parallax and fade on scroll
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 100,
        opacity: 0.5,
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-8 md:px-24 overflow-hidden pt-20 text-center"
    >
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
          poster="/ca_phe_bistro_hero_1774790872555.png"
        >
          <source src="/Luxury_Coffee_Pour_Loop_Animation.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-matte-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matte-black/20 to-matte-black z-10" />
      </div>

      <div className="z-20 max-w-4xl">
        <h1 className="text-6xl md:text-9xl font-serif text-latte mb-6 overflow-hidden leading-tight">
          Ca Phe <br className="md:hidden" /> Bistro
        </h1>
        <p className="text-xl md:text-2xl text-caramel/90 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
          Something brewtiful is here ☕. Experience the cinematic art of artisanal brewing in every single drop.
        </p>
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link href="/menu" className="w-full md:w-auto">
            <button className="w-full px-10 py-4 bg-caramel text-matte-black rounded-full font-bold hover:bg-gold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(196,164,132,0.4)]">
              Explore Menu
            </button>
          </Link>
          
          <button 
            onClick={openOptions}
            className="w-full md:w-auto px-10 py-4 border border-latte/30 text-latte rounded-full font-bold hover:bg-latte/10 transition-all duration-500 hover:scale-105"
          >
            Book Online
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-latte/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-latte/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
