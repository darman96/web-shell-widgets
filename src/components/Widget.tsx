import React, { PropsWithChildren, useEffect } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import ProviderStack from "./ProviderStack";
import useScreenInfo from "@/lib/hooks/useScreenInfo";

export interface WidgetProps extends BoxProps {}

const defaultProps: WidgetProps = {
  margin: 0,
  padding: 0,
  backgroundColor: "transparent",
  border: "1px solid red",
};

export const Widget: React.FC<PropsWithChildren<WidgetProps>> = (props) => {
  const { children, ...boxProps } = props;
  const screenInfo = useScreenInfo();

  const containerRef = React.useRef(null);
  const sizeRef = React.useRef({ width: -1, height: -1 });

  const sizeUpdate = (width: number, height: number) => {
    window.webShell.invoke("sizeUpdate", {
      width,
      height,
    });
  };

  useEffect(() => {
    if (!containerRef.current || !screenInfo) {
      console.log("ref not yet initialized");
      return;
    }

    console.log(screenInfo);

    const resizeObserver = new ResizeObserver(() => {
      const requestedWidth = Math.min(
        containerRef.current.offsetWidth,
        screenInfo.width,
      );
      if (requestedWidth !== sizeRef.current.width) {
        sizeRef.current.width = requestedWidth;
        sizeUpdate(sizeRef.current.width, sizeRef.current.width);
      }

      const requestedHeight = Math.min(
        containerRef.current.offsetHeight,
        screenInfo.height,
      );
      if (requestedHeight !== sizeRef.current.height) {
        sizeRef.current.height = requestedHeight;
        sizeUpdate(sizeRef.current.width, sizeRef.current.width);
      }

      window.webShell.info(
        `requestedWidth: ${requestedWidth}, requestedHeight: ${requestedHeight}`,
      );
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef.current, screenInfo]);

  const mergedProps = {
    ...defaultProps,
    ...boxProps,
    transition: `width 0.5s ease-in-out`,
  };

  return (
    <ProviderStack>
      <Box {...mergedProps} ref={containerRef}>
        {children}
      </Box>
    </ProviderStack>
  );
};

export default Widget;
