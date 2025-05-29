import React, { PropsWithChildren } from "react";
import { render } from "preact";
import { Box, BoxProps, Container, ContainerProps } from "@chakra-ui/react";
import ProviderStack from "./components/ProviderStack";
import Launcher from "./widgets/Launcher";
import StatusBar from "./widgets/StatusBar";

const Widget: React.FC<PropsWithChildren<BoxProps>> = ({
  children,
  ...boxProps
}) => {
  return <Box {...boxProps}>{children}</Box>;
};

const Desktop: React.FC = () => {
  const desktopProps: BoxProps = {
    width: "100vw",
    height: "100vh",
    backgroundImage: "url('/desktop.png')",
    backgroundSize: "cover",
  };

  const launcherWidgetProps: BoxProps = {
    width: "800px",
    height: "400px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const statusBarWidgetProps: BoxProps = {
    width: "100%",
    height: "50px",
    position: "absolute",
    top: "0",
    left: "0",
    padding: 2,
  };

  return (
    <Box {...desktopProps}>
      <Widget {...launcherWidgetProps}>
        <Launcher />
      </Widget>
      <Widget {...statusBarWidgetProps}>
        <StatusBar />
      </Widget>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <ProviderStack>
      <Desktop />
    </ProviderStack>
  );
};

render(<App />, document.getElementById("app"));
