'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home page first
    if (pathname !== '/') {
      router.push(`/?scroll=${id}`);
      return;
    }

    // If we're already on the home page, just scroll
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle scroll after navigation
  React.useEffect(() => {
    if (pathname === '/') {
      const urlParams = new URLSearchParams(window.location.search);
      const scrollTo = urlParams.get('scroll');
      if (scrollTo) {
        const element = document.getElementById(scrollTo);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    }
  }, [pathname]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-12 py-10">
        <Link 
          href="/" 
          className="text-white/90 text-xl tracking-tighter hover:text-white transition-colors"
        >
          dronify
        </Link>
        <div className="flex items-center gap-16">
          <Link 
            href="/#about" 
            onClick={(e) => handleScroll(e, 'about')}
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            about
          </Link>
          <Link 
            href="/#services"
            onClick={(e) => handleScroll(e, 'services')}
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            services
          </Link>
          <Link 
            href="/contact" 
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            contact
          </Link>
          <Link 
            href="/auth" 
            className="text-sm bg-white/10 text-white px-8 py-3 hover:bg-white/20 backdrop-blur-sm transition-all"
          >
            get started
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 