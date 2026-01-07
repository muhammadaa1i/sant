import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dictionary } from '@/lib/types';

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-[#003D7A] text-white overflow-hidden">
      {/* Background Overlay or Image with blue tint */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542296332-2e44a99cfef9?q=80&w=2666&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#003D7A]/60 via-[#00A0E3]/40 to-[#003D7A]/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          {dict.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          {dict.hero.subtitle}
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto" asChild>
          <Link href="#contact">
            {dict.hero.cta}
          </Link>
        </Button>
      </div>
    </section>
  );
}
