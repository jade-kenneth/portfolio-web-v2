"use client";
import { colors } from "@/libs/theme/colors";
import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <Flex
      justifyContent={"space-evenly"}
      alignItems={"center"}
      background={colors.background.primary}
      height={"80px"}
    >
      <Flex listStyleType={"none"} gap="40px">
        <Image src="/Logo.png" alt="logo" width={170} height={100} />

        <Flex gap="32px">
          <Heading>Home</Heading>

          <Heading>About</Heading>

          <Heading>Skills</Heading>

          <Heading>Work Experience</Heading>
        </Flex>
      </Flex>
      <Button variant={"solid"}>Contact Me</Button>
    </Flex>
  );
};

export default Header;
