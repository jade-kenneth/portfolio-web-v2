import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
const CustomNextImage: FC<BoxProps & { src: string }> = ({ src, ...props }) => {
  return (
    <Box position={"relative"} {...props}>
      <Image src={src} alt="img" layout="fill" />
    </Box>
  );
};

export default CustomNextImage;
