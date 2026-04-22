import { getDictionary } from "../../../i18n/get-dictionary";
import { Locale } from "../../../i18n/settings";
import Contact from "@/components/features/Contact";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="flex flex-col w-full pt-16 bg-slate-900 min-h-screen">
      <Contact dict={dict} lang={lang} />
    </div>
  );
}
