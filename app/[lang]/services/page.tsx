import { getDictionary } from "../../../i18n/get-dictionary";
import { Locale } from "../../../i18n/settings";
import Services from "@/components/features/Services";

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="flex flex-col w-full pt-16">
      <Services dict={dict} />
    </div>
  );
}
