import type { Metadata } from "next";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MeshMind – by Hayk Kostanyan",
  description: "Crafting Worlds, One Polygon at a Time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
