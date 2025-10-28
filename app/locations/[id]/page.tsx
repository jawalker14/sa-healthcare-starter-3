import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Section } from '@/components/ui';
import settings from '@/content/data/settings.json';
type Address = { street?: string; city?: string; province?: string; postalCode?: string; country?: string };
type Location = { id: string; name: string; telephone?: string; address: Address; hours?: Record<string, string> };
type Settings = { locations?: Location[] };
import type { Metadata } from 'next';

export function generateMetadata({ params }: any): Metadata {
  const loc = (settings as unknown as Settings).locations?.find((l) => l.id === params.id);
  const title = loc ? `${loc.name} | Location` : 'Location | Your Practice Name';
  const description = loc ? `Address, hours, and contact details for ${loc.name}.` : 'Find address, hours, and contact details for our locations.';
  return { title, description };
}

export default function LocationPage({ params }: any) {
  const loc = (settings as unknown as Settings).locations?.find((l) => l.id === params.id);
  if (!loc) {
    return (
      <Section title="Location not found" description="Please return to Locations for the full list.">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs />
          <p className="text-slate-700">The requested location could not be found.</p>
        </div>
      </Section>
    );
  }

  const addressStr = `${loc.address.street}, ${loc.address.city}, ${loc.address.province}, ${loc.address.postalCode}`;
  return (
    <Section title={loc.name} description="Address, contact, and hours.">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs />
        <p className="text-slate-700">{addressStr}</p>
        <p className="text-slate-700">Telephone: {loc.telephone}</p>
        {loc.hours && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Hours</h2>
            <ul className="grid grid-cols-2 gap-x-4 text-sm text-slate-700">
              {Object.entries(loc.hours).map(([day, hours]) => (
                <li key={day} className="capitalize"><span className="font-medium">{day}:</span> {String(hours)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
