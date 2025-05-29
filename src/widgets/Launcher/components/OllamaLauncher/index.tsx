import React from "react";
import { Flex } from "@chakra-ui/react";
import LauncherControls from "../LauncherControls";
import LauncherInput from "../LauncherInput";
import LauncherModeSelect from "../LauncherModeSelect";
import OllamaModelSelector from "./OllamaModelSelector";

const OllamaLauncher: React.FC = () => {
  return (
    <Flex gap={2} flexGrow={1}>
      <LauncherModeSelect />
      <LauncherInput />
      <OllamaModelSelector />
      <LauncherControls />
    </Flex>
  );
};

export default OllamaLauncher;
