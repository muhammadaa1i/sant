'use client';

import { useEffect, useRef, useState } from 'react';
import { detectIntent, getIntentAnswer } from './chat-intents';
import type { ChatbotDict, ChatMessage, Intent, MessageRole } from './types';

type UseChatbotSessionParams = {
  dict: ChatbotDict;
  pathname: string;
};

export function useChatbotSession({ dict, pathname }: UseChatbotSessionParams) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 1, role: 'bot', text: dict.greeting }]);

  const nextIdRef = useRef(2);
  const typingTimerRef = useRef<number | null>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typingTimerRef.current) {
      window.clearTimeout(typingTimerRef.current);
      typingTimerRef.current = null;
    }

    // Ask proactively every time user visits a page.
    const askTimer = window.setTimeout(() => {
      nextIdRef.current = 2;
      setMessages([{ id: 1, role: 'bot', text: dict.greeting }]);
      setInput('');
      setIsTyping(false);
      setIsOpen(true);
    }, 650);

    return () => {
      window.clearTimeout(askTimer);
    };
  }, [dict.greeting, pathname]);

  useEffect(() => {
    if (!messageContainerRef.current) return;
    messageContainerRef.current.scrollTo({
      top: messageContainerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [isTyping, messages]);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        window.clearTimeout(typingTimerRef.current);
      }
    };
  }, []);

  const pushMessage = (role: MessageRole, text: string) => {
    setMessages((prev) => [...prev, { id: nextIdRef.current++, role, text }]);
  };

  const answerWithIntent = (intent: Intent | null) => {
    const answerText = getIntentAnswer(intent, dict);
    setIsTyping(true);

    typingTimerRef.current = window.setTimeout(() => {
      pushMessage('bot', answerText);
      setIsTyping(false);
    }, 420);
  };

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    pushMessage('user', trimmed);
    setInput('');
    answerWithIntent(detectIntent(trimmed));
  };

  const submitMessage = () => {
    sendMessage(input);
  };

  const handleQuickAsk = (intent: Intent, label: string) => {
    if (isTyping) return;
    pushMessage('user', label);
    answerWithIntent(intent);
  };

  return {
    isOpen,
    isTyping,
    input,
    messages,
    messageContainerRef,
    setInput,
    closeChat: () => setIsOpen(false),
    toggleChat: () => setIsOpen((prev) => !prev),
    submitMessage,
    handleQuickAsk,
  };
}
