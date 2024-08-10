import { colors } from "@/libs/theme/colors";
import { Flex } from "@chakra-ui/react";
import CustomNextImage from "../CustomNextImage/CustomNextImage";

const HeroBackgroundAnimation = () => {
  return (
    <Flex
      w="full"
      bgColor={colors.background.primary}
      position={"absolute"}
      zIndex={-1}
      mt="80px"
      h={"1300px"}
    >
      <Flex w="full" overflow={"hidden"}>
        <Flex flex={1.08} />
        <Flex flex={1} w="full" h={"full"} overflow={"hidden"}>
          <Flex
            w="inherit"
            h="full"
            gap="45px"
            overflow={"hidden"}
            direction="column"
            className="block1"
          >
            <CustomNextImage src="/101.png" w="full" h="612px" />
            <CustomNextImage src="/101.png" w="full" h="612px" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroBackgroundAnimation;
