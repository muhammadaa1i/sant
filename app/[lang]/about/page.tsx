import { getDictionary } from "../../../i18n/get-dictionary";
import { Locale } from "../../../i18n/settings";
import About from "@/components/features/About";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="flex flex-col w-full pt-16">
      <About dict={dict} />
    </div>
  );
}
