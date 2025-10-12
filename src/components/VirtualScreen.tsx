import { PropsWithChildren } from "preact/compat";
import useAsync from "@/lib/hooks/useAsync";
import { Box, BoxProps } from "@chakra-ui/react";

export interface VirtualScreenProps extends BoxProps {}

const VirtualScreen: React.FC<PropsWithChildren<VirtualScreenProps>> = (
  props,
) => {
  const screenInfo = useAsync(async () => {
    return await window.webShell.getScreenInfo();
  });

  const rootProps: BoxProps = {
    position: "absolute",
    left: 0,
    top: 0,
    width: `2560px`,
    height: `1440px`,
  };

  const mergedProps = { ...rootProps, ...props };

  return <Box {...mergedProps} />;
};

export default VirtualScreen;
