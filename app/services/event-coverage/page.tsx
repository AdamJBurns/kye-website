'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaMusic, FaRing, FaRunning, FaVideo } from 'react-icons/fa';

export default function EventCoveragePage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="text-white/60 tracking-widest text-sm uppercase block mb-6">04 — Events</span>
            <h1 className="text-6xl font-light tracking-tighter mb-8">
              Event Coverage
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Capture your events from breathtaking perspectives with our professional drone coverage services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8">
              <h3 className="text-xl font-light mb-4">Live Streaming</h3>
              <p className="text-white/60">Real-time aerial broadcasting for immediate audience engagement.</p>
            </div>
            <div className="bg-white/5 p-8">
              <h3 className="text-xl font-light mb-4">Cinematic Footage</h3>
              <p className="text-white/60">Professional-grade aerial videography for stunning event highlights.</p>
            </div>
            <div className="bg-white/5 p-8">
              <h3 className="text-xl font-light mb-4">Photo Coverage</h3>
              <p className="text-white/60">High-resolution aerial photography to capture key moments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light tracking-tighter mb-16 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaMusic className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Festivals</h3>
              <p className="text-white/60">Capture the energy of large-scale events</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaRing className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Weddings</h3>
              <p className="text-white/60">Unique perspectives of your special day</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaRunning className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Sports</h3>
              <p className="text-white/60">Dynamic coverage of sporting events</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaVideo className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Concerts</h3>
              <p className="text-white/60">Immersive views of live performances</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light tracking-tighter mb-12 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8">
                <h3 className="text-xl font-light mb-4">Coverage Options</h3>
                <ul className="space-y-3 text-white/60">
                  <li>4K video recording</li>
                  <li>Live streaming capabilities</li>
                  <li>Time-lapse sequences</li>
                  <li>360° panoramic shots</li>
                </ul>
              </div>
              <div className="bg-white/5 p-8">
                <h3 className="text-xl font-light mb-4">Deliverables</h3>
                <ul className="space-y-3 text-white/60">
                  <li>Edited highlight reels</li>
                  <li>High-res photo albums</li>
                  <li>Raw footage</li>
                  <li>Same-day previews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light tracking-tighter mb-8">Book Your Event Coverage</h2>
            <p className="text-white/60 mb-12">
              Make your event unforgettable with stunning aerial coverage that captures every moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="text-sm bg-white/10 text-white px-8 py-3 hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                Book Now
              </Link>
              <Link 
                href="/services" 
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 