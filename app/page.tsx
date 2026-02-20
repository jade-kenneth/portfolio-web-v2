"use client";

import AboutMe from "@/libs/components/AboutMe/AboutMe";
import ContactUs from "@/libs/components/ContactUs/ContactUs";
import ExperienceAndCertificate from "@/libs/components/ExperienceAndCertificate/ExperienceAndCertificate";
import Hero from "@/libs/components/Hero/Hero";
import Skillsets from "@/libs/components/Skillsets/Skillsets";
import Testimonials from "@/libs/components/Testimonials";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box position={"relative"}>
      <Hero />
      <AboutMe />
      <Skillsets />
      <ExperienceAndCertificate />
      <Testimonials />
      <ContactUs />
    </Box>
  );
}
