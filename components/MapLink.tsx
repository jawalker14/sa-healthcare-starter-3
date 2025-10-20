import React from 'react';

const MapLink: React.FC<{ address: string }> = ({ address }) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
        >
            View on Map
        </a>
    );
};

export default MapLink;