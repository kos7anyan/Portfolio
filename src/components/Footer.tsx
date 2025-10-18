"use client";

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="py-4 mt-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm text-gray-400">{t('copyright')}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => changeLanguage('en')}
            className={`text-sm ${i18n.language === 'en' ? 'text-accent-turquoise' : 'text-gray-400'}`}
          >
            EN
          </button>
          <span className="text-gray-400">/</span>
          <button
            onClick={() => changeLanguage('hy')}
            className={`text-sm ${i18n.language === 'hy' ? 'text-accent-turquoise' : 'text-gray-400'}`}
          >
            ARM
          </button>
        </div>
      </div>
    </footer>
  );
}