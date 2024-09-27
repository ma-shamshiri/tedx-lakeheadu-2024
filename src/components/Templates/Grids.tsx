import { Box, Grid } from "@chakra-ui/react";

// grid grid--1x2

const Grids = () => {
  return (
    <Box className="grid grid--1x2">
      <Grid
        display="grid"
        templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
      >
        <Box height="100px" background="gold"></Box>
        <Box height="100px" background="dodgerblue"></Box>
      </Grid>
    </Box>
  );
};

// grid grid--1x3

// const Grids = () => {
//   return (
//     <Box className="grid grid--1x3">
//       <Grid
//         display="grid"
//         templateColumns={["1fr", null, null, "repeat(3, 1fr)"]}
//       >
//         <Box height="100px" background="gold"></Box>
//         <Box height="100px" background="dodgerblue"></Box>
//         <Box height="100px" background="tomato"></Box>
//       </Grid>
//     </Box>
//   );
// };

export default Grids;
