import { Box, Flex, Button, Grid, Text } from "@chakra-ui/react";

const Callouts = () => {
  return (
    <Box className="container">
      <Box
        className="callout callout--primary"
        padding={{ base: "4rem" }}
        borderRadius="5px"
        backgroundColor="var(--color-primary)"
        color="#fff"
      >
        <Box className="grid grid--1x2">
          <Grid
            display="grid"
            templateColumns={["1fr", null, null, "1fr auto"]}
          >
            <Box
              className="callout__content"
              textAlign={{ base: "center", lg: "left" }}
            >
              <Text
                className="h2 callout__heading"
                color="#fff"
                marginBottom="1rem"
                marginTop="0"
                fontSize="3rem"
                fontWeight="bold"
                lineHeight="1.1"
              >
                Ready to Get Started?
              </Text>
              <Text className="p" marginTop="0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi voluptate tempora qui distinctio consequatur aliquid
                pariatur cupiditate quas cum fugit.
              </Text>
            </Box>
            <Button
              className="btn btn--secondary btn--stretched"
              justifySelf={{ base: "center", lg: "start" }}
              alignSelf="center"
              border="0"
              borderRadius="40px"
              cursor="pointer"
              fontSize={{ base: "1.8rem", lg: "1.5rem" }}
              fontWeight="600"
              margin={{ base: "1rem 0", lg: "0 2rem" }}
              outline="0"
              padding="2rem 4vw"
              paddingLeft="6rem"
              paddingRight="6rem"
              textAlign="center"
              textTransform="uppercase"
              whiteSpace="nowrap"
              bg="var(--color-secondary)"
              color="#fff"
              _hover={{ bg: "#05cdf0" }}
            >
              Get Started
            </Button>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Callouts;
