import { getDictionary } from "../../i18n/get-dictionary";
import { Locale } from "../../i18n/settings";
import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Services from "@/components/features/Services";
import Rooms from "@/components/features/Rooms";
import Contact from "@/components/features/Contact";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col w-full">
      <Hero dict={dict} />
      <About dict={dict} />
      <Services dict={dict} />
      <Rooms dict={dict} />
      <Contact dict={dict} />
    </div>
  );
}
