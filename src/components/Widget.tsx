import React, { PropsWithChildren } from "react";
import ProviderStack from "./ProviderStack";
import { Box, BoxProps } from "@chakra-ui/react";

interface Props {}

export const Widget: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children } = props;

  const boxProps: BoxProps = {
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
    backgroundColor: "transparent",
  };

  return (
    <ProviderStack>
      <Box {...boxProps}>{children}</Box>
    </ProviderStack>
  );
};

export default Widget;
