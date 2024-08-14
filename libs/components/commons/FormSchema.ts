import * as yup from "yup";

export const FormSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  message: yup
    .string()
    .min(25, "Message should be atleast 100 characters")
    .max(100, "Message should be atleast 150 characters")
    .required("Message name is required"),
});
