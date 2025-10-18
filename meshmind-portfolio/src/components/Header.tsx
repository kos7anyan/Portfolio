"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm">
      <Link href="/" legacyBehavior>
        <a className="flex items-center space-x-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 text-2xl font-bold text-accent-turquoise"
          >
            M
          </motion.div>
          <span className="text-xl font-bold font-orbitron">MeshMind</span>
        </a>
      </Link>
      <nav className="hidden space-x-4 md:flex">
        <Link href="/" legacyBehavior><a className="hover:text-accent-turquoise">{t("navigation.home")}</a></Link>
        <Link href="/about" legacyBehavior><a className="hover:text-accent-turquoise">{t("navigation.about")}</a></Link>
        <Link href="/projects" legacyBehavior><a className="hover:text-accent-turquoise">{t("navigation.projects")}</a></Link>
        <Link href="/blog" legacyBehavior><a className="hover:text-accent-turquoise">{t("navigation.blog")}</a></Link>
        <Link href="/contact" legacyBehavior><a className="hover:text-accent-turquoise">{t("navigation.contact")}</a></Link>
      </nav>
      <div className="flex items-center space-x-2">
        <button onClick={() => changeLanguage("en")} className={`px-2 py-1 text-sm rounded ${i18n.language === 'en' ? 'text-accent-turquoise' : ''}`}>EN</button>
        <span>/</span>
        <button onClick={() => changeLanguage("am")} className={`px-2 py-1 text-sm rounded ${i18n.language === 'am' ? 'text-accent-turquoise' : ''}`}>ARM</button>
      </div>
    </header>
  );
};

export default Header;