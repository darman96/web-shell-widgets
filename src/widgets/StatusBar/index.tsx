import React from "react";
import { Box, Button, Flex, FlexProps, Text, VStack } from "@chakra-ui/react";
import OverlayWindow from "@/components/OverlayWindow";
import Time from "./Time";
import BarWindow, { Anchor } from "@/components/BarWindow";

const containerProps: FlexProps = {
  gap: 2,
  padding: 2,
};

export const StatusBar: React.FC = () => {
  return (
    <BarWindow anchor={Anchor.Right}>
      <Flex {...containerProps}>
        <Time />
      </Flex>
    </BarWindow>
  );
};

export default StatusBar;
