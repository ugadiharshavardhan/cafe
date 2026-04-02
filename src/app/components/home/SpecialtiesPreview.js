'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const specialties = [
  {
    id: 1,
    title: 'Espresso Romano',
    description: 'A traditional espresso shot flavored with a slice of lemon.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=2070',
    price: '$6.00',
  },
  {
    id: 2,
    title: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso.',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=2070',
    price: '$7.50',
  },
  {
    id: 3,
    title: 'Vietnamese Iced Coffee',
    description: 'Strong coffee served with sweetened condensed milk and ice.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=2070',
    price: '$6.50',
  },
];

export default function SpecialtiesPreview() {
  const cardsRef = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (cardsRef.current[index]) {
      gsap.to(cardsRef.current[index], {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  return (
    <section className="py-24 px-8 md:px-24 bg-matte-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif text-latte">
            Signature Specialties
          </h2>
          <p className="text-caramel/70 max-w-2xl mx-auto">
            Crafted with precision, inspired by art. Each cup tells a story of heritage and innovation.
          </p>
        </div>

        <div className="specialties-grid grid grid-cols-1 md:grid-cols-3 gap-12 perspective-1000">
          {specialties.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="specialty-card group relative h-[500px] w-full rounded-2xl overflow-hidden glass transition-all duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div 
                className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-300 translate-z-20"
                style={{ transform: 'translateZ(50px)' }}
              >
                <span className="text-gold text-lg font-serif mb-2">{item.price}</span>
                <h3 className="text-2xl font-serif text-latte mb-2">{item.title}</h3>
                <p className="text-sm text-latte/70 line-clamp-2 transform opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.description}
                </p>
                <button className="mt-6 w-fit px-6 py-2 border border-latte/30 text-latte text-sm rounded-full transform opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 hover:bg-latte hover:text-matte-black">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/specialties">
            <button className="px-12 py-4 bg-espresso text-latte rounded-full font-bold hover:bg-caramel hover:text-matte-black transition-all duration-500 cursor-pointer">
              View All Specialties
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
