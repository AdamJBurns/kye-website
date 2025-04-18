'use client';

import React from 'react';

export default function Contact() {
  return (
    <section className="w-full bg-black text-white py-32" id="contact">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-white/60 tracking-widest text-sm uppercase block mb-6">Contact</span>
            <h2 className="text-6xl font-light tracking-tighter mb-8">
              Let's Start Your
              <br />
              Next Project
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              Ready to elevate your perspective? Get in touch with our team to discuss 
              how we can bring your vision to life with our advanced drone solutions.
            </p>
            <div className="space-y-6">
              <div>
                <div className="text-white/40 text-sm mb-2">Email</div>
                <a href="mailto:contact@dronify.com" className="text-white hover:text-white/80 transition-colors">
                  contact@dronify.com
                </a>
              </div>
              <div>
                <div className="text-white/40 text-sm mb-2">Phone</div>
                <a href="tel:+1234567890" className="text-white hover:text-white/80 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <div className="text-white/40 text-sm mb-2">Address</div>
                <div className="text-white">
                  123 Drone Street
                  <br />
                  San Francisco, CA 94105
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-white/40 text-sm mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-white/20 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white/40 text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-white/20 transition-colors"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white/40 text-sm mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-white/20 transition-colors"
                placeholder="Tell us about your project"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 