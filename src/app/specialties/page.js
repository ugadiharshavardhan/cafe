'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Stars, PerspectiveCamera } from '@react-three/drei';
import { ArrowRight } from 'lucide-react';

function FloatingBean({ position }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh position={position} scale={0.1}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#3B2F2F" roughness={0.3} />
      </mesh>
    </Float>
  );
}

const specialtiesList = [
  {
    title: 'Nitro Cold Brew',
    tagline: 'Smooth, creamy, and chilled to perfection.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=2070',
    color: 'espresso',
  },
  {
    title: 'Iced Spanish Latte',
    tagline: 'Sweetened condensed milk meets robust espresso.',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=2070',
    color: 'caramel',
  },
  {
    title: 'Signature Drip',
    tagline: 'Hand-picked beans, hand-poured with love.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=2070',
    color: 'latte',
  },
];

export default function SpecialtiesPage() {
  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            {[...Array(15)].map((_, i) => (
              <FloatingBean 
                key={i} 
                position={[
                  (Math.random() - 0.5) * 10,
                  (Math.random() - 0.5) * 10,
                  (Math.random() - 0.5) * 5
                ]} 
              />
            ))}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 pt-32 pb-24 px-8 md:px-24">
        <header className="mb-24 text-center">
          <h1 className="text-6xl md:text-8xl font-serif text-latte mb-8">
            Specialties
          </h1>
          <p className="text-caramel/70 max-w-2xl mx-auto uppercase tracking-[0.3em]">
            The zenith of our brewing artistry.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {specialtiesList.map((item, i) => (
            <div 
              key={i}
              className="group relative h-[600px] overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-4"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent" />
              </div>

              <div className="absolute inset-0 p-12 flex flex-col justify-end space-y-4">
                <span className="text-xs uppercase tracking-[0.5em] text-caramel/80">
                  Exclusive Brew
                </span>
                <h3 className="text-3xl md:text-5xl font-serif text-latte group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-latte/70 font-light opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.tagline}
                </p>
                <button className="flex items-center gap-3 text-gold/80 hover:text-gold transition-colors duration-300 group-hover:translate-x-2 transition-transform duration-300 mt-8">
                  <span>Learn the Craft</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
