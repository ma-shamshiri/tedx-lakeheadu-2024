import { Box, Icon } from "@chakra-ui/react"; // Import Chakra UI components
import { BsWordpress } from "react-icons/bs"; // Import the Wordpress icon

// ************* icon icon--primary *************

const Icons = () => {
  return (
    <Box
      className="icon-container"
      background="#f3f9fa"
      width="64px"
      height="64px"
      borderRadius="100%"
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
    >
      <Icon
        className="icon icon--primary"
        as={BsWordpress}
        width="40px"
        height="40px"
        // icon--small
        // width="40px"
        // height="40px"
        color="var(--color-primary)"
      />
    </Box>
  );
};

export default Icons;
