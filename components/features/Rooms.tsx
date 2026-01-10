import { Dictionary } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';
import RoomCarousel from './RoomCarousel';

export default function Rooms({ dict }: { dict: Dictionary }) {
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
    <section id="rooms" className="py-20 bg-gradient-to-b from-background to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{dict.rooms.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{dict.rooms.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {rooms.map((room, idx) => (
            <Card key={idx} className="group flex flex-col overflow-hidden border-2 shadow-lg hover:shadow-2xl hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 bg-white" data-aos="fade-up" data-aos-delay={idx * 200}>
              <RoomCarousel images={room.images} roomName={room.title} placeholderText={dict.rooms.room_image} />
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 pb-4">
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{room.title}</CardTitle>
                <CardDescription className="text-base">
                  {dict.rooms.price_from} <span className="text-xl font-bold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mt-2">{room.price}</span> {dict.rooms.per_night}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-6 pb-6">
                <ul className="space-y-3">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
