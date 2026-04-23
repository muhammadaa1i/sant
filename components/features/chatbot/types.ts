import type { Dictionary } from '@/lib/types';

export type ChatbotDict = Dictionary['chatbot'];
export type Intent = 'prices' | 'booking' | 'treatments' | 'location';
export type MessageRole = 'bot' | 'user';

export type ChatMessage = {
  id: number;
  role: MessageRole;
  text: string;
};