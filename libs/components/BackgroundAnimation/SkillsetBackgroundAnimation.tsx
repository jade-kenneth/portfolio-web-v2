import { colors } from "@/libs/theme/colors";
import { Flex } from "@chakra-ui/react";

const SkillsetBackgroundAnimation = () => {
  return (
    <Flex
      w="full"
      position={"absolute"}
      zIndex={-1}
      top={"77.3%"}
      bgColor={colors.background.secondary}
      h={"1099px"}
    >
      <Flex
        w="inherit"
        h="full"
        overflow={"hidden"}
        direction="column"
        //   className="block1"
      ></Flex>
    </Flex>
  );
};

export default SkillsetBackgroundAnimation;
