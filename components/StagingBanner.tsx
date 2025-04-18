'use client';

import Link from 'next/link';

export default function StagingBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-black border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-3">
          <div className="flex items-center gap-3">
            <span className="text-white/90 text-sm font-light">STAGING ENVIRONMENT</span>
            <span className="text-white/40 text-sm">|</span>
            <span className="text-white/60 text-sm font-light">Built by Syrup.dev</span>
            <Link 
              href="/built-by-syrup" 
              className="text-white/60 text-sm hover:text-white transition-colors underline"
            >
              Legal Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 