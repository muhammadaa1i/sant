'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n, Locale } from '@/i18n/settings';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';

export function useLocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = (pathname?.split('/')[1] || i18n.defaultLocale) as Locale;

  const redirectedPathName = useCallback(
    (locale: Locale) => {
      if (!pathname) return '/';
      const segments = pathname.split('/');
      segments[1] = locale;
      return segments.join('/');
    },
    [pathname],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!pathname) return;

    // Prefetch locale variants so language switching feels instant.
    i18n.locales.forEach((locale) => {
      if (locale === currentLocale) return;
      router.prefetch(redirectedPathName(locale));
    });
  }, [currentLocale, pathname, redirectedPathName, router]);

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    const currentHash = window.location.hash;
    const newPath = redirectedPathName(newLocale) + currentHash;
    setIsOpen(false);

    startTransition(() => {
      router.replace(newPath, { scroll: false });
    });
  };

  return {
    currentLocale,
    locales: i18n.locales,
    dropdownRef,
    isOpen,
    isPending,
    setIsOpen,
    handleLocaleChange,
  };
}
