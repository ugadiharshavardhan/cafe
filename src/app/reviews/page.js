'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Star, MessageSquare } from 'lucide-react';

const fullReviews = [
  { id: 1, name: 'Alice M.', rating: 5, text: 'A truly premium experience. The attention to detail in every cup is unmatched.', title: 'Premium Artistry', size: 'lg' },
  { id: 2, name: 'Robert S.', rating: 5, text: 'Best cold brew in the city. The nitrogen infusion is creamy and smooth.', title: 'Nitro Magic', size: 'md' },
  { id: 3, name: 'Priya V.', rating: 4, text: 'Beautiful aesthetic and even better coffee. The lavender latte is a must-try.', title: 'Floral Delight', size: 'sm' },
  { id: 4, name: 'Karan J.', rating: 5, text: 'The atmosphere is just right for productivity or relaxation. Truly an urban sanctuary.', title: 'Urban Sanctuary', size: 'lg' },
  { id: 5, name: 'Emma W.', rating: 5, text: 'High-end coffee, cinematic vibes. I felt like I was in a movie.', title: 'Cinematic Vibes', size: 'md' },
  { id: 6, name: 'Lokesh T.', rating: 5, text: 'Hyderabad needed a place like this. Exceptional service and artisanal beans.', title: 'Exceptional Service', size: 'sm' },
  { id: 7, name: 'Sarah G.', rating: 4, text: 'Innovative menu items that you wont find anywhere else. The Espresso Romano is divine.', title: 'Innovative Menu', size: 'md' },
  { id: 8, name: 'James B.', rating: 5, text: 'The 3D interactions on the site reflect the high-end feel of the bistro. 10/10.', title: 'Tech Meets Taste', size: 'lg' },
];

export default function ReviewsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const bubbles = document.querySelectorAll('.review-bubble');
    
    bubbles.forEach((bubble, i) => {
      // Floating animation
      gsap.to(bubble, {
        y: `random(-20, 20)`,
        x: `random(-10, 10)`,
        duration: `random(2, 4)`,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: i * 0.2,
      });

      // Entry animation
      gsap.fromTo(bubble, 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1, 
          delay: i * 0.1, 
          ease: 'back.out(1.7)' 
        }
      );
    });
  }, []);

  return (
    <div className="pt-32 pb-24 px-8 md:px-24">
      <header className="mb-24 text-center max-w-2xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-gold text-xs uppercase tracking-[0.3em]">
          <MessageSquare size={14} />
          <span>Guest Chronicles</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-serif text-latte">
          The Reviews
        </h1>
        <p className="text-caramel/70 font-light leading-relaxed">
          Our community is at the heart of everything we brew. Here are the stories shared by our guests.
        </p>
      </header>

      <div 
        ref={containerRef}
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-start"
      >
        {fullReviews.map((review) => {
          return (
            <div 
              key={review.id}
              className="review-bubble glass-light p-8 rounded-[40px] flex flex-col space-y-6 md:hover:scale-105 transition-transform duration-500 cursor-default border-latte/5"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-caramel/40"> Verified Guest </span>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-latte text-2xl">
                  {review.title}
                </h3>
                <p className="text-latte/60 italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-latte/5 mt-auto">
                <div className="w-12 h-12 rounded-full border border-caramel/20 flex items-center justify-center font-serif text-caramel text-xl">
                  {review.name[0]}
                </div>
                <div className="flex flex-col">
                  <span className="text-latte font-medium tracking-wide">{review.name}</span>
                  <span className="text-[10px] text-caramel/40 tracking-[0.2em] uppercase"> Hyderabad </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats Counter */}
      <section className="mt-32 py-24 border-t border-latte/5 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="space-y-2">
          <span className="text-5xl md:text-7xl font-serif text-gold">4.9/5</span>
          <p className="text-xs tracking-[0.3em] text-caramel/60 uppercase">Average Rating</p>
        </div>
        <div className="space-y-2">
          <span className="text-5xl md:text-7xl font-serif text-gold">2.5k+</span>
          <p className="text-xs tracking-[0.3em] text-caramel/60 uppercase">Google Reviews</p>
        </div>
        <div className="space-y-2">
          <span className="text-5xl md:text-7xl font-serif text-gold">100%</span>
          <p className="text-xs tracking-[0.3em] text-caramel/60 uppercase">Ethical Sourcing</p>
        </div>
      </section>
    </div>
  );
}
