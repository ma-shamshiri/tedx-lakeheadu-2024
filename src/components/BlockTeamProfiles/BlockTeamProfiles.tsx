import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  ResponsiveValue,
  useColorModeValue,
  Button,
  Image,
  Text,
  HStack,
  IconButton,
  useBreakpointValue,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiTed } from "react-icons/si";
import { IconType } from "react-icons";

interface BlockTeamProfilesProps {
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  role: string;
  imageSrc?: string;
  badgeSrc: string;
  icon: IconType;
  linkedinHref: string;
  twitterHref: string;
  tedHref: string;
  quoteText: string;
  quoteTopMargin?: ResponsiveValue<string>;
  pageHeight?: ResponsiveValue<string>;
}

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

export const BlockTeamProfiles: React.FC<BlockTeamProfilesProps> = ({
  firstName,
  lastName,
  fullName,
  title,
  role,
  imageSrc,
  badgeSrc,
  icon: IconComponent,
  linkedinHref,
  twitterHref,
  tedHref,
  quoteText,
  quoteTopMargin,
  pageHeight = { base: "100vh", lg: "100vh" },
}) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const { t } = useTranslation();

  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const iconSize = useBreakpointValue({ base: "3.5rem", lg: "3rem" });
  const titleIconSize = useBreakpointValue({ base: "6rem", lg: "5rem" });
  const tedIconSize = useBreakpointValue({ base: "5rem", lg: "4rem" });

  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {
    // Simulate a delay before setting isPageLoaded to true
    const delay = setTimeout(() => {
      setIsPageLoaded(true);
    }, 0.2);

    // Cleanup function to clear the timeout in case the component unmounts before the delay is complete
    return () => clearTimeout(delay);
  }, []);

  return (
    <Flex
      direction={{ base: "column", md: "column", lg: "row" }}
      height={{ base: "initial", lg: "calc(100vh - 70px)" }}
      //   height="calc(200vh - 70px)"
      width="100%"
      overflow="hidden"
      position="relative"
      background={{
        base: useColorModeValue(
          "linear-gradient(180deg, #7854FE, #4BFD83)",
          "linear-gradient(180deg, #000000, #0D1224, #271C4B)"
        ),
        lg: useColorModeValue(
          "linear-gradient(90deg, #7854FE, #4BFD83)",
          "linear-gradient(180deg, #000000, #0D1224, #271C4B)"
        ),
      }}
      zIndex={0}
    >
      <Box
        className="sliding_text_container"
        position="absolute"
        fontSize="50vh"
        bottom="-120px"
        whiteSpace="nowrap"
        color={isDarkMode ? "gray" : "#ffffff"}
        opacity={isDarkMode ? "0.1" : "0.1"}
        width="100%"
        fontWeight="bold"
        zIndex={1}
      >
        <motion.div
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          {fullName}
        </motion.div>
      </Box>

      {/* Left Section */}
      <Box
        className="left-section"
        display="flex"
        flex={{ base: "1", lg: "1" }}
        justifyContent="center"
        alignItems="center"
        zIndex={2}
      >
        <Box
          className="profile_info_container"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="2rem"
        >
          <Box
            className="text_container"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {/* <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
            > */}
            <Text
              as="h2"
              fontSize={{ base: "2.5rem", lg: "3rem" }}
              color={useColorModeValue("#fff", "#16F8B6")}
              letterSpacing="3px"
              textAlign={{ base: "center", lg: "center" }}
              margin={0}
              padding="1rem 0"
              // textTransform="uppercase"
              opacity={isPageLoaded ? "1" : "0"}
              transition="opacity 0.5s ease-in-out 0.2s"
            >
              {role}
            </Text>
            <Text
              as="h1"
              color={useColorModeValue("#000", "silver")}
              textAlign={{ base: "center", lg: "center" }}
              margin={0}
              padding="1rem 0"
              textTransform="uppercase"
              lineHeight="5.5rem"
              maxWidth={{ base: "initial", lg: "65rem" }}
              opacity={isPageLoaded ? "1" : "0"}
              transition="opacity 0.5s ease-in-out 0.5s"
            >
              <Box as="span" fontSize={{ base: "4.5rem", lg: "5rem" }}>
                {firstName}
              </Box>
              <Box as="span"> </Box>
              <Box
                as="span"
                fontSize={{ base: "4.5rem", lg: "5rem" }}
                fontWeight="bold"
                color={useColorModeValue("#000", "#fff")}
              >
                {lastName}
              </Box>
            </Text>
            <Box
              className="title_icon_container"
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingTop="3rem"
              paddingBottom="1.5rem"
              opacity={isPageLoaded ? "1" : "0"}
              transition="opacity 0.5s ease-in-out 0.8s"
            >
              <Icon
                className="title_container"
                as={IconComponent}
                boxSize={titleIconSize}
                color={useColorModeValue("#000", "#fff")}
              />
            </Box>
            <Text
              as="h2"
              fontSize={{ base: "2.2rem", lg: "2.5rem" }}
              color={useColorModeValue("#0B0E36", "#f926ae")}
              letterSpacing="2px"
              lineHeight={{ base: "2.5rem", lg: "3.5rem" }}
              textAlign={{ base: "center", lg: "center" }}
              margin={0}
              paddingBottom="4rem"
              maxWidth={{ base: "initial", lg: "65rem" }}
              opacity={isPageLoaded ? "1" : "0"}
              transition="opacity 0.5s ease-in-out 1.1s"
            >
              {title}
            </Text>
            <Flex
              className="icon_container"
              justifyContent="center"
              opacity={isPageLoaded ? "1" : "0"}
              transition="opacity 0.5s ease-in-out 1.4s"
            >
              <HStack
                spacing={{ base: "6", lg: "6" }}
                justifyContent={"center"}
              >
                <Box as="a" href={linkedinHref} target="_blank" rel="noopener noreferrer">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size={iconSize} />}
                    color={useColorModeValue("gray.800", "gray.200")}
                    _hover={{
                      bg: useColorModeValue("gray.800", "gray.200"),
                      color: useColorModeValue("gray.100", "gray.700"),
                    }}
                    isRound
                    boxSize={{ base: "6.5rem", lg: "6rem" }}
                    opacity="1"
                  />
                </Box>
                <Box as="a" href={twitterHref} target="_blank" rel="noopener noreferrer">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="xl"
                    icon={<BsTwitter size={iconSize} />}
                    color={useColorModeValue("gray.800", "gray.200")}
                    _hover={{
                      bg: useColorModeValue("gray.800", "gray.200"),
                      color: useColorModeValue("gray.100", "gray.700"),
                    }}
                    isRound
                    boxSize={{ base: "6.5rem", lg: "6rem" }}
                    opacity="1"
                  />
                </Box>
                <Box as="a" href={tedHref} target="_blank" rel="noopener noreferrer">
                  <IconButton
                    aria-label="ted"
                    variant="ghost"
                    size="xl"
                    icon={<SiTed size={tedIconSize} />}
                    color={useColorModeValue("#gray.800", "gray.200")}
                    _hover={{
                      bg: useColorModeValue("gray.800", "gray.200"),
                      color: useColorModeValue("gray.100", "gray.700"),
                    }}
                    isRound
                    boxSize={{ base: "6.5rem", lg: "6rem" }}
                    opacity="1"
                  />
                </Box>
              </HStack>
            </Flex>
            {/* </motion.div> */}
          </Box>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        className="right-section"
        display="flex"
        flex={{ base: "1", lg: "1" }}
        justifyContent="center"
        alignItems="center"
        zIndex={2}
      >
        {imageSrc && (
          <Box
            className="image_container"
            height={{ base: "100%", lg: "100%" }}
            width={{ base: "initial", lg: "initial" }}
          >
            <Image
              className="profile_image"
              src={imageSrc}
              height={{ base: "100%", lg: "100%" }}
              // width={{ base: "initial", lg: "initial" }}
              objectFit="cover"
            />
          </Box>
        )}
      </Box>
    </Flex>
  );
};

// export default BlockTeamProfiles2;
