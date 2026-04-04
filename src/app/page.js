'use client';

import React from 'react';
import HeroSection from "./components/home/HeroSection";
import AboutTeaser from "./components/home/AboutTeaser";
import SpecialtiesPreview from "./components/home/SpecialtiesPreview";
import GallerySection from "./components/home/GallerySection";
import ReviewsTeaser from "./components/home/ReviewsTeaser";
import Link from 'next/link';
import { useBooking } from './components/BookingProvider';

export default function Home() {
  const { openBooking } = useBooking();

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutTeaser />
      <SpecialtiesPreview />
      <GallerySection />
      <ReviewsTeaser />
      
      {/* CTA Section */}
      <section className="py-32 px-8 md:px-24 bg-latte text-matte-black text-center border-t border-matte-black/5">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-7xl font-serif">
            Visit Us in Hyderabad
          </h2>
          <p className="text-lg md:text-xl font-light opacity-80 leading-relaxed">
            Come and experience the cinematic essence of Ca Phe Bistro. We are open every day from 8:00 AM to 10:00 PM.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <Link href="/location">
              <button className="px-12 py-5 bg-matte-black text-latte rounded-full font-bold hover:scale-105 transition-transform duration-300 cursor-pointer">
                Get Directions
              </button>
            </Link>
            <button 
              onClick={openBooking}
              className="px-12 py-5 border-2 border-matte-black text-matte-black rounded-full font-bold hover:bg-matte-black hover:text-latte transition-all duration-300 cursor-pointer"
            >
              Book a Table
            </button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 px-8 md:px-24 border-t border-latte/10 text-center">
        <p className="text-sm text-latte/40 tracking-[0.3em]">
          &copy; {new Date().getFullYear()} CA PHE BISTRO. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
