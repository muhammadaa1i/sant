import { getDictionary } from "../../../i18n/get-dictionary";
import { Locale } from "../../../i18n/settings";
import Rooms from "@/components/features/Rooms";

export default async function RoomsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="flex flex-col w-full pt-16">
      <Rooms dict={dict} lang={lang} />
    </div>
  );
}
