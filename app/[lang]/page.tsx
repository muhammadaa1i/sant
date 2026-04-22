import { getDictionary } from "../../i18n/get-dictionary";
import { Locale } from "../../i18n/settings";
import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Services from "@/components/features/Services";
import Rooms from "@/components/features/Rooms";
import Contact from "@/components/features/Contact";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="flex flex-col w-full">
      <Hero dict={dict} lang={lang as Locale} />
      <About dict={dict} lang={lang} />
      <Services dict={dict} lang={lang} />
      <Rooms dict={dict} lang={lang} />
      <Contact dict={dict} lang={lang} />
    </div>
  );
}
