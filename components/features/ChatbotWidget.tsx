'use client';

import { usePathname } from 'next/navigation';
import ChatbotBubble from './chatbot/ChatbotBubble';
import ChatbotPanel from './chatbot/ChatbotPanel';
import type { ChatbotDict } from './chatbot/types';
import { useChatbotSession } from './chatbot/useChatbotSession';

export default function ChatbotWidget({ dict }: { dict: ChatbotDict }) {
  const pathname = usePathname();
  const {
    isOpen,
    isTyping,
    input,
    messages,
    messageContainerRef,
    setInput,
    closeChat,
    toggleChat,
    submitMessage,
    handleQuickAsk,
  } = useChatbotSession({ dict, pathname });

  return (
    <div className="fixed bottom-2 left-2 right-2 z-70 flex flex-col items-end gap-2 sm:bottom-5 sm:left-auto sm:right-5 sm:gap-3">
      {isOpen && (
        <ChatbotPanel
          dict={dict}
          messages={messages}
          isTyping={isTyping}
          input={input}
          messageContainerRef={messageContainerRef}
          onClose={closeChat}
          onInputChange={setInput}
          onSubmit={submitMessage}
          onQuickAsk={handleQuickAsk}
        />
      )}

      <ChatbotBubble label={dict.bubble_label} isOpen={isOpen} onToggle={toggleChat} />
    </div>
  );
}