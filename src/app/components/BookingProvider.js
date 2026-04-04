'use client';

import React, { createContext, useContext, useState } from 'react';
import BookingModal from './BookingModal';
import BookingOptionsModal from './BookingOptionsModal';

const BookingContext = createContext({
  isOpen: false,
  isOptionsOpen: false,
  openBooking: () => {},
  closeBooking: () => {},
  openOptions: () => {},
  closeOptions: () => {},
});

export const useBooking = () => useContext(BookingContext);

export default function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const openBooking = () => setIsOpen(true);
  const closeBooking = () => setIsOpen(false);

  const openOptions = () => setIsOptionsOpen(true);
  const closeOptions = () => setIsOptionsOpen(false);

  return (
    <BookingContext.Provider value={{ 
      isOpen, 
      isOptionsOpen,
      openBooking, 
      closeBooking,
      openOptions,
      closeOptions
    }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
      <BookingOptionsModal isOpen={isOptionsOpen} onClose={closeOptions} />
    </BookingContext.Provider>
  );
}
