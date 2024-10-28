import React, { useEffect, useState } from "react";
import { Box, Flex, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { t } from "i18next";

const CountdownTimer: React.FC<{ eventStartTime: Date }> = ({
  eventStartTime,
}) => {
  const calculateTimeLeft = () => {
    const currentTime = new Date();
    const difference = eventStartTime.getTime() - currentTime.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const numberFontSize = useBreakpointValue({ base: "2rem", md: "4rem", lg: "5.5rem" });
  const textFontSize = useBreakpointValue({ base: "1rem", md: "1.5rem", lg: "2rem" });
  const boxSize = useBreakpointValue({ base: "70px", md: "140px", lg: "150px" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTimeUnit = (unit: number) =>
    unit < 10 ? `0${unit}` : unit.toString();

  return (
    <Box textAlign="center" overflow={"hidden"} margin="0 auto" padding="2rem">
      {/* Interesting Text for the TEDxLakeheadU event */}
      <Text
        fontSize={useBreakpointValue({ base: "1.5rem", md: "2.8rem", lg: "2.8rem", xl: "3rem" })}
        color="white"
        fontWeight="bold"
        mb="2rem"
      >
        {t("countdownTitle")}
      </Text>
      <Text
        fontSize={useBreakpointValue({ base: "1.6rem", md: "2.5rem", lg: "3.5rem" })}
        color="#000"
        fontWeight="bold"
        mb="4rem"
      >
        {t("countdownSubTitle")}
      </Text>
      <Flex justifyContent="center" gap={5} >
        {["days", "hours", "minutes", "seconds"].map((unit, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={boxSize}
            height={boxSize}
            bgColor={useColorModeValue("rgba(0, 124, 124, 0.8)", "rgba(255, 0, 0, 0.7)")}
            color="white"
            fontWeight="bold"
            borderRadius="12px"
            boxShadow="0 8px 16px rgba(0, 0, 0, 0.3)"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
            }}
            textAlign="center"
          >
            <Text fontSize={numberFontSize}>
              {formatTimeUnit(timeLeft[unit as keyof typeof timeLeft])}
            </Text>
            <Text fontSize={textFontSize} textTransform="capitalize">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CountdownTimer;

