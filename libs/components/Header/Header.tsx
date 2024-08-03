"use client";
import { colors } from "@/libs/theme/colors";
import { fontFamily } from "@/libs/theme/fonts-family";
import { Button, Flex, Text } from "@chakra-ui/react";

import Image from "next/image";

import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

const Header = () => {
  return (
    <OuterContentWrapper
      background={colors.background.primary}
      height={"80px"}
      className={fontFamily["poppins.600"]}
    >
      <InnerContentWrapper
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex listStyleType={"none"} gap="40px">
          <Image src="/Logo.png" alt="logo" width={170} height={100} />

          <Flex gap="32px">
            <Text>Home</Text>

            <Text>About</Text>

            <Text>Skills</Text>

            <Text>Work Experience</Text>
          </Flex>
        </Flex>
        <Button variant={"solid"} size={"md"}>
          Contact Me
        </Button>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default Header;
