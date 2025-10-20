import React from 'react';

const SkipToContent: React.FC = () => {
    return (
            <a
                href="#main-content"
                className="sr-only-focusable fixed left-4 top-4 z-[100] rounded-2xl bg-navy-800 px-4 py-2 text-white shadow-soft focus-visible:outline-none"
            >
            Skip to main content
        </a>
    );
};

export default SkipToContent;