import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { heroimage } from "../../assets";
// import CountdownTimer from "./CountdownTimer";

const SuperscriptX = chakra("sup", {
  baseStyle: {
    fontSize: "0.6em",
    top: "-0.5em",
    position: "relative",
  },
});

const LowercaseSpan = chakra("span", {
  baseStyle: {
    textTransform: "lowercase",
  },
});

export const BlockHero2023Temp: React.FC = () => {
  const { t } = useTranslation();

  const [imageLoaded, setImageLoaded] = useState(false);
  const [boxLoaded, setBoxLoaded] = useState(false);

  // const handleImageLoad = () => {
  //   setImageLoaded(true);
  // };

  const handleImageLoad = () => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 0);
  };

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  // const imageStyle = {
  //   width: "50%",
  //   // height: "100%",
  //   // border: "4px solid transparent",
  //   borderImage:
  //     "linear-gradient(45deg, #000, transparent, transparent, #000) 1",
  //   borderImageSlice: 1,
  // };

  const handleLearnMoreButtonClick = () => {
    window.open(
      "https://www.ted.com/participate/organize-a-local-tedx-event/before-you-start/what-is-a-tedx-event",
      "_blank"
    );
  };

  const handleAveLorneButtonClick = () => {
    window.open("https://www.ted.com/tedx/events/53037", "_blank");
  };

  const eventStartTime = new Date("2023-09-30T09:00:00-05:00");

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // useEffect(() => {
  //   // You can add additional logic here if needed
  //   // This effect runs when boxLoaded state changes
  // }, [boxLoaded]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Box
        className="block block--dark"
        // padding="6rem 30rem"
        // paddingBottom="10rem"
        bg="#000"
        // color="#7b858b"
        // width="100%"
        // width="100vw"
        // overflow={"hidden"}
      >
        <Flex width={"100%"} justifyContent="center">
          {/* <div
            style={{
              paddingTop: "56.25%", // Assuming 16:9 aspect ratio, adjust as needed
              position: "relative",
              width: "100%",
            }}
          > */}
          <Skeleton
            isLoaded={imageLoaded}
            style={{
              // position: "absolute",
              // top: 0,
              // left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={heroimage}
              width="100%"
              // objectFit="cover"
              opacity="0"
              style={{ transition: "opacity 1s ease-in-out" }}
              onLoad={(e) => {
                e.currentTarget.style.opacity = "0.9";
                handleImageLoad();
              }}
            />
          </Skeleton>
          {/* </div> */}
        </Flex>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onAnimationComplete={handleBoxLoad}
        >
          <Box
            display="flex"
            position="absolute"
            width="100%"
            height={{ base: "15rem", lg: "25rem" }}
            top={{ base: "14.5rem", md: "25rem", lg: "26rem" }}
            bgGradient={{ base: "", xl: "linear(to-r, gray.700, transparent)" }}
            // justifyContent="center"
            alignItems="center"
            // opacity="0"
          >
            <VStack
              spacing={{ base: "2rem", lg: "4rem" }}
              marginLeft={{ base: "2rem", lg: "10rem" }}
            >
              <Text
                display={{ base: "none", xl: "block" }}
                color={"white"}
                fontWeight="bold"
                fontSize={useBreakpointValue({
                  base: "2rem",
                  md: "2rem",
                  lg: "4rem",
                })}
                // marginLeft="10rem"
              >
                {t("heroTitle")}
              </Text>
              <HStack spacing="2rem">
                <Button
                  display={{ base: "none", xl: "block" }}
                  fontSize={{ base: "1.3rem", lg: "1.5rem" }}
                  width={{ base: "10rem", lg: "13rem" }}
                  height="4rem"
                  background="blue.400"
                  rounded="full"
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                  onClick={handleLearnMoreButtonClick}
                >
                  {t("learnMore")}
                </Button>

                <Button
                  display={{ base: "none", xl: "block" }}
                  fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                  width={{ base: "10rem", lg: "13rem" }}
                  height="4rem"
                  background="whiteAlpha.300"
                  rounded="full"
                  color="white"
                  _hover={{ bg: "whiteAlpha.500" }}
                  onClick={handleAveLorneButtonClick}
                >
                  TED<SuperscriptX>x</SuperscriptX>A
                  <LowercaseSpan>ve</LowercaseSpan>L
                  <LowercaseSpan>orne</LowercaseSpan>
                </Button>
              </HStack>
            </VStack>
          </Box>
          {/* <Flex justifyContent={"center"}>
            <Box
              className="card card--secondary aos-animate"
              borderRadius="7px"
              // boxShadow="0 0 20px 10px gray"
              overflow="hidden"
              justifyContent="center"
              alignItems="center"
              // maxWidth="350px"
              width={"300px"}
              // height={"300px"}
              margin="0 auto"
              // data-aos="fade-right"
              // data-aos-duration="500"
              position="absolute"
              top={{ base: "14.5rem", md: "25rem", lg: "56rem" }}
              left={{ base: "14.5rem", md: "25rem", lg: "32%" }}
            >
              <Image
                src={Samin}
                width="100%"
                height={"200px"}
                objectFit="cover"
                opacity="0.99"
                // p="0.1rem 0.5%"
                // borderRadius="7px"
                borderTopRadius="7px"
              />
              <Box
                className="card__header"
                bg="linear-gradient(to bottom, #6322BF, #F226AA)"
                color="#fff"
                p="1rem 7%"
                borderBottomRadius="7px"
              >
                <Text
                  className="plan__name"
                  color="#fff"
                  margin="0"
                  fontSize={{ base: "6rem", lg: "2.6rem" }}
                  fontWeight="bold"
                  textAlign="center"
                >
                  TedxAveLorne
                </Text>
                <Text
                  className="plan__name"
                  color="#fff"
                  margin="0"
                  fontSize={{ base: "4rem", lg: "2.6rem" }}
                  fontWeight="bold"
                  textAlign="center"
                >
                  2023
                </Text>
              </Box>
              <Box className="card__body" p="2rem 7%">
                <List
                  className="list list--tick"
                  color="var(--color-headings)"
                  padding={0}
                  // paddingLeft={"3rem"}
                  // style={{
                  //   listStyleImage: `url(${tickImage})`,
                  // }}
                ></List>
              </Box>
            </Box>

            <Box
              className="card card--secondary aos-animate"
              borderRadius="7px"
              // boxShadow="0 0 20px 10px gray"
              overflow="hidden"
              justifyContent="center"
              alignItems="center"
              // maxWidth="350px"
              width={"300px"}
              // height={"300px"}
              margin="0 auto"
              // data-aos="fade-right"
              // data-aos-duration="500"
              position="absolute"
              top={{ base: "14.5rem", md: "25rem", lg: "56rem" }}
              right={{ base: "14.5rem", md: "25rem", lg: "32%" }}
            >
              <Image
                src={Samin}
                width="100%"
                height={"200px"}
                objectFit="cover"
                opacity="0.99"
                // p="0.1rem 0.5%"
                // borderRadius="7px"
                borderTopRadius="7px"
              />
              <Box
                className="card__header"
                bg="linear-gradient(to bottom, #6322BF, #F226AA)"
                color="#fff"
                p="1rem 7%"
                borderBottomRadius="7px"
              >
                <Text
                  className="plan__name"
                  color="#fff"
                  margin="0"
                  fontSize={{ base: "6rem", lg: "2.6rem" }}
                  fontWeight="bold"
                  textAlign="center"
                >
                  TedxAveLorne
                </Text>
                <Text
                  className="plan__name"
                  color="#fff"
                  margin="0"
                  fontSize={{ base: "4rem", lg: "2.6rem" }}
                  fontWeight="bold"
                  textAlign="center"
                >
                  2023
                </Text>
              </Box>
              <Box className="card__body" p="2rem 7%">
                <List
                  className="list list--tick"
                  color="var(--color-headings)"
                  padding={0}
                  // paddingLeft={"3rem"}
                  // style={{
                  //   listStyleImage: `url(${tickImage})`,
                  // }}
                ></List>
              </Box>
            </Box>
          </Flex> */}
        </motion.div>

        <Box
          className="plan"
          // _hover={{ transform: "scale(1.05)" }}
          // transition="transform 0.2s ease-out"
        ></Box>

        {/* <Flex
          display="flex"
          position="absolute"
          width="100%"
          top={{ base: "7rem", md: "10rem", lg: "53rem" }}
          alignItems="center"
          justifyContent="center"
        >
          <CountdownTimer eventStartTime={eventStartTime} />
        </Flex> */}
      </Box>
    </>
  );
};

// export default BlockHero2023Temp;
