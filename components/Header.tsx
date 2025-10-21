"use client";
import React from 'react';
import settings from '@/content/data/settings.json';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname() || '/';

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    const baseLink = 'rounded-lg px-2 py-1 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-navy-400';
    const linkClass = (href: string) => `${baseLink} ${isActive(href) ? 'text-navy-800' : 'text-slate-800 hover:text-navy-800'}`;
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="text-xl font-semibold tracking-tight text-navy-800 focus-visible:outline-none">{settings.site.name}</a>
                <nav aria-label="Primary">
                    <ul className="flex items-center gap-6">
                        <li>
                              <a className={linkClass('/')} href="/" aria-current={isActive('/') ? 'page' : undefined}>Home</a>
                        </li>
                        <li>
                              <a className={linkClass('/about')} href="/about" aria-current={isActive('/about') ? 'page' : undefined}>About</a>
                        </li>
                        <li>
                              <a className={linkClass('/posts')} href="/posts" aria-current={isActive('/posts') ? 'page' : undefined}>Blog</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;