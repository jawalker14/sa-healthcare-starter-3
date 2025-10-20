import React from 'react';

const Organization: React.FC = () => {
    return (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Your Organization Name",
                "url": "https://www.yourorganization.com",
                "logo": "https://www.yourorganization.com/logo.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+27-XX-XXXX-XXXX",
                    "contactType": "Customer Service",
                    "areaServed": "ZA",
                    "availableLanguage": "English"
                },
                "sameAs": [
                    "https://www.facebook.com/yourorganization",
                    "https://www.twitter.com/yourorganization",
                    "https://www.instagram.com/yourorganization"
                ]
            })}
        </script>
    );
};

export default Organization;