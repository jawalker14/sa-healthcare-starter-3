import React, { useState } from 'react';

const ConsentNotice: React.FC = () => {
    const [consentGiven, setConsentGiven] = useState(false);

    const handleConsentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConsentGiven(event.target.checked);
    };

    const handleOptOut = () => {
        setConsentGiven(false);
        // Additional logic for opt-out can be added here
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
            <p className="text-sm">
                We use cookies to enhance your experience. By clicking "Accept", you consent to our use of cookies. 
                <button onClick={handleOptOut} className="text-blue-500 underline ml-2">Opt-out</button>
            </p>
            <label className="flex items-center mt-2">
                <input 
                    type="checkbox" 
                    checked={consentGiven} 
                    onChange={handleConsentChange} 
                    className="mr-2" 
                />
                I give my consent.
            </label>
        </div>
    );
};

export default ConsentNotice;