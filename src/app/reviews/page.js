'use client';

import React from 'react';
import { Star, MessageSquare, Loader2 } from 'lucide-react';
import { useGoogleReviews } from '../hooks/useGoogleReviews';

const fullReviews = [
  { id: 'static-1', name: 'Srikanth Banja', rating: 5, text: 'Absolutely one of the best matcha Vietnamese coffee experiences I’ve had at Ca Phe Bistro. The ambiance is cozy and welcoming, perfect for relaxing with a great cup of coffee. The staff and service were very approachable and friendly.', location: 'Hyderabad' },
  { id: 'static-2', name: 'Dukuntla sai kumar', rating: 5, text: 'Cool & calm breezey Atmosphere...best place to hangout new place alert ##kudos to their brews must try strawberry matcha latte', location: 'Hyderabad' },
  { id: 'static-3', name: 'Qazi Burhan', rating: 5, text: "Recently visited this cozy cafe and I'm already in love with thier Coconut Vietnamese Coffee ❤️🤎☕", location: 'Hyderabad' },
  { id: 'static-4', name: 'Sridevi Reddy', rating: 5, text: 'I recently visited Ca Phe Bistro and even though my visit was short, it left a lasting impression. I tried the Vietnamese Coconut Coffee and a Cold Coffee — and both were absolutely delightful.', location: 'Hyderabad' },
  { id: 'static-5', name: 'Vipul Bhardwaj', rating: 5, text: 'Good place for a quick catch up. Order type: Dine in.', location: 'Hyderabad' },
  { id: 'static-6', name: 'Anjest Biswa', rating: 5, text: 'Awesome Ambiance Mouth watering beverages and food🍲 Excellent 5 star service by service staff.', location: 'Hyderabad' },
  { id: 'static-7', name: 'Puduri Pranay', rating: 5, text: 'Very cool place to have a hot coffee and hangout.', location: 'Hyderabad' },
  { id: 'static-8', name: 'harsha puppala', rating: 5, text: 'Nice place with good ambience, service and food. Must visit!', location: 'Hyderabad' },
  { id: 'static-9', name: 'Tejitha Gummadi', rating: 5, text: 'One of the most comforting places in Financial district. Best for Vietnamese coffee.', location: 'Hyderabad' },
  { id: 'static-10', name: 'P Ishika_shilpa', rating: 5, text: 'Superb place for relax and peace. Coffees are amazing.', location: 'Hyderabad' }
];

export default function ReviewsPage() {
  const { reviews: sheetReviews, loading } = useGoogleReviews();

  const allReviews = [...sheetReviews, ...fullReviews];

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
          Our community is at the heart of everything we brew. Here are the stories shared by our guests from Google and our feedback forms.
        </p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center py-32">
          <Loader2 className="animate-spin text-caramel/50" size={48} />
        </div>
      ) : (
        <div 
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-start"
        >
          {allReviews.map((review) => {
            return (
              <div 
                key={review.id}
                className={`review-bubble glass-light p-8 rounded-[40px] flex flex-col space-y-6 cursor-default border-latte/5 transition-all duration-500 hover:scale-[1.02] ${review.isNew ? 'border border-gold/20' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                  {review.isNew && (
                    <span className="text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full"> New </span>
                  )}
                  {!review.isNew && (
                    <span className="text-[10px] uppercase tracking-widest text-caramel/40"> Verified Guest </span>
                  )}
                </div>

                <div className="space-y-4">
                  <p className="text-latte italic leading-relaxed text-lg">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-latte/5 mt-auto">
                  <div className="w-12 h-12 rounded-full border border-caramel/20 flex items-center justify-center font-serif text-caramel text-xl overflow-hidden bg-caramel/5">
                    {review.name ? review.name[0] : 'G'}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-latte font-medium tracking-wide truncate max-w-[150px]">{review.name}</span>
                    <span className="text-[10px] text-caramel/40 tracking-[0.2em] uppercase"> {review.location} </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Stats Counter */}
      <section className="mt-32 py-24 border-t border-latte/5 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="space-y-2">
          <span className="text-5xl md:text-7xl font-serif text-gold">4.9/5</span>
          <p className="text-xs tracking-[0.3em] text-caramel/60 uppercase">Average Rating</p>
        </div>
        <div className="space-y-2">
          <span className="text-5xl md:text-7xl font-serif text-gold">250+</span>
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
