"use client";
import { colors } from "@/libs/theme/colors";
import { Button, Flex, Text } from "@chakra-ui/react";

import Image from "next/image";

import Link from "next/link";
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
            {/* <Text fontWeight={600}>Home</Text> */}
            <Link href="#aboutme">
              <Text fontWeight={600}>About</Text>
            </Link>
            <Link href="#skills">
              <Text fontWeight={600}>Skills</Text>
            </Link>
            <Link href="#workexperience">
              <Text fontWeight={600}>Work Experience</Text>
            </Link>
          </Flex>
        </Flex>
        <Link href="#contactme">
          <Button variant={"solid"} size={"md"} fontWeight={600}>
            Contact Me
          </Button>
        </Link>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default Header;
