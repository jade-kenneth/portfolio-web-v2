import { Flex, FlexProps } from "@chakra-ui/react";
import React, { FC, PropsWithChildren } from "react";

const OuterContentWrapper: FC<PropsWithChildren<FlexProps>> = ({
  children,
  ...props
}) => {
  return (
    <Flex
      width={"full"}
      justifyContent={"center"}
      alignItems={"center"}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default OuterContentWrapper;
