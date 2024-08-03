"use client";

import AboutMe from "@/libs/components/AboutMe/AboutMe";
import ContactUs from "@/libs/components/ContactUs/ContactUs";
import ExperienceAndCertificate from "@/libs/components/ExperienceAndCertificate/ExperienceAndCertificate";
import Hero from "@/libs/components/Hero/Hero";
import Skillsets from "@/libs/components/Skillsets/Skillsets";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skillsets />
      <ExperienceAndCertificate />
      <ContactUs />
    </div>
  );
}
