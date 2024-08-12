import { colors } from "@/libs/theme/colors";
import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
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
              <Link href="#aboutme">
                <Text>About</Text>
              </Link>
              <Link href="#skills">
                <Text>Skills</Text>
              </Link>
              <Link href="#workexperience">
                <Text>Work Experience</Text>
              </Link>
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
            <Link target="blank" href="https://www.facebook.com/">
              <FaFacebook />
            </Link>

            <Link
              target="blank"
              href="https://www.linkedin.com/in/jade-kenneth-darunday/"
            >
              <FaLinkedin />
            </Link>
            <Link target="blank" href="https://github.com/jade-kenneth">
              <FaGithub />
            </Link>
          </Flex>
        </Flex>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default Footer;
