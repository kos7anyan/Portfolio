"use client";

import "./globals.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { Orbitron, Poppins } from 'next/font/google';
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { usePathname } from "next/navigation";
import Head from "next/head";

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <I18nextProvider i18n={i18n}>
      <html lang="en">
        <Head>
          <title>MeshMind – by Hayk Kostanyan</title>
          <meta name="description" content="Crafting Worlds, One Polygon at a Time" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <body className={`${orbitron.variable} ${poppins.variable} font-poppins`}>
          <AnimatePresence mode="wait">
            <PageTransition key={pathname}>
              {children}
            </PageTransition>
          </AnimatePresence>
        </body>
      </html>
    </I18nextProvider>
  );
}
