import React from 'react';
import Link from 'next/link';
import Compliance from '../content/partials/compliance.mdx';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <h5 className="text-lg font-semibold">Quick Links</h5>
                        <ul className="list-none">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
                            </li>
                            <li>
                                <Link href="/posts/welcome" className="text-gray-400 hover:text-white">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h5 className="text-lg font-semibold">Contact Us</h5>
                        <p className="text-gray-400">Email: info@example.com</p>
                        <p className="text-gray-400">Phone: +27 12 345 6789</p>
                    </div>
                </div>
                <div className="mt-6">
                    <Compliance />
                </div>
            </div>
        </footer>
    );
};

export default Footer;