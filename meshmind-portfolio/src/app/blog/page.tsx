"use client";

import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "The Art of Storytelling in 3D",
    intro: "Exploring how to convey narrative through visual design.",
    image: "/blog/placeholder.png",
  },
  {
    title: "Mastering Hard-Surface Modeling",
    intro: "Techniques for creating clean and detailed hard-surface models.",
    image: "/blog/placeholder.png",
  },
  {
    title: "A Guide to Realistic Texturing",
    intro: "Using Substance Painter to create lifelike materials.",
    image: "/blog/placeholder.png",
  },
];

const Blog = () => {
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
          {t("blog.title")}
        </motion.h1>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="overflow-hidden border border-gray-800 rounded-lg"
            >
              <Image src={article.image} alt={article.title} width={500} height={300} objectFit="cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold font-orbitron">{article.title}</h2>
                <p className="mt-4 text-gray-400">{article.intro}</p>
                <Link href="#" legacyBehavior>
                  <a className="inline-block mt-6 font-bold text-accent-turquoise hover:underline">
                    {t("blog.read_more")}
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;