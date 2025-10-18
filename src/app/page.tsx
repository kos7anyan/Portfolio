"use client";

import { useTranslation } from 'react-i18next';
import { MotionDiv, MotionH1, MotionP, MotionLink } from '@/components/Motion';

export default function Home() {
  const { t } = useTranslation();

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center"
    >
      <MotionH1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-7xl font-orbitron font-bold text-accent-turquoise animate-pulse"
      >
        {t('welcome')}
      </MotionH1>
      <MotionP
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 text-xl text-gray-300 font-poppins"
      >
        {t('tagline')}
      </MotionP>
      <MotionLink
        href="/projects"
        className="mt-8 px-8 py-3 bg-accent-violet text-white font-bold rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {t('view_projects')}
      </MotionLink>
    </MotionDiv>
  );
}
