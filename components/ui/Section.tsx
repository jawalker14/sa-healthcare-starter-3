import React from 'react';

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, description, children, className = '', ...rest }) => {
  return (
  <section className={`mx-auto max-w-6xl px-6 py-18 ${className}`} {...rest}>
      {(title || description) && (
        <div className="mx-auto max-w-3xl text-center">
          {title && <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2>}
          {description && <p className="mt-3 text-slate-700">{description}</p>}
        </div>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
};

export default Section;
