/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/footer";
import "animate.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nahuel Guerra - Developer Full Stack & Designer",
};

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  metadata.title = "Nahuel Guerra - Developer Full Stack & Designer";
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index" />
        <meta
          name="description"
          content="Nahuel Guerra, +2 years of experience in the software development sector. from Argentina, Buenos Aires. specialized in frontend and backend."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Nahuel Guerra - Developer Full Stack & Designer"
        />
        <meta
          property="og:description"
          content="Nahuel Guerra, +2 years of experience in the software development sector. from Argentina, Buenos Aires. specialized in frontend and backend."
        />

        <meta property="og:url" content="https://nahuelguerra.com.ar" />

        <meta
          property="og:image"
          content="https://www.nahuelguerra.com.ar/foto-principal-lik.webp"
        />

        <link rel="canonical" href="https://nahuelguerra.com.ar" />
      </head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nahuel Guerra",
            jobTitle: "Full Stack Developer & Designer",
            url: "https://www.nahuelguerra.com.ar",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Buenos Aires",
              addressCountry: "Argentina",
            },
            sameAs: [
              "https://www.linkedin.com/in/nahuel-guerra/",
              "https://github.com/lautiok",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
          }),
        }}
      />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
