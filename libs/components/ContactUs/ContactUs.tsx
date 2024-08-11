import { colors } from "@/libs/theme/colors";
import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import CustomNextImage from "../CustomNextImage/CustomNextImage";
import FormContainer from "../FormFields/FormContainer";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

const ContactUs = () => {
  return (
    <OuterContentWrapper
      bg={colors.background.secondary}
      padding={"unset"}
      pb="99.5px"
    >
      <InnerContentWrapper
        display={"flex"}
        px={"unset"}
        bg={colors.background.primary}
        justifyContent={"space-between"}
        borderRadius={"12px"}
        borderWidth={"1px"}
        borderColor={"rgba(255, 255, 255, 0.2)"}
        overflow={"hidden"}
      >
        <Flex
          p="64px"
          flex={1}
          direction={"column"}
          bg={colors.background.primary}
        >
          <Box w="480px">
            <Text size={"header-2"} mb="20px">
              Ready to Build Something Amazing?
            </Text>
            <Text
              size={"paragraph-md"}
              color="rgba(255, 255, 255, 0.8)"
              mb="48px"
            >
              If you’re looking to start a project together, send me an email by
              filling out the form below. Let’s bring your vision to life!
            </Text>

            <FormContainer
              label="First name"
              id={"firstName"}
              formControlProps={{ mb: "24px" }}
            >
              <Input
                type={"text"}
                height={"44px"}
                placeholder="First name"
                py="10px"
                w="full"
                color="black"
                px="14px"
                borderRadius={"8px"}
              />
            </FormContainer>
            <FormContainer
              label="Email"
              id={"email"}
              formControlProps={{ mb: "24px" }}
            >
              <Input
                type={"email"}
                height={"44px"}
                placeholder="your@email.com"
                py="10px"
                color="black"
                px="14px"
                w="full"
                borderRadius={"8px"}
              />
            </FormContainer>
            <FormContainer
              label="Message"
              id={"message"}
              formControlProps={{ mb: "24px" }}
            >
              <Textarea
                height={"134px"}
                placeholder="Must have at least 100 characters"
                py="10px"
                color="black"
                px="14px"
                w="full"
                borderRadius={"8px"}
              />
            </FormContainer>
            <Button variant="solid" w="full">
              Submit Request
            </Button>
          </Box>
        </Flex>

        <CustomNextImage flex={1} src="/contact-bg.png" w="560px" h="809px" />
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default ContactUs;
