import { colors } from "@/libs/theme/colors";
import { Button, Flex, Text, keyframes } from "@chakra-ui/react";
import CustomNextImage from "../CustomNextImage/CustomNextImage";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";
const Hero = () => {
  const slideRight = keyframes`  
  from {  transform: translateX(-50%)}   
  to { transform: translateX(0%)} 
`;
  const slideAnimation = `${slideRight} infinite 3s linear`;
  return (
    <OuterContentWrapper background={colors.background.primary} h={"612px"}>
      <Flex w="full" h={"full"}>
        <Flex flex={1.08} />
        <Flex flex={1} w="full" h={"full"} overflow={"hidden"}>
          <Flex w="inherit" h="full" animation={slideAnimation}>
            <CustomNextImage src="/10.png" w="1300px" h="inherit" />
          </Flex>
          <Flex w="inherit" h="full" animation={slideAnimation}>
            <CustomNextImage src="/10.png" w="1300px" h="inherit" />
          </Flex>
        </Flex>
      </Flex>
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
