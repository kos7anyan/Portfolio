"use client";

import { useTranslation } from "react-i18next";
import { FaArtstation, FaBehance, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-4 mt-8 text-center border-t border-gray-800">
      <div className="flex justify-center space-x-4">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent-turquoise"><FaArtstation size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent-turquoise"><FaBehance size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent-turquoise"><FaLinkedin size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent-turquoise"><FaInstagram size={24} /></a>
      </div>
      <p className="mt-4 text-sm">{t("footer.copyright")}</p>
    </footer>
  );
};

export default Footer;