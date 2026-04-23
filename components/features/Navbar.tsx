'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Instagram, Send, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { Dictionary } from '@/lib/types';

export default function Navbar({ dict, lang }: { dict: Dictionary, lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isSolid = scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
      <nav className={`fixed top-0 z-40 w-full transition-all duration-300 ${isSolid ? 'bg-white shadow-md py-2 text-slate-800' : 'bg-transparent py-3 text-white'}`}>
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-[1fr_auto_1fr] items-center gap-4">

          {/* Left: Menu Icon + Section Links */}
          <div className="flex items-center justify-start gap-4 min-w-0">
            <button
              className="p-2 rounded-full hover:bg-black/10 transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-7 w-7" />
            </button>

            <div className="hidden md:flex items-center gap-6 min-w-0">
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
                        : 'hover:opacity-70'
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
            <a href="#" className="hidden md:flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full drop-shadow-md">
                <Image src="/logo.png" alt="Buloqboshi Logo" fill className="object-cover" />
              </div>
              <span className="text-xl font-bold tracking-widest uppercase drop-shadow-sm">Buloqboshi</span>
            </a>
            <a href="#" className="flex md:hidden items-center gap-2">
               <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
            </a>
          </div>

          {/* Right: Language & Booking */}
          <div className="flex items-center justify-end gap-4">
            <div className={`hidden md:block ${isSolid ? 'text-slate-800' : 'text-white'}`}>
              <LanguageSwitcher />
            </div>
            <Button 
              size="lg" 
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 h-11 text-sm font-semibold tracking-wide capitalize shadow-md transition-transform hover:scale-105" 
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
      <div className={`fixed top-0 left-0 h-full w-[380px] bg-white z-[60] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6">
          <a href="#" className="flex flex-col items-center gap-2 pl-4" onClick={() => setIsOpen(false)}>
            <Image src="/logo.png" alt="Logo" width={56} height={56} className="rounded-full object-cover shadow-sm" />
            <span className="text-sm font-bold tracking-widest text-primary uppercase text-center">
              Buloqboshi<br/>Sanatoriyasi
            </span>
          </a>
          <button 
            className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-7 w-7" strokeWidth={1.5} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col px-8 mt-12 gap-8 flex-grow">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = (sectionId === '' && activeSection === '') || (sectionId !== '' && activeSection === sectionId);
            
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-2xl font-bold transition-all flex items-center gap-3 ${
                  isActive ? 'text-primary translate-x-2' : 'text-slate-600 hover:text-primary hover:translate-x-2'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {isActive && <div className="w-2 h-8 bg-primary rounded-full" />}
                {link.label}
              </a>
            );
          })}
          <div className="md:hidden mt-4 pt-4 border-t border-slate-100">
             <LanguageSwitcher />
             <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md h-12 text-lg font-semibold capitalize tracking-wide shadow-md" asChild>
                <Link href={`/${lang}/contact`} onClick={() => setIsOpen(false)}>{dict.nav.book}</Link>
             </Button>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-8 flex gap-6 text-primary">
          <a href="#" className="hover:opacity-70 transition-opacity"><Instagram className="w-6 h-6" /></a>
          <a href="#" className="hover:opacity-70 transition-opacity"><Send className="w-6 h-6" /></a>
          <a href="#" className="hover:opacity-70 transition-opacity"><Facebook className="w-6 h-6" /></a>
          <a href="#" className="hover:opacity-70 transition-opacity"><Youtube className="w-6 h-6" /></a>
        </div>
      </div>
    </>
  );
}
