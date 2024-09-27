import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import SpeakerBadge from "./SpeakerBadge";

export const SpeakerBadgeCard: React.FC = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box
        className="outer_box_container"
        display="flex"
        width={{ base: "90%", lg: "65rem" }}
        height={{ lg: "50rem" }}
        bg={useColorModeValue("gray.100", "gray.700")}
        borderRadius="2rem"
        padding="2rem"
      >
        <Box
          className="inner_box_container"
          display="flex"
          bg={useColorModeValue("gray.300", "gray.900")}
          borderRadius="2rem"
          boxSize="100%"
        >
          <Box className="badges_container" padding="2rem">
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Curative"
                textSize={{ base: "1.2rem" }}
                backgroundColor="green"
                score="45"
                scoreBackgroundColor="#16F8B6"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="#2584ff"
                score="45"
                scoreBackgroundColor="blue"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="#2584ff"
                score="45"
                scoreBackgroundColor="#16F8B6"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="silver"
                // score="45"
                scoreBackgroundColor="#16F8B6"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="black"
                score="45"
                scoreTextColor="black"
                scoreBackgroundColor="white"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="gold"
                score="45"
                scoreBackgroundColor="orange"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="tomato"
                score="45"
                scoreBackgroundColor="red"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="tomato"
                score="45"
                scoreBackgroundColor="red"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="tomato"
                score="45"
                scoreBackgroundColor="red"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="tomato"
                score="45"
                scoreBackgroundColor="red"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="tomato"
                score="45"
                scoreBackgroundColor="red"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="tomato"
                score="45"
                scoreBackgroundColor="red"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="tomato"
                score="45"
                scoreBackgroundColor="red"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="tomato"
                score="45"
                scoreBackgroundColor="red"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="tomato"
                score="45"
                scoreBackgroundColor="red"
              />
            </Box>
            <Box display="inline-block" padding={3}>
              <SpeakerBadge
                text="Informatinve"
                textSize={{ base: "1.2rem" }}
                backgroundColor="tomato"
                score="45"
                scoreBackgroundColor="red"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

// export default SpeakerBadgeCard;
