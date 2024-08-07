import { colors } from "@/libs/theme/colors";
import { Button, Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { FC, useEffect } from "react";
import { box1, container } from "../Animation/animation";
import CustomNextImage from "../CustomNextImage/CustomNextImage";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

const AboutMe = () => {
  const animation = useAnimation();
  useEffect(() => {
    animation.start({
      scale: 1,
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
    <OuterContentWrapper background={colors.background.secondary} h={"974px"}>
      <InnerContentWrapper>
        <Flex flex={1} h="inherit" w="full">
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            w="420px"
          >
            <Text
              textAlign={"left"}
              color={"primary.900"}
              fontWeight={600}
              mb="16px"
              w="full"
            >
              About Me
            </Text>
            <Text textAlign={"left"} size="header-2" mb="20px" w="full">
              Mabuhay!
            </Text>
            <Text textAlign={"left"} size="paragraph-md" mb="32px" w="full">
              I’m a web developer with more than 3 years of experience. I
              graduated from Visayas State University with a degree in Bachelor
              of Science in Computer Science and have spent the past few years
              honing my skills and working on diverse web development projects.
              I’m excited to bring my experience and passion to new
              opportunities. Let’s create something extraordinary together.{" "}
              <br /> <br /> Want to know more? Download my resume to see my
              detailed experience and skills.
            </Text>
            <Button
              size="xl"
              fontWeight={600}
              fontSize={"18px"}
              variant="solid"
            >
              Download Resume
            </Button>
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
                  imgSrc="/person-team.png"
                  desc="An active member of VSU organization for computer science student."
                  title="Computer Science Student Society Organization (CS3)"
                  year="2015 - 2020"
                />
              )}
              {idx === 12 && (
                <Card
                  imgSrc="/case.png"
                  desc="An active member of VSU organization for computer science student."
                  title="VSU Part-time Staff"
                  year="2017 - 2020"
                />
              )}
              {idx === 20 && (
                <Card
                  imgSrc="/link.png"
                  desc="Undergraduate Thesis"
                  title="A 2D Educational Adventure Game Based on Android"
                  year="2019 - 2020"
                />
              )}
              {idx === 33 && (
                <Card
                  imgSrc="/graduate.png"
                  desc="Graduated with a Bachelor of Science degree in Computer Science from Visayas State University."
                  title="BSCS Graduate"
                  year="2015 - 2020"
                />
              )}
              {idx === 40 && (
                <Card
                  imgSrc="/book.png"
                  desc="Web fundamental, responsive design, web structure, web security etc."
                  title="Learning Web Development"
                  year="2021 - Present"
                />
              )}
              {idx === 47 && (
                <Card
                  imgSrc="/clock.png"
                  desc="Web developer"
                  title="Freelancer"
                  year="2021 - 2022"
                />
              )}
              {idx === 53 && (
                <Card
                  imgSrc="/code.png"
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

type CardProps = {
  year: string;
  title: string;
  desc: string;
  imgSrc: string;
};

const Card: FC<CardProps> = ({ desc, imgSrc, title, year }) => {
  return (
    <Flex
      position={"absolute"}
      gap="24px"
      right="25px"
      w="321px"
      alignItems={"center"}
      zIndex={1}
    >
      <CustomNextImage src={imgSrc} w="86px" h="86px" />
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
