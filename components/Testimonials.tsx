'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Dronify has revolutionized how we approach real estate photography. Their aerial shots have become a cornerstone of our marketing strategy.",
    author: "Sarah Chen",
    role: "Real Estate Director",
    company: "Luxury Homes Group",
    image: "/testimonial1.jpg"
  },
  {
    quote: "The precision and reliability of their mapping services have significantly improved our construction planning process.",
    author: "Michael Rodriguez",
    role: "Project Manager",
    company: "BuildTech Solutions",
    image: "/testimonial2.jpg"
  },
  {
    quote: "Their event coverage brought a completely new perspective to our sports tournaments. The footage was simply spectacular.",
    author: "James Wilson",
    role: "Events Coordinator",
    company: "SportsPro Events",
    image: "/testimonial3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-12">
        <div className="max-w-4xl mb-24">
          <span className="text-white/60 tracking-widest text-sm uppercase block mb-6">Testimonials</span>
          <h2 className="text-6xl font-light tracking-tighter">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-sm"
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-light">{testimonial.author}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                  <div className="text-white/40 text-sm">{testimonial.company}</div>
                </div>
              </div>
              <blockquote className="text-white/80 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 