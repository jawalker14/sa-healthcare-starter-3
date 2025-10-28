"use client";

import React, { useState } from 'react';
import { Section, CTA } from '@/components/ui';
import Breadcrumbs from '@/components/Breadcrumbs';

export const generateMetadata = () => ({
  title: 'Contact | Your Practice Name',
  description: 'Get in touch for general enquiries. Do not submit sensitive medical information via this form.',
});

type FormState = {
  name: string;
  email: string;
  message: string;
  consent: boolean;
  hp: string; // honeypot
};

type Errors = Partial<Record<keyof Omit<FormState, 'consent'> | 'consent', string>>;

const isValidEmail = (email: string) => {
  return /^(?:[a-zA-Z0-9_'^&+/=?`{|}~!-]+(?:\.[a-zA-Z0-9_'^&+/=?`{|}~!-]+)*|"[^"]+")@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(email.trim());
};

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '', consent: false, hp: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState<string>('');

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!isValidEmail(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    if (!form.consent) e.consent = 'You must agree to the privacy policy';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value } as FormState));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          subject: 'Website contact form',
          hp: form.hp, // honeypot
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = (data && (data.error as string)) || 'Failed to submit';
        setServerError(msg);
        setStatus('error');
        return;
      }
      setStatus('success');
      setForm({ name: '', email: '', message: '', consent: false, hp: '' });
      setErrors({});
    } catch {
      setServerError('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
  <Section title="Contact Us" description="Have a question or need assistance? We’ll respond to your enquiry.">
      <div className="mx-auto max-w-2xl">
    <Breadcrumbs />
        {status === 'success' && (
          <div className="mb-6 rounded-md border border-green-200 bg-green-50 p-4 text-green-800">
            Thank you. Your message has been sent.
          </div>
        )}
        {status === 'error' && serverError && (
          <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-4 text-red-800">
            {serverError}
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot field (hidden) */}
          <div className="sr-only">
            <label htmlFor="hp">Do not fill this field</label>
            <input id="hp" name="hp" type="text" value={form.hp} onChange={handleChange} tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900 ${errors.name ? 'border-red-400' : 'border-slate-300'}`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900 ${errors.email ? 'border-red-400' : 'border-slate-300'}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900 ${errors.message ? 'border-red-400' : 'border-slate-300'}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={form.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? 'consent-error' : undefined}
              />
              <div>
                <label htmlFor="consent" className="text-sm text-slate-700">
                  I agree to the privacy policy and understand my information will be used to respond to my inquiry.
                </label>
                <p className="mt-1 text-xs text-slate-500">
                  We respect your privacy and comply with applicable regulations. Do not submit sensitive medical information.
                </p>
                {errors.consent && (
                  <p id="consent-error" className="mt-1 text-sm text-red-600">
                    {errors.consent}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-2">
              <CTA as="button" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </CTA>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactPage;
