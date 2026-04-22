import { Dictionary } from '@/lib/types';
import { Check, ArrowRight } from 'lucide-react';
import RoomCarousel from './RoomCarousel';
import Link from 'next/link';

export default function Rooms({ dict, lang }: { dict: Dictionary, lang: string }) {
  const rooms = [
    {
      title: dict.rooms.standard,
      price: "545 000 UZS",
      features: [dict.rooms.features.meals_3, dict.rooms.features.treatments, dict.rooms.features.tv_wifi],
      images: [
        '/standart/STANDART.JPG',
        '/standart/STANDART1.JPG',
        '/standart/STNADART.JPG',
      ]
    },
    {
      title: dict.rooms.luxe,
      price: "655 000 UZS",
      features: [dict.rooms.features.meals_3, dict.rooms.features.treatments_premium, dict.rooms.features.balcony_view, dict.rooms.features.tv_wifi],
      images: [
        '/lux/LYUKS XONA.JPG',
        '/lux/POL LYUKS.JPG',
        '/lux/POLLYUKS.JPG',
      ]
    }
  ];

  return (
    <section id="rooms" className="py-24 md:py-32 bg-slate-50 relative border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16 md:mb-24 space-y-6" data-aos="fade-up">
          <h4 className="text-sm font-semibold tracking-wider text-primary uppercase">
            {dict.rooms.section_label}
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{dict.rooms.title}</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            {dict.rooms.subtitle}
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {rooms.map((room, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`} 
              data-aos="fade-up" 
              data-aos-delay={idx * 150}
            >
              {/* Image Carousel Side */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-[2.5rem] shadow-2xl relative ring-1 ring-border">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <RoomCarousel images={room.images} roomName={room.title} placeholderText={dict.rooms.room_image} />
              </div>
              
              {/* Details Side */}
              <div className="w-full lg:w-1/2 space-y-6 lg:px-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {room.title}
                </h3>
                <div className="text-lg text-muted-foreground flex items-baseline gap-2 pb-4 border-b border-border/60">
                  <span>{dict.rooms.price_from}</span>
                  <span className="text-3xl font-bold text-primary">{room.price}</span>
                  <span>{dict.rooms.per_night}</span>
                </div>
                
                <ul className="space-y-4 pt-4 mb-8">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-lg text-foreground/80 font-light">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Check className="h-4 w-4 text-primary" strokeWidth={2.5} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/30 w-full sm:w-auto hover:-translate-y-1">
                  {dict.nav.book}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
