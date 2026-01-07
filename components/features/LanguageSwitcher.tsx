'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Select } from '@/components/ui/select';
import { i18n, Locale } from '@/i18n/settings';
import { Globe } from 'lucide-react';

const languageNames: Record<Locale, Record<Locale, string>> = {
  uz: {
    uz: 'O\'zbekcha',
    en: 'Inglizcha',
    ru: 'Ruscha'
  },
  en: {
    uz: 'Uzbek',
    en: 'English',
    ru: 'Russian'
  },
  ru: {
    uz: 'Узбекский',
    en: 'Английский',
    ru: 'Русский'
  }
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

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
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
    <div className="relative flex items-center gap-2">
      <Globe className="h-4 w-4 text-primary absolute left-3 pointer-events-none z-10" />
      <Select
        value={currentLocale}
        onChange={handleLocaleChange}
        className="pl-9 pr-8 w-auto min-w-[140px] font-medium bg-gradient-to-r from-background to-secondary/30 hover:to-secondary/50 transition-all duration-200 shadow-sm hover:shadow-md border-primary/20 focus:border-primary"
      >
        {i18n.locales.map((locale) => (
          <option key={locale} value={locale} className="bg-background">
            {languageNames[currentLocale][locale]}
          </option>
        ))}
      </Select>
    </div>
  );
}
