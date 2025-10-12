import React, { PropsWithChildren } from "react";
import { Box, SystemStyleObject } from "@chakra-ui/react";

export interface OverlayWindowProps extends SystemStyleObject {}

const defaultProps: OverlayWindowProps = {
  bg: "bg.panel",
  borderColor: "border.panel",
  borderRadius: "md",
  borderWidth: "1px",
  padding: "4",
};

const OverlayWindow: React.FC<PropsWithChildren<OverlayWindowProps>> = (
  props,
) => {
  const { children, ...styleProps } = props;

  const mergedProps = { ...defaultProps, ...styleProps };

  return <Box {...mergedProps}>{children}</Box>;
};

export default OverlayWindow;
