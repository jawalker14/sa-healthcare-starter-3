"use client";

import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'consentGiven';

const ConsentNotice: React.FC = () => {
    const [consentGiven, setConsentGiven] = useState(false);
    const [showBanner, setShowBanner] = useState(false);

    // On mount, check if consent was previously given and hide banner if so
    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored === 'true') {
                setConsentGiven(true);
                setShowBanner(false);
            } else {
                // Only show the banner if no prior acceptance
                setShowBanner(true);
            }
        } catch {
            // If localStorage isn't available, just show the banner
            setShowBanner(true);
        }
    }, []);

    const handleConsentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConsentGiven(event.target.checked);
    };

    const handleAccept = () => {
        try {
            localStorage.setItem(STORAGE_KEY, 'true');
        } catch {
            // ignore storage errors
        }
        setShowBanner(false);
        setConsentGiven(true);
    };

    const handleOptOut = () => {
        try {
            localStorage.setItem(STORAGE_KEY, 'false');
        } catch {
            // ignore storage errors
        }
        setConsentGiven(false);
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50">
            <p className="text-sm">
                We use cookies to enhance your experience. By clicking "Accept", you consent to our use of cookies.
            </p>
            <div className="flex items-center justify-between mt-3 gap-3 flex-wrap">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={consentGiven}
                        onChange={handleConsentChange}
                        className="mr-2"
                    />
                    I give my consent.
                </label>
                <div className="ml-auto flex items-center gap-2">
                    <button
                        onClick={handleOptOut}
                        className="px-3 py-2 text-sm text-gray-700 hover:underline"
                        aria-label="Opt out of cookies"
                    >
                        Opt-out
                    </button>
                    <button
                        onClick={handleAccept}
                        disabled={!consentGiven}
                        className={`px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed`}
                        aria-label="Accept cookies"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConsentNotice;