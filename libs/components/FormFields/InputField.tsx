import { Input, InputProps } from "@chakra-ui/react";
import { forwardRef, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import FormContainer, { FormContainerProps } from "./FormContainer";

interface InputFieldProps extends UseFormRegisterReturn, FormContainerProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  chakraInputProps?: InputProps;
  onPressEnter?(): void;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const {
      onChange,
      onBlur,
      name,
      onPressEnter,
      chakraInputProps,
      ...formContainerProps
    } = props;
    return (
      <FormContainer {...formContainerProps}>
        <Input
          {...chakraInputProps}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          onKeyPress={(e) => {
            if (e.key === "Enter" && onPressEnter) {
              onPressEnter();
            }
          }}
        />
      </FormContainer>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
