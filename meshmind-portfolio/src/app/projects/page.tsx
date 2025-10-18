"use client";

import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "CyberCity Environment",
    description: "A futuristic cityscape built for Unreal Engine.",
    image: "/projects/placeholder.png",
    type: "Environment",
    software: "Unreal Engine, Blender"
  },
  {
    title: "Character Model",
    description: "A high-poly character model for a game.",
    image: "/projects/placeholder.png",
    type: "Character",
    software: "ZBrush, Maya"
  },
  {
    title: "Game Asset Pack",
    description: "A collection of assets for a sci-fi game.",
    image: "/projects/placeholder.png",
    type: "Assets",
    software: "Blender, Substance Painter"
  }
];

const Projects = () => {
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
          {t("projects.title")}
        </motion.h1>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="overflow-hidden border border-gray-800 rounded-lg group"
            >
              <div className="relative w-full h-64">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-all duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl font-bold font-orbitron">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-400">{t('projects.project_type')}: {project.type}</p>
                <p className="text-sm text-gray-400">{t('projects.software')}: {project.software}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;