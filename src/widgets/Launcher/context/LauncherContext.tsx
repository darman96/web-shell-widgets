import React, { createContext, useContext, useState, ReactNode } from "react";
import { LauncherModeType } from "../types/LauncherMode";

interface LauncherContextType {
  selectedMode: LauncherModeType;
  setSelectedMode: (mode: LauncherModeType) => void;

  selectedOllamaModel: string | null;
  setSelectedOllamaModel: (model: string | null) => void;
}

const LauncherContext = createContext<LauncherContextType | undefined>(
  undefined
);

interface LauncherProviderProps {
  children: ReactNode;
  initialMode?: LauncherModeType;
}

export const LauncherProvider: React.FC<LauncherProviderProps> = ({
  children,
  initialMode = LauncherModeType.Ollama,
}) => {
  const [selectedMode, setSelectedMode] =
    useState<LauncherModeType>(initialMode);
  const [selectedOllamaModel, setSelectedOllamaModel] = useState<string | null>(
    null
  );

  return (
    <LauncherContext.Provider
      value={{
        selectedMode,
        setSelectedMode,
        selectedOllamaModel,
        setSelectedOllamaModel,
      }}
    >
      {children}
    </LauncherContext.Provider>
  );
};

export const useLauncher = (): LauncherContextType => {
  const context = useContext(LauncherContext);
  if (context === undefined) {
    throw new Error("useLauncher must be used within a LauncherProvider");
  }
  return context;
};

export default LauncherContext;
