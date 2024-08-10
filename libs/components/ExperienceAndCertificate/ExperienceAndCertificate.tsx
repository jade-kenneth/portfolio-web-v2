import { colors } from "@/libs/theme/colors";
import { Box } from "@chakra-ui/react";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

const ExperienceAndCertificate = () => {
  return (
    <OuterContentWrapper w="full" bgColor={colors.background.primary}>
      <InnerContentWrapper
        align={"center"}
        justify={"center"}
        h="full"
        w="full"
      >
        <Box background={colors.background.primary} height={"300px"}>
          I am certificate
        </Box>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default ExperienceAndCertificate;
