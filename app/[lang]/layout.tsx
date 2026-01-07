import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../globals.css';
import { i18n, Locale } from "../../i18n/settings";
import { getDictionary } from "../../i18n/get-dictionary";
import Navbar from "@/components/features/Navbar";
import Footer from "@/components/features/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    return {
        title: {
            template: '%s | Buloqboshi Sanatorium',
            default: 'Buloqboshi Sanatorium',
        },
        description: 'Health and Recreation Center in Angren mountains',
        alternates: {
            languages: {
                'en': '/en',
                'uz': '/uz',
                'ru': '/ru',
            },
        },
        openGraph: {
            title: 'Buloqboshi Sanatorium',
            description: 'Rest and recovery in the mountains',
            locale: lang,
            siteName: 'Buloqboshi Sanatorium',
        },
    };
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    
    console.log('[Layout] Language:', lang);
    console.log('[Layout] Dictionary keys:', Object.keys(dict || {}));

    return (
        <html lang={lang} className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
            >
                <Navbar dict={dict} lang={lang} />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer dict={dict} />
            </body>
        </html>
    );
}
