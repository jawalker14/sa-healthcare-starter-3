import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="text-xl font-semibold tracking-tight text-navy-800 focus-visible:outline-none">SA Healthcare</a>
                <nav aria-label="Primary">
                    <ul className="flex items-center gap-6">
                        <li>
                              <a className="rounded-lg px-2 py-1 text-slate-800 outline-none transition-colors hover:text-navy-800 focus-visible:ring-2 focus-visible:ring-navy-400" href="/" aria-current="page">Home</a>
                        </li>
                        <li>
                              <a className="rounded-lg px-2 py-1 text-slate-800 outline-none transition-colors hover:text-navy-800 focus-visible:ring-2 focus-visible:ring-navy-400" href="/about">About</a>
                        </li>
                        <li>
                              <a className="rounded-lg px-2 py-1 text-slate-800 outline-none transition-colors hover:text-navy-800 focus-visible:ring-2 focus-visible:ring-navy-400" href="/posts">Blog</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;