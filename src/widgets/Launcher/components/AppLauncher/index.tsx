import React from "react";
import { Flex } from "@chakra-ui/react";
import LauncherControls from "../LauncherControls";
import LauncherModeSelect from "../LauncherModeSelect";
import AppLauncherInput from "./AppLauncherInput";

const AppLauncher: React.FC = () => {
  return (
    <Flex gap={2} flexGrow={1}>
      <LauncherModeSelect />
      <AppLauncherInput />
      <LauncherControls />
    </Flex>
  );
};

export default AppLauncher;
