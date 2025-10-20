import React from 'react';

const WhatsAppCTA: React.FC = () => {
    const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with actual WhatsApp number
    const message = 'Hello, I would like to inquire about your services.';

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