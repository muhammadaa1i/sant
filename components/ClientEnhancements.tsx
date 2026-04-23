'use client';

import dynamic from 'next/dynamic';
import type { ChatbotDict } from '@/components/features/chatbot/types';

const AOSInit = dynamic(() => import('@/components/AOSInit'), { ssr: false });
const ChatbotWidget = dynamic(() => import('@/components/features/ChatbotWidget'), { ssr: false });

type ClientEnhancementsProps = {
  chatbotDict: ChatbotDict;
  lang: string;
};

export default function ClientEnhancements({ chatbotDict, lang }: ClientEnhancementsProps) {
  return (
    <>
      <AOSInit />
      <ChatbotWidget key={lang} dict={chatbotDict} />
    </>
  );
}
