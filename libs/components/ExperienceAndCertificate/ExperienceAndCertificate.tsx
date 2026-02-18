import { colors } from "@/libs/theme/colors";
import {
  Badge,
  Box,
  Button,
  Flex,
  SimpleGrid,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import type { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiApachekafka,
  SiCapacitor,
  SiChakraui,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiNestjs,
  SiSocketdotio,
  SiStrapi,
} from "react-icons/si";
import CustomNextImage from "../CustomNextImage/CustomNextImage";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

type CardProps = {
  desc: string;
  name: string;
  logoSrc: string;
  thumbnail: string;
  linkSrc: string;
  techStack: string[];
};

const items: CardProps[] = [
  {
    desc: "FB Clone - First ReactJS project, replicating home page ui and comment feature of Facebook using ReactJS, Sass, HTML, and CSS.",
    name: "FB Clone",
    linkSrc: "https://jade-kenneth.github.io/",
    logoSrc: "/exp-logo-3.png",
    thumbnail: "/exp-thumbnail-3.png",
    techStack: ["ReactJS", "Sass", "HTML", "CSS"],
  },
  {
    desc: "Share your thoughts and discuss with diverse communities and interests!",
    name: "Blog V1",
    linkSrc: "https://blogdevsitever1.netlify.app/",
    logoSrc: "/exp-logo-4.png",
    thumbnail: "/exp-thumbnail-4.png",
    techStack: ["ReactJS", "Sass", "HTML", "CSS", "ExpressJS", "MongoDB"],
  },
  {
    desc: "Amy Store is an eCommerce site offering a seamless shopping experience with a diverse product range.",
    name: "Amy Store",
    linkSrc: "https://amystore.netlify.app/",
    logoSrc: "/exp-logo-5.png",
    thumbnail: "/exp-thumbnail-5.png",
    techStack: [
      "ReactJS",
      "Sass",
      "HTML",
      "CSS",
      "ExpressJS",
      "MongoDB",
      "Socket.IO",
    ],
  },
  {
    desc: "This portfolio highlights my early work as a Frontend Developer, focusing on clean UI design.",
    name: "Portfolio V1",
    linkSrc: "https://darundaywebdev.netlify.app/",
    logoSrc: "/exp-logo-7.png",
    thumbnail: "/exp-thumbnail-7.png",
    techStack: ["ReactJS", "Sass", "HTML", "CSS"],
  },
  {
    desc: "Internship project at Highoutput Ventures - A Pokedex app with special features battling with other pokemon.",
    name: "Pokedex",
    linkSrc: "https://pokedex-intern-project.vercel.app/",
    logoSrc: "/exp-logo-6.png",
    thumbnail: "/exp-thumbnail-6.png",
    techStack: ["NextJS", "ChakraUI", "RestAPI"],
  },
  {
    desc: "Expert coaching boosts remote teams by driving growth, increasing productivity, and enhancing team morale.",
    name: "Advante",
    linkSrc: "https://studio-advante-git-request-fix-highoutput.vercel.app/",
    logoSrc: "/exp-logo-1.png",
    thumbnail: "/exp-thumbnail-1.png",
    techStack: ["NextJS", "TailwindCSS", "GraphQL", "ChakraUI", "Strapi"],
  },
  {
    desc: "DevLuvs makes developer-focused content creation effortless. Just paste, publish, and let your code shine",
    name: "Devluvs",
    linkSrc: "https://studio-devluvs-highoutput.vercel.app/",
    logoSrc: "/exp-logo-2.png",
    thumbnail: "/exp-thumbnail-2.png",
    techStack: ["NextJS", "ChakraUI", "GraphQL"],
  },
  {
    desc: "Amy Store V2 is a next-generation, AI-powered eCommerce platform designed to optimize performance, refine feature architecture, and elevate user experience and visual design. With intelligent recommendations, smart search capabilities, and personalized shopping experiences, it delivers a seamless and scalable solution across web and Android devices, with iOS support launching soon.",
    name: "Amy Store V2",
    linkSrc: "https://amy-store.vercel.app/",
    logoSrc: "/exp-logo-8.png",
    thumbnail: "/ecommerce-v2.png",
    techStack: [
      "NextJS",
      "ArkUI",
      "TailwindCSS",
      "GraphQL",
      "MongoDB",
      "NestJS",
      "Kafka",
      "Capacitor",
    ],
  },
];

type TechStyle = {
  icon?: IconType;
  textColor: string;
  chipBg: string;
  chipBorder: string;
};

const techStyleMap: Record<string, TechStyle> = {
  ReactJS: {
    icon: FaReact,
    textColor: "#61DAFB",
    chipBg: "rgba(97, 218, 251, 0.14)",
    chipBorder: "rgba(97, 218, 251, 0.38)",
  },
  Sass: {
    icon: FaSass,
    textColor: "#CD6799",
    chipBg: "rgba(205, 103, 153, 0.16)",
    chipBorder: "rgba(205, 103, 153, 0.38)",
  },
  HTML: {
    icon: FaHtml5,
    textColor: "#E44D26",
    chipBg: "rgba(228, 77, 38, 0.16)",
    chipBorder: "rgba(228, 77, 38, 0.4)",
  },
  CSS: {
    icon: FaCss3Alt,
    textColor: "#3E8EDE",
    chipBg: "rgba(62, 142, 222, 0.16)",
    chipBorder: "rgba(62, 142, 222, 0.4)",
  },
  ExpressJS: {
    icon: SiExpress,
    textColor: "#E3E3E3",
    chipBg: "rgba(227, 227, 227, 0.12)",
    chipBorder: "rgba(227, 227, 227, 0.26)",
  },
  MongoDB: {
    icon: SiMongodb,
    textColor: "#4DB33D",
    chipBg: "rgba(77, 179, 61, 0.16)",
    chipBorder: "rgba(77, 179, 61, 0.4)",
  },
  "Socket.IO": {
    icon: SiSocketdotio,
    textColor: "#EFEFEF",
    chipBg: "rgba(239, 239, 239, 0.12)",
    chipBorder: "rgba(239, 239, 239, 0.28)",
  },
  NextJS: {
    icon: RiNextjsFill,
    textColor: "#F5F5F5",
    chipBg: "rgba(245, 245, 245, 0.12)",
    chipBorder: "rgba(245, 245, 245, 0.26)",
  },
  TailwindCSS: {
    icon: RiTailwindCssFill,
    textColor: "#38BDF8",
    chipBg: "rgba(56, 189, 248, 0.16)",
    chipBorder: "rgba(56, 189, 248, 0.42)",
  },
  GraphQL: {
    icon: SiGraphql,
    textColor: "#E535AB",
    chipBg: "rgba(229, 53, 171, 0.14)",
    chipBorder: "rgba(229, 53, 171, 0.36)",
  },
  ChakraUI: {
    icon: SiChakraui,
    textColor: "#5DC9CA",
    chipBg: "rgba(93, 201, 202, 0.14)",
    chipBorder: "rgba(93, 201, 202, 0.36)",
  },
  Strapi: {
    icon: SiStrapi,
    textColor: "#7F6BFF",
    chipBg: "rgba(127, 107, 255, 0.14)",
    chipBorder: "rgba(127, 107, 255, 0.4)",
  },
  ArkUI: {
    textColor: "#8D9CFF",
    chipBg: "rgba(141, 156, 255, 0.14)",
    chipBorder: "rgba(141, 156, 255, 0.36)",
  },
  NestJS: {
    icon: SiNestjs,
    textColor: "#E0234E",
    chipBg: "rgba(224, 35, 78, 0.14)",
    chipBorder: "rgba(224, 35, 78, 0.38)",
  },
  Kafka: {
    icon: SiApachekafka,
    textColor: "#F2F2F2",
    chipBg: "rgba(242, 242, 242, 0.12)",
    chipBorder: "rgba(242, 242, 242, 0.3)",
  },
  RestAPI: {
    textColor: "#FFD36A",
    chipBg: "rgba(255, 211, 106, 0.14)",
    chipBorder: "rgba(255, 211, 106, 0.36)",
  },
  Capacitor: {
    icon: SiCapacitor,
    textColor: "#119EFF",
    chipBg: "rgba(17, 158, 255, 0.14)",
    chipBorder: "rgba(17, 158, 255, 0.36)",
  },
};

const fallbackTechStyle: TechStyle = {
  textColor: "rgba(255, 255, 255, 0.86)",
  chipBg: "rgba(255, 255, 255, 0.12)",
  chipBorder: "rgba(255, 255, 255, 0.26)",
};

const ExperienceAndCertificate = () => {
  return (
    <OuterContentWrapper
      justify={"unset"}
      id="workexperience"
      align={"unset"}
      w="full"
      bgColor={colors.background.secondary}
      position={"relative"}
      overflow={"hidden"}
    >
      <Box
        position={"absolute"}
        top={"-180px"}
        right={"-160px"}
        w={"460px"}
        h={"460px"}
        borderRadius={"50%"}
        bg={"radial-gradient(circle, rgba(0, 96, 199, 0.24), transparent 65%)"}
        pointerEvents={"none"}
      />
      <Box
        position={"absolute"}
        bottom={"-180px"}
        left={"-140px"}
        w={"380px"}
        h={"380px"}
        borderRadius={"50%"}
        bg={"radial-gradient(circle, rgba(0, 96, 199, 0.16), transparent 70%)"}
        pointerEvents={"none"}
      />
      <InnerContentWrapper
        align={"center"}
        justify={"center"}
        mt={{ base: "80px", md: "100px" }}
        h="full"
        w="full"
        display={"flex"}
        bg="transparent"
        direction={"column"}
        mb={{ base: "56px", md: "74px" }}
        position={"relative"}
        zIndex={1}
      >
        <Text
          fontSize={"13px"}
          letterSpacing={"0.16em"}
          textTransform={"uppercase"}
          color={"rgba(255, 255, 255, 0.75)"}
          mb="12px"
        >
          Portfolio Highlights
        </Text>
        <Text
          size="header-2"
          mb={{ base: "16px", md: "20px" }}
          textAlign={"center"}
        >
          Professional Experience
        </Text>
        <Text
          size="paragraph-md"
          mb={{ base: "36px", md: "56px" }}
          maxW={"760px"}
          textAlign={"center"}
          color="rgba(255, 255, 255, 0.8)"
        >
          Explore my work experience, including the projects I&apos;ve
          completed.
        </Text>

        <Flex
          wrap={"wrap"}
          justify={"center"}
          gap={"12px"}
          mb={{ base: "28px", md: "40px" }}
        >
          <StatPill label="Projects Built" value={`${items.length}+`} />
          {/* <StatPill label="Focus Area" value="Frontend Engineering" /> */}
          <StatPill label="Delivery" value="Web & Mobile" />
        </Flex>

        <Tabs variant="unstyled" w="full">
          <TabList
            alignItems={"center"}
            gap={{ base: "10px", md: "12px" }}
            mb={{ base: "28px", md: "48px" }}
            justifyContent={"center"}
            w="fit-content"
            mx={"auto"}
            p={"6px"}
            borderRadius={"full"}
            border={"1px solid rgba(255, 255, 255, 0.14)"}
            bg={"rgba(11, 17, 23, 0.75)"}
            backdropFilter={"blur(8px)"}
          >
            {/* <Tab
              _selected={{
                color: "white",
                fontWeight: 700,
                bg: colors.primary[900],
                boxShadow: "0px 10px 24px rgba(0, 96, 199, 0.35)",
              }}
              _hover={{ color: "white" }}
              borderRadius={"full"}
              px={{ base: "16px", md: "26px" }}
              py={"10px"}
              fontSize={{ base: "15px", md: "17px" }}
              color={"rgba(255, 255, 255, 0.6)"}
            >
              Work Experience
            </Tab> */}
          </TabList>
          <TabPanels>
            <TabPanel p={0}>
              <SimpleGrid
                columns={{ base: 1, lg: 2, xl: 3 }}
                spacing={{ base: "20px", md: "24px" }}
                w="full"
              >
                {items.map((d, idx) => {
                  return (
                    <Card key={`${d.name}-${idx}`} {...d} order={idx + 1} />
                  );
                })}
              </SimpleGrid>
            </TabPanel>
            <TabPanel p={0}>
              <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                minH={{ base: "240px", md: "300px" }}
                border={"1px solid rgba(255, 255, 255, 0.14)"}
                borderRadius={"24px"}
                bg={
                  "linear-gradient(180deg, rgba(26, 35, 45, 0.85), rgba(13, 19, 25, 0.9))"
                }
                p={{ base: "28px", md: "40px" }}
                textAlign={"center"}
              >
                <Text size="header-6" mb="12px" color={"primary.900"}>
                  CERTIFICATES IN PROGRESS
                </Text>
                <Text
                  size="paragraph-md"
                  maxW={"640px"}
                  color={"rgba(255, 255, 255, 0.78)"}
                >
                  This section is being curated and will soon showcase my
                  completed certifications with credential links.
                </Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default ExperienceAndCertificate;

type EnhancedCardProps = CardProps & {
  order: number;
  featured?: boolean;
};

const Card: FC<EnhancedCardProps> = ({
  desc,
  logoSrc,
  linkSrc,
  name,
  thumbnail,
  techStack,
  order,
  featured = false,
}) => {
  return (
    <Flex
      bg={
        "linear-gradient(180deg, rgba(30, 41, 54, 0.95), rgba(15, 20, 27, 0.96))"
      }
      direction={"column"}
      w="full"
      minH={"440px"}
      borderRadius={"20px"}
      p={{ base: "20px", md: "24px" }}
      border={"1px solid rgba(255, 255, 255, 0.1)"}
      boxShadow={"0px 18px 36px rgba(0, 0, 0, 0.24)"}
      transition={
        "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease"
      }
      _hover={{
        transform: "translateY(-8px)",
        borderColor: "rgba(0, 96, 199, 0.7)",
        boxShadow: "0px 24px 44px rgba(0, 96, 199, 0.22)",
      }}
    >
      <Flex
        align={"center"}
        justify={"space-between"}
        mb={{ base: "16px", md: "20px" }}
        gap={"12px"}
      >
        <Flex align={"center"} gap={"12px"}>
          <CustomNextImage
            src={logoSrc}
            borderRadius={"50%"}
            overflow={"hidden"}
            w={{ base: "52px", md: "58px" }}
            h={{ base: "52px", md: "58px" }}
            boxShadow={"0px 10px 24px rgba(0, 0, 0, 0.35)"}
          />
          <Flex direction={"column"}>
            <Text
              size="label-md"
              fontSize={{ base: "17px", md: "20px" }}
              lineHeight={{ base: "22px", md: "28px" }}
            >
              {name}
            </Text>
            <Text
              fontSize={"11px"}
              letterSpacing={"0.12em"}
              color={"rgba(255, 255, 255, 0.55)"}
            >
              PROJECT {String(order).padStart(2, "0")}
            </Text>
          </Flex>
        </Flex>
        {featured && (
          <Badge
            borderRadius={"full"}
            px={"10px"}
            py={"4px"}
            bg={"rgba(0, 96, 199, 0.2)"}
            color={"rgba(180, 218, 255, 1)"}
            border={"1px solid rgba(0, 96, 199, 0.45)"}
            fontSize={"10px"}
            letterSpacing={"0.08em"}
          >
            FEATURED
          </Badge>
        )}
      </Flex>

      <Text
        size="paragraph-sm"
        color={"rgba(255, 255, 255, 0.76)"}
        noOfLines={4}
        minH={"80px"}
        title={desc}
      >
        {desc}
      </Text>

      <Flex mt={"14px"} direction={"column"} gap={"10px"}>
        <Text
          fontSize={"11px"}
          letterSpacing={"0.1em"}
          textTransform={"uppercase"}
          color={"rgba(255, 255, 255, 0.58)"}
        >
          Tech Stack
        </Text>
        <Flex gap={"8px"} wrap={"wrap"}>
          {techStack.map((tech, idx) => {
            const style = techStyleMap[tech] ?? fallbackTechStyle;
            const TechIcon = style.icon;
            return (
              <Flex
                key={`${tech}-${idx}`}
                align={"center"}
                gap={"6px"}
                px={"10px"}
                py={"6px"}
                borderRadius={"full"}
                border={`1px solid ${style.chipBorder}`}
                bg={style.chipBg}
                transition={"filter 180ms ease"}
                _hover={{ filter: "brightness(1.12)" }}
              >
                {TechIcon && (
                  <Box
                    as={TechIcon}
                    color={style.textColor}
                    fontSize={"13px"}
                  />
                )}
                <Text
                  fontSize={"11px"}
                  fontWeight={600}
                  color={style.textColor}
                  lineHeight={"14px"}
                >
                  {tech}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>

      <Flex
        mt={"16px"}
        mb={"20px"}
        borderRadius={"16px"}
        overflow={"hidden"}
        border={"1px solid rgba(255, 255, 255, 0.08)"}
      >
        <CustomNextImage
          src={thumbnail}
          w="full"
          h={{ base: "200px", md: "220px" }}
        />
      </Flex>

      <Link href={linkSrc} target="_blank" rel="noopener noreferrer">
        <Button
          variant={"unstyled"}
          rightIcon={<MdOutlineArrowOutward />}
          bg={"rgba(255, 255, 255, 0.92)"}
          color={"rgba(12, 19, 26, 1)"}
          borderRadius={"full"}
          fontSize={"13px"}
          fontWeight={700}
          px={"16px"}
          py={"10px"}
          _hover={{ bg: "white", transform: "translateY(-1px)" }}
        >
          Visit Website
        </Button>
      </Link>
    </Flex>
  );
};

type StatPillProps = {
  label: string;
  value: string;
};

const StatPill: FC<StatPillProps> = ({ label, value }) => {
  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      px={{ base: "18px", md: "22px" }}
      py={{ base: "10px", md: "12px" }}
      border={"1px solid rgba(255, 255, 255, 0.14)"}
      borderRadius={"14px"}
      bg={"rgba(18, 27, 36, 0.8)"}
      minW={{ base: "120px", md: "170px" }}
    >
      <Text
        fontSize={{ base: "20px", md: "24px" }}
        lineHeight={{ base: "24px", md: "28px" }}
        fontWeight={700}
        color={"primary.900"}
      >
        {value}
      </Text>
      <Text
        fontSize={"12px"}
        color={"rgba(255, 255, 255, 0.7)"}
        textTransform={"uppercase"}
        letterSpacing={"0.08em"}
      >
        {label}
      </Text>
    </Flex>
  );
};
