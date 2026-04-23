import { Dictionary } from '@/lib/types';
import Image from 'next/image';
import { Check, Flame, Droplet, Activity, Flower2, User, Hand } from 'lucide-react';

export default function Services({ dict }: { dict: Dictionary }) {
  const images = [
    '/services/image.png',
    '/services/image copy.png',
    '/services/image copy 2.png',
    '/services/image copy 3.png',
    '/services/image copy 4.png',
    '/services/image copy 5.png'
  ];

  const activityImages = [
    '/services/activities/image.png',
    '/services/activities/image copy.png',
    '/services/activities/image copy 2.png',
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
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16 space-y-6" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1]">
            {dict.services.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto">
            {dict.services.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-10">
          {dict.services.items.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
              data-aos="fade-up" 
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-[45%] lg:w-[40%] relative h-64 sm:h-80 md:h-auto min-h-[300px]">
                  <Image
                    src={images[idx]}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-[55%] lg:w-[60%] p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
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

        {/* TOP 3 Activities Section */}
        {dict.services.top_activities && dict.services.top_activities.length > 0 && (
          <div className="mt-32">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12" data-aos="fade-up">
              {dict.services.top_activities_title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dict.services.top_activities.map((activity, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="relative h-56 w-full shrink-0">
                    <Image
                      src={activityImages[idx]}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-primary text-primary-foreground px-6 py-2.5 text-sm md:text-base font-medium rounded-tr-xl">
                      {activity.title}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col grow">
                    <p className="text-sm text-slate-700 leading-relaxed mb-4">
                      {activity.desc}
                    </p>
                    <p className="text-sm text-slate-700 mb-2">
                      {activity.benefits_title}
                    </p>
                    <ul className="space-y-2">
                      {activity.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-xs md:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-primary mr-2 shrink-0 mt-0.5" strokeWidth={3} />
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Massage Services Section */}
        {dict.services.massage_services && dict.services.massage_services.length > 0 && (
          <div className="mt-32">
            <div className="text-center mb-16 space-y-4" data-aos="fade-up">
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
      </div>
    </section>
  );
}
