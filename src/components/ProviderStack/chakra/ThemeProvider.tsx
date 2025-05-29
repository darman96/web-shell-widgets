import React from "react";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import themeConfig from "@/theme";
import { ColorModeProvider, ColorModeProviderProps } from "./ColorModeProvider";

const system = createSystem(defaultConfig, themeConfig);

export const ThemeProvider: React.FC<ColorModeProviderProps> = (props) => {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
};

export default ThemeProvider;
