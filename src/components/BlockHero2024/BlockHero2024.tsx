import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Text,
  VStack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Typed from "react-typed";
import { BackgroundImage2024 } from "../../assets";

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

export const BlockHero2024: React.FC = () => {
  const { t } = useTranslation();

  const [imageLoaded, setImageLoaded] = useState(false);
  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 0);
  };

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  const numElements = 2;

  const [isHoveredArray, setIsHoveredArray] = useState(
    Array(numElements).fill(false)
  );

  const handleHover = (index: number) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = true;
      return newArray;
    });
  };

  const handleUnhover = (index: number) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = false;
      return newArray;
    });
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => { }, [boxLoaded]);

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <Box
          position="relative"
          width="100%"
          // height={{ lg: "100vh" }}
          bg={useColorModeValue("white", "#232323")}
        >
          <Box
            position="relative"
            width="100%"
            height={{ base: "30rem", lg: "55vh" }}
            opacity="1"
            overflow="hidden"
          >

            {/* Background Image */}
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              backgroundImage={`url(${BackgroundImage2024})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              filter="blur(5px)"
            opacity={0.8}
            // zIndex="-1"
            />

            {/* Image Overlay */}
            {/* <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              //   bg="linear-gradient(to left, blue, transparent, red)"
              //   bg="linear-gradient(to left, #fcba03, transparent, #fcba03)"
              bg="green"
              opacity="0.40"
            /> */}

            <Box
              className="headingContainer"
              position="absolute"
              top={{ base: "50%", lg: "35%" }}
              left="50%"
              transform="translate(-50%, -50%)"
              width={{ base: "100%", lg: "100%" }}
              // margin="0 auto"
              textAlign="center"
              zIndex="1"
            >
              <VStack>
                <HStack
                  marginBottom={{ base: "1rem", lg: "3rem" }}
                  justifyContent="center"
                >
                  <Text
                    className="headingTitle"
                    fontSize={{ base: "2.8rem", lg: "4rem" }}
                    fontWeight="bold"
                    fontFamily="'Acme', sans-serif"
                    lineHeight={{ base: "1.4", lg: "1.1" }}
                    color={useColorModeValue("#fff", "#fff")}
                    letterSpacing={2}
                    maxWidth={{ base: "80%", lg: "initial" }}
                  // sx={sx}
                  >
                    {t("hero2024Title")}
                  </Text>
                </HStack>
                <Text
                  className="headingSubTitle"
                  fontSize={{ base: "1.5rem", lg: "2.5rem" }}
                  fontWeight="bold"
                  // fontFamily="'Acme', sans-serif"
                  lineHeight={{ base: "1.4", lg: "1.5" }}
                  color={useColorModeValue("gray.700", "gray.100")}
                  letterSpacing={2}
                  maxWidth={{ base: "80%", lg: "85rem" }}
                // sx={sx}
                >
                  {t("hero2024SubTitle")}
                </Text>
              </VStack>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

// export default BlockHero5;
