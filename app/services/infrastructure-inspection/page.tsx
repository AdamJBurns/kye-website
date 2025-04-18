'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBuilding, FaBolt, FaRoad, FaIndustry } from 'react-icons/fa';

export default function InfrastructureInspectionPage() {
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
            <span className="text-white/60 tracking-widest text-sm uppercase block mb-6">03 — Inspection</span>
            <h1 className="text-6xl font-light tracking-tighter mb-8">
              Infrastructure Inspection
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Advanced drone technology for safe and efficient infrastructure assessment and maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8">
              <h3 className="text-xl font-light mb-4">Safety First</h3>
              <p className="text-white/60">Eliminate the need for dangerous manual inspections in hard-to-reach areas.</p>
            </div>
            <div className="bg-white/5 p-8">
              <h3 className="text-xl font-light mb-4">Cost Effective</h3>
              <p className="text-white/60">Reduce inspection costs and time while maintaining high accuracy standards.</p>
            </div>
            <div className="bg-white/5 p-8">
              <h3 className="text-xl font-light mb-4">Detailed Analysis</h3>
              <p className="text-white/60">Comprehensive reports with high-resolution imagery and thermal mapping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Types */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light tracking-tighter mb-16 text-center">Inspection Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaBuilding className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Building Facades</h3>
              <p className="text-white/60">Detailed exterior inspections of high-rise buildings</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaBolt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Power Lines</h3>
              <p className="text-white/60">Transmission line and tower inspections</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaRoad className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Bridges</h3>
              <p className="text-white/60">Structural integrity assessments</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-4 flex justify-center">
                <FaIndustry className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-light mb-2">Industrial</h3>
              <p className="text-white/60">Factory and industrial site inspections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light tracking-tighter mb-12 text-center">Advanced Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8">
                <h3 className="text-xl font-light mb-4">Imaging Systems</h3>
                <ul className="space-y-3 text-white/60">
                  <li>4K HD video capture</li>
                  <li>Thermal imaging</li>
                  <li>Multispectral analysis</li>
                  <li>3D modeling capabilities</li>
                </ul>
              </div>
              <div className="bg-white/5 p-8">
                <h3 className="text-xl font-light mb-4">Analysis Tools</h3>
                <ul className="space-y-3 text-white/60">
                  <li>AI-powered defect detection</li>
                  <li>Real-time data processing</li>
                  <li>Automated reporting</li>
                  <li>Historical comparison</li>
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
            <h2 className="text-4xl font-light tracking-tighter mb-8">Schedule an Inspection</h2>
            <p className="text-white/60 mb-12">
              Let our expert team help you maintain your infrastructure with cutting-edge drone inspection services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="text-sm bg-white/10 text-white px-8 py-3 hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                Get Started
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