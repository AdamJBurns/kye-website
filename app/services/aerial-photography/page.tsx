'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaCalendarAlt, FaStore, FaTree } from 'react-icons/fa';

export default function AerialPhotographyPage() {
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
            <span className="text-white/60 tracking-widest text-sm uppercase block mb-6">01 — Photography</span>
            <h1 className="text-6xl font-light tracking-tighter mb-8">
              Aerial Photography
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Capture breathtaking perspectives from above with our professional aerial photography services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8">
              <h3 className="text-xl font-light mb-4">High Resolution</h3>
              <p className="text-white/60">Professional-grade cameras delivering crystal clear imagery up to 8K resolution.</p>
            </div>
            <div className="bg-white/5 p-8">
              <h3 className="text-xl font-light mb-4">Flexible Angles</h3>
              <p className="text-white/60">Multiple drone configurations for capturing the perfect shot from any angle.</p>
            </div>
            <div className="bg-white/5 p-8">
              <h3 className="text-xl font-light mb-4">Quick Delivery</h3>
              <p className="text-white/60">Fast turnaround times with professional post-processing included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light tracking-tighter mb-16 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaHome className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Real Estate</h3>
              <p className="text-white/60">Showcase properties from stunning aerial perspectives</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaCalendarAlt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Events</h3>
              <p className="text-white/60">Capture the scale and atmosphere of large gatherings</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaStore className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Commercial</h3>
              <p className="text-white/60">Professional imagery for marketing and advertising</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaTree className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Environmental</h3>
              <p className="text-white/60">Document landscapes and environmental features</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light tracking-tighter mb-8">Ready to Get Started?</h2>
            <p className="text-white/60 mb-12">
              Let's discuss your aerial photography needs and create a custom solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="text-sm bg-white/10 text-white px-8 py-3 hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                Contact Us
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