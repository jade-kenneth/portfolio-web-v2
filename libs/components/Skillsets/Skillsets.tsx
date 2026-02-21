"use client";

import { colors } from "@/libs/theme/colors";
import { Box, Flex, Text } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import type { IconType } from "react-icons";
import { DiMongodb } from "react-icons/di";
import {
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiApollographql,
  SiBrevo,
  SiChakraui,
  SiFramer,
  SiJavascript,
  SiJsonwebtokens,
  SiLighthouse,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiSocketdotio,
  SiStrapi,
  SiSvelte,
  SiTypescript,
  SiXendit,
  SiZod,
} from "react-icons/si";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

type SkillItem = {
  name: string;
  icon: IconType;
  color: string;
  tileBg?: string;
  tileBorder?: string;
  tileHoverBorder?: string;
};

const skillItems: SkillItem[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#EED81C" },
  { name: "HTML5", icon: FaHtml5, color: "#DF4716" },
  { name: "CSS3", icon: FaCss3, color: "#2194F0" },
  { name: "Sass", icon: FaSass, color: "#C96195" },
  { name: "React", icon: FaReact, color: "#50BBD7" },
  { name: "Redux", icon: SiRedux, color: "#7348B7" },
  { name: "MongoDB", icon: DiMongodb, color: "#87D144" },
  { name: "Node.js", icon: FaNodeJs, color: "#88C249" },
  { name: "Git", icon: FaGit, color: "#E94F30" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#CE38F6" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF" },
  { name: "Next.js", icon: RiNextjsFill, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "rgb(47,116,192)" },
  { name: "Apollo GraphQL", icon: SiApollographql, color: "#311C87" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "rgb(56,189,248)" },
  { name: "Chakra UI", icon: SiChakraui, color: "rgb(93,201,202)" },
  { name: "React Query", icon: SiReactquery, color: "#FF4154" },
  { name: "Lighthouse", icon: SiLighthouse, color: "rgb(255,107,57)" },
  { name: "Strapi", icon: SiStrapi, color: "rgb(79,75,255)" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  {
    name: "Xendit",
    icon: SiXendit,
    color: "#4573FF",
    tileBg: "rgba(69, 115, 255, 0.16)",
    tileBorder: "1px solid rgba(69, 115, 255, 0.34)",
    tileHoverBorder: "rgba(69, 115, 255, 0.62)",
  },
  {
    name: "Brevo",
    icon: SiBrevo,
    color: "#0B996E",
    tileBg: "rgba(11, 153, 110, 0.16)",
    tileBorder: "1px solid rgba(11, 153, 110, 0.34)",
    tileHoverBorder: "rgba(11, 153, 110, 0.62)",
  },
  { name: "React Hook Form", icon: SiReacthookform, color: "rgb(79,75,255)" },
  { name: "Zod", icon: SiZod, color: "rgb(79,75,255)" },
  { name: "Svelte", icon: SiSvelte, color: "#FF3E00" },
];

const Skillsets = () => {
  const animation = { duration: 15000, easing: (t: number) => t };
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",

      drag: true,
      created(s) {
        s.moveToIdx(13, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      slides: {
        perView: 10,
        spacing: 50,
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <OuterContentWrapper
      minH={{ base: "440px", md: "460px" }}
      id="skills"
      bgImage={"/101-slide-right.png"}
      bgColor={colors.background.primary}
      position={"relative"}
      overflow={"hidden"}
    >
      <Box
        position={"absolute"}
        top={"-140px"}
        left={"-120px"}
        w={"320px"}
        h={"320px"}
        borderRadius={"50%"}
        pointerEvents={"none"}
        bg={"radial-gradient(circle, rgba(0, 96, 199, 0.2), transparent 70%)"}
      />
      <InnerContentWrapper
        display={"flex"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        maxW={"unset"}
        position={"relative"}
        zIndex={1}
        py={{ base: "70px", md: "80px" }}
      >
        <Flex
          direction={"column"}
          align={"center"}
          mb={{ base: "40px", md: "54px" }}
        >
          <Text
            fontSize={"12px"}
            textTransform={"uppercase"}
            letterSpacing={"0.12em"}
            color={"rgba(255, 255, 255, 0.62)"}
            mb={"10px"}
          >
            Core Tech Stack
          </Text>
          <Text size="header-2" textAlign={"center"} mb={"12px"}>
            Technical Arsenals
          </Text>
          <Text
            textAlign={"center"}
            maxW={"760px"}
            color={"rgba(255, 255, 255, 0.72)"}
          >
            Technologies I use to build reliable, scalable, and user-focused web
            experiences.
          </Text>
        </Flex>

        <Flex w="full" position={"relative"}>
          <Box
            position={"absolute"}
            left={0}
            top={0}
            bottom={0}
            w={"110px"}
            bg={"linear-gradient(90deg, rgba(18, 16, 16, 0.9), transparent)"}
            zIndex={2}
            pointerEvents={"none"}
          />
          <Box
            position={"absolute"}
            right={0}
            top={0}
            bottom={0}
            w={"110px"}
            bg={"linear-gradient(270deg, rgba(18, 16, 16, 0.9), transparent)"}
            zIndex={2}
            pointerEvents={"none"}
          />

          <Box
            ref={sliderRef}
            className="keen-slider"
            w="full"
            style={{ display: "flex", alignItems: "center" }}
          >
            {skillItems.map((skill) => (
              <Flex
                key={skill.name}
                className="keen-slider__slide"
                align={"center"}
                justify={"center"}
                py={"8px"}
              >
                <Flex
                  role="group"
                  align={"center"}
                  justify={"center"}
                  w={{ base: "70px", md: "76px" }}
                  h={{ base: "70px", md: "76px" }}
                  borderRadius={"18px"}
                  border={
                    skill.tileBorder ?? "1px solid rgba(255, 255, 255, 0.14)"
                  }
                  bg={
                    skill.tileBg ??
                    "linear-gradient(180deg, rgba(28, 40, 52, 0.9), rgba(15, 22, 30, 0.95))"
                  }
                  boxShadow={"0px 14px 26px rgba(0, 0, 0, 0.25)"}
                  transition={"transform 180ms ease, border-color 180ms ease"}
                  _hover={{
                    transform: "translateY(-4px)",
                    borderColor:
                      skill.tileHoverBorder ?? "rgba(0, 96, 199, 0.52)",
                  }}
                >
                  <Box
                    as={skill.icon}
                    color={skill.color}
                    fontSize={{ base: "34px", md: "38px" }}
                    transition={"filter 180ms ease"}
                    _groupHover={{ filter: "brightness(1.2)" }}
                  />
                </Flex>
              </Flex>
            ))}
          </Box>
        </Flex>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default Skillsets;
