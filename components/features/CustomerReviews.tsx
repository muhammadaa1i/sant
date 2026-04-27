'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Play, Instagram } from 'lucide-react';
import { Dictionary } from '@/lib/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const REELS = [
  'DXHH7PFjIqk',
  'DW8yQMTDC-B',
  'DW3HA5yjCew',
  'DWqFo9BDPXf',
  'DVXzDgPDLj5',
  'DVXxMBEDEdy',
  'DVQB1yOjIti',
  'DUk9lmhjFZt',
  'DUh3R1XjKiJ',
  'DTxx4Z1jPz8',
];

export default function CustomerReviews({ dict }: { dict: Dictionary }) {
  return (
    <div className="mt-32 w-full overflow-hidden">
      <div className="text-center mb-12 space-y-4" data-aos="fade-up" suppressHydrationWarning>
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          {dict.services.reviews_title}
        </h2>
        <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
          {dict.services.reviews_subtitle}
        </p>
      </div>

      <div className="relative px-4" data-aos="fade-up" data-aos-delay="100" suppressHydrationWarning>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.5,
            },
            1280: {
              slidesPerView: 4.2,
            },
          }}
          className="reviews-swiper pb-16!"
        >
          {REELS.map((reelId) => (
            <SwiperSlide key={reelId}>
              <article className="group relative block aspect-[9/16] overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <iframe
                  src={`https://www.instagram.com/reel/${reelId}/embed/?utm_source=ig_embed&utm_campaign=loading`}
                  title={`Instagram reel ${reelId}`}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />

                <div className="pointer-events-none absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full bg-[#5E6D77]/90 px-3 py-1.5 shadow-md backdrop-blur-md">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00A3FF]">
                    <Play className="h-3 w-3 fill-white text-white ml-0.5" />
                  </span>
                  <span className="text-[13px] font-semibold tracking-wide text-white">
                    {dict.services.client_video}
                  </span>
                </div>

                <a
                  href={`https://www.instagram.com/reel/${reelId}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open Instagram reel ${reelId}`}
                  className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#5E6D77]/90 text-white shadow-md backdrop-blur-md transition-transform hover:scale-105"
                >
                  <Instagram className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .reviews-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: var(--primary);
          opacity: 0.3;
        }
        .reviews-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
