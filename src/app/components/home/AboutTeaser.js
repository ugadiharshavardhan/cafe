'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section 
      className="relative min-h-[80vh] w-full flex flex-col md:flex-row items-center py-24 px-8 md:px-24 overflow-hidden bg-espresso shadow-[0_0_50px_rgba(0,0,0,0.5)]"
    >
      <div className="flex-1 z-10 space-y-8 md:pr-12">
        <h2 
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
        <Link href="/about">
          <button className="px-8 py-3 border-b-2 border-caramel text-caramel hover:text-latte hover:border-latte transition-all duration-300">
            Discover Our Heritage
          </button>
        </Link>
      </div>

      <div className="flex-1 mt-12 md:mt-0 relative h-[60vh] w-full overflow-hidden rounded-2xl shadow-2xl">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-matte-black/20" />
        </div>
      </div>
    </section>
  );
}
