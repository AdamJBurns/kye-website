'use client';

import React from 'react';
import Image from 'next/image';

export default function BentoGrid() {
  return (
    <section id="services" className="relative w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-12">
        <div className="w-full px-12 py-24">
          <div className="max-w-4xl mb-16">
            <span className="text-white/60 tracking-widest text-sm uppercase pl-1 mb-4 block">Our expertise</span>
            <h2 className="text-7xl text-white font-light tracking-tighter">Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Aerial Photography */}
            <div className="group bg-white/5 p-8 flex gap-8">
              <div className="flex-1">
                <span className="text-white/60 text-sm tracking-widest block mb-3">01 — Photography</span>
                <h3 className="text-3xl text-white font-light tracking-tight mb-4">Aerial Photography</h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  Elevate your perspective with stunning aerial shots. Perfect for real estate, events, and commercial projects.
                </p>
                <div className="inline-flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                  Learn more
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="relative w-40 h-40">
                <Image
                  src="/bento1.png"
                  alt="Aerial Photography Illustration"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>

            {/* Card 2 - Mapping */}
            <div className="group bg-white/5 p-8 flex gap-8">
              <div className="flex-1">
                <span className="text-white/60 text-sm tracking-widest block mb-3">02 — Surveying</span>
                <h3 className="text-3xl text-white font-light tracking-tight mb-4">Mapping & Surveying</h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  High-precision aerial mapping and surveying solutions for construction and development projects.
                </p>
                <div className="inline-flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                  Learn more
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="relative w-40 h-40">
                <Image
                  src="/bento2.png"
                  alt="Mapping & Surveying Illustration"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>

            {/* Card 3 - Infrastructure */}
            <div className="group bg-white/5 p-8 flex gap-8">
              <div className="flex-1">
                <span className="text-white/60 text-sm tracking-widest block mb-3">03 — Inspection</span>
                <h3 className="text-3xl text-white font-light tracking-tight mb-4">Infrastructure Inspection</h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  Detailed aerial inspections for infrastructure maintenance and safety assessments.
                </p>
                <div className="inline-flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                  Learn more
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="relative w-40 h-40">
                <Image
                  src="/bento3.png"
                  alt="Infrastructure Inspection Illustration"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>

            {/* Card 4 - Events */}
            <div className="group bg-white/5 p-8 flex gap-8">
              <div className="flex-1">
                <span className="text-white/60 text-sm tracking-widest block mb-3">04 — Events</span>
                <h3 className="text-3xl text-white font-light tracking-tight mb-4">Event Coverage</h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  Dynamic aerial coverage for events, sports, and entertainment productions.
                </p>
                <div className="inline-flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                  Learn more
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="relative w-40 h-40">
                <Image
                  src="/bento4.png"
                  alt="Event Coverage Illustration"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 