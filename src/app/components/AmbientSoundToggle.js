'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import gsap from 'gsap';

export default function AmbientSoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Use the local energetic cafe audio file
    const audioUrl = '/tawipop-coffee-shop-338785.mp3';
    audioRef.current = new Audio(audioUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0;
    audioRef.current.preload = "auto"; // Ensure browser preloads the source

    // Error handling to prevent "No supported sources" runtime error
    audioRef.current.onerror = () => {
      console.warn('Ambient sound source could not be loaded. Please check your network connection.');
      setIsPlaying(false);
    };

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // Fade out
      gsap.to(audioRef.current, {
        volume: 0,
        duration: 1,
        onComplete: () => {
          audioRef.current.pause();
          setIsPlaying(false);
        },
      });
    } else {
      // Fade in with safety check for browser play policies
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        gsap.to(audioRef.current, {
          volume: 0.3,
          duration: 1,
        });
      } catch (err) {
        console.error("Audio playback failed:", err);
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed top-8 right-8 z-[100]">
      <button 
        onClick={toggleSound}
        className="w-12 h-12 glass-light rounded-2xl flex items-center justify-center text-latte hover:text-gold transition-colors duration-300"
      >
        {isPlaying ? (
          <div className="relative">
            <Volume2 size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full animate-ping" />
          </div>
        ) : (
          <VolumeX size={20} />
        )}
      </button>
      {/* Tooltip */}
      <span className="absolute right-14 top-1/2 -translate-y-1/2 px-4 py-2 bg-matte-black/80 text-[10px] uppercase tracking-widest rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {isPlaying ? 'Mute Ambience' : 'Play Ambience'}
      </span>
    </div>
  );
}
