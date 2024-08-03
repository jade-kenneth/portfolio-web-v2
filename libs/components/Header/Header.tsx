"use client";
import { colors } from "@/libs/theme/colors";
import { fontFamily } from "@/libs/theme/fonts-family";
import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <Flex
      justifyContent={"space-evenly"}
      alignItems={"center"}
      background={colors.background.primary}
      height={"80px"}
      className={fontFamily["poppins.600"]}
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
      <Button variant={"solid"}>Contact Me</Button>
    </Flex>
  );
};

export default Header;
