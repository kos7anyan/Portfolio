"use client";

import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen">
      <Header />
      <ThreeBackground />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold md:text-7xl font-orbitron"
        >
          {t("header.welcome")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl"
        >
          {t("header.subtext")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Link href="/projects" legacyBehavior>
            <a className="px-8 py-3 font-bold transition-all duration-300 border-2 rounded-full border-accent-turquoise text-accent-turquoise hover:bg-accent-turquoise hover:text-background">
              {t("header.button")}
            </a>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}