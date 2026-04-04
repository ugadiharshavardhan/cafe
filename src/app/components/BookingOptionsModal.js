'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function BookingOptionsModal({ isOpen, onClose }) {
  const options = [
    {
      name: 'Zomato',
      description: 'Book your table via Zomato Hyderabad',
      link: 'https://www.zomato.com/hyderabad/ca-phe-bistro-nanakramguda',
      color: 'hover:bg-[#E23744]/10',
      iconColor: 'text-[#E23744]',
      bg: 'bg-[#E23744]/5'
    },
    {
      name: 'Swiggy Dineout',
      description: 'Reserve through Swiggy Dineout',
      link: 'https://www.swiggy.com/restaurants/ca-phe-bistro-nanakramguda-hyderabad-1340426/dineout',
      color: 'hover:bg-[#FC8019]/10',
      iconColor: 'text-[#FC8019]',
      bg: 'bg-[#FC8019]/5'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-matte-black/90 backdrop-blur-md z-[110] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[111] pointer-events-none p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="w-full max-w-2xl glass p-8 md:p-16 rounded-[4rem] pointer-events-auto relative overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-3 rounded-full bg-latte/5 hover:bg-latte/10 text-latte/50 hover:text-latte transition-all duration-300"
              >
                <X size={24} />
              </button>

              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-5xl font-serif text-latte">Book Online</h2>
                  <p className="text-caramel/60 text-sm font-light uppercase tracking-[0.3em]">Select your preferred platform</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {options.map((option, index) => (
                    <motion.a
                      key={option.name}
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`group relative p-10 rounded-[3rem] border border-latte/10 transition-all duration-500 overflow-hidden ${option.color} ${option.bg} hover:border-latte/30 flex flex-col items-center text-center space-y-6 md:hover:-translate-y-2`}
                    >
                      {/* Brand Label */}
                      <span className={`text-3xl font-serif text-latte group-hover:scale-110 transition-transform duration-500`}>
                        {option.name}
                      </span>
                      
                      <p className="text-latte/50 font-light text-sm leading-relaxed">
                        {option.description}
                      </p>

                      <div className={`mt-4 w-12 h-12 rounded-full border border-latte/20 flex items-center justify-center text-latte/40 group-hover:text-gold group-hover:border-gold transition-all duration-500`}>
                        <ExternalLink size={20} />
                      </div>
                    </motion.a>
                  ))}
                </div>

                <p className="text-center text-latte/30 text-xs font-light italic">
                  * You will be redirected to the respective platform to complete your booking.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
