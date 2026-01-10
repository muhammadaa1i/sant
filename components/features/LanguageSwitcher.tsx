'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n, Locale } from '@/i18n/settings';

const languageNames: Record<Locale, { self: string }> = {
  uz: { self: 'O\'zbekcha' },
  en: { self: 'English' },
  ru: { self: 'Русский' }
};

export default function LanguageSwitcher({ showLabel = false }: { showLabel?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const handleLocaleChange = (newLocale: string) => {
    const currentHash = window.location.hash;
    const newPath = redirectedPathName(newLocale) + currentHash;
    
    // Store current scroll position
    const scrollY = window.scrollY;
    
    router.push(newPath, { scroll: false });
    
    // Restore scroll position after navigation
    setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 0);
  };

  const currentLocale = (pathname?.split('/')[1] || i18n.defaultLocale) as Locale;

  return (
    <div className="flex items-center gap-1 bg-slate-100 rounded-full p-1 max-w-[280px]">
      {i18n.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            currentLocale === locale
              ? 'bg-primary text-white shadow-md scale-105'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white'
          }`}
        >
          {languageNames[locale].self}
        </button>
      ))}
    </div>
  );
}
