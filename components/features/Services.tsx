import { Dictionary } from '@/lib/types';
import Image from 'next/image';
import { Flame, Droplet, Activity, Flower2, User, Hand, CheckCircle2 } from 'lucide-react';
import CustomerReviews from './CustomerReviews';

export default function Services({ dict }: { dict: Dictionary }) {
  const images = [
    '/services/image.png',
    '/services/image copy.png',
    '/services/image copy 2.png',
    '/services/image copy 3.png',
    '/services/image copy 4.png',
    '/services/eco_tours.png',
  ];

  const images2 = [
    '/services2/image.png',
    '/services2/image copy.png',
    '/services2/image copy 2.png',
    '/services2/image copy 3.png',
  ];

  const massageIcons = [
    Flame,
    Droplet,
    Activity,
    Flower2,
    User,
    Hand
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F9F9F8] relative">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        {/* Physio Services Section */}
        <div className="text-center mb-16 space-y-6" data-aos="fade-up" suppressHydrationWarning>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1]">
            {dict.physio_services.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto">
            {dict.physio_services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-32" data-aos="fade-up" suppressHydrationWarning>
          {dict.physio_services.items.map((service, idx) => (
            <div key={idx} className="group bg-white hover:bg-primary rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100/50">
              <div className="relative h-60 w-full bg-white flex items-center justify-center border-b border-slate-100/50 group-hover:border-white/20 transition-colors z-10">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-500 group-hover:text-white/80 mb-6 transition-colors line-clamp-2">{service.desc}</p>
                <ul className="space-y-3 mt-auto flex-grow">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors">
                      <div className="min-w-4 w-4 h-4 mt-0.5 mr-2.5 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-white/20 transition-colors">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white transition-colors" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 space-y-6" data-aos="fade-up" suppressHydrationWarning>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1]">
            {dict.mini_services.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto">
            {dict.mini_services.subtitle}
          </p>
        </div>

        {/* Mini Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12" data-aos="fade-up" suppressHydrationWarning>
          {dict.mini_services.cards.map((card, idx) => (
            <div key={idx} className="group bg-white hover:bg-primary rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100/50">
              <div className="relative h-48 sm:h-52 w-full">
                <Image 
                  src={images2[idx] ?? images2[0]} 
                  alt={card.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-4 transition-colors">{card.title}</h3>
                <ul className="space-y-3 mb-8 flex-grow">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors">
                      <div className="min-w-4 w-4 h-4 mt-0.5 mr-2.5 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-white/20 transition-colors">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white transition-colors" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3.5 bg-primary hover:bg-primary/90 group-hover:bg-white group-hover:text-primary text-white rounded-xl text-sm font-semibold transition-colors mt-auto">
                  {card.btn}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-24" data-aos="fade-up" suppressHydrationWarning>
          <button className="px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-white rounded-xl text-sm font-semibold transition-colors">
            {dict.mini_services.view_all}
          </button>
        </div>

        {/* Full Services Section */}
        <div className="text-center mb-16 space-y-6" data-aos="fade-up" suppressHydrationWarning>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-[1.1]">
            {dict.services.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto">
            {dict.services.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-10">
          {dict.services.items.map((service, idx) => (
            // Keep image source stable even if content count changes.
            <div 
              key={idx}
              className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
              data-aos="fade-up" 
              suppressHydrationWarning
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-[45%] lg:w-[40%] relative h-64 sm:h-80 md:h-auto min-h-75">
                  <Image
                    src={images[idx] ?? images[images.length - 1]}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-[55%] lg:w-[60%] p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  {service.desc && (
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  )}
                  
                  <ul className="space-y-3 mb-6">
                    {service.list.map((item, i) => (
                      <li key={i} className="flex items-start text-muted-foreground text-sm lg:text-base">
                        <span className="min-w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 mr-3" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {service.footer && (
                    <p className="text-sm lg:text-base font-medium text-muted-foreground mt-auto pt-4">
                      {service.footer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Massage Services Section */}
        {dict.services.massage_services && dict.services.massage_services.length > 0 && (
          <div className="mt-32">
            <div className="text-center mb-16 space-y-4" data-aos="fade-up" suppressHydrationWarning>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {dict.services.massage_services_title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto">
                {dict.services.massage_services_subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {dict.services.massage_services.map((service, idx) => {
                const Icon = massageIcons[idx % massageIcons.length];
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl md:rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100/50"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    suppressHydrationWarning
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                      <Icon strokeWidth={1.5} className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* Customer Reviews Section */}
        <CustomerReviews dict={dict} />
      </div>
    </section>
  );
}
