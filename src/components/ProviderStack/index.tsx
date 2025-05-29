import React, { PropsWithChildren } from "react";
import ThemeProvider from "./chakra/ThemeProvider";

interface Props {}

export const ProviderStack: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ProviderStack;
