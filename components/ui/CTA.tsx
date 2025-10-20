import React from 'react';

type CTAProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  as?: 'button' | 'a';
  href?: string;
};

const base = 'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold outline-none transition-all duration-200 motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-navy-400';

const variants = {
  primary: 'bg-navy-800 text-white shadow-soft hover:bg-navy-700',
  secondary: 'bg-white text-navy-800 shadow-softer ring-1 ring-slate-200 hover:bg-slate-50',
  ghost: 'text-navy-800 hover:bg-navy-50',
};

const CTA: React.FC<CTAProps> = ({ children, variant = 'primary', as = 'button', href, ...rest }) => {
  const className = `${base} ${variants[variant]}`;
  if (as === 'a' && href) {
    return (
      <a href={href} className={className} {...(rest as any)}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default CTA;
