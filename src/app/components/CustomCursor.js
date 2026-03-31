'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseDown = () => {
      gsap.to([cursor, follower], {
        scale: 0.8,
        duration: 0.2,
      });
      
      // Ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'fixed pointer-events-none rounded-full border border-caramel/40 z-[9999]';
      ripple.style.left = `${cursor.getBoundingClientRect().left}px`;
      ripple.style.top = `${cursor.getBoundingClientRect().top}px`;
      ripple.style.width = '10px';
      ripple.style.height = '10px';
      ripple.style.transform = 'translate(-50%, -50%)';
      document.body.appendChild(ripple);

      gsap.to(ripple, {
        scale: 15,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => ripple.remove(),
      });
    };

    const handleMouseUp = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.2,
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add pointer class to buttons and links for cursor change
    const updateInteractiveElements = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"]');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    updateInteractiveElements();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (isHovering) {
      gsap.to(followerRef.current, { scale: 2.5, backgroundColor: 'rgba(198, 156, 109, 0.15)', border: '1px solid rgba(198, 156, 109, 0.3)', duration: 0.3 });
    } else {
      gsap.to(followerRef.current, { scale: 1, backgroundColor: 'transparent', border: '1px solid rgba(245, 230, 211, 0.3)', duration: 0.3 });
    }
  }, [isHovering]);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-caramel rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-latte/30 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform"
      >
        <div className="w-1 h-1 bg-caramel/20 rounded-full" />
      </div>
    </>
  );
}
