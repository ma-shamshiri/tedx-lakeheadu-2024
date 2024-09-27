
import React, { useState } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const AnimatingNumber = ({
  value,
  start = 0,
  duration = 3,
  delay = 0.2,
  fontSize = { base: "2rem", md: "2rem", lg: "2rem", xl: "2rem" },
  color = "white",
  hasPlusSign = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [counterOn, setCounterOn] = useState(true);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <Box
        ref={ref}
        // p={6}
        // bgColor="teal.500"
        // borderRadius="lg"
        // boxShadow="lg"
        // textAlign="center"
      >
        {counterOn && (
          <>
            <HStack>
              {hasPlusSign && (
                <Text
                  fontSize={{
                    base: fontSize.base,
                    md: fontSize.md,
                    lg: fontSize.lg,
                    xl: fontSize.xl,
                  }}
                  fontWeight="bold"
                  color={color}
                >
                  +
                </Text>
              )}
              <Text
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                  xl: fontSize.xl,
                }}
                fontWeight="bold"
                color={color}
              >
                <CountUp
                  start={start}
                  end={inView ? value : 0}
                  duration={duration}
                  delay={delay}
                />
              </Text>
            </HStack>
          </>
        )}
      </Box>
    </ScrollTrigger>
  );
};

export default AnimatingNumber;
