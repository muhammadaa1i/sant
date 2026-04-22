import { Dictionary } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About({ dict, lang }: { dict: Dictionary, lang: string }) {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-8 relative z-10" data-aos="fade-right">
            <h4 className="text-primary font-semibold tracking-wider uppercase text-sm">
              {dict.about.section_label}
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.15]">
              {dict.about.title}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              {dict.about.description}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              {dict.about.sub_description}
            </p>
            <div className="pt-4">
              <Button asChild variant="outline" className="rounded-full px-8 py-6 text-base hover:bg-primary hover:text-primary-foreground transition-all">
                <a href="#services">
                  {dict.nav.services}
                </a>
              </Button>
            </div>
          </div>

          {/* Video / Visual Anchor */}
          <div className="relative group" data-aos="fade-left" data-aos-delay="150">
            <div className="absolute -inset-1 bg-primary/10 rounded-[2.5rem] transform rotate-3 scale-105 transition-transform group-hover:rotate-6 duration-700"></div>
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-black ring-1 ring-black/5 flex items-center justify-center">
              <video
                className="w-full h-auto max-h-[80vh] object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
                autoPlay
                muted
                controls
                loop
                playsInline
                preload="metadata"
                aria-label="Sanatorium promotional video">
                <source src="/videos/REKLAMA.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
