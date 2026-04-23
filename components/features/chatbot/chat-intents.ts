import type { ChatbotDict, Intent } from './types';

const intentKeywords: Record<Intent, string[]> = {
  prices: ['price', 'prices', 'cost', 'narx', 'narxi', 'qancha', 'цена', 'цены', 'стоимость'],
  booking: ['book', 'booking', 'reserve', 'bron', 'band', 'брони', 'заброн', 'резерв'],
  treatments: ['treat', 'treatment', 'service', 'xizmat', 'muolaja', 'процедур', 'лечение', 'массаж'],
  location: ['where', 'location', 'address', 'qayer', 'manzil', 'адрес', 'где'],
};

export function detectIntent(text: string): Intent | null {
  const normalized = text.toLowerCase();

  for (const [intent, keywords] of Object.entries(intentKeywords) as Array<[Intent, string[]]>) {
    if (keywords.some((keyword) => normalized.includes(keyword))) {
      return intent;
    }
  }

  return null;
}

export function getIntentAnswer(intent: Intent | null, dict: ChatbotDict): string {
  if (!intent) return dict.answers.fallback;

  const answersByIntent: Record<Intent, string> = {
    prices: dict.answers.prices,
    booking: dict.answers.booking,
    treatments: dict.answers.treatments,
    location: dict.answers.location,
  };

  return answersByIntent[intent];
}