import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import CustomNextImage from "../CustomNextImage/CustomNextImage";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

const quickHighlights = [
  "Frontend Engineering",
  "Scalable UI Systems",
  "Product-Focused Delivery",
];

const Hero = () => {
  return (
    <OuterContentWrapper background={"transparent"} h={"612px"}>
      <InnerContentWrapper
        position={"absolute"}
        bg="transparent"
        justifyContent={"center"}
      >
        <Flex alignItems={"center"} gap="64px">
          <Flex direction={"column"} flex={1}>
            <Box
              w="fit-content"
              px={"12px"}
              py={"6px"}
              borderRadius={"full"}
              bg={"rgba(0, 96, 199, 0.2)"}
              border={"1px solid rgba(0, 96, 199, 0.45)"}
              color={"rgba(188, 222, 255, 1)"}
              fontSize={"11px"}
              textTransform={"uppercase"}
              letterSpacing={"0.08em"}
              fontWeight={700}
              mb="16px"
            >
              Open for opportunities
            </Box>

            <Text size="header-2" fontSize={"48px"} mb="14px">
              Hi there, I&apos;m{" "}
              <Text as="span" color="primary.900">
                Kenneth
              </Text>
            </Text>

            <Text
              size="paragraph-md"
              mb="24px"
              color={"rgba(255, 255, 255, 0.86)"}
            >
              I&apos;m a web developer with a passion for crafting innovative
              and user-friendly digital experiences focused on clarity,
              performance, and maintainability.
            </Text>

            <Flex wrap={"wrap"} gap={"10px"} mb="30px">
              {quickHighlights.map((item) => (
                <Text
                  key={item}
                  px={"12px"}
                  py={"8px"}
                  borderRadius={"full"}
                  bg={"rgba(255, 255, 255, 0.08)"}
                  border={"1px solid rgba(255, 255, 255, 0.16)"}
                  color={"rgba(255, 255, 255, 0.85)"}
                  fontSize={"12px"}
                  fontWeight={600}
                >
                  {item}
                </Text>
              ))}
            </Flex>

            <Flex gap={"10px"} wrap={"wrap"} mt="20px">
              <Link href="#workexperience">
                <Button
                  variant={"unstyled"}
                  size={"lg"}
                  fontWeight={700}
                  bg={"rgba(255, 255, 255, 0.1)"}
                  color={"white"}
                  border={"1px solid rgba(255, 255, 255, 0.18)"}
                  _hover={{ bg: "rgba(255, 255, 255, 0.18)" }}
                >
                  View Projects
                </Button>
              </Link>
              <Link href="#contactme">
                <Button variant={"solid"} size={"lg"} fontWeight={700}>
                  Contact Me
                </Button>
              </Link>
            </Flex>
          </Flex>

          <Flex flex={1} alignItems={"end"} justifyContent={"center"} h="full">
            <CustomNextImage
              src="/Me.png"
              width={"392px"}
              height={"552.02px"}
            />
          </Flex>
        </Flex>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default Hero;
