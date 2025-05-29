import React from "react";

export enum LauncherModeType {
  AppLauncher = "app-launcher",
  Ollama = "ollama"
}

export interface LauncherMode {
  name: string;
  icon: React.ReactNode;
  type: LauncherModeType;
}

export default LauncherMode;