import React from 'react';

type HeroProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  kicker?: React.ReactNode;
  cta?: React.ReactNode;
  media?: React.ReactNode;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, kicker, cta, media }) => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-22 md:grid-cols-2">
        <div>
          {kicker && (
            <div className="mb-3 inline-flex items-center rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700 ring-1 ring-inset ring-navy-100">
              {kicker}
            </div>
          )}
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-4 max-w-prose text-lg text-slate-700">{subtitle}</p>
          )}
          {cta && <div className="mt-8 flex items-center gap-3">{cta}</div>}
        </div>
        {media && (
          <div className="relative">
            <div className="rounded-3xl bg-white p-2 shadow-soft transition-transform duration-300 ease-out motion-reduce:transition-none hover:scale-[1.01]">
              {media}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
