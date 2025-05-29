import { InputProps, Input } from "@chakra-ui/react";
import React from "react";
import launcherPlaceholders from "../constants/launcherPlaceholders";
import { useLauncher } from "../context/LauncherContext";

export interface LauncherInputProps extends Omit<InputProps, "type"> {}

const LauncherInput: React.FC<LauncherInputProps> = (props) => {
  const { ...inputProps } = props;
  const { selectedMode } = useLauncher();

  const defaultProps: InputProps = {
    flexGrow: 1,
    type: "text",
    placeholder: launcherPlaceholders[selectedMode],
  };

  const mergedProps = { ...defaultProps, ...inputProps };

  return <Input {...mergedProps} />;
};

export default LauncherInput;
