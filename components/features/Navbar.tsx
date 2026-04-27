'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Instagram, Send, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { Dictionary } from '@/lib/types';

export default function Navbar({ dict }: { dict: Dictionary, lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'rooms', 'contact'];
      const scrollPos = window.scrollY + 150;
      
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          current = section;
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `#`, label: dict.nav.home },
    { href: `#services`, label: dict.nav.services },
    { href: `#rooms`, label: dict.nav.rooms },
    { href: `#contact`, label: dict.nav.contact },
  ];

  return (
    <>
      <nav className="fixed top-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-sm py-2 text-slate-800 transition-all duration-300">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-[1fr_auto_1fr] items-center gap-4">

          {/* Left: Menu Icon + Section Links */}
          <div className="flex items-center justify-start gap-4 min-w-0">
            <button
              className="p-2 rounded-full hover:bg-black/5 transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-7 w-7" />
            </button>

            <div className="hidden lg:flex items-center gap-6 min-w-0">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = (sectionId === '' && activeSection === '') || (sectionId !== '' && activeSection === sectionId);
                
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer ${
                      isActive 
                        ? 'text-primary drop-shadow-sm scale-105 underline underline-offset-4 decoration-2' 
                        : 'hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex items-center justify-center">
            <a href="#" className="hidden lg:flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full drop-shadow-md">
                <Image 
                  src="/logo.png" 
                  alt="Buloqboshi Logo" 
                  fill 
                  className="object-cover"
                  priority
                  sizes="48px"
                />
              </div>
              <span className="text-xl font-bold tracking-widest uppercase drop-shadow-sm">Buloqboshi</span>
            </a>
            <a href="#" className="flex lg:hidden items-center gap-2">
               <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" priority sizes="40px" />
            </a>
          </div>

          {/* Right: Language & Booking */}
          <div className="flex items-center justify-end gap-4">
            <div className="hidden lg:block text-slate-800">
              <LanguageSwitcher />
            </div>
            <Button 
              size="lg" 
              className="hidden lg:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 h-11 text-sm font-semibold tracking-wide capitalize shadow-md transition-transform hover:scale-105" 
              asChild
            >
                <a href="#contact">{dict.nav.book}</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 transition-opacity backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <div className={`fixed top-0 left-0 h-full w-[380px] bg-white/95 backdrop-blur-xl z-[60] shadow-[10px_0_50px_rgba(0,0,0,0.1)] border-r border-slate-200/50 transform transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-8 border-b border-transparent">
          <a href="#" className="flex items-center group" onClick={() => setIsOpen(false)}>
            <div className="relative w-20 h-20 transition-transform duration-500">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" sizes="80px" />
            </div>
          </a>
          <button 
            className="p-2 text-slate-400 hover:text-black hover:rotate-90 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-7 w-7" strokeWidth={1.5} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col px-8 mt-4 gap-6 flex-grow overflow-y-auto">
          {navLinks.map((link, idx) => {
            const sectionId = link.href.replace('#', '');
            const isActive = (sectionId === '' && activeSection === '') || (sectionId !== '' && activeSection === sectionId);
            
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative text-xl font-bold tracking-wide transition-all duration-300 flex items-center ${
                  isActive 
                    ? 'text-primary/80' 
                    : 'text-[#3E5C4A] hover:text-primary hover:translate-x-2'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
          
          <div className="lg:hidden mt-4 pt-8 border-t border-slate-100 space-y-6">
             <div>
               <LanguageSwitcher />
             </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-8 pb-12 bg-white">
          <div className="flex gap-5">
            {[
              { href: "https://www.instagram.com/buloqboshi_sanatoriyasi1/", icon: Instagram, label: "Instagram" },
              { href: "https://t.me/buloqboshisanotoriya", icon: Send, label: "Telegram" },
              { href: "https://www.facebook.com/profile.php?id=61585638731929", icon: Facebook, label: "Facebook" },
              { href: "https://www.youtube.com/@Buloqboshisanatoriyasi", icon: Youtube, label: "Youtube" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="animate-social-pulse flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#00A3FF] border-[1.5px] border-[#00A3FF]/20 shadow-[0_0_20px_rgba(0,163,255,0.15)] transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-[22px] h-[22px]" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
