'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Star, Loader2 } from 'lucide-react';
import { useGoogleReviews } from '../../hooks/useGoogleReviews';

const staticReviews = [
  {
    id: 'static-1',
    name: 'Sarah J.',
    rating: 5,
    text: 'The best espresso Romano I have ever had. The ambiance is truly cinematic.',
    title: 'Cinematic Excellence',
  },
  {
    id: 'static-2',
    name: 'Michael R.',
    rating: 5,
    text: 'A sanctuary in the heart of Hyderabad. The perfect place for a query afternoon.',
    title: 'Peaceful Sanctuary',
  },
  {
    id: 'static-3',
    name: 'Elena V.',
    rating: 5,
    text: 'Artistry in every cup. The 3D interactions on the site translated to the physical experience.',
    title: 'Truly Artisanal',
  },
  {
    id: 'static-4',
    name: 'David L.',
    rating: 5,
    text: 'Premium service, premium beans. The Vietnamese iced coffee is a game changer.',
    title: 'Highly Recommended',
  },
];

export default function ReviewsTeaser() {
  const scrollRef = useRef(null);
  const { reviews: googleReviews, loading } = useGoogleReviews();

  const allReviews = [...googleReviews, ...staticReviews];

  useEffect(() => {
    if (loading) return;
    
    const scroll = scrollRef.current;
    if (!scroll) return;

    // Auto-scroll animation logic
    const animate = () => {
      gsap.to(scroll, {
        x: `-50%`,
        duration: 40,
        ease: 'none',
        repeat: -1,
      });
    };

    animate();

    return () => gsap.killTweensOf(scroll);
  }, [loading]);

  return (
    <section className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-matte-black">
      {/* Blurred Ambience Video Background */}
      <div className="absolute inset-0 z-0 opacity-40">
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
            Real guest reviews fetched live from our community feedback forms.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="animate-spin text-caramel/50" size={40} />
          </div>
        ) : (
          /* Carousel */
          <div className="w-full flex overflow-hidden mask-fade-edges">
            <div 
              ref={scrollRef}
              className="flex gap-8 whitespace-nowrap py-12 px-4 shrink-0"
            >
              {[...allReviews, ...allReviews].map((review, i) => (
                <div 
                  key={`${review.id}-${i}`}
                  className={`w-[350px] md:w-[450px] inline-block glass-light p-8 rounded-3xl shrink-0 border border-latte/5 transition-colors hover:border-gold/20`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                      ))}
                    </div>
                    {review.isNew && (
                       <span className="text-[10px] uppercase tracking-widest text-gold opacity-60"> Live Feedback </span>
                    )}
                  </div>
                  <h3 className="text-xl font-serif text-latte mb-2 truncate">{review.title || 'Exceptional Moments'}</h3>
                  <p className="text-latte/70 italic text-wrap mb-6 line-clamp-3 text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-caramel/10 flex items-center justify-center font-bold text-caramel border border-caramel/20">
                      {review.name[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-latte font-medium tracking-wider text-sm truncate max-w-[150px]">
                        {review.name}
                      </span>
                      <span className="text-[10px] text-caramel/40 uppercase tracking-tighter">Verified Guest</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </section>
  );
}
