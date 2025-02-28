import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Box,
  Flex,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { landing4 } from "../../assets";
import { Link as ScrollLink } from 'react-scroll';

import { useLocation } from "react-router-dom";
import CountdownTimer from "../BlockHero2023/CountdownTimer";


const BlockHeroHome: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  const [boxLoaded, setBoxLoaded] = useState(false);

  const [isHoveredButton, setIsHoveredButton] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const buttonHoverTextColor = useColorModeValue("#000", "#000");
  const buttonHoverBorderColor = useColorModeValue("#000", "#000");

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  const handleHoverButton = () => {
    setIsHoveredButton(true);
  };

  const handleUnHoverButton = () => {
    setIsHoveredButton(false);
  };

  const eventStartTime = new Date("2025-03-01T09:00:00-08:00");

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
          position="relative"
          width="100%"
          overflow="hidden"
        >
          <Flex
            position="absolute"
            top={{ base: "35%", md: "40%", lg: "28%" }}
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={100}
          >
            <CountdownTimer eventStartTime={eventStartTime} />
          </Flex>
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
            backgroundImage={landing4}
          >
            <Flex
              className="tellMeMoreButton"
              display={{ base: "block", lg: "block" }}
              justifyContent="center"
              bg="transparent"
              position="absolute"
              top={{ base: "70%", md: "75%", lg: "60%" }}
              zIndex={5}
            >
              <ScrollLink to="ticket-section" smooth={true} duration={500}>
                <Button
                  border="2px solid #FF0000"
                  borderRadius="7px"
                  cursor="pointer"
                  fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2.2rem" }}
                  padding={{ base: "0.5rem", lg: "2rem" }}
                  textAlign="center"
                  whiteSpace="nowrap"
                  bg="#FF0000"
                  color="#fff"
                  boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                  display="inline-block"
                  width={{ base: "11rem", md: "18rem", lg: "25rem" }}
                  height={{ base: "5rem", md: "6rem", lg: "7rem" }}
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
                  {t("getTicket")}
                </Button>
              </ScrollLink>
            </Flex>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default BlockHeroHome;
