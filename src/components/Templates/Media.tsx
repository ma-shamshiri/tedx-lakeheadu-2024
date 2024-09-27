// import { RiSnapchatFill } from "react-icons/ri";

// const Media = () => {
//   return (
//     <div>
//       <div className="media">
//         <div className="media__image">
//           <RiSnapchatFill className="icon icon--primary" />
//         </div>
//         <div className="media__body">
//           <h3 className="media__title">Easy Start & Managed Updates</h3>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
//             quisquam, ex nostrum vero voluptates dicta excepturi vel
//             perspiciatis consequuntur ab.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Media;

import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { BsWordpress } from "react-icons/bs"; // Import the Wordpress icon

const Media = () => {
  return (
    <Box>
      <Flex className="media" marginBottom="4rem">
        <Box className="media__image" marginTop="1rem">
          <Icon
            className="icon icon--primary"
            as={BsWordpress}
            width="40px"
            height="40px"
            color="var(--color-primary)"
          />
        </Box>
        <Box className="media__body" margin="0 2rem">
          <Text className="media__title" marginTop="0">
            Easy Start & Managed Updates
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quisquam, ex nostrum vero voluptates dicta excepturi vel
            perspiciatis consequuntur ab.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Media;
