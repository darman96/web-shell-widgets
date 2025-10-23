import { PropsWithChildren } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import useScreenInfo from "@/lib/hooks/useScreenInfo";

export interface VirtualScreenProps extends BoxProps {}

const VirtualScreen: React.FC<PropsWithChildren<VirtualScreenProps>> = (
  props,
) => {
  const screenInfo = useScreenInfo();

  const rootProps: BoxProps = {};

  const mergedProps = { ...rootProps, ...props };

  return <Box {...mergedProps} />;
};

export default VirtualScreen;
