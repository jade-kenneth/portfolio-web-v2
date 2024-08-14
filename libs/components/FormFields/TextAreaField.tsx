import { colors } from "@/libs/theme/colors";
import { Textarea, TextareaProps } from "@chakra-ui/react";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import FormContainer, { FormContainerProps } from "./FormContainer";

interface TextAreaProps extends UseFormRegisterReturn, FormContainerProps {
  chakraTextAreaProps?: TextareaProps;
}

const TextareaField = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      chakraTextAreaProps,
      name,
      onBlur,
      onChange,
      ...formContainerProps
    } = props;
    return (
      <FormContainer {...formContainerProps}>
        <Textarea
          {...chakraTextAreaProps}
          ref={ref}
          _focus={{ outline: `2px solid ${colors.primary[900]}` }}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
        />
      </FormContainer>
    );
  }
);
TextareaField.displayName = "TextareaField";

export default TextareaField;
