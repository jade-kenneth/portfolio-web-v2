import { db } from "@/firebaseConfig";
import { colors } from "@/libs/theme/colors";
import { ToastContent } from "@/libs/utils/toast";
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineInsights, MdOutlineScheduleSend } from "react-icons/md";
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
      id="contactme"
      pb={{ base: "72px", md: "99.5px" }}
      position={"relative"}
      overflow={"hidden"}
    >
      <Box
        position={"absolute"}
        left={"-130px"}
        top={"-120px"}
        w={"340px"}
        h={"340px"}
        borderRadius={"50%"}
        pointerEvents={"none"}
        bg={"radial-gradient(circle, rgba(0, 96, 199, 0.22), transparent 72%)"}
      />
      <InnerContentWrapper display={"flex"} px={{ base: "20px", md: "32px" }}>
        <Flex
          direction={{ base: "column", xl: "row" }}
          w="full"
          bg={colors.background.primary}
          justifyContent={"space-between"}
          borderRadius={"20px"}
          borderWidth={"1px"}
          borderColor={"rgba(255, 255, 255, 0.2)"}
          overflow={"hidden"}
          boxShadow={"0px 22px 46px rgba(0, 0, 0, 0.25)"}
        >
          <Flex
            p={{ base: "28px", md: "40px", xl: "56px" }}
            flex={1}
            direction={"column"}
            bg={
              "linear-gradient(180deg, rgba(20, 26, 33, 0.95), rgba(12, 17, 22, 0.98))"
            }
          >
            <Box
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              w="full"
              maxW={"540px"}
            >
              <Text
                fontSize={"12px"}
                textTransform={"uppercase"}
                letterSpacing={"0.1em"}
                color={"rgba(145, 203, 255, 1)"}
                mb="14px"
                fontWeight={700}
              >
                Let&apos;s Work Together
              </Text>
              <Text size={"header-2"} mb="16px">
                Ready to Build Something Amazing?
              </Text>
              <Text
                size={"paragraph-md"}
                color="rgba(255, 255, 255, 0.8)"
                mb={{ base: "26px", md: "34px" }}
              >
                If you&apos;re looking to start a project together, send me a
                message below and I&apos;ll get back to you with next steps.
              </Text>

              <Flex
                wrap={"wrap"}
                gap={"10px"}
                mb={{ base: "24px", md: "30px" }}
              >
                {/* <ContactPill icon={<MdOutlineMailOutline />} label="Email Support" /> */}
                <ContactPill
                  icon={<MdOutlineScheduleSend />}
                  label="Fast Response"
                />
                <ContactPill
                  icon={<MdOutlineInsights />}
                  label="Product Mindset"
                />
              </Flex>

              <InputField
                {...register("firstName")}
                id="firstName"
                label="First name"
                errorMsg={errors.firstName?.message ?? ""}
                formControlProps={{ mb: "20px" }}
                chakraInputProps={{
                  px: "14px",
                  color: "black",
                  type: "text",
                  placeholder: "Your name",
                  borderRadius: "10px",
                  w: "full",
                  py: "10px",
                  height: "46px",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
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
                  borderRadius: "10px",
                  w: "full",
                  placeholder: "you@email.com",
                  py: "10px",
                  height: "46px",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                }}
              />

              <TextareaField
                {...register("message")}
                id="message"
                label="Message"
                formControlProps={{ mb: "24px" }}
                errorMsg={errors.message?.message ?? ""}
                chakraTextAreaProps={{
                  px: "14px",
                  color: "black",
                  borderRadius: "10px",
                  w: "full",
                  placeholder:
                    "Share your project details (at least 100 characters)",
                  py: "10px",
                  minH: "140px",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  resize: "vertical",
                }}
              />

              <Button
                type="submit"
                isLoading={isLoading || isSubmitting}
                variant="solid"
                w="full"
                h={"50px"}
                fontWeight={700}
              >
                Submit Request
              </Button>
            </Box>
          </Flex>

          <Flex
            flex={1}
            minH={{ base: "360px", md: "500px", xl: "760px" }}
            position={"relative"}
            w="full"
          >
            <CustomNextImage src="/contact-bg.png" w="full" h="full" />
            <Box
              position={"absolute"}
              inset={0}
              bg={
                "linear-gradient(180deg, rgba(11, 16, 22, 0.25) 0%, rgba(11, 16, 22, 0.65) 100%)"
              }
            />
            <Flex
              position={"absolute"}
              bottom={{ base: "20px", md: "30px" }}
              left={{ base: "20px", md: "28px" }}
              right={{ base: "20px", md: "28px" }}
              direction={"column"}
              p={{ base: "16px", md: "18px" }}
              borderRadius={"14px"}
              border={"1px solid rgba(255, 255, 255, 0.24)"}
              bg={"rgba(6, 11, 16, 0.58)"}
              backdropFilter={"blur(6px)"}
            >
              <Text
                fontSize={"12px"}
                textTransform={"uppercase"}
                letterSpacing={"0.09em"}
                color={"rgba(190, 224, 255, 0.95)"}
                mb={"8px"}
              >
                Build Collaboration
              </Text>
              <Text
                fontWeight={700}
                fontSize={{ base: "18px", md: "21px" }}
                mb={"6px"}
              >
                Let&apos;s turn your idea into a polished product.
              </Text>
              <Text color={"rgba(255, 255, 255, 0.8)"}>
                I typically respond within 24 hours with project scope and
                timeline recommendations.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default ContactUs;

type ContactPillProps = {
  icon: ReactNode;
  label: string;
};

const ContactPill = ({ icon, label }: ContactPillProps) => {
  return (
    <Flex
      align={"center"}
      gap={"8px"}
      px={"12px"}
      py={"8px"}
      borderRadius={"full"}
      bg={"rgba(255, 255, 255, 0.08)"}
      border={"1px solid rgba(255, 255, 255, 0.14)"}
      color={"rgba(255, 255, 255, 0.92)"}
      fontSize={"12px"}
      fontWeight={600}
    >
      <Box fontSize={"16px"} color={"rgba(131, 201, 255, 1)"}>
        {icon}
      </Box>
      <Text fontSize={"12px"}>{label}</Text>
    </Flex>
  );
};
