'use client';

import { Dictionary } from '@/lib/types';
import { useState, useEffect, useRef } from 'react';

export default function MapSection({ dict }: { dict: Dictionary }) {
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if IntersectionObserver is available (browser only)
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px 200px 0px' }
    );

    const currentRef = mapRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-muted/30 to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block">
            {dict?.footer?.address || ''}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            {dict?.contact?.map_title || 'Location'}
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto mt-6 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-primary w-1/2 rounded-full animate-shimmer"></div>
          </div>
        </div>
        
        <div 
          ref={mapRef}
          className="group relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border bg-muted flex items-center justify-center transition-all duration-700"
          data-aos="fade-up"
        >
          {!isVisible ? (
            <div className="flex flex-col items-center gap-4 text-muted-foreground animate-pulse">
              <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin"></div>
              <p className="text-sm font-medium tracking-wide uppercase">{dict?.contact?.form_sending || 'Loading Map...'}</p>
            </div>
          ) : (
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.494957640322!2d69.68350511199341!3d41.29475197120689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzQxLjEiTiA2OcKwNDEnMDkuOSJF!5e0!3m2!1sen!2s!4v1714050000000!5m2!1sen!2s"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sanatorium Location"
              className="filter grayscale-[10%] contrast-[1.05] brightness-[1.02] hover:grayscale-0 transition-all duration-1000 ease-in-out"
            ></iframe>
          )}
          
          {/* Overlay for premium feel */}
          <div className="absolute inset-0 pointer-events-none border-[8px] md:border-[12px] border-white/5 rounded-[2rem] md:rounded-[3rem]"></div>
        </div>
        
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
           <a 
            href="https://www.google.com/maps?q=41.294752,69.686080" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-all duration-300 border-b-2 border-primary/10 hover:border-primary pb-1 group"
          >
            <span>{dict?.contact?.view_on_google_maps || 'View on Maps'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

