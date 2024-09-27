// const Inputs = () => {
//   return (
//     <input
//       type="text"
//       className="input"
//       placeholder="Enter domain name here..."
//     />
//   );
// };

// export default Inputs;

import { Icon, Box, Input, Flex, Button, Center } from "@chakra-ui/react";
import { BsWordpress } from "react-icons/bs"; // Import the Wordpress icon

// ************* input *************

// const Inputs = () => {
//   return (
//     <Input
//       className="input"
//       color="var(--color-headings)"
//       borderColor="var(--color-border)"
//       padding={{ base: "1.5rem 3.5rem", lg: "1.5rem 2rem" }}
//       borderRadius="var(--border-radius)"
//       variant="outline"
//       fontSize={{ base: "2rem", lg: "1.5rem" }}
//       placeholder="Enter domain name here..."
//       _placeholder={{ color: "#cdcbd7" }}
//     />
//   );
// };

// export default Inputs;

// ************* input-group *************

const Inputs = () => {
  return (
    <Flex
      className="input-group"
      border="1px solid var(--color-border)" // Set the border here
      borderRadius="var(--border-radius)"
      alignItems={"center"}
    >
      <Input
        className="input"
        variant="outline"
        border="0"
        borderRadius="var(--border-radius)"
        borderColor="var(--color-border)"
        focusBorderColor="transparent" // This will remove the focus outline
        color="var(--color-headings)"
        fontSize={{ base: "2rem", md: "1.5rem" }}
        padding={{ base: "1.5rem 1rem", md: "1.5rem 2rem" }}
        // margin={"4px"}
        placeholder="Enter domain name here..."
        _placeholder={{ color: "#cdcbd7" }}
        flexGrow={1}
      />
      <Button
        className="btn btn--accent"
        border="0"
        borderRadius="40px"
        cursor="pointer"
        fontSize={{ base: "1.8rem", lg: "1.5rem" }}
        fontWeight="600"
        margin="4px"
        outline="0"
        padding="1.5rem 4vw"
        textAlign="center"
        textTransform="uppercase"
        whiteSpace="nowrap"
        bg="var(--color-accent)"
        color="#fff"
        _hover={{ bg: "#ec3000" }}
      >
        Buy Now
      </Button>
    </Flex>
  );
};
export default Inputs;
