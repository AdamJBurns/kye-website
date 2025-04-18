'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBuilding, FaMountain, FaSeedling, FaCity } from 'react-icons/fa';

export default function MappingSurveyingPage() {
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
            <span className="text-white/60 tracking-widest text-sm uppercase block mb-6">02 — Surveying</span>
            <h1 className="text-6xl font-light tracking-tighter mb-8">
              Mapping & Surveying
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              High-precision aerial mapping and surveying solutions powered by cutting-edge drone technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8">
              <h3 className="text-xl font-light mb-4">Precision Mapping</h3>
              <p className="text-white/60">Accurate to within centimeters using RTK/PPK technology for survey-grade results.</p>
            </div>
            <div className="bg-white/5 p-8">
              <h3 className="text-xl font-light mb-4">3D Modeling</h3>
              <p className="text-white/60">Detailed 3D point clouds and digital surface models for comprehensive analysis.</p>
            </div>
            <div className="bg-white/5 p-8">
              <h3 className="text-xl font-light mb-4">Data Processing</h3>
              <p className="text-white/60">Advanced processing software for orthomosaics, contour maps, and volumetric calculations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light tracking-tighter mb-16 text-center">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaBuilding className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Construction</h3>
              <p className="text-white/60">Site planning and progress monitoring</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaMountain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Mining</h3>
              <p className="text-white/60">Stockpile measurements and site surveys</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaSeedling className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Agriculture</h3>
              <p className="text-white/60">Crop mapping and field analysis</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaCity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Urban Planning</h3>
              <p className="text-white/60">City modeling and development planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light tracking-tighter mb-12 text-center">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8">
                <h3 className="text-xl font-light mb-4">Equipment</h3>
                <ul className="space-y-3 text-white/60">
                  <li>RTK-enabled survey drones</li>
                  <li>Multi-spectral sensors</li>
                  <li>LiDAR capabilities</li>
                  <li>High-precision GPS</li>
                </ul>
              </div>
              <div className="bg-white/5 p-8">
                <h3 className="text-xl font-light mb-4">Deliverables</h3>
                <ul className="space-y-3 text-white/60">
                  <li>Orthomosaic maps</li>
                  <li>Digital elevation models</li>
                  <li>3D point clouds</li>
                  <li>Volumetric calculations</li>
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
            <h2 className="text-4xl font-light tracking-tighter mb-8">Start Your Mapping Project</h2>
            <p className="text-white/60 mb-12">
              Get precise aerial data for your next project with our professional mapping and surveying services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="text-sm bg-white/10 text-white px-8 py-3 hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                Request Quote
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