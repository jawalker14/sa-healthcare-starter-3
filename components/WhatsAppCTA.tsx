import React from 'react';

const WhatsAppCTA: React.FC = () => {
    // Read from environment variables. Prefer client-exposed NEXT_PUBLIC_ var; fall back to server var.
    const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? process.env.WHATSAPP_NUMBER ?? '';
    // WhatsApp expects digits only in international format (no +, spaces, or punctuation)
    const whatsappNumber = rawNumber.replace(/[^\d]/g, '');
    const message = 'Hello, I would like to inquire about your services.';

    if (!whatsappNumber) return null;

    return (
        <div className="fixed bottom-4 right-4">
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                className="flex items-center p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
                aria-label="Contact us on WhatsApp"
            >
                <span className="material-icons">chat</span>
                <span className="ml-2">Chat with us</span>
            </a>
        </div>
    );
};

export default WhatsAppCTA;