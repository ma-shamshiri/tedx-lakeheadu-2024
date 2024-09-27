import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTimeUnit = (unit: number) =>
    unit < 10 ? `0${unit}` : unit.toString();

  return (
    <Box
      //   width="100%"
      textAlign="center"
      overflow={"hidden"}
      //   maxWidth={{ base: "20rem" }}
      margin="0 auto"
    >
      <Flex justifyContent="center">
        <Box
          padding="1rem 1rem"
          bgColor="rgba(0, 128, 128, 0.2)"
          color="white"
          borderRadius="7px"
          margin={{ base: "0.2rem 0.2rem", lg: "1.7rem 1.7rem" }}
          width="100%"
          height="100%"
        >
          <Text
            fontSize={{ base: "2rem", md: "4rem", lg: "17rem" }}
            fontWeight="bold"
            marginTop={{ base: "0rem", md: "-1rem", lg: "-6rem" }}
            marginBottom={{ base: "0rem", md: "-1rem", lg: "-6rem" }}
          >
            {formatTimeUnit(timeLeft.days)}
          </Text>
          <Text
            fontSize={{ base: "1rem", md: "2rem", lg: "5.5rem" }}
            fontWeight="bold"
          >
            Days
          </Text>
        </Box>
        <Box
          padding="1rem 1rem"
          bgColor="rgba(0, 128, 128, 0.2)"
          color="white"
          borderRadius="7px"
          margin={{ base: "0.2rem 0.2rem", lg: "1.7rem 1.7rem" }}
          width="100%"
          height="100%"
        >
          <Text
            fontSize={{ base: "2rem", md: "4rem", lg: "17rem" }}
            fontWeight="bold"
            marginTop={{ base: "0rem", md: "-1rem", lg: "-6rem" }}
            marginBottom={{ base: "0rem", md: "-1rem", lg: "-6rem" }}
          >
            {formatTimeUnit(timeLeft.hours)}
          </Text>
          <Text
            fontSize={{ base: "1rem", md: "2rem", lg: "5.5rem" }}
            fontWeight="bold"
          >
            Hours
          </Text>
        </Box>
        <Box
          padding="1rem 1rem"
          bgColor="rgba(0, 128, 128, 0.2)"
          color="white"
          borderRadius="7px"
          margin={{ base: "0.2rem 0.2rem", lg: "1.7rem 1.7rem" }}
          width="100%"
          height="100%"
        >
          <Text
            fontSize={{ base: "2rem", md: "4rem", lg: "17rem" }}
            fontWeight="bold"
            marginTop={{ base: "0rem", md: "-1rem", lg: "-6rem" }}
            marginBottom={{ base: "0rem", md: "-1rem", lg: "-6rem" }}
          >
            {formatTimeUnit(timeLeft.minutes)}
          </Text>
          <Text
            fontSize={{ base: "1rem", md: "2rem", lg: "5.5rem" }}
            fontWeight="bold"
          >
            Minutes
          </Text>
        </Box>
        <Box
          padding="1rem 1rem"
          bgColor="rgba(0, 128, 128, 0.2)"
          color="white"
          borderRadius="7px"
          margin={{ base: "0.2rem 0.2rem", lg: "1.7rem 1.7rem" }}
          width="100%"
          height="100%"
        >
          <Text
            fontSize={{ base: "2rem", md: "4rem", lg: "17rem" }}
            fontWeight="bold"
            marginTop={{ base: "0rem", md: "-1rem", lg: "-6rem" }}
            marginBottom={{ base: "0rem", md: "-1rem", lg: "-6rem" }}
          >
            {formatTimeUnit(timeLeft.seconds)}
          </Text>
          <Text
            fontSize={{ base: "1rem", md: "2rem", lg: "5.5rem" }}
            fontWeight="bold"
          >
            Seconds
          </Text>
        </Box>
      </Flex>
      {/* <Text
        fontSize="5rem"
        fontWeight="bold"
        color={
          "linear-gradient(to bottom, rgba(31,191,88, 1), rgba(1,186,234, 1))"
        }
        fontStyle="italic"
        marginTop="3rem"
      >
        Get Ready to Experience ...
      </Text> */}
    </Box>
  );
};

export default CountdownTimer;
