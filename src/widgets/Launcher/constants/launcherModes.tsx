import { SiOllama } from "react-icons/si";
import { MdApps } from "react-icons/md";
import LauncherMode, { LauncherModeType } from "../types/LauncherMode";

const launcherModes: { [key in LauncherModeType]: LauncherMode } = {
  [LauncherModeType.AppLauncher]: {
    name: "App Launcher",
    icon: <MdApps />,
    type: LauncherModeType.AppLauncher,
  },
  [LauncherModeType.Ollama]: {
    name: "Ollama",
    icon: <SiOllama />,
    type: LauncherModeType.Ollama,
  },
};

export const launcherModesArray = Object.values(launcherModes);

export default launcherModes;
