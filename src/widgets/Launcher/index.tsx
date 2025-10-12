import OverlayWindow, { OverlayWindowProps } from "@/components/OverlayWindow";
import { Button, Center, Flex, Show } from "@chakra-ui/react";
import React from "react";
import AppLauncher from "./components/AppLauncher";
import OllamaLauncher from "./components/OllamaLauncher";
import { useLauncher, LauncherProvider } from "./context/LauncherContext";
import { LauncherModeType } from "./types/LauncherMode";

interface Props {}

const windowProps: OverlayWindowProps = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

const LauncherContent: React.FC = () => {
  const { selectedMode } = useLauncher();
  const [test, setTest] = React.useState<string>("");

  const handleClick = async () => {
    const resp = await window.webShell.invoke<string>("ping");
    setTest(resp);
  };

  return (
    <Flex w={"100%"} direction={"column"} gap={4}>
      <Show when={selectedMode === LauncherModeType.AppLauncher}>
        <AppLauncher />
      </Show>
      <Show when={selectedMode === LauncherModeType.Ollama}>
        <OllamaLauncher />
      </Show>
      <Center>Test: {test}</Center>
      <Center>
        <Button onClick={handleClick}>Click Me!</Button>
      </Center>
    </Flex>
  );
};

const Launcher: React.FC<Props> = () => {
  return (
    <LauncherProvider initialMode={LauncherModeType.AppLauncher}>
      <OverlayWindow {...windowProps} height={300}>
        <LauncherContent />
      </OverlayWindow>
    </LauncherProvider>
  );
};

export default Launcher;
