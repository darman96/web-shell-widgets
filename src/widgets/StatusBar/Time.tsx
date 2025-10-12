import { Span, StackProps, SystemStyleObject, VStack } from "@chakra-ui/react";

const boxStyle: StackProps = {
  flexGrow: 1,
  border: "1px solid #393e46",
  background: "#393e46",
  _hover: {
    borderColor: "#ffd369",
  },
  gap: 0,
  fontSize: "1.75rem",
  lineHeight: 1,
  padding: "0.5rem 0",
};

const Time: React.FC = () => {
  return (
    <VStack {...boxStyle}>
      <Span>23</Span>
      <Span>45</Span>
    </VStack>
  );
};

export default Time;
