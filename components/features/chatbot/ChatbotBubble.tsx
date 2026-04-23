import { MessageCircleMore, Sparkles } from 'lucide-react';

type ChatbotBubbleProps = {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function ChatbotBubble({ label, isOpen, onToggle }: ChatbotBubbleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={label}
      aria-expanded={isOpen}
      className="group relative inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-linear-to-br from-primary to-cyan-500 text-white shadow-xl transition-transform hover:scale-105"
    >
      <MessageCircleMore className="h-5 w-5 sm:h-6 sm:w-6" />
      <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-100" />
      <span className="pointer-events-none absolute bottom-16 right-0 hidden whitespace-nowrap rounded-full bg-slate-950/95 px-3 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
        {label}
      </span>
    </button>
  );
}