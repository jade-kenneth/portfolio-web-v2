import HeroBackgroundAnimation from "@/libs/components/BackgroundAnimation/HeroBackgroundAnimation";
import Footer from "@/libs/components/Footer/Footer";
import Header from "@/libs/components/Header/Header";
import { theme } from "@/libs/theme";
import { fontFamily } from "@/libs/theme/fonts-family";
import { ChakraBaseProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
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
  return (
    <html lang="en">
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
