"use client";

import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
    ).then(
      () => {
        setIsSending(false);
        setIsSent(true);
      },
      (error) => {
        setIsSending(false);
        console.error('FAILED...', error.text);
      },
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-orbitron font-bold text-center text-accent-turquoise">
        {t('contact')}
      </h1>
      <div className="mt-12 max-w-2xl mx-auto">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 font-poppins">
              {t('name')}
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-accent-violet focus:border-accent-violet"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 font-poppins">
              {t('email')}
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-accent-violet focus:border-accent-violet"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 font-poppins">
              {t('message')}
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-accent-violet focus:border-accent-violet"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isSending || isSent}
              className="w-full px-8 py-3 bg-accent-violet text-white font-bold rounded-full transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? 'Sending...' : isSent ? 'Sent!' : t('send_message')}
            </button>
          </div>
        </form>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-orbitron font-bold text-accent-violet">Follow Me</h2>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-accent-turquoise transition-colors">ArtStation</a>
            <a href="#" className="text-gray-400 hover:text-accent-turquoise transition-colors">Behance</a>
            <a href="#" className="text-gray-400 hover:text-accent-turquoise transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-accent-turquoise transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}