import { defineConfig } from "@chakra-ui/react";
import inputRecipe from "@/theme/recipes/input";
import semanticTokens from "@/theme/semanticTokens";
import buttonRecipe from "@/theme/recipes/button";
import selectRecipe from "@/theme/slotRecipes/select";

const themeConfig = defineConfig({
  globalCss: {
    html: {
      bg: "transparent",
      colorPalette: "purple",
      fontFamily: "'Digital-7 Mono'",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
  },
  theme: {
    tokens: {
      colors: {},
    },
    semanticTokens,
    recipes: {
      input: inputRecipe,
      button: buttonRecipe,
    },
    slotRecipes: {
      select: selectRecipe,
    },
  },
});

export default themeConfig;
