import { Dictionary } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Stethoscope, Users, Sparkles } from 'lucide-react';

export default function Services({ dict }: { dict: Dictionary }) {
  const servicesList = [
    {
      title: dict.services.diagnostics,
      icon: Activity,
      description: "Ultrasound, Cardiogram, Clinical Tests"
    },
    {
      title: dict.services.treatment,
      icon: Sparkles, // Or Stethoscope
      description: "Physiotherapy, Hydrotherapy, Massage"
    },
    {
      title: dict.services.specialists,
      icon: Users,
      description: "Cardiologist, Neurologist, Therapist"
    },
    {
      title: dict.services.additional,
      icon: Stethoscope, // Just a placeholder
      description: "Swimming Pool, Sauna, Mountain Walks"
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{dict.services.title}</h2>
          <p className="text-muted-foreground">{dict.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
