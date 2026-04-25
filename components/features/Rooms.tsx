import { Dictionary } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Bath,
  BedDouble,
  Dumbbell,
  HeartPulse,
  Stethoscope,
  Tv,
  Utensils,
  Wifi,
} from 'lucide-react';

type RoomCard = {
  title: string;
  price: string;
  image: string;
  details: {
    label: string;
    value: string;
  }[];
  facilityIcons: LucideIcon[];
  procedureIcons: LucideIcon[];
};

export default function Rooms({ dict, lang }: { dict: Dictionary, lang: string }) {
  const cards: RoomCard[] = [
    {
      title: dict.rooms.standard,
      price: "545 000 UZS",
      image: '/standart/STANDART.JPG',
      details: [
        { label: 'Meals', value: dict.rooms.features.meals_3 },
        { label: 'Guests', value: '2' },
      ],
      facilityIcons: [BedDouble, Tv, Wifi],
      procedureIcons: [HeartPulse, Stethoscope],
    },
    {
      title: dict.rooms.luxe,
      price: "655 000 UZS",
      image: '/lux/POL LYUKS.JPG',
      details: [
        { label: 'Meals', value: dict.rooms.features.meals_3 },
        { label: 'Guests', value: '2' },
      ],
      facilityIcons: [Bath, BedDouble, Tv, Wifi, Utensils],
      procedureIcons: [HeartPulse, Stethoscope, Dumbbell],
    },
    {
      title: dict.rooms.cottage,
      price: "3 500 000 UZS",
      image: '/lux/POLLYUKS.JPG',
      details: [
        { label: 'Meals', value: dict.rooms.features.all_inclusive },
        { label: 'Guests', value: '4-6' },
      ],
      facilityIcons: [BedDouble, Wifi, Utensils],
      procedureIcons: [HeartPulse, Dumbbell],
    },
  ];

  return (
    <section id="rooms" className="py-20 md:py-24 bg-background relative border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 max-w-440">
        <div className="text-center mb-12 md:mb-16 space-y-5" data-aos="fade-up" suppressHydrationWarning>
          <h4 className="text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            {dict.rooms.section_label}
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{dict.rooms.title}</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-base md:text-xl text-muted-foreground max-w-4xl mx-auto font-light">
            {dict.rooms.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
          {cards.map((room, idx) => (
            <article
              key={room.title}
              className="group relative overflow-hidden h-[430px] sm:h-[500px] ring-1 ring-black/10"
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              suppressHydrationWarning
            >
              <Image
                src={room.image}
                alt={room.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />




              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

              <div className="absolute left-5 right-5 top-5 sm:left-7 sm:right-7 text-white">
                <h3 className="text-3xl sm:text-4xl font-bold leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                  {room.title}
                </h3>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-5xl sm:text-6xl font-extrabold leading-none text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                    {room.price}
                  </span>
                  <span className="text-base sm:text-lg text-white/90 pb-1">{dict.rooms.price_from}</span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 text-white opacity-0 translate-y-6 pointer-events-none transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                <div className="space-y-2 text-sm sm:text-base">
                  {room.details.map((detail) => (
                    <div key={detail.label} className="flex items-center justify-between border-b border-white/20 pb-1">
                      <span className="text-white/80">{detail.label}</span>
                      <span className="font-semibold text-white">{detail.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 space-y-3">
                  <p className="text-sm font-semibold text-white/90">Facilities:</p>
                  <div className="flex flex-wrap items-center gap-3 text-white/90">
                    {room.facilityIcons.map((Icon, iconIndex) => (
                      <Icon key={`${room.title}-facility-${iconIndex}`} className="h-5 w-5" />
                    ))}
                  </div>

                  <p className="text-sm font-semibold text-white/90">Procedures:</p>
                  <div className="flex flex-wrap items-center gap-3 text-white/90">
                    {room.procedureIcons.map((Icon, iconIndex) => (
                      <Icon key={`${room.title}-procedure-${iconIndex}`} className="h-5 w-5" />
                    ))}
                  </div>
                </div>

                <Link
                  href={`/${lang}/contact`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white/90 transition-colors"
                >
                  {dict.rooms.details}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="220" suppressHydrationWarning>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center gap-2 border border-primary/50 px-10 py-3.5 rounded-md text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors min-w-[280px]"
          >
            {dict.nav.book}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
