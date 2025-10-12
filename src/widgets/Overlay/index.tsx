import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";

const Overlay: React.FC = () => {
  const flexStyle: FlexProps = {
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    bg: "transparent",
  };

  return (
    <Flex {...flexStyle}>
      <Box>
        <Text>Hello</Text>
      </Box>
    </Flex>
  );
};

export default Overlay;
