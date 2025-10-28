import React, { ElementType } from 'react';

type CardProps = {
  as?: ElementType;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({ as = 'div', title, subtitle, children, href, className = '' }) => {
  const Element = (href ? 'a' : as) as ElementType;
  const props = (href ? { href } : {}) as Record<string, unknown>;
  return (
    <Element
      {...props}
      className={`group block rounded-2xl bg-white p-6 shadow-softer outline-none ring-1 ring-slate-100 transition-all duration-300 ease-out hover:shadow-soft focus-visible:ring-2 focus-visible:ring-navy-400 motion-reduce:transition-none ${className}`}
    >
      {title && (
        <h3 className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-navy-800">{title}</h3>
      )}
      {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
      {children && <div className="mt-4 text-slate-700">{children}</div>}
    </Element>
  );
};

export default Card;
