import HeroBackgroundAnimation from "@/libs/components/BackgroundAnimation/HeroBackgroundAnimation";
import Footer from "@/libs/components/Footer/Footer";
import Header from "@/libs/components/Header/Header";
import { theme } from "@/libs/theme";
import { fontFamily } from "@/libs/theme/fonts-family";
import { ChakraBaseProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "DarundayDev",
  description: "I am Jade Kenneth, a front end developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleTagConfig = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-7L0FTM68W3');
  `;

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7L0FTM68W3"
          strategy="beforeInteractive"
        />
        <Script
          id="google-tag-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: googleTagConfig }}
        />
      </head>
      <body className={fontFamily["poppins.400"]}>
        <ChakraBaseProvider theme={theme}>
          <HeroBackgroundAnimation />
          <Header />
          {children}
          {/* <SkillsetBackgroundAnimation /> */}
          <Footer />
        </ChakraBaseProvider>
      </body>
    </html>
  );
}
