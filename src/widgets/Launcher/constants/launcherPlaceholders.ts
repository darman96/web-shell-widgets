import { LauncherModeType } from "../types/LauncherMode";

const launcherPlaceholders: { [key in LauncherModeType]: string } = {
  [LauncherModeType.AppLauncher]: "Search...",
  [LauncherModeType.Ollama]: "Ask Ollama...",
};

export default launcherPlaceholders;
