import { Flex, FlexProps } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const InnerContentWrapper: FC<PropsWithChildren<FlexProps>> = ({
  children,
  ...props
}) => {
  return (
    <Flex
      maxW={"1280px"}
      width={"full"}
      px="32px"
      background={"inherit"}
      h="inherit"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default InnerContentWrapper;
