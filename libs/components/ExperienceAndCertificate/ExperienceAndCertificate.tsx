import { colors } from "@/libs/theme/colors";
import {
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import CustomNextImage from "../CustomNextImage/CustomNextImage";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

const ExperienceAndCertificate = () => {
  const items: CardProps[] = [
    {
      desc: "Expert coaching boosts remote teams by driving growth, increasing productivity, and enhancing team morale.",
      name: "Advante",
      linkSrc: "https://studio-advante-git-request-fix-highoutput.vercel.app/",
      logoSrc: "/exp-logo-1.png",
      thumbnail: "/exp-thumbnail-1.png",
    },
    {
      desc: "Expert coaching boosts remote teams by driving growth, increasing productivity, and enhancing team morale.",
      name: "Advante",
      linkSrc: "https://studio-advante-git-request-fix-highoutput.vercel.app/",
      logoSrc: "/exp-logo-1.png",
      thumbnail: "/exp-thumbnail-1.png",
    },
    {
      desc: "Expert coaching boosts remote teams by driving growth, increasing productivity, and enhancing team morale.",
      name: "Advante",
      linkSrc: "https://studio-advante-git-request-fix-highoutput.vercel.app/",
      logoSrc: "/exp-logo-1.png",
      thumbnail: "/exp-thumbnail-1.png",
    },
    {
      desc: "Expert coaching boosts remote teams by driving growth, increasing productivity, and enhancing team morale.",
      name: "Advante",
      linkSrc: "https://studio-advante-git-request-fix-highoutput.vercel.app/",
      logoSrc: "/exp-logo-1.png",
      thumbnail: "/exp-thumbnail-1.png",
    },
    {
      desc: "Expert coaching boosts remote teams by driving growth, increasing productivity, and enhancing team morale.",
      name: "Advante",
      linkSrc: "https://studio-advante-git-request-fix-highoutput.vercel.app/",
      logoSrc: "/exp-logo-1.png",
      thumbnail: "/exp-thumbnail-1.png",
    },
  ];
  const router = useRouter();
  return (
    <OuterContentWrapper
      justify={"unset"}
      align={"unset"}
      w="full"
      bgColor={colors.background.secondary}
    >
      <InnerContentWrapper
        align={"center"}
        justify={"center"}
        mt="100px"
        h="full"
        w="full"
        display={"flex"}
        direction={"column"}
      >
        <Text size="header-2" mb="1rem">
          Professional Experience & Certifications
        </Text>
        <Text
          size="paragraph-md"
          mb="60px"
          w="720px"
          textAlign={"center"}
          color="rgba(255, 255, 255, 0.8)"
        >
          Explore my work experience, including the projects I&apos;ve
          completed, along with the certifications I&apos;ve earned.
        </Text>

        <Tabs variant="unstyled">
          <TabList
            alignItems={"center"}
            gap="24px"
            mb="80px"
            justifyContent={"center"}
          >
            <Tab
              _selected={{ color: colors.primary[900], fontWeight: 700 }}
              fontSize={"20px"}
              color={"rgba(255, 255, 255, 0.4)"}
            >
              Work Experience
            </Tab>
            <Tab
              _selected={{ color: colors.primary[900], fontWeight: 700 }}
              fontSize={"20px"}
              color={"rgba(255, 255, 255, 0.4)"}
            >
              Certificates Earned
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"wrap"}
              gap="24px"
            >
              {items.map((d, idx) => {
                return <Card key={idx} {...d} />;
              })}
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default ExperienceAndCertificate;

type CardProps = {
  desc: string;
  name: string;
  logoSrc: string;
  thumbnail: string;
  linkSrc: string;
};
const Card: FC<CardProps> = ({
  desc,

  logoSrc,
  linkSrc,
  name,
  thumbnail,
}) => {
  return (
    <Flex
      bg={"rgba(23, 33, 44, 1)"}
      direction={"column"}
      w="369.67px"
      mb="63px"
      h="450.45px"
      borderRadius={"12px"}
      p="32px"
    >
      <Flex align={"center"} justify={"space-between"} mb="1rem">
        <Flex align={"center"} gap={"10px"}>
          <CustomNextImage src={logoSrc} w="59.45px" h="59.45px" />
          <Text size="label-md">{name}</Text>
        </Flex>
        <Link href={linkSrc} target="blank">
          <Button variant={"unstyled"} rightIcon={<MdOutlineArrowOutward />}>
            Website
          </Button>
        </Link>
      </Flex>
      <Text size="paragraph-sm">{desc}</Text>
      <CustomNextImage src={thumbnail} mt="24px" w="full" h="227px" />
    </Flex>
  );
};
