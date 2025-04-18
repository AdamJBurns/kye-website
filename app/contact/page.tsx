'use client';

import Contact from '@/components/Contact'
import CTA from '@/components/CTA'

export default function ContactPage() {
  return (
    <div className="min-h-screen space-y-32 pb-64">
      <div className="container mx-auto px-4 py-20">
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-12 max-w-3xl mx-auto">
          <p className="text-yellow-500 text-sm">
            ⚠️ Server not enabled - Contact form functionality is currently disabled
          </p>
        </div>

        <Contact />
      </div>
      <CTA />
    </div>
  )
} 