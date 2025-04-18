'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Dronify has revolutionized how we approach real estate photography. Their aerial shots have become a cornerstone of our marketing strategy.",
    author: "Sarah Chen",
    role: "Real Estate Director",
    company: "Luxury Homes Group",
    image: "/kye-website/testimonial1.jpg"
  },
  {
    quote: "The precision and reliability of their mapping services have significantly improved our construction planning process.",
    author: "Michael Rodriguez",
    role: "Project Manager",
    company: "BuildTech Solutions",
    image: "/kye-website/testimonial2.jpg"
  },
  {
    quote: "Their event coverage brought a completely new perspective to our sports tournaments. The footage was simply spectacular.",
    author: "James Wilson",
    role: "Events Coordinator",
    company: "SportsPro Events",
    image: "/kye-website/testimonial3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-12">
        <div className="max-w-4xl mb-16">
          <span className="text-white/60 tracking-widest text-sm uppercase pl-1 mb-4 block">Testimonials</span>
          <h2 className="text-7xl text-white font-light tracking-tighter">Trusted by Industry Leaders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 p-8">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-light">{testimonial.author}</h3>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                  <p className="text-white/40 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-white/70 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 