import React from 'react';
import {Flex, IconButton} from "@chakra-ui/react";
import {BiSend, BiX} from "react-icons/bi";

interface Props {
}

const LauncherControls: React.FC<Props> = () => {
  return (
    <Flex gap={2}>
      <IconButton>
        <BiSend/>
      </IconButton>
      <IconButton size={"md"} variant="outline">
        <BiX size={"20px"}/>
      </IconButton>
    </Flex>
  );
};

export default LauncherControls;