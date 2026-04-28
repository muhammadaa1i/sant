'use client';

import { Dictionary } from '@/lib/types';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ({ dict }: { dict: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F9F9F8]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16 space-y-4" data-aos="fade-up" suppressHydrationWarning>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" />
            {dict.faq.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            {dict.faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {dict.faq.items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              suppressHydrationWarning
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left gap-6 group"
              >
                <span className="text-lg md:text-xl font-semibold text-slate-800 leading-tight">
                  <span className="text-primary mr-4 opacity-50">{idx + 1}.</span>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-all duration-300 ${
                  openIndex === idx ? 'bg-primary text-white rotate-180' : 'text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'
                }`}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-slate-600 leading-relaxed text-base md:text-lg border-t border-slate-50 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
