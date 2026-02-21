import { colors } from "@/libs/theme/colors";
import { Badge, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import CustomNextImage from "../CustomNextImage/CustomNextImage";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

type FooterLink = {
  href: string;
  label: string;
};

type SocialLink = FooterLink & {
  platform: "facebook" | "linkedin" | "github";
};

const navLinks: FooterLink[] = [
  { href: "#aboutme", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#workexperience", label: "Work Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/",
    platform: "facebook",
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/jade-kenneth-darunday/",
    platform: "linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/jade-kenneth",
    platform: "github",
    label: "GitHub",
  },
];

const renderSocialIcon = (platform: SocialLink["platform"]) => {
  if (platform === "facebook") {
    return <FaFacebook size={16} />;
  }
  if (platform === "linkedin") {
    return <FaLinkedin size={16} />;
  }
  return <FaGithub size={16} />;
};

const Footer = () => {
  return (
    <OuterContentWrapper
      bg={colors.background.primary}
      position={"relative"}
      overflow={"hidden"}
      borderTop={"1px solid rgba(255, 255, 255, 0.08)"}
    >
      <InnerContentWrapper
        display={"flex"}
        direction={"column"}
        pt={{ base: "54px", md: "64px" }}
        pb={{ base: "32px", md: "40px" }}
        position={"relative"}
        zIndex={1}
      >
        <Flex
          justifyContent={"space-between"}
          direction={{ base: "column", lg: "row" }}
          align={{ base: "flex-start", lg: "center" }}
          gap={{ base: "34px", lg: "26px" }}
          mb={{ base: "34px", md: "44px" }}
        >
          <Flex direction={"column"} gap={"16px"} maxW={"380px"}>
            <CustomNextImage
              src="/Logo.png"
              w={{ base: "210px", md: "266.4px" }}
              h={{ base: "26px", md: "32px" }}
            />
            <Badge
              w="fit-content"
              px={"10px"}
              py={"6px"}
              borderRadius={"full"}
              bg={"rgba(0, 96, 199, 0.2)"}
              color={"rgba(184, 221, 255, 1)"}
              border={"1px solid rgba(0, 96, 199, 0.45)"}
              fontSize={"10px"}
              letterSpacing={"0.08em"}
              textTransform={"uppercase"}
            >
              Open For Opportunities
            </Badge>
            <Text color={"rgba(255, 255, 255, 0.72)"} maxW={"340px"}>
              Building modern, responsive, and user-focused web experiences from
              idea to production.
            </Text>
          </Flex>

          <Flex direction={"column"} gap={"14px"}>
            <Text
              fontSize={"12px"}
              textTransform={"uppercase"}
              letterSpacing={"0.08em"}
              color={"rgba(255, 255, 255, 0.52)"}
            >
              Navigation
            </Text>
            <Flex
              gap={{ base: "18px", md: "24px" }}
              wrap={"wrap"}
              align={"center"}
            >
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <Text
                    color={"rgba(255, 255, 255, 0.85)"}
                    fontWeight={500}
                    transition={"color 180ms ease"}
                    _hover={{ color: "primary.900" }}
                  >
                    {link.label}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Flex>

          <Flex
            direction={"column"}
            gap={"10px"}
            align={{ base: "flex-start", lg: "flex-end" }}
          >
            <Text color={"rgba(255, 255, 255, 0.78)"} fontWeight={600}>
              Have a project in mind?
            </Text>
            <Link href="#contactme">
              <Button
                size={"sm"}
                variant="solid"
                rightIcon={<MdOutlineArrowOutward />}
                px={"18px"}
              >
                Contact Me
              </Button>
            </Link>
          </Flex>
        </Flex>

        <Flex
          justifyContent={"space-between"}
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          gap={"14px"}
          borderTop={"1px solid rgba(255, 255, 255, 0.16)"}
          pt={{ base: "20px", md: "24px" }}
        >
          <Text color="rgba(255, 255, 255, 0.45)">
            © {new Date().getFullYear()} Jade Kenneth. All rights reserved.
          </Text>

          <Flex gap="12px" align={"center"}>
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                target="_blank"
                rel="noopener noreferrer"
                href={social.href}
                aria-label={social.label}
              >
                <Flex
                  align={"center"}
                  justify={"center"}
                  w={"36px"}
                  h={"36px"}
                  borderRadius={"full"}
                  border={"1px solid rgba(255, 255, 255, 0.2)"}
                  bg={"rgba(255, 255, 255, 0.06)"}
                  color={"rgba(255, 255, 255, 0.86)"}
                  transition={"all 180ms ease"}
                  _hover={{
                    color: "white",
                    bg: "rgba(0, 96, 199, 0.28)",
                    borderColor: "rgba(0, 96, 199, 0.58)",
                    transform: "translateY(-2px)",
                  }}
                >
                  {renderSocialIcon(social.platform)}
                </Flex>
              </Link>
            ))}
          </Flex>
        </Flex>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default Footer;
