import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '8525946384:AAFnKMrFYu7AfZhgWtBE5JILdoOXSmKi3VE';
const TELEGRAM_CHAT_ID = '1337108345';

export async function POST(request: NextRequest) {
    try {
        const { name, phone, comment } = await request.json();

        // Validate inputs
        if (!name || !phone) {
            return NextResponse.json(
                { error: 'Name and phone are required' },
                { status: 400 }
            );
        }

        // Format message for Telegram
        const message = `
🏨 *Yangi murojaat - Buloqboshi Sanatorium*

👤 *Ism:* ${name}
📞 *Telefon:* ${phone}
${comment ? `💬 *Izoh:* ${comment}` : ''}

⏰ *Vaqt:* ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}
    `.trim();

        // Send to Telegram
        const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        const telegramResponse = await fetch(telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        if (!telegramResponse.ok) {
            const errorData = await telegramResponse.json();
            console.error('Telegram API error:', errorData);
            return NextResponse.json(
                { error: 'Failed to send message to Telegram' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
