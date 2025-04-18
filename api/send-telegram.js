// /api/send-telegram.js
// Full code for Vercel Serverless Function
// Добавлена обработка поля phoneNumber

// Import axios for HTTP requests (ensure it's installed: npm install axios or yarn add axios)
import axios from 'axios';

/**
 * Escapes special characters for Telegram MarkdownV2.
 * Important for preventing parsing errors and potential security issues.
 * List of characters: _ * [ ] ( ) ~ ` > # + - = | { } . !
 * @param {string | undefined} str - The string to escape.
 * @returns {string} The escaped string.
 */
function escapeMarkdownV2(str) {
    if (typeof str !== 'string') return '';
    // The order of escaping is important! First escape the backslash itself, then other characters.
    return str.replace(/\\/g, '\\\\')
        .replace(/_/g, '\\_')
        .replace(/\*/g, '\\*')
        .replace(/\[/g, '\\[')
        .replace(/\]/g, '\\]')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)')
        .replace(/~/g, '\\~')
        .replace(/`/g, '\\`')
        .replace(/>/g, '\\>')
        .replace(/#/g, '\\#')
        .replace(/\+/g, '\\+')
        .replace(/-/g, '\\-')
        .replace(/=/g, '\\=')
        .replace(/\|/g, '\\|')
        .replace(/{/g, '\\{')
        .replace(/}/g, '\\}')
        .replace(/\./g, '\\.')
        .replace(/!/g, '\\!');
}

/**
 * Main request handler for the Vercel Serverless Function.
 * @param {import('@vercel/node').VercelRequest} req - Vercel request object.
 * @param {import('@vercel/node').VercelResponse} res - Vercel response object.
 */
export default async function handler(req, res) {
    const requestTimestamp = new Date().toISOString();
    console.log(`[${requestTimestamp}] Function invoked. Method: ${req.method}`);

    // --- CORS Setup ---
    res.setHeader('Access-Control-Allow-Origin', '*'); // В продакшене замените '*' на ваш домен
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // --- Handling Preflight Request (OPTIONS) ---
    if (req.method === 'OPTIONS') {
        console.log(`[${requestTimestamp}] Handling OPTIONS preflight request.`);
        res.status(204).end();
        return;
    }

    // --- Check Request Method ---
    if (req.method !== 'POST') {
        console.log(`[${requestTimestamp}] Method not allowed: ${req.method}`);
        res.setHeader('Allow', ['POST', 'OPTIONS']);
        res.status(405).json({ success: false, message: `Method ${req.method} is not allowed.` });
        return;
    }

    // --- Get Secret Data from Vercel Environment Variables ---
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        console.error(`[${requestTimestamp}] [Vercel Function Error] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variable is not set.`);
        res.status(500).json({ success: false, message: 'Server configuration error.' });
        return;
    }

    try {
        // --- Get and Validate Data from Request Body ---
        console.log(`[${requestTimestamp}] Processing POST request body:`, JSON.stringify(req.body));
        // <<<--- ИЗВЛЕКАЕМ phoneNumber ЗДЕСЬ
        const { firstName, lastName, companyEmail, phoneNumber, mediaBudget, message } = req.body;

        // Simple check for required fields (phone number is optional here)
        if (!firstName || !companyEmail || !message) {
            console.log(`[${requestTimestamp}] Validation failed: Missing required fields.`);
            res.status(400).json({ success: false, message: 'Please fill in the required fields: First Name, Email, and Message.' });
            return;
        }
        // Additional simple email validation
        if (!/\S+@\S+\.\S+/.test(companyEmail)) {
            console.log(`[${requestTimestamp}] Validation failed: Invalid email format.`);
            res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
            return;
        }
        // Optional: Add phone number validation here if needed

        // --- Format the Message Text for Telegram ---
        // Use MarkdownV2 for formatting and escape user data.
        // <<<--- ДОБАВЛЯЕМ phoneNumber В ТЕКСТ СООБЩЕНИЯ (ЕСЛИ ОН ЕСТЬ)
        let text = `*New Website Submission*\n\n` + // Title
            `*First Name:* ${escapeMarkdownV2(firstName)}\n` +
            // Add last name only if it exists
            (lastName ? `*Last Name:* ${escapeMarkdownV2(lastName)}\n` : '') +
            `*Email:* ${escapeMarkdownV2(companyEmail)}\n` +
            // Add phone number only if it exists and is not empty
            (phoneNumber ? `*Phone:* ${escapeMarkdownV2(phoneNumber)}\n` : '') + // <<<--- ДОБАВЛЕНО ЗДЕСЬ
            // Add budget only if it is selected and not empty
            (mediaBudget ? `*Budget:* ${escapeMarkdownV2(mediaBudget)}\n` : '') +
            `*Message:*\n${escapeMarkdownV2(message)}`; // Message text

        // URL for sending the message via Telegram Bot API
        const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        // --- Send Request to Telegram API ---
        console.log(`[${requestTimestamp}] Sending message to Telegram chat ID: ${chatId}...`);
        await axios.post(telegramApiUrl, {
            chat_id: chatId,       // Chat ID to send to
            text: text,            // Message text
            parse_mode: 'MarkdownV2' // Specify that we are using MarkdownV2
        });
        console.log(`[${requestTimestamp}] Message successfully sent to Telegram.`);

        // --- Send Success Response to the Client (React App) ---
        console.log(`[${requestTimestamp}] Sending success response to client.`);
        res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });

    } catch (error) {
        // --- Error Handling ---
        console.error(`[${requestTimestamp}] [Telegram API Error or other runtime error]`);
        if (error.response) {
            console.error('Telegram API Response Error Status:', error.response.status);
            console.error('Telegram API Response Data:', JSON.stringify(error.response.data, null, 2));
        } else if (error.request) {
            console.error('Telegram API No Response Received:', error.request);
        } else {
            console.error('Error during request setup or processing:', error.message);
        }

        console.log(`[${requestTimestamp}] Sending error response to client.`);
        res.status(500).json({ success: false, message: 'An error occurred while sending your message. Please try again later.' });
    } finally {
        console.log(`[${requestTimestamp}] Function execution finished.`); // Log function completion
    }
}