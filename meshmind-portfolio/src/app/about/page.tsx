"use client";

import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const skills = ["Blender", "Maya", "ZBrush", "Unreal Engine", "Substance Painter", "Photoshop"];

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container px-4 py-24 mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center md:text-6xl font-orbitron"
        >
          {t("about.title")}
        </motion.h1>
        <div className="flex flex-col items-center mt-12 md:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 mb-8 bg-gray-800 rounded-full md:mb-0 md:mr-12"
          >
            {/* Profile image placeholder */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-lg text-center md:text-left"
          >
            <p className="whitespace-pre-line">{t("about.text")}</p>
            <a href="/cv.pdf" download className="inline-block px-6 py-2 mt-6 font-bold transition-all duration-300 border-2 rounded-full border-accent-violet text-accent-violet hover:bg-accent-violet hover:text-background">
              {t("about.cv")}
            </a>
          </motion.div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center font-orbitron">Skills</h2>
          <div className="flex flex-wrap justify-center mt-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-4 py-2 m-2 border rounded-full border-gray-700"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;