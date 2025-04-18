'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="/kye-website/hero-image.png"
          alt="Drone flying over landscape"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      </div>

      {/* Navigation */}
      <header className="relative z-20">
        <nav className="flex items-center justify-between px-12 py-10">
          <Link 
            href="/" 
            className="text-white/90 text-xl tracking-tighter hover:text-white transition-colors"
          >
            dronify
          </Link>
          <div className="flex items-center gap-16">
            <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">about</Link>
            <Link href="/services" className="text-sm text-white/60 hover:text-white transition-colors">services</Link>
            <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">contact</Link>
            <Link 
              href="/get-started" 
              className="text-sm bg-white/10 text-white px-8 py-3 hover:bg-white/20 transition-all"
            >
              get started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-120px)]">
        <div className="w-full px-12">
          <div className="max-w-4xl">
            <div className="flex flex-col gap-6">
              <span className="text-white/60 tracking-widest text-sm uppercase pl-1">Welcome to the future</span>
              <h1 className="text-[120px] text-white font-light tracking-tighter leading-[1] mb-12">
                Elevate your
                <br />
                perspective
              </h1>
            </div>
            <div className="flex flex-col gap-20">
              <div className="max-w-lg">
                <p className="text-xl text-white/70 leading-relaxed mb-12 pl-1">
                  Experience cutting-edge aerial technology and professional drone services 
                  for photography, surveying, and inspection needs.
                </p>
                <div className="flex items-center gap-8 pl-1">
                  <Link 
                    href="/learn-more"
                    className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm hover:bg-white/90 transition-colors"
                  >
                    learn more
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </Link>
                  <Link 
                    href="/contact"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    contact us →
                  </Link>
                </div>
              </div>

              {/* Stats Section */}
              <div className="flex gap-32 pt-12 border-t border-white/10">
                <div>
                  <div className="text-5xl text-white font-light tracking-tighter">500+</div>
                  <div className="text-sm text-white/40 mt-3">successful flights</div>
                </div>
                <div>
                  <div className="text-5xl text-white font-light tracking-tighter">50+</div>
                  <div className="text-sm text-white/40 mt-3">corporate clients</div>
                </div>
                <div>
                  <div className="text-5xl text-white font-light tracking-tighter">5+</div>
                  <div className="text-sm text-white/40 mt-3">years of excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 