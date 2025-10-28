import React from 'react';
import settings from '@/content/data/settings.json';

type Address = { street?: string; city?: string; province?: string; postalCode?: string; country?: string };
type Location = { id: string; name: string; telephone?: string; address: Address; hours?: Record<string, string> };
type Settings = {
    site?: { name?: string; url?: string };
    contacts?: { phone?: string };
    social?: Record<string, string>;
    address?: Address;
    hours?: Record<string, string>;
    schema?: { hasMultipleLocations?: boolean };
    locations?: Location[];
};

const LocalBusiness: React.FC = () => {
        const s = settings as unknown as Settings;
    const hasMulti = s?.schema?.hasMultipleLocations && Array.isArray(s?.locations);
    const org = {
        '@type': 'Organization',
        name: s?.site?.name || 'Healthcare Practice',
        url: s?.site?.url || '',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: s?.contacts?.phone || '',
            contactType: 'Customer Service',
            areaServed: 'ZA',
            availableLanguage: 'English',
        },
        sameAs: Object.values(s?.social || {}),
    };

    const toPostal = (addr: Address) => ({
        '@type': 'PostalAddress',
        streetAddress: addr?.street,
        addressLocality: addr?.city,
        addressRegion: addr?.province,
        postalCode: addr?.postalCode,
        addressCountry: addr?.country || 'ZA',
    });

    let jsonLd: unknown;
    if (hasMulti) {
        const branches = (s.locations || []).map((loc) => ({
            '@type': 'LocalBusiness',
            name: loc.name,
            telephone: loc.telephone || s?.contacts?.phone,
            url: s?.site?.url || '',
            address: toPostal(loc.address),
            openingHoursSpecification: Object.entries(loc.hours || {}).map(([day, hours]) => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: String(day),
                opens: String(hours).split(' - ')[0] || '',
                closes: String(hours).split(' - ')[1] || '',
            })),
            branchOf: { '@type': 'Organization', name: s?.site?.name || 'Healthcare Practice' },
        }));
        jsonLd = { '@context': 'https://schema.org', '@graph': [org, ...branches] };
    } else {
        jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: s?.site?.name || 'Healthcare Practice',
            url: s?.site?.url || '',
            telephone: s?.contacts?.phone || '',
            address: toPostal(s?.address || {}),
            openingHoursSpecification: Object.entries(s?.hours || {}).map(([day, hours]) => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: String(day),
                opens: String(hours).split(' - ')[0] || '',
                closes: String(hours).split(' - ')[1] || '',
            })),
            sameAs: Object.values(s?.social || {}),
        };
    }

    return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
};

export default LocalBusiness;