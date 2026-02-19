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
  SiBrevo,
  SiCapacitor,
  SiChakraui,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiNestjs,
  SiReacthookform,
  SiSocketdotio,
  SiStrapi,
  SiXendit,
  SiZod,
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
  inprogress?: boolean;
};

const items: CardProps[] = [
  {
    desc: "My first fullstack application, built as a personal learning project. While studying web development, I documented my learnings and transformed them into a functional blog platform. This project reflects my early exploration of both frontend and backend development, turning practice and notes into a working application.",
    name: "Blog v1 ",
    linkSrc: "https://blogdevsitever1.netlify.app/",
    logoSrc: "/exp-logo-4.png",
    thumbnail: "/exp-thumbnail-4.png",
    techStack: ["ReactJS", "Sass", "RestAPI", "CSS", "ExpressJS", "MongoDB"],
  },
  {
    desc: "My second fullstack application, featuring Socket.IO integration for real-time chat functionality. This project strengthened my experience in building interactive eCommerce features while implementing real-time communication between users and the system.",
    name: "Amy Store V1 ",
    linkSrc: "https://amystore.netlify.app/",
    logoSrc: "/exp-logo-5.png",
    thumbnail: "/exp-thumbnail-5.png",
    techStack: [
      "ReactJS",
      "Sass",
      "RestAPI",
      "CSS",
      "ExpressJS",
      "MongoDB",
      "Socket.IO",
    ],
  },
  {
    desc: "Replicated Facebook’s homepage UI and comment functionality using ReactJS, Sass, and CSS — my first hands-on project using the React framework.",
    name: "Facebook Clone",
    linkSrc: "https://jade-kenneth.github.io/",
    logoSrc: "/exp-logo-3.png",
    thumbnail: "/exp-thumbnail-3.png",
    techStack: ["ReactJS", "Sass", "HTML", "CSS"],
  },
  {
    desc: "This portfolio showcases my early work as a Frontend Developer, highlighting my focus on clean UI design and user-friendly interfaces, including concepts and layouts based on my own design ideas.",
    name: "Portfolio V1",
    linkSrc: "https://darundaywebdev.netlify.app/",
    logoSrc: "/exp-logo-7.png",
    thumbnail: "/exp-thumbnail-7.png",
    techStack: ["ReactJS", "Sass", "HTML", "CSS"],
  },
  {
    desc: "Developed a Pokédex web application featuring enhanced functionalities, including Pokémon battle simulations. Integrated and consumed REST APIs to fetch and manage dynamic data  and smooth user interaction.",
    name: "Pokedex",
    linkSrc: "https://pokedex-intern-project.vercel.app/",
    logoSrc: "/exp-logo-6.png",
    thumbnail: "/exp-thumbnail-6.png",
    techStack: ["NextJS", "ChakraUI", "RestAPI"],
  },

  {
    desc: "One of the frontend developed UI for Devluvs, transforming UI designs into responsive, mobile-ready web applications with a strong focus on clean implementation and user experience.",
    name: "Devluvs",
    linkSrc: "https://studio-devluvs-highoutput.vercel.app/",
    logoSrc: "/exp-logo-2.png",
    thumbnail: "/exp-thumbnail-2.png",
    techStack: ["NextJS", "ChakraUI", "GraphQL", "TailwindCSS"],
  },
  {
    desc: "Led the frontend development for Advante, transforming UI designs into responsive, mobile-ready web applications with a strong focus on clean implementation and user experience.",
    name: "Advante",
    linkSrc: "https://studio-advante-git-request-fix-highoutput.vercel.app/",
    logoSrc: "/exp-logo-1.png",
    thumbnail: "/exp-thumbnail-1.png",
    techStack: ["NextJS", "TailwindCSS", "GraphQL", "ChakraUI", "Strapi"],
  },
  {
    desc: "Amy Store V2 is a next-generation eCommerce platform built with enhanced feature implementation, optimized performance — available on web and Android, with iOS coming soon.",
    name: "Amy Store V2",
    linkSrc: "https://amy-store.vercel.app/",
    logoSrc: "/exp-logo-8.png",
    thumbnail: "/ecommerce-v2.png",
    techStack: [
      "NextJS",
      "ArkUI",
      "TailwindCSS",
      "GraphQL",
      "RestAPI",
      "MongoDB",
      "NestJS",
      "Kafka",
      "Capacitor",
      "Xendit",
      "Brevo",
      "React Hook Form",
      "Zod",
      "Zustand",
    ],
    inprogress: true,
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
  Xendit: {
    icon: SiXendit,
    textColor: "#4573FF",
    chipBg: "rgba(69, 115, 255, 0.14)",
    chipBorder: "rgba(69, 115, 255, 0.38)",
  },
  Brevo: {
    icon: SiBrevo,
    textColor: "#0B996E",
    chipBg: "rgba(11, 153, 110, 0.14)",
    chipBorder: "rgba(11, 153, 110, 0.38)",
  },
  "React Hook Form": {
    icon: SiReacthookform,
    textColor: "#EC5990",
    chipBg: "rgba(236, 89, 144, 0.14)",
    chipBorder: "rgba(236, 89, 144, 0.38)",
  },
  Zod: {
    icon: SiZod,
    textColor: "#3E67B1",
    chipBg: "rgba(62, 103, 177, 0.14)",
    chipBorder: "rgba(62, 103, 177, 0.38)",
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
  inprogress?: boolean;
};

const Card: FC<EnhancedCardProps> = ({
  desc,
  logoSrc,
  linkSrc,
  name,
  thumbnail,
  techStack,
  order,
  inprogress = false,
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
        <Flex height={"full"}>
          {inprogress && (
            <Badge
              borderRadius={"full"}
              px={"10px"}
              h="fit-content"
              py={"4px"}
              bg={"rgba(0, 96, 199, 0.2)"}
              color={"rgba(180, 218, 255, 1)"}
              border={"1px solid rgba(0, 96, 199, 0.45)"}
              boxShadow={
                "0px 0px 0px 1px rgba(120, 201, 255, 0.36), 0px 0px 18px rgba(0, 122, 255, 0.52)"
              }
              fontSize={"10px"}
              letterSpacing={"0.08em"}
            >
              In progress
            </Badge>
          )}
        </Flex>
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
