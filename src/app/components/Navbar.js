'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Specialties', href: '/specialties' },
  { name: 'Menu', href: '/menu' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Location', href: '/location' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 z-50",
        scrolled ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0" // Always visible for premium feel
      )}
    >
      <div className="glass px-2 py-2 rounded-full border border-latte/10 flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                isActive 
                  ? "text-latte" 
                  : "text-latte/60 hover:text-latte hover:scale-105 active:scale-95"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-white/10 rounded-full border border-white/10" />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
