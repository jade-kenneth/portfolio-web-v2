import { db } from "@/firebaseConfig";
import { colors } from "@/libs/theme/colors";
import { ToastContent } from "@/libs/utils/toast";
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormSchema } from "../commons/FormSchema";
import CustomNextImage from "../CustomNextImage/CustomNextImage";
import InputField from "../FormFields/InputField";
import TextareaField from "../FormFields/TextAreaField";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";

type Schema = yup.InferType<typeof FormSchema>;
const ContactUs = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<Schema>({
    mode: "all",
    resolver: yupResolver(FormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      message: "",
    },
  });
  const toast = useToast();
  const subscribe = async (value: Schema) => {
    try {
      await addDoc(collection(db, "buildRequests"), {
        email: value.email,
        firstName: value.firstName,
        message: value.message,
      });
      reset();
      toast({
        position: "top",
        render: ({ onClose }) => {
          return (
            <ToastContent
              title="Success"
              description="Submitted successfully!"
              onClose={onClose}
            />
          );
        },
      });
    } catch (error) {
      toast({
        position: "top",
        render: ({ onClose }) => {
          return (
            <ToastContent
              status="error"
              title="Error"
              description="Something went wrong. Please try again!"
              onClose={onClose}
            />
          );
        },
      });
    }
  };
  const onSubmit = (value: Schema) => {
    subscribe(value);
  };
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
          <Box as="form" onSubmit={handleSubmit(onSubmit)} w="480px">
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
            <InputField
              {...register("firstName")}
              id="firstName"
              label="First name"
              errorMsg={errors.firstName?.message ?? ""}
              formControlProps={{ mb: "25px" }}
              chakraInputProps={{
                px: "14px",
                color: "black",
                type: "text",
                placeholder: "First name",
                borderRadius: "8px",
                w: "full",
                py: "10px",
                height: "44px",
              }}
            />
            <InputField
              {...register("email")}
              id="email"
              label="Email"
              errorMsg={errors.email?.message ?? ""}
              formControlProps={{ mb: "20px" }}
              chakraInputProps={{
                px: "14px",
                color: "black",

                borderRadius: "8px",
                w: "full",
                placeholder: "your@email.com",
                py: "10px",

                height: "44px",
              }}
            />

            <TextareaField
              {...register("message")}
              id="message"
              label="Message"
              formControlProps={{ mb: "20px" }}
              errorMsg={errors.message?.message ?? ""}
              chakraTextAreaProps={{
                px: "14px",
                color: "black",
                borderRadius: "8px",
                w: "full",
                placeholder: "Must have at least 100 characters",
                py: "10px",
                height: "134px",
              }}
            />

            <Button
              type="submit"
              isLoading={isLoading || isSubmitting}
              variant="solid"
              w="full"
            >
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
