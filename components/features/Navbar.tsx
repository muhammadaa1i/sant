'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { Dictionary } from '@/lib/types';

export default function Navbar({ dict, lang }: { dict: Dictionary, lang: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}#services`, label: dict.nav.services },
    { href: `/${lang}#rooms`, label: dict.nav.rooms },
    { href: `/${lang}#contact`, label: dict.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Buloqboshi Logo" width={48} height={48} className="object-contain" />
            <span className="text-xl font-bold text-primary">Buloqboshi</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Button size="sm" className="hidden lg:flex" asChild>
                <Link href={`/${lang}#contact`}>{dict.nav.book}</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t">
              <LanguageSwitcher showLabel={true} />
            </div>
            <Button size="sm" className="w-full" asChild>
              <Link href={`/${lang}#contact`}>{dict.nav.book}</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
