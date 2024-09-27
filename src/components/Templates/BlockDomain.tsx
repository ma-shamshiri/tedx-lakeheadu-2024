import { BsSearch } from "react-icons/bs";
import {
  Box,
  Text,
  Button,
  Flex,
  Input,
  Icon,
  List,
  ListItem,
  Badge,
} from "@chakra-ui/react";

const BlockDomain = () => {
  return (
    <Box
      className="block container block-domain"
      padding="6rem 2rem"
      maxWidth="1140px"
      margin="0 auto"
    >
      <Box className="block__header" textAlign="center">
        <Text
          className="h2"
          color="var(--color-headings)"
          marginBottom="1rem"
          // marginTop="0"
          fontSize="4rem"
          fontWeight="bold"
          lineHeight="1.1"
        >
          Starting at $9 per month
        </Text>
        <Text className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          exercitationem?
        </Text>
      </Box>
      <Flex
        className="input-group"
        border="0"
        borderRadius="var(--border-radius)"
        alignItems={"center"}
        boxShadow="0 0 30px 20px #e6ebee"
        margin="4rem auto"
        maxWidth="670px"
      >
        <Input
          className="input"
          variant="outline"
          border="0"
          borderRadius="var(--border-radius)"
          borderColor="var(--color-border)"
          focusBorderColor="transparent"
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
          <Icon
            className="icon icon--white"
            as={BsSearch}
            width="2rem"
            height="2rem"
            marginRight="1rem"
            verticalAlign="middle"
            color="var(--color-white)"
          />
          Search
        </Button>
      </Flex>
      <List
        className="list block-domain__prices"
        color="var(--color-headings)"
        paddingLeft="0"
        display="grid"
        gridTemplateColumns={[
          "repeat(3,1fr)",
          null,
          null,
          "repeat(auto-fit, minmax(10rem, 1fr))",
        ]}
        gridTemplateRows="repeat(2, 6rem)"
        fontSize="2rem"
        fontWeight="600"
        justifyItems="center"
        maxWidth="700px"
        margin="0 auto"
      >
        <ListItem className="list__item">.com $9</ListItem>
        <ListItem className="list__item">
          {" "}
          <Badge
            className="badge badge--secondary"
            borderRadius="20px"
            fontSize={{ base: "2rem", lg: "1.5rem" }}
            fontWeight="600"
            padding="0.5rem 2rem"
            whiteSpace="nowrap"
            bg="#00d9ff"
            color="#fff"
          >
            10% Off
          </Badge>
        </ListItem>
        <ListItem className="list__item">.space $11</ListItem>
        <ListItem className="list__item">.info $14</ListItem>
        <ListItem className="list__item">.net $10</ListItem>
        <ListItem className="list__item">.xyz $10</ListItem>
      </List>
    </Box>
  );
};

export default BlockDomain;
