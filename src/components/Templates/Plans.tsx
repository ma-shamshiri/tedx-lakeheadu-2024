import { Badge, Box, Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import tickImage from "../../assets/images/tick.svg";

// ************* plan *************

const Plans = () => {
  return (
    <Box w="50%" p="4rem">
      <Box className="plan">
        <Box
          className="card card--primary"
          borderRadius="7px"
          boxShadow="0 0 20px 10px #f3f3f3"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            className="card__header"
            bg="var(--color-primary)"
            color="#fff"
            p="2rem 7%"
          >
            <Text
              className="plan__name"
              color="#fff"
              margin="0"
              fontSize={{ base: "2.4rem", lg: "1.4rem" }}
              fontWeight="500"
            >
              Entry
            </Text>
            <Flex flexDirection="row" alignItems="baseline">
              <Text
                className="plan__price"
                fontSize={{ base: "6rem", lg: "5rem" }}
              >
                $14
              </Text>
              <Text
                className="plan__billing-cycle"
                fontSize={{ base: "2.4rem", lg: "1.6rem" }}
                fontWeight="300"
                opacity="0.8"
                marginRight="1rem"
              >
                /month
              </Text>
              <Badge
                className="badge badge--primary badge--small"
                as={Box}
                borderRadius="20px"
                fontSize={{ base: "1.6rem", lg: "1.2rem" }}
                fontWeight="600"
                padding={"0.5rem 1.5rem"}
                whiteSpace="nowrap"
                bg="#116ade"
                color="#fff"
              >
                10% Off
              </Badge>
            </Flex>

            <Text
              className="plan__description"
              fontSize="2rem"
              fontWeight="300"
              letterSpacing="1px"
              display="block"
            >
              East start on the cloud
            </Text>
          </Box>
          <Box className="card__body" p="2rem 7%">
            <List
              className="list list--tick"
              color="var(--color-headings)"
              padding={0}
              paddingLeft={"3rem"}
              style={{
                listStyleImage: `url(${tickImage})`,
              }}
            >
              {/* Chakra UI ListItem with custom styling */}
              <ListItem
                className="list__item"
                paddingLeft={{ base: "0.5rem", lg: "0" }}
                marginBottom={"1rem"}
              >
                Unlimited Websites
              </ListItem>
              <ListItem
                className="list__item"
                paddingLeft={{ base: "0.5rem", lg: "0" }}
                marginBottom={"2rem"}
              >
                Unlimited Bandsith
              </ListItem>
              <ListItem
                className="list__item"
                paddingLeft={{ base: "0.5rem", lg: "0" }}
                marginBottom={"2rem"}
              >
                100 GB SSD Storage
              </ListItem>
              <ListItem
                className="list__item"
                paddingLeft={{ base: "0.5rem", lg: "0" }}
                marginBottom={"2rem"}
              >
                3 GB RAM
              </ListItem>
              <Link
                className="btn btn--secondary btn--block"
                href="#"
                border="2px solid var(--color-headings)"
                borderRadius="40px"
                cursor="pointer"
                fontSize={{ base: "1.8rem", lg: "1.5rem" }}
                fontWeight="600"
                margin="1rem 0"
                outline="0"
                padding="2rem 4vw"
                textAlign="center"
                textTransform="uppercase"
                whiteSpace="nowrap"
                bg="#fff"
                color="var(--color-headings)"
                display="inline-block"
                width="100%"
                _hover={{
                  bg: "var(--color-headings)",
                  color: "#fff",
                }}
              >
                Buy Now
              </Link>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Plans;

// ************* plan plan--popular *************

// const Plans = () => {
//   return (
//     <Box w="50%" p="4rem">
//       <Box className="plan plan--popular">
//         <Box
//           className="card card--primary"
//           borderRadius="7px"
//           boxShadow="0 0 20px 10px #f3f3f3"
//           overflow="hidden"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <Box
//             className="card__header"
//             bg="var(--color-primary)"
//             color="#fff"
//             p="2rem 7%"
//             position="relative"
//           >
// <Image
//   src={popular}
//   width="40px"
//   display="inline-block"
//   position="absolute"
//   top="-6px"
//   right="5%"
// />
//             <Text
//               className="plan__name"
//               color="#fff"
//               margin="0"
//               fontSize={{ base: "2.4rem", lg: "1.4rem" }}
//               fontWeight="500"
//             >
//               Entry
//             </Text>
//             <Flex
//               // alignItems="center"
//               // justifyContent="space-between"
//               flexDirection="row" // Set direction to row
//               // alignItems="flex-end"
//               alignItems="baseline"
//             >
//               <Text
//                 className="plan__price"
//                 fontSize={{ base: "6rem", lg: "5rem" }}
//               >
//                 $14
//               </Text>
//               <Text
//                 className="plan__billing-cycle"
//                 fontSize={{ base: "2.4rem", lg: "1.6rem" }}
//                 fontWeight="300"
//                 opacity="0.8"
//                 marginRight="1rem"
//               >
//                 /month
//               </Text>
//               <Badge
//                 className="badge badge--primary badge--small"
//                 as={Box}
//                 borderRadius="20px"
//                 fontSize={{ base: "1.6rem", lg: "1.2rem" }}
//                 fontWeight="600"
//                 padding={"0.5rem 1.5rem"}
//                 whiteSpace="nowrap"
//                 bg="#116ade"
//                 color="#fff"
//               >
//                 10% Off
//               </Badge>
//             </Flex>

//             <Text
//               className="plan__description"
//               fontSize="2rem"
//               fontWeight="300"
//               letterSpacing="1px"
//               display="block"
//             >
//               East start on the cloud
//             </Text>
//           </Box>
//           <Box className="card__body" p="2rem 7%">
//             <List
//               className="list list--tick"
//               color="var(--color-headings)"
//               padding={0}
//               paddingLeft={"3rem"}
//               style={{
//                 listStyleImage: `url(${tickImage})`,
//               }}
//             >
//               {/* Chakra UI ListItem with custom styling */}
//               <ListItem
//                 className="list__item"
//                 paddingLeft={{ base: "0.5rem", lg: "0" }}
//                 marginBottom={"1rem"}
//               >
//                 Unlimited Websites
//               </ListItem>
//               <ListItem
//                 className="list__item"
//                 paddingLeft={{ base: "0.5rem", lg: "0" }}
//                 marginBottom={"2rem"}
//               >
//                 Unlimited Bandsith
//               </ListItem>
//               <ListItem
//                 className="list__item"
//                 paddingLeft={{ base: "0.5rem", lg: "0" }}
//                 marginBottom={"2rem"}
//               >
//                 100 GB SSD Storage
//               </ListItem>
//               <ListItem
//                 className="list__item"
//                 paddingLeft={{ base: "0.5rem", lg: "0" }}
//                 marginBottom={"2rem"}
//               >
//                 3 GB RAM
//               </ListItem>
//               <Link
//                 className="btn btn--secondary btn--block"
//                 href="#"
//                 border="2px solid var(--color-headings)"
//                 borderRadius="40px"
//                 cursor="pointer"
//                 fontSize={{ base: "1.8rem", lg: "1.5rem" }}
//                 fontWeight="600"
//                 margin="1rem 0"
//                 outline="0"
//                 padding="2rem 4vw"
//                 textAlign="center"
//                 textTransform="uppercase"
//                 whiteSpace="nowrap"
//                 bg="#fff"
//                 color="var(--color-headings)"
//                 display="inline-block"
//                 width="100%"
//                 _hover={{ bg: "var(--color-headings)", color: "#fff" }}
//               >
//                 Buy Now
//               </Link>
//             </List>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Plans;
