import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dictionary } from '@/lib/types';
import { Locale } from '@/i18n/settings';
import ParkentWeather from './ParkentWeather';

export default function Hero({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-start overflow-hidden pt-16 md:pt-20">
      {/* High-quality background with refined gradient overlay */}
      <div className="absolute inset-0 bg-[url('/bg-image.png')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 mt-4 sm:mt-6 lg:mt-10">
        {/* Left Side: Hero Text */}
        <div className="flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left lg:ml-8 xl:ml-12">
          <span 
            className="text-white/90 font-semibold tracking-widest uppercase text-sm md:text-base mb-4 drop-shadow-sm" 
            data-aos="fade-in"
          >
            {dict.hero.title}
          </span>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg" 
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            {dict.hero.subtitle}
          </h1>
          <div data-aos="fade-up" data-aos-delay="300">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-8 py-6 text-lg font-semibold tracking-wide shadow-xl transition-transform hover:scale-105 border-none capitalize" 
              asChild
            >
              <Link href={`/${lang}/contact`}>
                {dict.hero.cta}
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Side: Dynamic Parkent Weather */}
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-sm mx-auto lg:mx-0" data-aos="fade-left" data-aos-delay="400">
          <ParkentWeather lang={lang} weatherDict={dict.weather} />
        </div>
      </div>
    </section>
  );
}
