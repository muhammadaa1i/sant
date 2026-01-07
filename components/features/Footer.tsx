import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Send } from 'lucide-react'; // Send for Telegram
import { Dictionary } from '@/lib/types';
import { Button } from '@/components/ui/button';

export default function Footer({ dict }: { dict: Dictionary }) {
  const phoneNumbers = [
    "+998 99 483 70 00",
    "+998 50 020 33 00",
    "+998 90 133 43 00"
  ];

  const nearestCities = [
    { name: "Tashkent", distance: "110 km" },
    { name: "Kokand", distance: "300 km" },
    { name: "Namangan", distance: "280 km" },
    { name: "Fergana", distance: "320 km" },
    { name: "Andijan", distance: "320 km" },
    { name: "Shymkent", distance: "350 km" },
    { name: "Khorezm", distance: "1000 km" }
  ];

  return (
    <footer className="bg-slate-50 border-t mt-auto pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Buloqboshi Logo" width={40} height={40} className="object-cover rounded-full" />
              <h3 className="text-xl font-bold text-primary">{dict.footer.brand_name}</h3>
            </div>
            <p className="text-sm text-muted-foreground">
             {dict.hero.subtitle}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">{dict.nav.contact}</h4>
            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
              <a 
                href="https://www.google.com/maps?q=41.294752,69.686080" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {dict.footer.address}
              </a>
            </div>
            <div className="flex flex-col space-y-2">
                {phoneNumbers.map((phone) => (
                    <div key={phone} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                            {phone}
                        </a>
                    </div>
                ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
             <h4 className="font-semibold">Quick Links</h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#services" className="hover:text-primary transition-colors">{dict.nav.services}</Link></li>
                <li><Link href="#rooms" className="hover:text-primary transition-colors">{dict.nav.rooms}</Link></li>
                <li><Link href="#contact" className="hover:text-primary transition-colors">{dict.nav.contact}</Link></li>
             </ul>
          </div>

          {/* Nearest Cities */}
          <div className="space-y-4">
             <h4 className="font-semibold">{dict.footer.nearest_cities}</h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
                {nearestCities.map((city) => (
                  <li key={city.name} className="flex justify-between">
                    <span>{city.name}</span>
                    <span className="text-primary font-medium">{city.distance}</span>
                  </li>
                ))}
             </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {dict.footer.copyright} {dict.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
}
