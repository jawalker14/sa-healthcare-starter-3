import React from 'react';
import Link from 'next/link';
import Compliance from '../content/partials/compliance.mdx';
import settings from '../content/data/settings.json';

const Footer: React.FC = () => {
    return (
        <footer className="mt-20 border-t border-slate-200 bg-slate-50/60">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                        <h5 className="text-base font-semibold tracking-tight text-slate-900">Quick Links</h5>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/" className="text-slate-600 underline-offset-2 hover:text-navy-800 hover:underline">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-slate-600 underline-offset-2 hover:text-navy-800 hover:underline">About</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-slate-600 underline-offset-2 hover:text-navy-800 hover:underline">Services</Link>
                            </li>
                            <li>
                                <Link href="/locations" className="text-slate-600 underline-offset-2 hover:text-navy-800 hover:underline">Locations</Link>
                            </li>
                            <li>
                                <Link href="/posts" className="text-slate-600 underline-offset-2 hover:text-navy-800 hover:underline">Blog</Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-slate-600 underline-offset-2 hover:text-navy-800 hover:underline">Privacy & POPIA</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-slate-600 underline-offset-2 hover:text-navy-800 hover:underline">Terms</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-base font-semibold tracking-tight text-slate-900">Contact Us</h5>
                        <p className="mt-4 text-slate-600">Email: {settings.contacts.email}</p>
                        <p className="text-slate-600">Phone: {settings.contacts.phone}</p>
                    </div>
                </div>
                <div className="mt-10 rounded-2xl bg-white p-4 shadow-softer">
                    <Compliance />
                </div>
            </div>
        </footer>
    );
};

export default Footer;