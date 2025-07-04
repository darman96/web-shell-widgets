import {defineRecipe} from "@chakra-ui/react";

const inputRecipe = defineRecipe({
  className: "chakra-input",
  variants: {
    size: {
      "2xs": {
        textStyle: "xs",
        px: "2",
        "--input-height": "sizes.7",
      },
      xs: {
        textStyle: "xs",
        px: "2",
        "--input-height": "sizes.8",
      },
      sm: {
        textStyle: "sm",
        px: "2.5",
        "--input-height": "sizes.9",
      },
      md: {
        textStyle: "sm",
        px: "3",
        "--input-height": "sizes.10",
      },
      lg: {
        textStyle: "md",
        px: "4",
        "--input-height": "sizes.11",
      },
      xl: {
        textStyle: "md",
        px: "4.5",
        "--input-height": "sizes.12",
      },
      "2xl": {
        textStyle: "lg",
        px: "5",
        "--input-height": "sizes.16",
      },
    },
    variant: {
      outline: {
        bg: "transparent",
        borderWidth: "1px",
        borderColor: "border",
        focusVisibleRing: "inside",
        focusRingColor: "var(--focus-color)",
      },
      subtle: {
        borderWidth: "1px",
        borderColor: "transparent",
        bg: "bg.emphasized",
        focusVisibleRing: "inside",
        focusRingColor: "var(--focus-color)",
      },
      flushed: {
        bg: "transparent",
        borderBottomWidth: "1px",
        borderBottomColor: "border",
        borderRadius: "0",
        px: "0",
        _focusVisible: {
          borderColor: "var(--focus-color)",
          boxShadow: "0px 1px 0px 0px var(--focus-color)",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "subtle"
  }
});

export default inputRecipe;