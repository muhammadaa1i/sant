'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n, Locale } from '@/i18n/settings';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const languageNames: Record<Locale, { self: string, short: string }> = {
  uz: { self: 'O\'zbekcha', short: 'UZ' },
  en: { self: 'English', short: 'EN' },
  ru: { self: 'Русский', short: 'RU' }
};

export default function LanguageSwitcher({ showLabel = false }: { showLabel?: boolean }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unused = showLabel;
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const handleLocaleChange = (newLocale: string) => {
    const currentHash = window.location.hash;
    const newPath = redirectedPathName(newLocale) + currentHash;
    const scrollY = window.scrollY;
    
    router.push(newPath, { scroll: false });
    setIsOpen(false);
    
    setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 0);
  };

  const currentLocale = (pathname?.split('/')[1] || i18n.defaultLocale) as Locale;

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity focus:outline-none uppercase tracking-widest"
      >
        {languageNames[currentLocale].short}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-md shadow-xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 text-slate-800">
          {i18n.locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-slate-50 ${
                currentLocale === locale ? 'text-primary font-semibold bg-slate-50' : 'text-slate-700'
              }`}
            >
              {languageNames[locale].self}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
