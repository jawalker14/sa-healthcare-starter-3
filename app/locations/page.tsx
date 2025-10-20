import React from 'react';
import Layout from '@/components/Layout';
import MapLink from '@/components/MapLink';
import settings from '@/content/data/settings.json';

const LocationsPage = () => {
  const { locations = [], site } = settings as any;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Locations</h1>
        {Array.isArray(locations) && locations.length > 0 ? (
          <ul className="grid gap-6 md:grid-cols-2">
            {locations.map((loc) => {
              const addressStr = `${loc.address.street}, ${loc.address.city}, ${loc.address.province}, ${loc.address.postalCode}`;
              return (
                <li key={loc.id} className="border rounded-lg p-4 bg-white shadow-sm">
                  <h2 className="text-xl font-semibold">{loc.name}</h2>
                  <p className="text-gray-600 mt-1">{loc.telephone}</p>
                  <p className="mt-2">{addressStr}</p>
                  <div className="mt-2">
                    <MapLink address={addressStr} />
                  </div>
                  {loc.hours && (
                    <div className="mt-4">
                      <h3 className="font-medium">Hours</h3>
                      <ul className="text-sm text-gray-700 grid grid-cols-2 gap-x-4">
                        {Object.entries(loc.hours).map(([day, hours]) => (
                          <li key={day} className="capitalize">
                            <span className="font-medium">{day}:</span> {String(hours)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No locations configured yet. Add them in content/data/settings.json.</p>
        )}
      </div>
    </Layout>
  );
};

export default LocationsPage;
