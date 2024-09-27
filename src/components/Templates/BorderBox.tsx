import { Box } from "@chakra-ui/react";

const BorderBox = () => {
  return (
    <Box
      width={"100rem"}
      height={"100rem"}
      background={"white"}
      borderWidth={"1rem"}
      borderColor={"transparent"}
      position="relative"
    >
      <Box
        position="absolute"
        top="-1rem"
        left="0"
        width="100%"
        height="0.5rem"
        background={`linear-gradient(to right, rgba(255, 0, 0, 0), red, purple, rgba(128, 0, 128, 0))`}
      ></Box>
    </Box>
  );
};

export default BorderBox;
