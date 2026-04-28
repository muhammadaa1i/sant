'use client';

import { Dictionary } from '@/lib/types';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function OurGoal({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-16" data-aos="fade-up" suppressHydrationWarning>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            {dict.our_goal.title}
          </h2>
          <div className="w-20 h-1 bg-primary mt-6 rounded-full"></div>
        </div>

        <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl ring-1 ring-black/5 bg-[#0B1221]">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="flex-1 space-y-8" data-aos="fade-right" suppressHydrationWarning>
              <div className="space-y-6 text-white/80 leading-relaxed text-lg font-light">
                <p>
                  {dict.our_goal.description1}
                </p>
                <p>
                  {dict.our_goal.description2}
                </p>
              </div>

              <p className="text-white font-medium text-xl italic border-l-4 border-primary pl-6">
                {dict.our_goal.cta}
              </p>
            </div>

            {/* Right Side - Action Card */}
            <div 
              className="w-full lg:w-auto"
              data-aos="fade-left"
              data-aos-delay="200"
              suppressHydrationWarning
            >
              <Link
                href="/contact"
                className="group/btn relative inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white px-10 py-6 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-105 shadow-[0_10px_40px_rgba(var(--primary),0.3)] whitespace-nowrap overflow-hidden"
              >
                <span className="relative z-10">{dict.our_goal.btn}</span>
                <ArrowRight className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-2" />
                
                {/* Button shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-40 group-hover/btn:animate-shine" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
