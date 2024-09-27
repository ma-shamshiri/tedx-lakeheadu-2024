import { Box, Flex, Grid, Icon, Image, Text } from "@chakra-ui/react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
// import { testimonial } from "../../assets";

const Testimonials = () => {
  return (
    <div style={{ padding: "5rem" }}>
      <Box
        className="card testimonial"
        padding="3rem"
        borderRadius="7px"
        boxShadow="0 0 20px 10px #f3f3f3"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          className="grid grid--1x2"
          display="grid"
          templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
        >
          <Box
            className="testimonial__image"
            position="relative"
            margin={{ base: "0 3rem", lg: "0" }}
          >
            <Image
              // src={testimonial}
              width="100%"
              alt="A happy smiling customer"
            />
            <Box
              className="icon-container icon-container--accent"
              background="#f3f9fa"
              width="64px"
              height="64px"
              borderRadius="100%"
              display="inline-flex"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="3rem"
              right="-32px"
              backgroundColor="var(--color-accent)"
            >
              <Icon
                className="icon icon--white"
                as={BsFillChatQuoteFill}
                width="40px"
                height="40px"
                color="#fff"
              />
            </Box>
          </Box>

          <Box
            className="quote"
            as="blockquote"
            fontSize={{ base: "110%", lg: "120%" }}
            fontStyle="italic"
            color="var(--color-body-darker)"
            lineHeight={{ base: "1.3", lg: "1.5" }}
            margin={{ base: "2rem 0", lg: "5rem 0 0 6rem" }}
          >
            <Text
              className="quote__text"
              _before={{ content: "open-quote" }}
              _after={{ content: "close-quote" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              optio officiis dolore earum error eaque perferendis laudantium sed
              praesentium dolorum.
            </Text>
            <footer>
              <Box>
                <Flex className="media" marginBottom="4rem">
                  <Box className="media__image" marginTop="1rem">
                    <Icon
                      className="icon icon--primary quote__line"
                      as={AiOutlineLine}
                      width="40px"
                      height="40px"
                      color="var(--color-primary)"
                      position="relative"
                      bottom="10px"
                    />
                  </Box>
                  <Box className="media__body" margin="0 2rem">
                    <Text
                      className="media__title quote__author"
                      fontSize={{ base: "3rem", lg: "2.4rem" }}
                      fontWeight="500"
                      fontStyle="normal"
                      marginTop="0"
                      marginBottom="0"
                    >
                      John Smith
                    </Text>
                    <Text
                      className="quote__organization"
                      color="var(--color-headings)"
                      opacity="0.4"
                      fontSize={{ base: "2rem", lg: "1.6rem" }}
                      fontStyle="normal"
                    >
                      ABC Company
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </footer>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Testimonials;
