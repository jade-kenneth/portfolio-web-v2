"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import { FC, useRef } from "react";
import { FaLinkedinIn, FaQuoteRight, FaStar } from "react-icons/fa";
import { colors } from "../theme/colors";
import CustomNextImage from "./CustomNextImage/CustomNextImage";
import InnerContentWrapper from "./InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "./OuterContentWrapper/OuterContentWrapper";

type TestimonialProps = {
  imageSrc: string;
  name: string;
  job: string;
  testimony: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
};

type TestimonialCardProps = TestimonialProps & {
  onPause: () => void;
  onResume: () => void;
};

const testimonialItems: TestimonialProps[] = [
  {
    imageSrc: "/jd.jpeg",
    name: "Jane Dhell Cagas",
    job: "UI/UX Designer",
    linkedinUrl: "https://www.linkedin.com/in/jadeyc/",
    testimony:
      "I worked with Jade Kenneth Darunday, and I can confidently vouch for him as a developer. He is friendly, approachable, and easy to work with. As a UI/UX Designer, I appreciated how he not only followed the design but also suggested ideas that improved the overall user experience. He works on websites, backend systems, and mobile apps, making him flexible and reliable across different parts of a project. He takes initiative and consistently delivers quality work. Any team would be lucky to have him.",
  },
  {
    imageSrc: "/kent.png",
    name: "Kent Bryan Maglinao",
    job: "Senior Backend Engineer",
    linkedinUrl: "https://www.linkedin.com/in/kent-bryan-maglinao/",
    testimony:
      "In a fast-paced development environment, reliability is everything, and Jade Kenneth is the one of the most dependable developer I’ve worked with. His dependability made our entire project run smoother.",
  },
  {
    imageSrc: "/pewee.png",
    name: "Carmella Ventanilla",
    job: "Senior Software Quality Assurance Engineer",
    portfolioUrl:
      "https://peweeventanilla.github.io/Carmella-Ventanilla-Portfolio/",
    testimony:
      "I worked closely with him as a Software Quality Engineer, and he is a reliable and collaborative Frontend Developer. He takes reported issues seriously, fixes them quickly, and communicates clearly throughout the process. We constantly coordinate to monitor bugs, validate fixes, and ensure everything is stable before release. He is proactive, responsible, and committed to delivering quality work.",
  },
  {
    imageSrc: "/john.png",
    name: "John Christopher Go",
    job: "Senior Frontend Engineer",
    linkedinUrl: "https://www.linkedin.com/in/jc-go/",
    testimony:
      "I worked with him as a fellow Frontend Developer, and he is a great teammate to collaborate with. He writes clean and maintainable code, communicates clearly, and is always open to feedback. When working on features or fixing bugs, he stays proactive and makes sure everything is implemented properly. He is reliable, easy to work with, and focused on delivering quality results as a team.",
  },
];

const Testimonials = () => {
  const animation = { duration: 16000, easing: (t: number) => t };
  const isSliderPaused = useRef(false);
  const [sliderRef, sliderInstanceRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      drag: true,
      created(s) {
        if (isSliderPaused.current) return;
        s.moveToIdx(2, true, animation);
      },
      updated(s) {
        if (isSliderPaused.current) return;
        s.moveToIdx(s.track.details.abs + 1, true, animation);
      },
      animationEnded(s) {
        if (isSliderPaused.current) return;
        s.moveToIdx(s.track.details.abs + 1, true, animation);
      },
      slides: {
        perView: 2,
        spacing: 20,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 3,
            spacing: 24,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 24,
          },
        },
      },
    },
    []
  );

  const pauseSlider = () => {
    isSliderPaused.current = true;
    sliderInstanceRef.current?.animator.stop();
  };

  const resumeSlider = () => {
    isSliderPaused.current = false;
    const slider = sliderInstanceRef.current;
    if (!slider) return;
    slider.moveToIdx(slider.track.details.abs + 1, true, animation);
  };

  return (
    <OuterContentWrapper
      minH={{ base: "500px", md: "560px" }}
      py={{ base: "70px", md: "80px" }}
      id="testimonials"
      bgColor={colors.background.secondary}
      position={"relative"}
      overflow={"hidden"}
    >
      <Box
        position={"absolute"}
        inset={0}
        pointerEvents={"none"}
        bg={
          "linear-gradient(180deg, rgba(7, 12, 19, 0.12), rgba(7, 12, 19, 0.6))"
        }
      />
      <Box
        position={"absolute"}
        inset={0}
        pointerEvents={"none"}
        opacity={0.24}
        bgImage={
          "repeating-linear-gradient(0deg, rgba(137, 182, 255, 0.12) 0px, rgba(137, 182, 255, 0.12) 1px, transparent 1px, transparent 44px), repeating-linear-gradient(90deg, rgba(137, 182, 255, 0.12) 0px, rgba(137, 182, 255, 0.12) 1px, transparent 1px, transparent 44px)"
        }
      />
      <Box
        position={"absolute"}
        top={{ base: "8%", md: "12%" }}
        left={"-8%"}
        right={"-8%"}
        h={{ base: "170px", md: "220px" }}
        transform={"rotate(-5deg)"}
        pointerEvents={"none"}
        bg={
          "linear-gradient(90deg, rgba(0, 96, 199, 0), rgba(0, 96, 199, 0.22), rgba(0, 96, 199, 0))"
        }
        filter={"blur(54px)"}
      />
      {/* <Box
        position={"absolute"}
        bottom={{ base: "8%", md: "12%" }}
        left={"-8%"}
        right={"-8%"}
        h={{ base: "150px", md: "190px" }}
        transform={"rotate(4deg)"}
        pointerEvents={"none"}
        bg={
          "linear-gradient(90deg, rgba(0, 96, 199, 0), rgba(0, 96, 199, 0.18), rgba(0, 96, 199, 0))"
        }
        filter={"blur(56px)"}
      />
      <Box
        position={"absolute"}
        top={"-160px"}
        right={"-120px"}
        w={{ base: "290px", md: "420px" }}
        h={{ base: "290px", md: "420px" }}
        borderRadius={"50%"}
        bg={"radial-gradient(circle, rgba(0, 96, 199, 0.3), transparent 65%)"}
        pointerEvents={"none"}
        filter={"blur(2px)"}
      />
      <Box
        position={"absolute"}
        bottom={"-120px"}
        left={"-100px"}
        w={{ base: "240px", md: "320px" }}
        h={{ base: "240px", md: "320px" }}
        borderRadius={"50%"}
        bg={"radial-gradient(circle, rgba(0, 96, 199, 0.24), transparent 70%)"}
        pointerEvents={"none"}
        filter={"blur(3px)"}
      /> */}
      <Box
        position={"absolute"}
        inset={0}
        pointerEvents={"none"}
        bg={
          "radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.38) 100%)"
        }
      />
      <InnerContentWrapper
        display={"flex"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        maxW={"unset"}
        position={"relative"}
        bg="transparent"
        zIndex={1}
        py={{ base: "70px", md: "80px" }}
      >
        <Flex
          direction={"column"}
          align={"center"}
          mb={{ base: "30px", md: "40px" }}
          textAlign={"center"}
        >
          <Text
            fontSize={"12px"}
            textTransform={"uppercase"}
            letterSpacing={"0.14em"}
            color={"rgba(255, 255, 255, 0.64)"}
            mb={"10px"}
          >
            What Clients & Teams Say
          </Text>
          <Text size="header-2" mb={"12px"}>
            Testimonials
          </Text>
          <Text maxW={"740px"} color={"rgba(255, 255, 255, 0.74)"}>
            Feedback from clients, collaborators, and product teams I’ve worked
            with.
          </Text>
        </Flex>

        <Flex w="full" position={"relative"}>
          <Box
            position={"absolute"}
            left={0}
            top={0}
            bottom={0}
            w={{ base: "30px", md: "70px" }}
            bg={"linear-gradient(90deg, rgba(14, 20, 28, 0.95), transparent)"}
            zIndex={2}
            pointerEvents={"none"}
          />
          <Box
            position={"absolute"}
            right={0}
            top={0}
            bottom={0}
            w={{ base: "30px", md: "70px" }}
            bg={"linear-gradient(270deg, rgba(14, 20, 28, 0.95), transparent)"}
            zIndex={2}
            pointerEvents={"none"}
          />

          <Box
            ref={sliderRef}
            className="keen-slider"
            w="full"
            style={{ display: "flex", alignItems: "stretch" }}
          >
            {testimonialItems.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                onPause={pauseSlider}
                onResume={resumeSlider}
              />
            ))}
          </Box>
        </Flex>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

const TestimonialCard: FC<TestimonialCardProps> = ({
  imageSrc,
  name,
  job,
  testimony,
  linkedinUrl,
  portfolioUrl,
  onPause,
  onResume,
}) => {
  return (
    <Flex
      className="keen-slider__slide"
      py={"8px"}
      onMouseEnter={onPause}
      onMouseLeave={onResume}
    >
      <Flex
        role="group"
        position={"relative"}
        direction={"column"}
        w="700px"
        minH={{ base: "252px", md: "284px" }}
        p={{ base: "24px", md: "30px" }}
        borderRadius={"20px"}
        border={"1px solid rgba(255, 255, 255, 0.12)"}
        bg={
          "linear-gradient(180deg, rgba(30, 42, 55, 0.9), rgba(15, 22, 30, 0.95))"
        }
        boxShadow={"0px 20px 38px rgba(0, 0, 0, 0.26)"}
        overflow={"hidden"}
        transition={"transform 220ms ease, border-color 220ms ease"}
        _hover={{
          transform: "translateY(-5px)",
          borderColor: "rgba(120, 196, 255, 0.42)",
        }}
      >
        <Box
          position={"absolute"}
          top={"-120px"}
          right={"-95px"}
          w={"220px"}
          h={"220px"}
          borderRadius={"50%"}
          bg={
            "radial-gradient(circle, rgba(0, 96, 199, 0.32), rgba(0, 96, 199, 0))"
          }
          pointerEvents={"none"}
        />

        <Flex
          position={"absolute"}
          top={"20px"}
          right={"20px"}
          w={"34px"}
          h={"34px"}
          align={"center"}
          justify={"center"}
          borderRadius={"full"}
          bg={"rgba(0, 96, 199, 0.24)"}
          border={"1px solid rgba(0, 96, 199, 0.45)"}
          color={"rgba(198, 228, 255, 0.96)"}
          pointerEvents={"none"}
        >
          <Box as={FaQuoteRight} fontSize={"12px"} />
        </Flex>

        <Flex align={"center"} justify={"space-between"} gap={"12px"}>
          <Flex align={"center"} gap={"12px"}>
            <CustomNextImage
              src={imageSrc}
              borderRadius={"50%"}
              overflow={"hidden"}
              w={"56px"}
              h={"56px"}
              boxShadow={"0px 10px 24px rgba(0, 0, 0, 0.35)"}
            />
            <Flex direction={"column"}>
              <Flex align={"center"} gap={"8px"} mb={"4px"}>
                <Text size="label-md" fontSize={{ base: "17px", md: "19px" }}>
                  {name}
                </Text>

                <Flex gap={"6px"}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Box
                      key={`${name}-star-${idx}`}
                      as={FaStar}
                      color={"#FFD36A"}
                      fontSize={"14px"}
                    />
                  ))}
                </Flex>
              </Flex>
              <Text fontSize={"12px"} color={"rgba(255, 255, 255, 0.64)"}>
                {job}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Text
          fontSize={"16px"}
          mt="2.5"
          color={"rgba(255, 255, 255, 0.82)"}
          lineHeight={"1.85"}
          fontWeight={"400"}
        >
          {testimony}
        </Text>

        <Link
          href={linkedinUrl ?? portfolioUrl ?? ""}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flex
            align={"center"}
            justify={"center"}
            position={"absolute"}
            bottom={"20px"}
            right={"20px"}
            w={"38px"}
            h={"38px"}
            borderRadius={"full"}
            border={"1px solid rgba(255, 255, 255, 0.2)"}
            bg={"rgba(255, 255, 255, 0.1)"}
            color={"rgba(191, 223, 255, 1)"}
            transition={"transform 180ms ease, border-color 180ms ease"}
            _hover={{
              transform: "translateY(-1px)",
              borderColor: "rgba(0, 96, 199, 0.55)",
              bg: "rgba(0, 96, 199, 0.2)",
            }}
            aria-label={`${name} LinkedIn`}
          >
            {linkedinUrl && <Box as={FaLinkedinIn} fontSize={"16px"} />}
            {portfolioUrl && (
              <Box
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                w={"16px"}
                h={"16px"}
              >
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10.0001 16H8V10H10.0001V16ZM9.00005 9C8.44772 9 8.00005 8.55228 8.00005 8C8.00005 7.44772 8.44772 7 9.00005 7C9.55238 7 10.0001 7.44772 10.0001 8C10.0001 8.55228 9.55238 9 9.00005 9ZM16 16H14V13C14 12.4477 13.5523 12 13 12C12.4477 12 12 11.5523 12 11V10H14V11C14 11.5523 14.4477 12 15 12C15.5523 12 16 12.4477 16 13V16Z" />
              </Box>
            )}
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Testimonials;
