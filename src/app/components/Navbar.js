'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import PWAInstallButton from './PWAInstallButton';

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
        "fixed bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 z-50 flex items-center gap-4 w-[95%] sm:w-auto max-w-[calc(100vw-2rem)]",
        scrolled ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
      )}
    >
      <div className="glass px-1.5 py-1.5 sm:px-2 sm:py-2 rounded-full border border-latte/10 flex items-center gap-0.5 sm:gap-1 group overflow-x-auto hide-scrollbar whitespace-nowrap mask-fade-edges">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium transition-all duration-300 rounded-full flex-shrink-0",
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
      <div className="hidden md:block">
        <PWAInstallButton />
      </div>
    </nav>
  );
}
