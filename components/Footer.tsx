'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div>
            <Link 
              href="/" 
              className="text-white/90 text-xl tracking-tighter hover:text-white transition-colors"
            >
              dronify
            </Link>
            <p className="text-white/60 mt-6 text-sm leading-relaxed">
              Pioneering the future of aerial technology with innovative drone solutions for businesses worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm text-white/40 uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/aerial-photography" className="text-white/60 hover:text-white transition-colors">
                  Aerial Photography
                </Link>
              </li>
              <li>
                <Link href="/services/mapping" className="text-white/60 hover:text-white transition-colors">
                  Mapping & Surveying
                </Link>
              </li>
              <li>
                <Link href="/services/inspection" className="text-white/60 hover:text-white transition-colors">
                  Infrastructure Inspection
                </Link>
              </li>
              <li>
                <Link href="/services/events" className="text-white/60 hover:text-white transition-colors">
                  Event Coverage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-white/40 uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/60 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/60 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-white/40 uppercase tracking-wider mb-6">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8">
              <h3 className="text-sm text-white/40 uppercase tracking-wider mb-4">Newsletter</h3>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/10 text-white px-4 py-2 text-sm focus:outline-none focus:border-white/20 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white text-black px-4 py-2 text-sm hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} Dronify. All rights reserved.
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-white/40 text-sm hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 text-sm hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 