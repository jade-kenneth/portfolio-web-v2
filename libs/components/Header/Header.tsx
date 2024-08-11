"use client";
import { colors } from "@/libs/theme/colors";
import { Button, Flex, Text } from "@chakra-ui/react";

import Image from "next/image";

import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

const Header = () => {
  return (
    <OuterContentWrapper background={colors.background.primary} height={"80px"}>
      <InnerContentWrapper
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex listStyleType={"none"} gap="40px">
          <Image src="/Logo.png" alt="logo" width={170} height={100} />

          <Flex gap="32px">
            <Text fontWeight={600}>Home</Text>

            <Text fontWeight={600}>About</Text>

            <Text fontWeight={600}>Skills</Text>

            <Text fontWeight={600}>Work Experience</Text>
          </Flex>
        </Flex>
        <Button variant={"solid"} size={"md"} fontWeight={600}>
          Contact Me
        </Button>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default Header;
