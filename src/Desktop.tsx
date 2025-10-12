import React from "react";
import StatusBar from "./widgets/StatusBar";
import VirtualScreen, { VirtualScreenProps } from "./components/VirtualScreen";

const Desktop: React.FC = () => {
  const screenProps: VirtualScreenProps = {
    width: `${window.innerWidth}px`,
    height: `${window.innerHeight}px`,
    backgroundImage: "url('/desktop.png')",
    backgroundSize: "cover",
    border: "1px solid yellow",
    maxWidth: `${window.innerWidth}px`,
    maxHeight: `${window.innerHeight}px`,
  };

  return (
    <VirtualScreen {...screenProps}>
      <StatusBar />
    </VirtualScreen>
  );
};

export default Desktop;
