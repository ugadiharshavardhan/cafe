'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const introRef = useRef(null);
  const storyRef = useRef(null);

  useEffect(() => {
    // Intro text reveal
    gsap.fromTo(
      ".about-title",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
    );

    // Section reveal on scroll
    gsap.fromTo(
      ".story-section",
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto space-y-32">
      {/* Hero Section */}
      <section ref={introRef} className="text-center space-y-8">
        <h1 className="about-title text-6xl md:text-9xl font-serif text-latte">
          Our Story
        </h1>
        <p className="about-title text-xl md:text-2xl text-caramel/80 max-w-3xl mx-auto font-light leading-relaxed">
          Crafting moments of cinematic beauty through the art of artisanal coffee.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="story-section grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-serif text-latte">The Philosophy</h2>
          <p className="text-lg text-latte/70 leading-relaxed">
            At Ca Phe Bistro, we believe that coffee is more than just a drink—it's an experience. Our philosophy is rooted in the "Slow Coffee" movement, where every step of the process is handled with care, precision, and a bit of theatrical flair.
          </p>
          <p className="text-lg text-latte/70 leading-relaxed">
            From the selection of ethically sourced beans from the highlands of Vietnam and our local plantations in India, to the final cinematic pour, we prioritize quality over everything.
          </p>
        </div>
        <div className="h-[500px] rounded-3xl overflow-hidden glass">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center" />
        </div>
      </section>

      {/* The Craft Section */}
      <section className="story-section grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
        <div className="order-2 md:order-1 h-[500px] rounded-3xl overflow-hidden glass">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center" />
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-4xl md:text-6xl font-serif text-latte">The Craft</h2>
          <p className="text-lg text-latte/70 leading-relaxed">
            Our baristas are artists. Each cup is a canvas where we blend traditional methods with innovative techniques. Our signature brews are designed to tell a story—one of origin, dedication, and the relentless pursuit of the perfect profile.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="space-y-2">
              <span className="text-gold text-4xl font-serif">10+</span>
              <p className="text-xs tracking-widest text-caramel/60 uppercase">Signature Blends</p>
            </div>
            <div className="space-y-2">
              <span className="text-gold text-4xl font-serif">50k+</span>
              <p className="text-xs tracking-widest text-caramel/60 uppercase">Happy Guests</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
