"use client";

import { useTranslation } from 'react-i18next';
import { MotionHeader, MotionNav, MotionLink } from './Motion';

export default function Header() {
  const { t } = useTranslation();

  return (
    <MotionHeader
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <MotionLink
          href="/"
          className="text-2xl font-orbitron font-bold text-accent-turquoise"
          whileHover={{ scale: 1.05 }}
        >
          MeshMind
        </MotionLink>
        <MotionNav className="hidden md:flex space-x-8 items-center">
          <MotionLink href="/about" className="font-poppins" whileHover={{ color: '#9C27FF' }}>
            {t('about_me')}
          </MotionLink>
          <MotionLink href="/projects" className="font-poppins" whileHover={{ color: '#9C27FF' }}>
            {t('projects')}
          </MotionLink>
          <MotionLink href="/blog" className="font-poppins" whileHover={{ color: '#9C27FF' }}>
            {t('blog')}
          </MotionLink>
          <MotionLink href="/contact" className="font-poppins" whileHover={{ color: '#9C27FF' }}>
            {t('contact')}
          </MotionLink>
        </MotionNav>
      </div>
    </MotionHeader>
  );
}