// const Links = () => {
//   return (
//     <a href="#" className="link-arrow">
//       Learn More
//     </a>
//   );
// };

// export default Links;

import { Link as ChakraLink } from "@chakra-ui/react";

const Links = () => {
  return (
    <ChakraLink
      className="link-arrow"
      href="#"
      // fontSize={"2rem"}
      fontSize={{ base: "2rem", lg: "1.5rem" }}
      fontWeight="bold"
      color="#ff3400"
      textTransform="uppercase"
      _hover={{
        "::after": {
          marginLeft: "10px",
        },
      }}
      sx={{
        "::after": {
          content: '">"',
          marginLeft: "5px",
          transition: "margin 0.15s",
        },
        // "@media screen and (min-width: 1024px)": {
        //   fontSize: "1.5rem",
        // },
        // "@media screen and (max-width: 1024px)": {
        //   fontSize: "2rem",
        // },
      }}
    >
      Learn More
    </ChakraLink>
  );
};

export default Links;
