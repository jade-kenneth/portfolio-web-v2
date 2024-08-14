import { CloseIcon } from "@chakra-ui/icons";
import {
  chakra,
  FlexProps,
  HStack,
  Icon,
  IconProps,
  useMultiStyleConfig,
  UseToastOptions,
} from "@chakra-ui/react";
import { FC } from "react";

interface ToastContentProps {
  title: string;
  description?: string;
  status?: UseToastOptions["status"];
  onClose?: () => void;
}

export const ToastContent: FC<
  ToastContentProps & Omit<FlexProps, "children">
> = ({ title, description, onClose, status = "success", ...props }) => {
  const styles = useMultiStyleConfig("Toast", {});
  const icon = () => {
    let toastIcon = null;
    switch (status) {
      case "success":
        toastIcon = SuccessIcon;
        break;
      case "error":
        toastIcon = ErrorIcon;
        break;
      default:
        toastIcon = SuccessIcon;
        break;
    }
    return toastIcon;
  };

  return (
    <chakra.div {...props} __css={styles.container}>
      <Icon as={icon()} __css={styles.icon} fontSize="35px" />
      <chakra.div __css={styles.content}>
        <HStack w="full" justify="space-between">
          <chakra.div __css={styles.title}>{title}</chakra.div>
          <Icon as={CloseIcon} __css={styles.closeButton} onClick={onClose} />
        </HStack>
        {description && (
          <chakra.div __css={styles.description}>{description}</chakra.div>
        )}
      </chakra.div>
    </chakra.div>
  );
};

const SuccessIcon: FC<IconProps> = (props) => {
  return (
    <Icon
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.3">
        <path
          d="M17.9993 30.4974C11.0958 30.4974 5.49935 24.901 5.49935 17.9974C5.49935 11.0938 11.0958 5.4974 17.9993 5.4974C24.9029 5.4974 30.4993 11.0938 30.4993 17.9974C30.4993 24.901 24.9029 30.4974 17.9993 30.4974Z"
          stroke="#008000"
          strokeWidth="1.66667"
        />
      </g>
      <g opacity="0.1">
        <path
          d="M17.1667 1.33333H18.8333C27.5778 1.33333 34.6667 8.42216 34.6667 17.1667V18.8333C34.6667 27.5778 27.5778 34.6667 18.8333 34.6667H17.1667C8.42216 34.6667 1.33333 27.5778 1.33333 18.8333V17.1667C1.33333 8.42216 8.42216 1.33333 17.1667 1.33333Z"
          stroke="#008000"
          strokeWidth="1.66667"
        />
      </g>
      <g clipPath="url(#clip0_2965_64151)">
        <path
          d="M14.2493 17.9974L16.7493 20.4974L21.7493 15.4974M26.3327 17.9974C26.3327 22.5998 22.6017 26.3307 17.9993 26.3307C13.397 26.3307 9.66602 22.5998 9.66602 17.9974C9.66602 13.395 13.397 9.66406 17.9993 9.66406C22.6017 9.66406 26.3327 13.395 26.3327 17.9974Z"
          stroke="#008000"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2965_64151">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </Icon>
  );
};
const ErrorIcon: FC<IconProps> = (props) => {
  return (
    <Icon
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.3">
        <path
          d="M6 19C6 11.8203 11.8203 6 19 6C26.1797 6 32 11.8203 32 19C32 26.1797 26.1797 32 19 32C11.8203 32 6 26.1797 6 19Z"
          stroke="#E52825"
          strokeWidth="2"
        />
      </g>
      <g opacity="0.1">
        <path
          d="M1 19C1 9.05888 9.05888 1 19 1C28.9411 1 37 9.05888 37 19C37 28.9411 28.9411 37 19 37C9.05888 37 1 28.9411 1 19Z"
          stroke="#E52825"
          strokeWidth="2"
        />
      </g>
      <g clipPath="url(#clip0_2965_63687)">
        <path
          d="M18.9993 15.6641V18.9974M18.9993 22.3307H19.0077M27.3327 18.9974C27.3327 23.5998 23.6017 27.3307 18.9993 27.3307C14.397 27.3307 10.666 23.5998 10.666 18.9974C10.666 14.395 14.397 10.6641 18.9993 10.6641C23.6017 10.6641 27.3327 14.395 27.3327 18.9974Z"
          stroke="#E52825"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2965_63687">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(9 9)"
          />
        </clipPath>
      </defs>
    </Icon>
  );
};
