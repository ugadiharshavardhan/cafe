'use client';

import React from 'react';
import { Wifi, Zap, Music, Coffee, Wind, BookOpen } from 'lucide-react';

const amenities = [
  { 
    id: 1, 
    icon: <Wifi size={32} />, 
    title: 'High-Speed Fiber', 
    description: 'Ultra-fast connectivity for the modern digital nomad.',
    tag: 'Gigabit Ready'
  },
  { 
    id: 2, 
    icon: <Zap size={32} />, 
    title: 'Power Stations', 
    description: 'Charging points at every table to keep you powered up.',
    tag: 'Built-in Ports'
  },
  { 
    id: 3, 
    icon: <Music size={32} />, 
    title: 'Ambient Sound', 
    description: 'Curated cinematic playlists to enhance your mood.',
    tag: 'Hi-Fi Audio'
  },
  { 
    id: 4, 
    icon: <Coffee size={32} />, 
    title: 'Free Refills', 
    description: 'On all classic drip coffee for your long work sessions.',
    tag: 'Select Roasts'
  },
  { 
    id: 5, 
    icon: <Wind size={32} />, 
    title: 'Air Purification', 
    description: 'HEPA-filtered air to ensure a crisp, fresh environment.',
    tag: 'Health First'
  },
  { 
    id: 6, 
    icon: <BookOpen size={32} />, 
    title: 'Reading Nook', 
    description: 'A curated second-hand library for our patrons.',
    tag: 'Quiet Zone'
  },
];

export default function AmenitiesPage() {
  return (
    <div className="pt-32 pb-24 px-8 md:px-24">
      <header className="mb-24 text-center max-w-2xl mx-auto space-y-6">
        <h1 className="text-6xl md:text-8xl font-serif text-latte">
          Amenities
        </h1>
        <p className="text-caramel/70 font-light leading-relaxed tracking-wide uppercase text-sm">
          Crafted for Comfort, Designed for Productivity.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {amenities.map((item) => (
          <div 
            key={item.id}
            className="group relative p-12 glass rounded-[3rem] space-y-8 flex flex-col justify-between hover:-translate-y-4 transition-all duration-500 border border-latte/5 hover:border-gold/30"
          >
            {/* Minimal Icon Card */}
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-3xl bg-caramel/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500 animate-pulse group-hover:animate-none">
                {item.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-latte">
                  {item.title}
                </h3>
                <p className="text-latte/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-8 border-t border-latte/5 opacity-40 group-hover:opacity-100 transition-opacity">
               <span className="w-2 h-2 rounded-full bg-gold" />
               <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-latte">
                 {item.tag}
               </span>
            </div>
          </div>
        ))}
      </div>

      {/* Corporate Space Section */}
      <section className="mt-48 p-16 md:p-24 glass rounded-[4rem] text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-7xl font-serif text-latte">
            Corporate & Studio Rentals
          </h2>
          <p className="text-lg md:text-xl text-latte/50 font-light">
            Need a cinematic space for your next production, off-site, or team meeting? Our entire first floor is available for exclusive rentals.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 px-4">
             <div className="flex-1 p-8 rounded-3xl glass-light border border-latte/5 w-full">
                <span className="text-gold text-2xl font-serif">40 Seat Capacity</span>
             </div>
             <div className="flex-1 p-8 rounded-3xl glass-light border border-latte/5 w-full">
                <span className="text-gold text-2xl font-serif">Studio Lighting Ready</span>
             </div>
             <div className="flex-1 p-8 rounded-3xl glass-light border border-latte/5 w-full">
                <span className="text-gold text-2xl font-serif">Full Catering Service</span>
             </div>
          </div>
          <button className="px-16 py-6 bg-gold text-matte-black rounded-full font-bold hover:scale-105 transition-transform duration-300">
            Request a Quote
          </button>
        </div>
      </section>
    </div>
  );
}
