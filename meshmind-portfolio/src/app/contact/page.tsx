"use client";

import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
    )
    .then((result) => {
        setSubmitMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    }, (error) => {
        setSubmitMessage("Failed to send message. Please try again later.");
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

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
          {t("contact.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-center text-gray-400"
        >
          {t("contact.subtext")}
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto mt-12"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold">{t("contact.name")}</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 bg-gray-900 border rounded-md border-accent-violet focus:outline-none focus:ring-2 focus:ring-accent-violet" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold">{t("contact.email")}</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 bg-gray-900 border rounded-md border-accent-violet focus:outline-none focus:ring-2 focus:ring-accent-violet" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-bold">{t("contact.message")}</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 bg-gray-900 border rounded-md border-accent-violet focus:outline-none focus:ring-2 focus:ring-accent-violet"></textarea>
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full px-8 py-3 font-bold transition-all duration-300 border-2 rounded-full border-accent-turquoise text-accent-turquoise hover:bg-accent-turquoise hover:text-background disabled:opacity-50">
            {isSubmitting ? "Submitting..." : t("contact.submit")}
          </button>
          {submitMessage && <p className="mt-4 text-center">{submitMessage}</p>}
        </motion.form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;