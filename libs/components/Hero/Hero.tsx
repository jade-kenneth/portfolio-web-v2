import { Button, Flex, Text } from "@chakra-ui/react";
import CustomNextImage from "../CustomNextImage/CustomNextImage";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";
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
            <Text size="header-1" mb="20px">
              Hi there, I&apos;m
              <Text as="span" color="primary.900">
                {" "}
                Jade Kenneth!
              </Text>
            </Text>
            <Text size="paragraph-lg" mb="32px">
              I&apos;m an aspiring web developer with a passion for crafting
              innovative and user-friendly digital experiences. Let’s bring your
              vision to life!
            </Text>
            <Button variant={"solid"} size={"lg"}>
              Contact Me
            </Button>
          </Flex>
          <Flex flex={1} alignItems={"end"} h="full">
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
