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
            bg={useColorModeValue("#F0E2B6", "#0f0f0f")}
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            padding={isLargeScreen ? "0" : "20px 20px"}
            paddingY={{ base: "8rem", lg: "8rem" }}
        >
            {isLargeScreen ? (
                <>
                    <Box
                        width={{ base: "90%", md: "90%", lg: "90%", xl: "75%" }}
                        maxWidth="1600px"
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
                                            bottom="25%"
                                            gap={4}
                                        >
                                            <Text
                                                fontSize="3.5rem"
                                                fontWeight="bold"
                                                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Acme', sans-serif"}
                                                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                                opacity={hoveredIndex === index ? 1 : 0}
                                                transition={`opacity ${hoveredIndex === index ? '1s' : '0.2s'} ease-in-out`}
                                                pointerEvents="none"
                                                maxWidth="25rem"
                                                align="center"
                                                sx={sxTitle}
                                            >
                                                {slide.firstName}
                                            </Text>
                                            <Text
                                                fontSize="2.8rem"
                                                fontWeight="bold"
                                                // fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Acme', sans-serif"}
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

                            <Link
                                position="relative"
                                className="btn btn--secondary btn--block"
                                as={RouterLink}
                                to={"/team/"}
                                border="2px solid #F04E2D"
                                borderRadius="7px"
                                cursor="pointer"
                                fontSize={{ base: "1.8rem", lg: "2rem" }}
                                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                marginTop="5rem"
                                padding="1.5rem"
                                paddingX="3rem"
                                textAlign="center"
                                whiteSpace="nowrap"
                                bg="#f04e2d"
                                color="#fff"
                                boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                                display="inline-block"
                                width={{ base: "fit-content", lg: "fit-content" }}
                                _hover={{
                                    border: "0.2rem solid #f75540",
                                    bg: "transparent",
                                    color: "#f04e2d",
                                    boxShadow:
                                        "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
                                }}
                                transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
                                onMouseEnter={handleHoverButton}
                                onMouseLeave={handleUnHoverButton}
                            >
                                <Text>{t("scrollingTeamButtonLabel")}</Text>
                            </Link>
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
                                        {/* <Link
                                            as={RouterLink}
                                            to={slide.profileSrc}
                                            _hover={{ textDecoration: 'none' }}
                                        > */}
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
                                            {slide.firstName}
                                        </Text>

                                        <Text
                                            color="white"
                                            fontSize="3rem"
                                            // fontWeight="bold"
                                            // fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Acme', sans-serif"}
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
                                        {/* </Link> */}
                                    </VStack>
                                </Box>
                            ))}

                            <Link
                                position="relative"
                                className="btn btn--secondary btn--block"
                                as={RouterLink}
                                to={"/team/"}
                                border="2px solid #F04E2D"
                                borderRadius="7px"
                                cursor="pointer"
                                fontSize={{ base: "1.8rem", lg: "2rem" }}
                                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                marginTop="5rem"
                                padding="1.5rem"
                                paddingX="3rem"
                                textAlign="center"
                                whiteSpace="nowrap"
                                bg="#f04e2d"
                                color="#fff"
                                boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                                display="inline-block"
                                width={{ base: "fit-content", lg: "fit-content" }}
                                _hover={{
                                    border: "0.2rem solid #f75540",
                                    bg: "transparent",
                                    color: "#f04e2d",
                                    boxShadow:
                                        "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
                                }}
                                transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
                                onMouseEnter={handleHoverButton}
                                onMouseLeave={handleUnHoverButton}
                            >
                                <Text>{t("scrollingTeamButtonLabel")}</Text>
                            </Link>
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default TeamGridDesign2;


