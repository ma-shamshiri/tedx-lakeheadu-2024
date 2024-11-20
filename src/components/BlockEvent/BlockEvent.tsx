import React, { useRef, useState } from "react";
import {
    Box,
    Button,
    Flex,
    Grid,
    HStack,
    IconButton,
    Image,
    Link,
    Text,
    VStack,
    useBreakpointValue,
    useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { LuAlarmClock } from "react-icons/lu";
import { GoLocation } from "react-icons/go";
import { lakeheadu1, lakeheadu2, lakeheadu3 } from "../../assets";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';

const initialVariants: { [key: string]: any } = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.1,
        },
    },
};

const leftVariants: { [key: string]: any } = {
    initial: {
        x: -150,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const middleVariants: { [key: string]: any } = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const rightVariants: { [key: string]: any } = {
    initial: {
        x: 150,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const MotionBox = motion(Box);

const BlockEvent: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const buttonHoverTextColor = useColorModeValue("black", "#FF0000");
    const buttonHoverBorderColor = useColorModeValue("black", "#FF0000");

    const iconColor = useColorModeValue("#160578", "#4299E1");
    const iconBorderColor = useColorModeValue("#63B3ED", "gray.400");
    const iconSize = useBreakpointValue({ base: "18px", lg: "18px" });
    const iconContainerSize = useBreakpointValue({ base: "40px", lg: "40px" });

    const [isHoveredButton, setIsHoveredButton] = useState(false);
    const [hoverStates, setHoverStates] = useState([false, false, false]);

    const handleHover = (index: number, value: boolean) => {
        setHoverStates(prev => prev.map((state, i) => (i === index ? value : state)));
    };

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

    const buttonIconColor = isHoveredButton ? '#F04E2D' : 'white';

    const { t, i18n } = useTranslation();

    return (
        <>
            <Box
                className="block block--white"
                bg={useColorModeValue("#0F0F0F", "#0F0F0F")}
                // bg={useColorModeValue("#EFE8D6", "#9DAF89")}
                // color="#7b858b"
                // width="100vh"
                // minWidth="90rem"
                overflow={"hidden"}
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
            >
                <Box
                    className="block container block-domain"
                    padding="6rem 2rem"
                    paddingBottom={{ base: "13rem", lg: "17rem" }}
                    // maxWidth="1140px"
                    margin="0 auto"
                    width="100%"
                // minWidth="100rem"
                >
                    <motion.div
                        ref={ref}
                        variants={initialVariants}
                        initial="initial"
                        whileInView="animate"
                    >
                        <motion.div
                            ref={ref}
                            variants={initialVariants}
                            initial="initial"
                            whileInView="animate"
                        >
                            <Box
                                className="block__header"
                                textAlign="center"
                                width="100%"
                                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                            >
                                <Text
                                    className="h2"
                                    color={useColorModeValue("gray.800", "#16F8B6")}
                                    // color={useColorModeValue("#f04e2d", "#354E41")}
                                    marginBottom="1rem"
                                    marginTop="0"
                                    fontSize={{ base: "2.8rem", lg: "4rem" }}
                                    fontWeight="bold"
                                    lineHeight="1.1"
                                >
                                    {t("yourTicketAwaits")}
                                </Text>
                                <Text
                                    className="p"
                                    color={useColorModeValue("gray.700", "gray.200")}
                                    // color={useColorModeValue("red", "#3B5B40")}
                                    fontSize={{ base: "1.5rem", lg: "2.1rem" }}
                                    // fontWeight="bold"
                                    marginBottom="6rem"
                                >
                                    {t("eventPageSubTitle")}
                                </Text>
                            </Box>
                        </motion.div>
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            bg={useColorModeValue("#FAEDC3", "#322f6b")}
                            color={useColorModeValue("#160578", "#E2E8F0")}
                            border="2px"
                            borderColor={useColorModeValue("2D3748", "gray.100")}
                            borderRadius="3rem"
                            boxShadow="lg"
                            padding={{ base: "2rem", lg: "3rem" }}
                            maxWidth="1000px"
                            margin="4rem auto"
                        >
                            <Grid
                                templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
                                gap={{ base: "4rem", lg: "4rem" }}
                                textAlign="center"
                            >
                                <VStack gap={{ base: "2rem", lg: "2rem" }}>
                                    <IconButton
                                        aria-label="linkedin"
                                        variant="ghost"
                                        bg="transparent"
                                        color={iconColor}
                                        borderWidth="2px"
                                        borderColor={useColorModeValue(iconColor, iconBorderColor)}
                                        icon={<IoCalendarNumberSharp size={iconSize} />}
                                        boxSize={iconContainerSize}
                                        isRound
                                        pointerEvents="none"
                                    />
                                    <HStack>
                                        <Text fontSize={{ base: "5.2rem", lg: "5.2rem" }}>
                                            1
                                        </Text>
                                        <VStack>
                                            <Text fontSize={{ base: "1.5rem", lg: "1.5rem" }}>SAT</Text>
                                            <Text fontSize={{ base: "1.5rem", lg: "1.5rem" }}>MAR</Text>
                                        </VStack>
                                    </HStack>
                                </VStack>

                                <VStack gap={{ base: "2rem", lg: "2rem" }}>
                                    <IconButton
                                        aria-label="linkedin"
                                        bg="transparent"
                                        color={iconColor}
                                        borderWidth="2px"
                                        borderColor={useColorModeValue(iconColor, iconBorderColor)}
                                        icon={<GoLocation size={iconSize} />}
                                        boxSize={iconContainerSize}
                                        isRound
                                        pointerEvents="none"
                                    />
                                    <Box className="addressContainer">
                                        <Text fontSize={{ base: "1.5rem", lg: "2rem" }} fontWeight="bold">
                                        Lakehead University, 955 Oliver Road
                                        </Text>
                                        <Text fontSize={{ base: "1.2rem", lg: "1.4rem" }}>
                                        Thunder Bay, Ontario Canada P7B 5E1
                                        </Text>
                                    </Box>
                                </VStack>

                                <VStack gap={{ base: "2rem", lg: "2rem" }}>
                                    <IconButton
                                        aria-label="linkedin"
                                        bg="transparent"
                                        color={iconColor}
                                        borderWidth="2px"
                                        borderColor={useColorModeValue(iconColor, iconBorderColor)}
                                        icon={<LuAlarmClock size={iconSize} />}
                                        boxSize={iconContainerSize}
                                        isRound
                                        pointerEvents="none"
                                    />
                                    <Box className="addressContainer">
                                        <Text fontSize={{ base: "1.8rem", lg: "2rem" }} >
                                            9:00 AM
                                        </Text>
                                        <Text fontSize={{ base: "1.8rem", lg: "2rem" }}>
                                            5:00 PM
                                        </Text>
                                    </Box>
                                </VStack>
                            </Grid>
                        </MotionBox>
                        <motion.div
                            ref={ref}
                            variants={initialVariants}
                            initial="initial"
                            whileInView="animate"
                        >
                            <Flex
                                className="block__button"
                                justifyContent="center"
                                alignItems="center"
                                width="100%"
                            >
                                <HStack>
                                    <ScrollLink to="ticket-section" smooth={true} duration={500}>
                                        <Button
                                            border="2px solid #FF0000"
                                            borderRadius="10px"
                                            cursor="pointer"
                                            fontSize={{ base: "1.8rem", lg: "3.2rem" }}
                                            fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                                            dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                            padding={{ base: "0.5rem", lg: "2rem" }}
                                            textAlign="center"
                                            whiteSpace="nowrap"
                                            bg="#FF0000"
                                            color="#fff"
                                            boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                                            display="inline-block"
                                            width={{ base: "18rem", lg: "30rem" }}
                                            height={{ base: "6rem", lg: "10rem" }}
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
                                </HStack>
                            </Flex>
                        </motion.div>
                    </motion.div>
                    <Box className="grid grid--1x3" marginTop="5rem">
                        <Box maxWidth="1200px" margin="0 auto">
                            <Grid
                                display="grid"
                                templateColumns={["1fr", null, null, "repeat(3, 1fr)"]}
                                columnGap="5rem"
                                rowGap={{ base: "5rem" }}
                            >
                                <motion.div
                                    ref={ref}
                                    variants={leftVariants}
                                    initial="initial"
                                    whileInView="animate"
                                >
                                    <Box
                                        background="white"
                                        borderRadius="5%"
                                        position="relative"
                                        onMouseEnter={() => handleHover(0, true)}
                                        onMouseLeave={() => handleHover(0, false)}
                                        overflow="hidden"
                                        boxShadow="0 7px 30px 0.5px black"
                                        height={{ base: "fit-content", lg: "28rem" }}
                                    >
                                        <Box
                                            position="absolute"
                                            top={hoverStates[0] ? "0" : "100%"}
                                            left="0"
                                            width="100%"
                                            height="100%"
                                            background="white"
                                            opacity={hoverStates[0] ? 0.5 : 0}
                                            transition="top 0.3s ease-in-out, opacity 0.3s ease-in-out"
                                            borderRadius="5%"
                                        >
                                            <Text
                                                textAlign="center"
                                                fontSize={{ base: "3rem", lg: "3rem" }}
                                                fontWeight="bold"
                                                color="#000"
                                                opacity="1"
                                                position="absolute"
                                                top="50%"
                                                left="50%"
                                                transform="translate(-50%, -50%)"
                                            >
                                                Lakehead University
                                            </Text>
                                        </Box>
                                        <Image
                                            src={lakeheadu1}
                                            alt="McGill University"
                                            width="100%"
                                            height="100%"
                                            // boxShadow="0 0 30px 0.5px black"
                                            // boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1), -10px 10px 30px 0.5px gray"
                                            // boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                                            objectFit="cover"
                                            borderRadius="5%"
                                        // _hover={{ transform: "scale(1.03)" }}
                                        // transition="transform 0.2s ease-out"
                                        />
                                    </Box>
                                </motion.div>
                                <motion.div
                                    ref={ref}
                                    variants={middleVariants}
                                    initial="initial"
                                    whileInView="animate"
                                >
                                    <Box
                                        background="white"
                                        borderRadius="5%"
                                        position="relative"
                                        onMouseEnter={() => handleHover(1, true)}
                                        onMouseLeave={() => handleHover(1, false)}
                                        overflow="hidden"
                                        boxShadow="0 7px 30px 0.5px black"
                                        height={{ base: "fit-content", lg: "32rem" }}
                                    >
                                        <Box
                                            position="absolute"
                                            top={hoverStates[1] ? "0" : "100%"}
                                            left="0"
                                            width="100%"
                                            height="100%"
                                            background="white"
                                            opacity={hoverStates[1] ? 0.5 : 0}
                                            transition="top 0.3s ease-in-out, opacity 0.3s ease-in-out"
                                            borderRadius="5%"
                                        >
                                            <Text
                                                textAlign="center"
                                                fontSize={{ base: "2.5rem", lg: "2.5rem" }}
                                                fontWeight="bold"
                                                color="#000"
                                                opacity="1"
                                                position="absolute"
                                                top="50%"
                                                left="50%"
                                                transform="translate(-50%, -50%)"
                                            >
                                                Lakehead University
                                            </Text>
                                        </Box>
                                        <Image
                                            src={lakeheadu2}
                                            alt="Hall Building"
                                            width="100%"
                                            height="100%"
                                            boxShadow="0 7px 30px 0.5px black"
                                            objectFit="cover"
                                            borderRadius="5%"
                                        // _hover={{ transform: "scale(1.03)" }}
                                        // transition="transform 0.2s ease-out"
                                        />
                                    </Box>
                                </motion.div>

                                <motion.div
                                    ref={ref}
                                    variants={rightVariants}
                                    initial="initial"
                                    whileInView="animate"
                                >
                                    <Box
                                        background="white"
                                        borderRadius="5%"
                                        position="relative"
                                        onMouseEnter={() => handleHover(2, true)}
                                        onMouseLeave={() => handleHover(2, false)}
                                        overflow="hidden"
                                        boxShadow="5px 5px 30px 0px black"
                                        height={{ base: "fit-content", lg: "28rem" }}
                                    >
                                        <Box
                                            position="absolute"
                                            top={hoverStates[2] ? "0" : "100%"}
                                            left="0"
                                            width="100%"
                                            height="100%"
                                            background="white"
                                            opacity={hoverStates[2] ? 0.5 : 0}
                                            transition="top 0.3s ease-in-out, opacity 0.3s ease-in-out"
                                            borderRadius="5%"
                                        >
                                            <Text
                                                textAlign="center"
                                                fontSize={{ base: "3rem", lg: "3rem" }}
                                                fontWeight="bold"
                                                color="#000"
                                                opacity="1"
                                                position="absolute"
                                                top="50%"
                                                left="50%"
                                                transform="translate(-50%, -50%)"
                                            >
                                                Lakehead University
                                            </Text>
                                        </Box>
                                        <Image
                                            src={lakeheadu3}
                                            alt="Hall Salon"
                                            width="100%"
                                            height="100%"
                                            // boxShadow="5px 5px 30px 0px black"
                                            objectFit="cover"
                                            borderRadius="5%"
                                        // _hover={{ transform: "scale(1.03)" }}
                                        // transition="transform 0.2s ease-out"
                                        />
                                    </Box>
                                </motion.div>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default BlockEvent;