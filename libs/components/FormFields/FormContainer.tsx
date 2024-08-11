import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import * as React from "react";

export interface FormContainerProps {
  id: string;
  label?: string;
  errorMsg?: string;
  helperMsg?: string;
  formControlProps?: FormControlProps;
  isReadOnly?: boolean;
  required?: boolean;
  errorPosition?: "top" | "bottom";
}

const FormContainer = ({
  id,
  label,
  errorMsg,
  helperMsg,
  formControlProps,
  children,
  required,
  isReadOnly,
  errorPosition = "bottom",
}: React.PropsWithChildren<FormContainerProps>) => {
  return (
    <FormControl
      id={id}
      isInvalid={Boolean(errorMsg)}
      isReadOnly={isReadOnly}
      isRequired={required}
      {...formControlProps}
    >
      {errorPosition === "top" && (
        <FormErrorMessage mb={2}>{errorMsg}</FormErrorMessage>
      )}
      {label && <FormLabel>{label}</FormLabel>}
      {children}
      {errorPosition === "bottom" && (
        <FormErrorMessage color="red">{errorMsg}</FormErrorMessage>
      )}
      {helperMsg && <FormHelperText>{helperMsg}</FormHelperText>}
    </FormControl>
  );
};

export default FormContainer;
