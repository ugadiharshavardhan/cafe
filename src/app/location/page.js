'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, AtSign } from 'lucide-react';

export default function LocationPage() {
  return (
    <div className="pt-32 pb-24 px-8 md:px-24">
      <header className="mb-24 text-center max-w-2xl mx-auto space-y-6">
        <h1 className="text-6xl md:text-8xl font-serif text-latte">
          Location
        </h1>
        <p className="text-caramel/70 font-light leading-relaxed uppercase tracking-[0.3em] text-sm">
          Visit Us in Hyderabad
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Google Maps Embed */}
        <div className="flex-[2] relative min-h-[500px] rounded-[4rem] overflow-hidden glass border-0 bg-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9213335439795!2d78.35061257493543!3d17.41556248347648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95004459c9ad%3A0x1a74866a4a83a29b!2sCa%20Phe%20Bistro!5e0!3m2!1sen!2sin!4v1774792248688!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Info Card */}
        <div className="flex-1 glass p-12 md:p-16 rounded-[4rem] space-y-12">
          <div className="space-y-4">
             <h2 className="text-4xl font-serif text-latte">Get in Touch</h2>
             <p className="text-latte/50 font-light">We love hearing from our guests. Whether you want to book a table or book the space, reach out.</p>
          </div>

          <div className="space-y-8">
             <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-caramel/10 flex items-center justify-center text-gold group-hover:rotate-12 transition-transform duration-300">
                   <Phone size={20} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] uppercase tracking-[0.2em] text-caramel/60 mb-1">Phone</span>
                   <span className="text-lg text-latte">+91 98765 43210</span>
                </div>
             </div>

             <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-caramel/10 flex items-center justify-center text-gold group-hover:-rotate-12 transition-transform duration-300">
                   <Mail size={20} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] uppercase tracking-[0.2em] text-caramel/60 mb-1">Email</span>
                   <span className="text-lg text-latte">hello@caphebistro.com</span>
                </div>
             </div>

             <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-caramel/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-300">
                   <Clock size={20} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] uppercase tracking-[0.2em] text-caramel/60 mb-1">Hours</span>
                   <span className="text-lg text-latte">Daily: 08:00 AM — 10:00 PM</span>
                </div>
             </div>
          </div>

          <div className="pt-8 border-t border-latte/5 flex gap-6">
             <a href="https://www.instagram.com/caphe_bistro/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl text-latte/40 hover:text-gold hover:scale-110 transition-all duration-300">
               <Instagram size={20}/>
             </a>
             <a href="https://www.threads.net/@caphe_bistro?hl=en" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl text-latte/40 hover:text-gold hover:scale-110 transition-all duration-300">
               <AtSign size={20}/>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
