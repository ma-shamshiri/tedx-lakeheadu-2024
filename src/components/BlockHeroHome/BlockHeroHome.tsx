import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useAnimation,
  useSpring,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  useColorMode,
  Button,
  HStack,
} from "@chakra-ui/react";
import HeroEventCard from "./HeroEventCard";
import { event2024, heroimage, mountainsImage, planetsImage, starsImage, sunImage, sliderImage1 } from "../../assets";
import { Link as ScrollLink } from 'react-scroll';
import { CgEventbrite } from "react-icons/cg";
import { SiTed } from "react-icons/si";
import { useLocation } from "react-router-dom";


const BlockHeroHome: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const planetImg = isDarkMode ? planetsImage : sunImage;

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "500%"]
  );

  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Then, useSpring to add smoothness with stiffness and damping
  const smoothYTransform = useSpring(yTransform, {
    stiffness: 100,
    damping: 20,
  });

  // Finally, transform the smooth value to a percentage string
  const yBg = useTransform(smoothYTransform, (value) => `${value}%`);

  const { t } = useTranslation();

  const [boxLoaded, setBoxLoaded] = useState(false);

  const numElements = 2;
  const [isHoveredArray, setIsHoveredArray] = useState(Array(numElements).fill(false));
  const [isHoveredButton, setIsHoveredButton] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const buttonHoverTextColor = useColorModeValue("black", "#FF0000");
  const buttonHoverBorderColor = useColorModeValue("black", "#FF0000");

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

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

  const handleHoverButton = () => {
    setIsHoveredButton(true);
  };

  const handleUnHoverButton = () => {
    setIsHoveredButton(false);
  };

  useEffect(() => { }, [boxLoaded]);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  useEffect(() => {
    // window.scrollTo(0, 0);

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
          className="block block--dark"
          padding="6rem 2rem 6rem 2rem"
          bg={useColorModeValue(
            "#6868F7",
            "linear-gradient(180deg, #000, #0E0E29)"
          )}
        >
          <Box
            className="block__header container"
            textAlign="left"
            maxWidth="1140px"
            margin="0 auto"
          >
            <Text
              className="h2 block__heading"
              color={useColorModeValue("#fff", "#fff")}
              marginBottom="1rem"
              marginTop="0"
              fontSize={{ base: "2.2rem", md: "2.5rem", lg: "2.6rem", xl: "3.2rem" }}
              fontWeight="bold"
              lineHeight="1.5"
              textAlign={{ base: "center", lg: "initial" }}
            // fontFamily="'Acme', sans-serif"
            >
              {t("heroTitle")}
            </Text>
            <Text
              className="p"
              fontSize={{ base: "1.5rem", md: "1.5rem", lg: "1.5rem", xl: "1.9rem" }}
              marginTop={10}
              color={useColorModeValue("gray.200", "#04c97a")}
              textAlign={{ base: "center", lg: "initial" }}
              lineHeight="1.5"
            // fontFamily="'Acme', sans-serif"
            // fontFamily="'Englebert', cursive"
            >
              {t("heroSubTitle")}
            </Text>
          </Box>
        </Box>

        <Box
          // className="parallax"
          width="100%"
          height={{ base: "55vh", md: "80vh", lg: "100vh", xl: "110vh" }}
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          ref={ref}
          background={useColorModeValue(
            "linear-gradient(180deg, #6868f7, #6868f7, #a6a6ff, #a6a6ff)",
            "linear-gradient(180deg, #0e0e29, #0e0e29, #272763, #272763)"
          )}
        >
          <Flex
            className="tellMeMoreButton"
            display={{ base: "none", lg: "block" }}
            justifyContent="center"
            bg="transparent"
            // transform="translateY(-50%)"
            // width="100%"
            position="absolute"
            top="10%"
            zIndex={5}
          >
            <ScrollLink to="more-info-section" smooth={true} duration={500}>
              <Button
                border="2px solid #FF0000"
                borderRadius="10px"
                cursor="pointer"
                fontSize={{ base: "1.2rem", lg: "2.2rem" }}
                padding={{ base: "0.5rem", lg: "2rem" }}
                textAlign="center"
                whiteSpace="nowrap"
                bg="#FF0000"
                color="#fff"
                boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                display="inline-block"
                width={{ base: "11rem", lg: "25rem" }}
                height={{ base: "5rem", lg: "7rem" }}
                _hover={{
                  border: "0.2rem solid",
                  borderColor: buttonHoverBorderColor,
                  bg: "transparent",
                  color: buttonHoverTextColor,
                  boxShadow:
                    "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
                }}
                transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
                onMouseEnter={handleHoverButton}
                onMouseLeave={handleUnHoverButton}

              >
                Tell Me More
              </Button>
            </ScrollLink>
          </Flex>

          <Box
            // className="mountains"
            backgroundImage={mountainsImage}
            backgroundSize={{ base: "contain", lg: "cover" }}
            backgroundPosition="bottom"
            backgroundRepeat={{ base: "no-repeat", lg: "initial" }}
            width="100%"
            height="100%"
            position="absolute"
            zIndex={4}
          ></Box>
          <Box
            // className="planets"
            as={motion.div}
            style={{
              y: yBg,
            }}
            backgroundImage={planetsImage}
            // backgroundImage={planetImg}
            backgroundSize={{ base: "contain", lg: "cover" }}
            backgroundPosition="bottom"
            backgroundRepeat={{ base: "no-repeat", lg: "initial" }}
            opacity={1}
            width="125%"
            height="100%"
            position="absolute"
            zIndex={3}
          ></Box>
          <Box
            // className="stars"
            as={motion.div}
            style={{
              x: yBg,
            }}
            backgroundSize={{ base: "contain", lg: "cover" }}
            backgroundPosition="bottom"
            backgroundImage={starsImage}
            width="100%"
            height="100%"
            position="absolute"
          ></Box>
        </Box>
      </motion.div>
    </>
  );
};

export default BlockHeroHome;
