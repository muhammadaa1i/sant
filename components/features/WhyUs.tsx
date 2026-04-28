'use client';

import { Dictionary } from '@/lib/types';
import { Stethoscope, Star, Sparkles, Activity } from 'lucide-react';

export default function WhyUs({ dict }: { dict: Dictionary }) {
  const icons = [Stethoscope, Star, Sparkles, Activity];
  
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-16" data-aos="fade-up" suppressHydrationWarning>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            {dict.why_us.title}
          </h2>
          <div className="w-20 h-1 bg-primary mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {dict.why_us.items.map((item, idx) => {
            const Icon = icons[idx] || Star;
            return (
              <div 
                key={idx}
                className={`group relative p-8 md:p-10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between shadow-lg ${
                  idx % 2 === 0 
                    ? 'bg-[#0B1221] text-white' 
                    : 'bg-primary text-white'
                }`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                suppressHydrationWarning
              >
                {/* Background Icon Decoration */}
                <Icon className="absolute -right-8 -bottom-8 w-40 h-40 opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors ${
                    idx % 2 === 0 ? 'bg-primary/20 text-primary' : 'bg-white/20 text-white'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight break-words hyphens-auto">
                    {item}
                  </h3>
                </div>
                
                {/* Optional number or accent */}
                <div className="relative z-10 mt-8 opacity-20 font-black text-6xl select-none">
                  0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
