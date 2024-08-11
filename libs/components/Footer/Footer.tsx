import { colors } from "@/libs/theme/colors";
import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import CustomNextImage from "../CustomNextImage/CustomNextImage";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

const Footer = () => {
  return (
    <OuterContentWrapper bg={colors.background.primary}>
      <InnerContentWrapper
        display={"flex"}
        direction={"column"}
        pt="64px"
        pb="49px"
      >
        <Flex justifyContent={"space-between"} mb="40px">
          <VStack gap="32px">
            <CustomNextImage src="/Logo.png" w="266.4px" h="32px" />
            <Flex gap="32px">
              <Text>About</Text>
              <Text>Skills</Text>
              <Text>Work Experience</Text>
            </Flex>
          </VStack>
          <Button size={"sm"} variant="solid">
            Contact Me
          </Button>
        </Flex>

        <Flex
          justifyContent={"space-between"}
          borderTop={"1px solid rgba(255, 255, 255, 0.2)"}
          pt="32px"
        >
          <Text color="rgba(255, 255, 255, 0.4)">
            © 2024 Jade Kenneth. All rights reserved.
          </Text>

          <Flex gap="24px">
            <FaFacebook />
            <FaLinkedin />
            <FaGithub />
          </Flex>
        </Flex>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default Footer;
