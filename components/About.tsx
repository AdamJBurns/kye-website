'use client';

import React from 'react';
import { FaRobot, FaMap, FaCamera, FaVideo } from 'react-icons/fa';
import Image from 'next/image';

const features = [
  {
    icon: <FaRobot className="w-8 h-8" />,
    title: "Advanced Drone Fleet",
    description: "State-of-the-art drones equipped with the latest technology for precision and reliability."
  },
  {
    icon: <FaMap className="w-8 h-8" />,
    title: "Mapping Excellence",
    description: "High-accuracy mapping and surveying capabilities for various industries and applications."
  },
  {
    icon: <FaCamera className="w-8 h-8" />,
    title: "Professional Imaging",
    description: "Crystal-clear aerial photography and videography for stunning visual content."
  },
  {
    icon: <FaVideo className="w-8 h-8" />,
    title: "Real-time Monitoring",
    description: "Live streaming and real-time data collection for immediate insights and decision-making."
  }
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div>
            <span className="text-white/60 tracking-widest text-sm uppercase block mb-6">About us</span>
            <h2 className="text-6xl font-light tracking-tighter mb-8">
              Pioneering the Future of Aerial Technology
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Since our inception, we've been at the forefront of drone innovation, 
              pushing the boundaries of what's possible in aerial technology. Our 
              commitment to excellence and cutting-edge solutions has made us a 
              trusted partner for businesses worldwide.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src="/about-image.png"
              alt="Drone in action"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group flex flex-col items-start"
            >
              <div className="text-white/60 group-hover:text-white mb-6 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-light mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
          <div className="p-8">
            <div className="text-5xl font-light text-white mb-4">500+</div>
            <div className="text-white/60">Successful Projects</div>
          </div>
          <div className="p-8">
            <div className="text-5xl font-light text-white mb-4">50+</div>
            <div className="text-white/60">Corporate Clients</div>
          </div>
          <div className="p-8">
            <div className="text-5xl font-light text-white mb-4">5+</div>
            <div className="text-white/60">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
} 