'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, CheckCircle2, Loader2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    contact: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://workflow.ccbp.in/webhook-test/table-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', date: '', time: '', contact: '' });
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Booking failed:', error);
      setStatus('error');
    }
  };

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
            className="fixed inset-0 bg-matte-black/80 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-lg glass p-8 md:p-12 rounded-[3rem] pointer-events-auto relative overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-latte/5 hover:bg-latte/10 text-latte/50 hover:text-latte transition-all duration-300"
              >
                <X size={20} />
              </button>

              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-serif text-latte mb-2">Book a Table</h2>
                  <p className="text-caramel/60 text-sm font-light uppercase tracking-widest">Reserve your cinematic experience</p>
                </div>

                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center space-y-4 text-center"
                  >
                    <CheckCircle2 size={64} className="text-gold" />
                    <h3 className="text-2xl font-serif text-latte">Table Reserved!</h3>
                    <p className="text-latte/60">We've received your booking. See you soon at Ca Phe Bistro.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      {/* Name Field */}
                      <div className="relative">
                        <label className="block text-[10px] uppercase tracking-widest text-caramel/50 mb-1.5 ml-1">Full Name</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-caramel/30 group-focus-within:text-gold transition-colors duration-300" size={18} />
                          <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Aaromale Guest"
                            className="w-full bg-latte/5 border border-latte/10 rounded-2xl py-4 pl-12 pr-4 text-latte placeholder:text-latte/20 focus:outline-none focus:border-gold/30 focus:bg-latte/10 transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Contact Field */}
                      <div className="relative">
                        <label className="block text-[10px] uppercase tracking-widest text-caramel/50 mb-1.5 ml-1">Contact Information</label>
                        <div className="relative group">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-caramel/30 group-focus-within:text-gold transition-colors duration-300" size={18} />
                          <input
                            required
                            type="tel"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full bg-latte/5 border border-latte/10 rounded-2xl py-4 pl-12 pr-4 text-latte placeholder:text-latte/20 focus:outline-none focus:border-gold/30 focus:bg-latte/10 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Date Field */}
                        <div className="relative">
                          <label className="block text-[10px] uppercase tracking-widest text-caramel/50 mb-1.5 ml-1">Date</label>
                          <div className="relative group">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-caramel/30 group-focus-within:text-gold transition-colors duration-300" size={18} />
                            <input
                              required
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              className="w-full bg-latte/5 border border-latte/10 rounded-2xl py-4 pl-12 pr-4 text-latte focus:outline-none focus:border-gold/30 focus:bg-latte/10 transition-all duration-300 [color-scheme:dark]"
                            />
                          </div>
                        </div>

                        {/* Time Field */}
                        <div className="relative">
                          <label className="block text-[10px] uppercase tracking-widest text-caramel/50 mb-1.5 ml-1">Time</label>
                          <div className="relative group">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-caramel/30 group-focus-within:text-gold transition-colors duration-300" size={18} />
                            <input
                              required
                              type="time"
                              name="time"
                              value={formData.time}
                              onChange={handleChange}
                              className="w-full bg-latte/5 border border-latte/10 rounded-2xl py-4 pl-12 pr-4 text-latte focus:outline-none focus:border-gold/30 focus:bg-latte/10 transition-all duration-300 [color-scheme:dark]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-5 bg-caramel hover:bg-gold text-matte-black rounded-full font-bold transition-all duration-500 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Processing...
                        </>
                      ) : (
                        'Confirm Reservation'
                      )}
                    </button>

                    {status === 'error' && (
                      <p className="text-red-400 text-xs text-center">Something went wrong. Please try again or call us.</p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
