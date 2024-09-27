import React from "react";
import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

interface SpeakerCardProps {
  isHovered?: boolean;
  handleHover?: () => void;
  handleUnhover?: () => void;
  src: string;
  name: string;
  title: string;
  talkTitle?: string;
  imageMarginTop?: string;
  imageMarginBottom?: string;
  nameMarginTop?: string;
  titleMarginBottom?: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  isHovered,
  handleHover,
  handleUnhover,
  src,
  name,
  title,
  talkTitle,
  imageMarginTop = "0",
  imageMarginBottom = "2rem",
  nameMarginTop,
  titleMarginBottom,
}) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop={imageMarginTop}
    >
      <Box
        className="talk_title_container"
        marginBottom="2rem"
        opacity={isHovered ? 1 : 0}
        transition="opacity 0.3s ease-in-out"
      >
        <Text
          fontSize="1.7rem"
          color="rgb(241,241,241)"
          fontStyle="italic"
          //   fontWeight="bold"
        >
          Talk Topic
        </Text>
        <Text
          fontSize="2.3rem"
          color="#F8F0C6"
          //   fontWeight="bold"
        >
          Coming Soon..
        </Text>
      </Box>
      <Box
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        position="relative"
        width={{ base: "15rem", md: "18rem", lg: "18rem" }}
        height={{ base: "15rem", md: "18rem", lg: "18rem" }}
        bg="white"
        borderRadius="100%"
        marginBottom={imageMarginBottom}
        overflow="hidden"
        border="2px solid transparent"
        transition="border-color 0.3s ease-out"
        _hover={{
          borderColor: "#16F8B6",
        }}
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          bg="black"
          opacity="0"
          zIndex="1"
          _hover={{
            opacity: "0.2",
          }}
          transition="opacity 0.3s ease-out"
        ></Box>

        <Image src={src} boxShadow="0 0 30px 1px black" objectFit="cover" />
      </Box>
      <Text
        fontWeight="bold"
        color={useColorModeValue("gray.800", "#F8F0C6")}
        fontSize="2.3rem"
        marginTop={nameMarginTop}
      >
        {name}
      </Text>
      <Text
        fontSize="1.4rem"
        color={useColorModeValue("#0B0E37", "#48F380")}
        marginBottom={titleMarginBottom}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default SpeakerCard;
