"use client";

import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "#aboutme", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#workexperience", label: "Work Experience" },
];

const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <OuterContentWrapper
      as={"header"}
      background={"rgba(18, 16, 16)"}
      position={"sticky"}
      top={0}
      zIndex={50}
      backdropFilter={"blur(12px)"}
      borderBottom={"1px solid rgba(255, 255, 255, 0.1)"}
      boxShadow={"0px 12px 26px rgba(0, 0, 0, 0.22)"}
    >
      <InnerContentWrapper
        minH={{ base: "74px", md: "84px" }}
        direction={"column"}
        justifyContent={"center"}
      >
        <Flex w="full" justifyContent={"space-between"} alignItems={"center"}>
          <Link href="/">
            <Flex alignItems={"center"} gap={"10px"}>
              <Image src="/Logo.png" alt="logo" width={170} height={100} />
              <Text
                display={{ base: "none", lg: "inline-flex" }}
                fontSize={"11px"}
                textTransform={"uppercase"}
                letterSpacing={"0.08em"}
                color={"rgba(255, 255, 255, 0.6)"}
                borderLeft={"1px solid rgba(255, 255, 255, 0.2)"}
                pl={"10px"}
              >
                Frontend Developer
              </Text>
            </Flex>
          </Link>

          <Flex
            display={{ base: "none", md: "flex" }}
            alignItems={"center"}
            gap={"10px"}
            p={"6px"}
            borderRadius={"full"}
          >
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                <Box
                  px={"14px"}
                  py={"8px"}
                  borderRadius={"full"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"rgba(255, 255, 255, 0.82)"}
                  transition={"all 180ms ease"}
                  _hover={{
                    color: "white",
                    bg: "rgba(0, 96, 199, 0.22)",
                  }}
                >
                  {item.label}
                </Box>
              </Link>
            ))}
          </Flex>

          <Flex alignItems={"center"} gap={"10px"}>
            <Link href="#contactme">
              <Button
                display={{ base: "none", md: "inline-flex" }}
                variant={"solid"}
                size={"md"}
                fontWeight={700}
                px={"18px"}
              >
                Contact Me
              </Button>
            </Link>
            <IconButton
              aria-label={isOpen ? "Close menu" : "Open menu"}
              icon={isOpen ? <MdClose /> : <MdMenu />}
              display={{ base: "inline-flex", md: "none" }}
              onClick={onToggle}
              variant={"unstyled"}
              bg={"rgba(255, 255, 255, 0.08)"}
              border={"1px solid rgba(255, 255, 255, 0.15)"}
              color={"white"}
              fontSize={"24px"}
              _hover={{ bg: "rgba(255, 255, 255, 0.15)" }}
            />
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity style={{ width: "100%" }}>
          <Flex
            mt={"12px"}
            mb={"14px"}
            direction={"column"}
            gap={"10px"}
            p={"12px"}
            borderRadius={"14px"}
            border={"1px solid rgba(255, 255, 255, 0.12)"}
            bg={"rgba(15, 21, 28, 0.92)"}
            display={{ base: "flex", md: "none" }}
          >
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={onClose}>
                <Box
                  px={"12px"}
                  py={"10px"}
                  borderRadius={"10px"}
                  fontWeight={600}
                  color={"rgba(255, 255, 255, 0.88)"}
                  _hover={{ bg: "rgba(0, 96, 199, 0.2)" }}
                >
                  {item.label}
                </Box>
              </Link>
            ))}
            <Link href="#contactme" onClick={onClose}>
              <Button
                variant={"solid"}
                size={"md"}
                fontWeight={700}
                w="full"
                mt={"4px"}
              >
                Contact Me
              </Button>
            </Link>
          </Flex>
        </Collapse>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default Header;
