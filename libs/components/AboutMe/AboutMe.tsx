import { colors } from "@/libs/theme/colors";
import { Badge, Box, Button, Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { FC, useEffect } from "react";
import type { IconType } from "react-icons";
import {
  MdAutoStories,
  MdCode,
  MdGroups,
  MdOutlineCode,
  MdRocketLaunch,
  MdSchool,
  MdWorkOutline,
} from "react-icons/md";
import { box1, container } from "../Animation/animation";
import CustomNextImage from "../CustomNextImage/CustomNextImage";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

const AboutMe = () => {
  const animation = useAnimation();
  useEffect(() => {
    animation.start({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    });
    // if () {

    //   //   animation2.start({
    //   //     scale: 0,
    //   //   });
    // } else {
    //   // ref1.textContent = 0;
    //   animation.start({
    //     scale: 0,
    //   });
    // }
  }, [animation]);
  return (
    <OuterContentWrapper
      id="aboutme"
      background={colors.background.secondary}
      h={"974px"}
    >
      <InnerContentWrapper>
        <Flex flex={1} h="inherit" w="full" align={"center"}>
          <Flex
            as={motion.div}
            animate={animation}
            initial={{ scale: 0.95, opacity: 0 }}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            w={{ base: "full", xl: "460px" }}
            p={{ base: "24px", md: "30px" }}
            borderRadius={"20px"}
            border={"1px solid rgba(255, 255, 255, 0.12)"}
            bg={
              "linear-gradient(180deg, rgba(30, 42, 55, 0.9), rgba(15, 22, 30, 0.95))"
            }
            boxShadow={"0px 20px 38px rgba(0, 0, 0, 0.26)"}
            position={"relative"}
            overflow={"hidden"}
          >
            <Box
              position={"absolute"}
              top={"-130px"}
              right={"-100px"}
              w={"240px"}
              h={"240px"}
              borderRadius={"50%"}
              bg={
                "radial-gradient(circle, rgba(0, 96, 199, 0.32), rgba(0, 96, 199, 0))"
              }
            />
            <Badge
              mb="14px"
              px="12px"
              py="6px"
              borderRadius={"full"}
              bg={"rgba(0, 96, 199, 0.22)"}
              color={"rgba(191, 223, 255, 1)"}
              border={"1px solid rgba(0, 96, 199, 0.45)"}
              fontSize={"11px"}
              letterSpacing={"0.08em"}
              textTransform={"uppercase"}
              fontWeight={700}
            >
              About Me
            </Badge>
            <Text
              textAlign={"left"}
              size="header-2"
              mb="16px"
              w="full"
              lineHeight={{ base: "44px", md: "52px" }}
            >
              Mabuhay! I create fast, usable, and modern web experiences.
            </Text>
            <Text
              textAlign={"left"}
              size="paragraph-md"
              mb="26px"
              w="full"
              color={"rgba(255, 255, 255, 0.86)"}
            >
              I’m a web developer with more than{" "}
              {new Date().getFullYear() - 2022} years of experience. I graduated
              from Visayas State University with a degree in Bachelor of Science
              in Computer Science and have spent the past few years honing my
              skills and working on diverse web development projects. I’m
              excited to bring my experience and passion to new opportunities.
            </Text>

            <Flex gap={"10px"} wrap={"wrap"}>
              <Button
                size="xl"
                fontWeight={700}
                fontSize={"16px"}
                variant="solid"
              >
                Download Resume
              </Button>
              <Link href="#contactme">
                <Button
                  variant={"unstyled"}
                  border={"1px solid rgba(255, 255, 255, 0.2)"}
                  bg={"rgba(255, 255, 255, 0.1)"}
                  color={"white"}
                  fontSize={"16px"}
                  fontWeight={700}
                  size={"xl"}
                  px={"18px"}
                  py={"10px"}
                  borderRadius={"10px"}
                  _hover={{ bg: "rgba(255, 255, 255, 0.16)" }}
                >
                  Let&apos;s Connect
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flex={1}
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="visible"
          flexWrap={"wrap"}
          gap="20px"
          direction={"column"}
        >
          {Array.from({ length: 60 }).map((_, idx) => (
            <Flex
              key={idx}
              as={motion.div}
              variants={box1}
              position={"relative"}
              w="fit-content"
            >
              <CustomNextImage
                src="/line.png"
                zIndex={0}
                mr="300px"
                width={"8px"}
                height="13px"
              />
              {idx === 4 && (
                <Card
                  accentColor="rgba(0, 96, 199, 1)"
                  icon={MdGroups}
                  desc="An active member of VSU organization for computer science student."
                  title="Computer Science Student Society Organization (CS3)"
                  year="2015 - 2020"
                />
              )}
              {idx === 12 && (
                <Card
                  accentColor="rgba(90, 189, 148, 1)"
                  icon={MdWorkOutline}
                  desc="An active member of VSU organization for computer science student."
                  title="VSU Part-time Staff"
                  year="2017 - 2020"
                />
              )}
              {idx === 20 && (
                <Card
                  accentColor="rgba(239, 167, 71, 1)"
                  icon={MdCode}
                  desc="Undergraduate Thesis"
                  title="A 2D Educational Adventure Game Based on Android"
                  year="2019 - 2020"
                />
              )}
              {idx === 33 && (
                <Card
                  accentColor="rgba(147, 124, 255, 1)"
                  icon={MdSchool}
                  desc="Graduated with a Bachelor of Science degree in Computer Science from Visayas State University."
                  title="BSCS Graduate"
                  year="2015 - 2020"
                />
              )}
              {idx === 40 && (
                <Card
                  accentColor="rgba(97, 217, 208, 1)"
                  icon={MdAutoStories}
                  desc="Web fundamental, responsive design, web structure, web security etc."
                  title="Learning Web Development"
                  year="2021 - Present"
                />
              )}
              {idx === 47 && (
                <Card
                  accentColor="rgba(255, 130, 130, 1)"
                  icon={MdRocketLaunch}
                  desc="Web developer"
                  title="Freelancer"
                  year="2021 - 2022"
                />
              )}
              {idx === 53 && (
                <Card
                  accentColor="rgba(78, 174, 255, 1)"
                  icon={MdOutlineCode}
                  desc="Working as a front-end developer at ScaleForge."
                  title="Frontend Developer"
                  year="2022 - Present"
                />
              )}
            </Flex>
          ))}
        </Flex>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default AboutMe;

type InfoPillProps = {
  label: string;
  value: string;
};

const InfoPill: FC<InfoPillProps> = ({ label, value }) => {
  return (
    <Flex
      direction={"column"}
      p={"10px 12px"}
      borderRadius={"12px"}
      border={"1px solid rgba(255, 255, 255, 0.14)"}
      bg={"rgba(15, 24, 33, 0.75)"}
      minW={"140px"}
    >
      <Text
        fontSize={"11px"}
        textTransform={"uppercase"}
        letterSpacing={"0.08em"}
        color={"rgba(255, 255, 255, 0.66)"}
        mb="4px"
      >
        {label}
      </Text>
      <Text
        fontSize={"14px"}
        fontWeight={700}
        lineHeight={"18px"}
        color={"white"}
      >
        {value}
      </Text>
    </Flex>
  );
};

type CardProps = {
  year: string;
  title: string;
  desc: string;
  icon: IconType;
  accentColor: string;
};

const Card: FC<CardProps> = ({
  accentColor,
  desc,
  icon: Icon,
  title,
  year,
}) => {
  return (
    <Flex
      position={"absolute"}
      gap="24px"
      right="25px"
      w="321px"
      alignItems={"center"}
      zIndex={1}
    >
      <Flex
        position={"relative"}
        w="90px"
        h="90px"
        align={"center"}
        justify={"center"}
      >
        <Box
          position={"absolute"}
          inset={"-6px"}
          borderRadius={"50%"}
          opacity={0.75}
          bg={`radial-gradient(circle, ${accentColor} 8%, rgba(255, 255, 255, 0) 68%)`}
        />
        <Flex
          w="86px"
          h="86px"
          borderRadius={"50%"}
          align={"center"}
          justify={"center"}
          border={`1px solid ${accentColor}`}
          boxShadow={`0 10px 28px ${accentColor}40`}
          bg={
            "linear-gradient(180deg, rgba(31, 43, 56, 0.95), rgba(13, 20, 27, 0.98))"
          }
          position={"relative"}
        >
          <Box as={Icon} color={accentColor} fontSize={"34px"} />
        </Flex>
      </Flex>
      <Flex direction={"column"} maxW={"211px"} w="full">
        <Text fontWeight={500} color={"primary.900"} mb="8px">
          {year}
        </Text>
        <Text fontWeight={600} lineHeight={"28px"} fontSize={"18px"} mb="12px">
          {title}
        </Text>
        <Text lineHeight={"20px"} color={"rgba(255, 255, 255, 0.8)"}>
          {desc}
        </Text>
      </Flex>
    </Flex>
  );
};
