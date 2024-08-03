"use client";
import { StyleConfig } from "@chakra-ui/react";

export const Button: StyleConfig = {
  baseStyle: {
    fontWeight: "medium",
    letterSpacing: "0.02em",
    transition: "all 150ms",

    "&:active": {
      transform: "scale(0.95)",
    },

    _disabled: {
      "&:active": {
        transform: "unset",
      },
    },
  },
  variants: {
    solid() {
      return {
        bg: "#0060C7",
        color: "#FFFFFF",
        py: "10px",
        px: "16px",
        borderRadius: "8px",
      };
    },
  },
};
