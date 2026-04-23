'use client';

import { ChevronDown } from 'lucide-react';
import { languageNames } from './language-switcher/constants';
import { useLocaleSwitcher } from './language-switcher/useLocaleSwitcher';

export default function LanguageSwitcher({ showLabel = false }: { showLabel?: boolean }) {
  const {
    currentLocale,
    locales,
    dropdownRef,
    isOpen,
    isPending,
    setIsOpen,
    handleLocaleChange,
  } = useLocaleSwitcher();

  const currentLabel = showLabel
    ? languageNames[currentLocale].self
    : languageNames[currentLocale].short;

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity focus:outline-none uppercase tracking-widest disabled:opacity-50"
      >
        {currentLabel}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-md shadow-xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 text-slate-800">
          {locales.map((locale) => (
            <button
              key={locale}
              disabled={isPending}
              onClick={() => handleLocaleChange(locale)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-slate-50 disabled:opacity-50 ${
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
