// const Blocks = () => {
//   return (
//     <section className="block block--dark block--skewed-left">
//       <header className="block__header">
//         <h2 className="block__heading">Heading</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
//           laboriosam.
//         </p>
//       </header>
//     </section>
//   );
// };

// export default Blocks;

import { Box, Icon, Text } from "@chakra-ui/react";

// ************* block *************

// const Blocks = () => {
//   return (
//     <Box
//       className="block container"
//       padding="6rem 2rem"
//       maxWidth="1140px"
//       margin="0 auto"
//     >
//       <Box className="block__header" textAlign="center">
//         <Text
//           className="h2 block__heading"
//           color="var(--color-headings)"
//           marginBottom="1rem"
//           marginTop="0"
//           fontSize="4rem"
//           fontWeight="bold"
//           lineHeight="1.1"
//         >
//           Heading
//         </Text>
//         <Text className="p" marginTop="0">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
//           laboriosam.
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// ************* block block--dark *************

// const Blocks = () => {
//   return (
//     <Box
//       className="block block--dark"
//       padding="6rem 2rem"
//       paddingBottom="10rem"
//       border="2px solid red"
//       bg="#000"
//       color="#7b858b"
//     >
//       <Box
//         className="block__header container"
//         textAlign="center"
//         maxWidth="1140px"
//         margin="0 auto"
//       >
//         <Text
//           className="h2 block__heading"
//           color="#fff"
//           marginBottom="1rem"
//           marginTop="0"
//           fontSize="4rem"
//           fontWeight="bold"
//           lineHeight="1.1"
//         >
//           Heading
//         </Text>
//         <Text className="p" marginTop="0">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
//           laboriosam.
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// ************* block block--white *************

// const Blocks = () => {
//   return (
//     <Box
//       className="block block--white"
//       padding="6rem 2rem"
//       paddingBottom="10rem"
//       border="2px solid red"
//       bg="#fff"
//       color="#7b858b"
//     >
//       <Box
//         className="block__header container"
//         textAlign="center"
//         maxWidth="1140px"
//         margin="0 auto"
//       >
//         <Text
//           className="h2 block__heading"
//           color="#fff"
//           marginBottom="1rem"
//           marginTop="0"
//           fontSize="4rem"
//           fontWeight="bold"
//           lineHeight="1.1"
//         >
//           Heading
//         </Text>
//         <Text className="p" marginTop="0">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
//           laboriosam.
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// ************* block block--dark block--skewed-left *************

// const Blocks = () => {
//   return (
//     <Box
//       className="block block--dark block--skewed-left"
//       padding="6rem 2rem"
//       paddingBottom="10rem"
//       border="2px solid red"
//       bg="#000"
//       color="#7b858b"
//       clipPath="polygon(0% 0%, 100% 0%, 100% 100%, 0% 90%)"
//     >
//       <Box
//         className="block__header container"
//         textAlign="center"
//         maxWidth="1140px"
//         margin="0 auto"
//       >
//         <Text
//           className="h2 block__heading"
//           color="#fff"
//           marginBottom="1rem"
//           marginTop="0"
//           fontSize="4rem"
//           fontWeight="bold"
//           lineHeight="1.1"
//         >
//           Heading
//         </Text>
//         <Text className="p" marginTop="0">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
//           laboriosam.
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// ************* block block--dark block--skewed-right *************

const Blocks = () => {
  return (
    <Box
      className="block block--dark block--skewed-right"
      padding="6rem 2rem"
      paddingBottom="10rem"
      border="2px solid red"
      bg="#000"
      color="#7b858b"
      clipPath="polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)"
    >
      <Box
        className="block__header container"
        textAlign="center"
        maxWidth="1140px"
        margin="0 auto"
      >
        <Text
          className="h2 block__heading"
          color="#fff"
          marginBottom="1rem"
          marginTop="0"
          fontSize="4rem"
          fontWeight="bold"
          lineHeight="1.1"
        >
          Heading
        </Text>
        <Text className="p" marginTop="0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          laboriosam.
        </Text>
      </Box>
    </Box>
  );
};

export default Blocks;
