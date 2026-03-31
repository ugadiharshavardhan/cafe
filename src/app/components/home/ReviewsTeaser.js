'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah J.',
    rating: 5,
    text: 'The best espresso Romano I have ever had. The ambience is truly cinematic.',
    title: 'Cinematic Excellence',
  },
  {
    id: 2,
    name: 'Michael R.',
    rating: 5,
    text: 'A sanctuary in the heart of Hyderabad. The perfect place for a quiet afternoon.',
    title: 'Peaceful Sanctuary',
  },
  {
    id: 3,
    name: 'Elena V.',
    rating: 4,
    text: 'Artistry in every cup. The 3D interactions on the site translated to the physical experience.',
    title: 'Truly Artisanal',
  },
  {
    id: 4,
    name: 'David L.',
    rating: 5,
    text: 'Premium service, premium beans. The Vietnamese iced coffee is a game changer.',
    title: 'Highly Recommended',
  },
  {
    id: 5,
    name: 'Aisha K.',
    rating: 5,
    text: 'The hospitality matches the aesthetics. A visual and sensory delight.',
    title: 'Sensory Experience',
  },
];

export default function ReviewsTeaser() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    // Clone reviews for infinite scroll
    const items = scroll.children;
    const totalWidth = scroll.scrollWidth;
    
    // Auto-scroll animation
    const animate = () => {
      gsap.to(scroll, {
        x: `-50%`,
        duration: 30,
        ease: 'none',
        repeat: -1,
      });
    };

    animate();

    return () => gsap.killTweensOf(scroll);
  }, []);

  return (
    <section className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Blurred Ambience Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-matte-black/60 z-10 backdrop-blur-md" />
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047')] bg-cover bg-center"
        />
      </div>

      <div className="relative z-20 w-full">
        <div className="text-center mb-16 px-8">
          <h2 className="text-5xl md:text-7xl font-serif text-latte mb-4">
            Guest Experiences
          </h2>
          <p className="text-caramel/70 max-w-xl mx-auto">
            What our community says about their moments at Ca Phe Bistro.
          </p>
        </div>

        {/* Carousel */}
        <div className="w-full flex overflow-hidden mask-fade-edges">
          <div 
            ref={scrollRef}
            className="flex gap-8 whitespace-nowrap py-12 px-4 shrink-0"
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div 
                key={`${review.id}-${i}`}
                className="w-[350px] md:w-[450px] inline-block glass-light p-8 rounded-3xl shrink-0"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <h3 className="text-xl font-serif text-latte mb-2">{review.title}</h3>
                <p className="text-latte/70 italic text-wrap mb-6 line-clamp-3">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-caramel/20 flex items-center justify-center font-bold text-caramel">
                    {review.name[0]}
                  </div>
                  <span className="text-latte font-medium tracking-wider text-sm">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
