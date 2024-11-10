import React, { useState } from "react";
import { Box, Image, Text, useBreakpointValue, useColorModeValue, VStack, Link } from "@chakra-ui/react";
import { slides as originalSlides } from "./data";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const TeamGridDesign2: React.FC = () => {
    const { t, i18n } = useTranslation();

    const slides = originalSlides.map(item => ({
        ...item,
        firstName: t(item.firstName ?? "First Name"),
        lastName: t(item.lastName ?? "Last Name"),
        fullName: t(item.fullName ?? "Full Name"),
        role: t(item.role ?? "Role"),
    }));

    const isLargeScreen = useBreakpointValue({ base: false, lg: true });

    const titleLightColor = useColorModeValue("white", "white");
    const subTitleLightColor = useColorModeValue("#16F8B6", "#16F8B6");
    const darkColor = useColorModeValue("red", "red");
    const strokeColor = useColorModeValue("gray", "gray");

    const sxTitle = {
        WebkitTextStroke: `1px ${strokeColor}`,
        textStroke: `1px ${darkColor}`,
        color: titleLightColor,
    };

    const sxSubTitle = {
        WebkitTextStroke: `1px ${strokeColor}`,
        textStroke: `1px ${darkColor}`,
        color: subTitleLightColor,
    };

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
    const [isHoveredButton, setIsHoveredButton] = useState(false);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

    return (
        <Box
            position="relative"
            width="100%"
            // height={isLargeScreen ? "80vh" : "auto"}
            minHeight="93vh"
            bg={useColorModeValue("#F0E2B6", "#0f0f0f")}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            padding={isLargeScreen ? "0" : "20px 20px"}
            paddingY={{ base: "4rem", lg: "8rem" }}
        >
            {/* --------------- SCROLLING HEADER --------------- */}
            <Box
                className="header_container"
                textAlign="center"
                paddingBottom={{ base: "4rem", lg: "5rem" }}
            >
                <Text
                    className="h2"
                    color={useColorModeValue("gray.800", "gray.100")}
                    marginBottom="1rem"
                    marginTop="0"
                    fontSize={{ base: "2.8rem", lg: "4rem" }}
                    fontWeight="bold"
                    lineHeight="1.1"
                >
                    {t("scrollingTeamTitle")}
                </Text>
                <Text
                    className="p"
                    color={useColorModeValue("gray.700", "gray.200")}
                    fontSize={{ base: "1.5rem", lg: "2.1rem" }}
                >
                    {t("scrollingTeamSubTitle")}
                </Text>
            </Box>

            {isLargeScreen ? (
                <>
                    <Box
                        width={{ base: "90%", md: "90%", lg: "90%", xl: "75%" }}
                        maxWidth="1250px"
                        display="flex"
                        justifyContent="center"
                    >
                        <VStack
                            position="relative"
                            width="100%"
                            height="100%"
                        >
                            <Box
                                display="flex"
                                justifyContent="space-around"
                                width="100%"
                                overflow="hidden"
                            >
                                {slides.map((slide, index) => (
                                    <Box
                                        key={slide.lastName}
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        flex={hoveredIndex === index ? "1 1 600px" : "0 1 60px"}
                                        height="500px"
                                        margin="0 5px"
                                        bg="#000"
                                        transition="flex 1.6s cubic-bezier(0.3, 1, 0.32, 1)"
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        // onMouseLeave={handleMouseLeave}
                                        overflow="hidden"
                                    >
                                        <Image
                                            src={slide.imageSrc}
                                            alt={slide.fullName}
                                            width="100%"
                                            height="100%"
                                            objectFit="cover"
                                        />
                                        <VStack
                                            position="absolute"
                                            bottom="15%"
                                            gap={4}
                                            paddingX="4rem"
                                        >
                                            <Text
                                                fontSize="3rem"
                                                // fontWeight="bold"
                                                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Acme', sans-serif"}
                                                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                                opacity={hoveredIndex === index ? 1 : 0}
                                                transition={`opacity ${hoveredIndex === index ? '1s' : '0.2s'} ease-in-out`}
                                                pointerEvents="none"
                                                align="center"
                                                sx={sxTitle}

                                            >
                                                {slide.fullName}
                                            </Text>
                                            <Text
                                                fontSize="2.5rem"
                                                fontWeight="bold"
                                                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Big Shoulders Display', sans-serif"}
                                                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                                opacity={hoveredIndex === index ? 1 : 0}
                                                transition={`opacity ${hoveredIndex === index ? '1s' : '0.2s'} ease-in-out`}
                                                pointerEvents="none"
                                                align="center"
                                                sx={sxSubTitle}
                                            >
                                                {slide.role}
                                            </Text>
                                        </VStack>
                                    </Box>
                                ))}
                            </Box>
                        </VStack>
                    </Box>
                </>
            ) : (
                <>
                    <Box
                        position="relative"
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        minHeight="100vh"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            width="100%"
                            overflow="hidden"
                        >
                            {slides.map((slide, index) => (
                                <Box
                                    key={slide.lastName}
                                    position="relative"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    height={hoveredIndex === index ? "600px" : "50px"}
                                    width="100%"
                                    margin="5px 0"
                                    bg="#000"
                                    transition="height 1.6s cubic-bezier(0.3, 1, 0.32, 1)"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    // onMouseLeave={handleMouseLeave}
                                    overflow="hidden"
                                >
                                    <Image
                                        src={slide.imageSrc}
                                        alt={slide.fullName}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                    />
                                    <VStack
                                        position="absolute"
                                        bottom="10%"
                                        gap={4}
                                        maxWidth="80%"
                                    >
                                        <Text
                                            color="white"
                                            fontSize="3rem"
                                            fontWeight="bold"
                                            fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Acme', sans-serif"}
                                            dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                            opacity={hoveredIndex === index ? 1 : 0}
                                            transition={`opacity ${hoveredIndex === index ? '1s' : '0.3s'} ease-in-out`}
                                            pointerEvents="none"
                                            align="center"
                                            sx={sxTitle}
                                        >
                                            {slide.fullName}
                                        </Text>

                                        <Text
                                            color="white"
                                            fontSize="2.8rem"
                                            fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Big Shoulders Display', sans-serif"}
                                            dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                            opacity={hoveredIndex === index ? 1 : 0}
                                            transition={`opacity ${hoveredIndex === index ? '1s' : '0.2s'} ease-in-out`}
                                            pointerEvents="none"
                                            maxWidth="25rem"
                                            align="center"
                                            sx={sxSubTitle}
                                        >
                                            {slide.role}
                                        </Text>
                                    </VStack>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default TeamGridDesign2;


