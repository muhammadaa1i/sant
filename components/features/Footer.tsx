import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Instagram, Send, Youtube, Facebook } from 'lucide-react';
import { Dictionary } from '@/lib/types';

export default function Footer({ dict, lang }: { dict: Dictionary, lang: string }) {
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
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="space-y-6 lg:col-span-4">
            <Link href="/" className="inline-block relative group">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <Image src="/logo.png" alt="Buloqboshi Logo" fill className="object-cover" sizes="64px" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">{dict.footer.brand_name}</h3>
              </div>
            </Link>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-sm">
             {dict.hero.subtitle}
            </p>
            <div className="flex gap-5 pt-4">
              {[
                { href: "https://www.instagram.com/buloqboshi_sanatoriyasi1/", icon: Instagram, label: "Instagram" },
                { href: "https://www.facebook.com/profile.php?id=61585638731929", icon: Facebook, label: "Facebook" },
                { href: "https://t.me/buloqboshisanotoriya", icon: Send, label: "Telegram" },
                { href: "https://www.youtube.com/@Buloqboshisanatoriyasi", icon: Youtube, label: "Youtube" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="animate-social-pulse flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#00A3FF] border-[1.5px] border-[#00A3FF]/20 shadow-[0_0_20px_rgba(0,163,255,0.15)] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6 lg:col-span-3">
            <h4 className="text-base font-semibold tracking-wider uppercase text-foreground">{dict.nav.contact}</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.google.com/maps?q=41.294752,69.686080" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary/70 group-hover:text-primary" />
                  <span className="leading-relaxed">{dict.footer.address}</span>
                </a>
              </li>
              {phoneNumbers.map((phone, idx) => (
                <li key={idx}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="group flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-5 w-5 text-primary/70 group-hover:text-primary" />
                    <span>{phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 lg:col-span-2 lg:pl-8">
             <h4 className="text-base font-semibold tracking-wider uppercase text-foreground">{dict.footer.navigation}</h4>
             <ul className="space-y-3">
                <li><Link href={`/${lang}/about`} className="text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">{dict.about.title}</Link></li>
                <li><Link href={`/${lang}/services`} className="text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">{dict.nav.services}</Link></li>
                <li><Link href={`/${lang}/rooms`} className="text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">{dict.nav.rooms}</Link></li>
                <li><Link href={`/${lang}/contact`} className="text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">{dict.nav.contact}</Link></li>
             </ul>
          </div>

          {/* Nearest Cities */}
          <div className="space-y-6 lg:col-span-3 lg:pl-8">
             <h4 className="text-base font-semibold tracking-wider uppercase text-foreground">{dict.footer.nearest_cities}</h4>
             <ul className="space-y-3">
                {nearestCities.map((city) => (
                  <li key={city.name} className="flex justify-between items-center text-muted-foreground border-b border-border/40 pb-2 last:border-0 last:pb-0">
                    <span>{city.name}</span>
                    <span className="text-primary font-medium text-sm bg-primary/5 px-2 py-1 rounded-md">{city.distance}</span>
                  </li>
                ))}
             </ul>
          </div>
        </div>
        
        <div className="border-t border-border/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} {dict.footer.copyright} {dict.footer.rights}.
          </p>

        </div>
      </div>
    </footer>
  );
}
