import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import OverlayWindow from "@/components/OverlayWindow";

export const StatusBar: React.FC = () => {
  return (
    <OverlayWindow p={0}>
      <Flex height={"100%"} justify={"center"} align={"center"}>
        <Text lineHeight={1}>22:34</Text>
      </Flex>
    </OverlayWindow>
  );
};

export default StatusBar;
