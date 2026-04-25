import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getDictionary } from "../../i18n/get-dictionary";
import { Locale } from "../../i18n/settings";
import Hero from "@/components/features/Hero";
import About from "@/components/features/About";

// Dynamic imports for below-the-fold components
const Services = dynamic(() => import("@/components/features/Services"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />
});
const Rooms = dynamic(() => import("@/components/features/Rooms"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/10" />
});
const Contact = dynamic(() => import("@/components/features/Contact"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />
});
const MapSection = dynamic(() => import("@/components/features/MapSection"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted/10" />
});

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="flex flex-col w-full">
      <Hero dict={dict} lang={lang as Locale} />
      <About dict={dict} />
      
      <Suspense fallback={<div className="h-96 w-full animate-pulse bg-muted/20" />}>
        <Services dict={dict} />
      </Suspense>

      <Suspense fallback={<div className="h-96 w-full animate-pulse bg-muted/10" />}>
        <Rooms dict={dict} lang={lang} />
      </Suspense>

      <Suspense fallback={<div className="h-96 w-full animate-pulse bg-muted/20" />}>
        <Contact dict={dict} />
      </Suspense>

      <Suspense fallback={<div className="h-96 w-full animate-pulse bg-muted/10" />}>
        <MapSection dict={dict} />
      </Suspense>
    </div>
  );
}
