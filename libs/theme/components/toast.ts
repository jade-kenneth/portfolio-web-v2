import { ComponentMultiStyleConfig } from "@chakra-ui/react";
import { colors } from "../colors";

export const Toast: ComponentMultiStyleConfig = {
  parts: [
    "container",
    "icon",
    "content",
    "title",
    "description",
    "closeButton",
  ],
  variants: {
    rowPrimary: {
      container: {
        w: { md: "500px", lg: "605px", base: "400px" },
        border: "1px solid #9F9CA9",
        display: "flex",
        bgColor: colors.background.primary,
        alignItems: "center",
        minH: "76px",
        height: "full",
        bg: "brand.200",
        borderRadius: "12px",
        gridGap: "8.5px",
        p: "16px",
      },
      content: {
        w: "full",
        display: "flex",
        flexDir: "column",
        gridGap: "4px",
        h: "auto",
      },
      title: {
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
      },
      description: {
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        maxW: "486px",
      },
      closeButton: {
        w: "10px",
        h: "10px",
      },
      icon: {
        alignSelf: "start",
        w: "30px",
        h: "30px",
      },
    },
  },
  defaultProps: {
    variant: "rowPrimary",
  },
};
