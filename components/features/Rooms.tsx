import { Dictionary } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Rooms({ dict }: { dict: Dictionary }) {
  const rooms = [
    {
      title: dict.rooms.standard,
      price: "545 000 UZS",
      features: [dict.rooms.features.meals_3, dict.rooms.features.treatments, dict.rooms.features.tv_wifi]
    },
    {
      title: dict.rooms.luxe,
      price: "655 000 UZS",
      features: [dict.rooms.features.meals_3, dict.rooms.features.treatments_premium, dict.rooms.features.balcony_view, dict.rooms.features.tv_wifi]
    },
    {
      title: dict.rooms.cottage,
      price: "3 500 000 UZS",
      features: [dict.rooms.features.family_friendly, dict.rooms.features.private_area, dict.rooms.features.kitchen, dict.rooms.features.all_inclusive]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{dict.rooms.title}</h2>
          <p className="text-muted-foreground">{dict.rooms.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <Card key={idx} className="flex flex-col border shadow-sm hover:border-primary/50 transition-colors">
              <div className="h-48 bg-muted w-full relative">
                 {/* Image Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-100">
                    Room Image
                 </div>
              </div>
              <CardHeader>
                <CardTitle>{room.title}</CardTitle>
                <CardDescription>
                  {dict.rooms.price_from} <span className="text-lg font-bold text-primary">{room.price}</span> / night
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild variant="outline">
                    <Link href="#contact">{dict.rooms.details}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
