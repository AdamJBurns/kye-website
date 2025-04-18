'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            {/* Animated 404 */}
            <div className="relative mb-8">
              <div className="text-[12rem] font-light tracking-tighter text-white/5">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-3xl font-light tracking-tight">
                  Page Not Found
                </div>
              </div>
            </div>

            <p className="text-white/60 text-lg mb-12">
              Looks like this page has taken flight. Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/" 
                className="text-sm bg-white/10 text-white px-8 py-3 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
              >
                Return Home
              </Link>
              <Link 
                href="/contact" 
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="border-t border-white/10 pt-12"
          >
            <div className="text-sm text-white/40 mb-6">Popular Destinations</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link 
                href="/#about"
                className="text-white/60 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link 
                href="/#services"
                className="text-white/60 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link 
                href="/contact"
                className="text-white/60 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link 
                href="/auth"
                className="text-white/60 hover:text-white transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 