import type { FormEvent, RefObject } from 'react';
import { SendHorizontal, X } from 'lucide-react';
import type { ChatMessage, ChatbotDict, Intent } from './types';

type ChatbotPanelProps = {
    dict: ChatbotDict;
    messages: ChatMessage[];
    isTyping: boolean;
    input: string;
    messageContainerRef: RefObject<HTMLDivElement | null>;
    onClose: () => void;
    onInputChange: (value: string) => void;
    onSubmit: () => void;
    onQuickAsk: (intent: Intent, label: string) => void;
};

export default function ChatbotPanel({
    dict,
    messages,
    isTyping,
    input,
    messageContainerRef,
    onClose,
    onInputChange,
    onSubmit,
    onQuickAsk,
}: ChatbotPanelProps) {
    const quickQuestions: Array<{ intent: Intent; label: string }> = [
        { intent: 'prices', label: dict.quick_questions.prices },
        { intent: 'booking', label: dict.quick_questions.booking },
        { intent: 'treatments', label: dict.quick_questions.treatments },
        { intent: 'location', label: dict.quick_questions.location },
    ];

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit();
    };

    return (
        <div className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-primary/25 bg-slate-950/90 shadow-2xl backdrop-blur-xl sm:w-96 sm:rounded-3xl md:w-[25rem] max-h-[calc(100dvh-5.25rem)] sm:max-h-[calc(100dvh-7rem)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-linear-to-r from-primary/20 via-cyan-400/15 to-emerald-400/15 px-3 py-2.5 sm:px-4 sm:py-3">
                <div>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">{dict.header_title}</p>
                    <p className="text-xs text-white/70">{dict.header_subtitle}</p>
                </div>
                <button
                    onClick={onClose}
                    aria-label="Close chatbot"
                    className="rounded-full p-1.5 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>

            <div ref={messageContainerRef} className="grow min-h-0 overflow-y-auto px-3 py-3 space-y-3 sm:px-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`max-w-[92%] sm:max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${message.role === 'bot'
                                ? 'rounded-bl-sm bg-white/10 text-white'
                                : 'ml-auto rounded-br-sm bg-primary text-primary-foreground'
                            }`}
                    >
                        {message.text}
                    </div>
                ))}

                {isTyping && (
                    <div className="inline-flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/70" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/70 [animation-delay:120ms]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/70 [animation-delay:240ms]" />
                    </div>
                )}
            </div>

            <div className="px-3 pb-3 sm:px-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-white/65">{dict.quick_ask}</p>
                <div className="mb-3 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                    {quickQuestions.map((item) => (
                        <button
                            key={item.intent}
                            type="button"
                            disabled={isTyping}
                            onClick={() => onQuickAsk(item.intent, item.label)}
                            className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1.5 text-[11px] sm:text-xs text-white/90 hover:border-primary/70 hover:bg-primary/15 transition-colors disabled:opacity-50"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 p-2">
                    <input
                        value={input}
                        onChange={(event) => onInputChange(event.target.value)}
                        placeholder={dict.placeholder}
                        className="w-full bg-transparent px-1.5 sm:px-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={isTyping || input.trim().length === 0}
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                        aria-label={dict.send}
                    >
                        <SendHorizontal className="h-4 w-4" />
                    </button>
                </form>
            </div>
        </div>
    );
}