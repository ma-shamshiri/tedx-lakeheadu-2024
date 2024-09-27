import {
    Box,
    Icon,
    ResponsiveValue,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { BsChatRightQuoteFill } from "react-icons/bs";
  
  interface QuoteCardProps {
    width?: ResponsiveValue<string>;
    height?: ResponsiveValue<string>;
    quoteText: string;
  }
  
  const QuoteCard: React.FC<QuoteCardProps> = ({
    width = "100%",
    height,
    quoteText,
  }) => {
    return (
      <Box
        className="card testimonial aos-animate"
        width={width}
        height={height}
        padding="2.5rem 2rem 2rem 2rem"
        borderRadius="7px"
        boxShadow="0 0 30px 1px black"
        //   overflow="hidden"
        justifyContent="center"
        alignItems="center"
        position="relative"
        onMouseEnter={() => null}
        onMouseLeave={() => null}
        borderWidth={"1rem"}
        borderColor={"transparent"}
        //   data-aos="fade-up"
        //   data-aos-duration="500"
        bg={useColorModeValue("gray.800", "gray.800")}
      >
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
          top="-4rem"
          left="-4rem"
          backgroundColor="var(--color-accent)"
          marginRight={{ md: "2rem" }}
        >
          <Icon
            className="icon icon--white"
            //   as={BsFillChatQuoteFill}
            as={BsChatRightQuoteFill}
            width="35px"
            height="35px"
            color="#fff"
          />
        </Box>
        <Box
          className="quote"
          as="blockquote"
          fontSize={{ base: "110%", lg: "130%" }}
          fontStyle="italic"
          color="var(--color-body-darker)"
          gridColumn={true ? "span 2" : "span 1"}
          margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
        >
          <Text
            className="quote__text"
            textAlign="left"
            _before={{ content: "open-quote" }}
            _after={{ content: "close-quote" }}
            color="gray.400"
          >
            {quoteText}
          </Text>
        </Box>
      </Box>
    );
  };
  
  export default QuoteCard;
  