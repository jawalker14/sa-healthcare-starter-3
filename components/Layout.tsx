import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SkipToContent from './SkipToContent';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col bg-white text-slate-800">
            <SkipToContent />
            <Header />
            <main id="main-content" className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;