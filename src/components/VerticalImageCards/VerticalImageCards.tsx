import React, { useState } from "react";
import { Box, Image, Text, useBreakpointValue, useColorModeValue, VStack, Link } from "@chakra-ui/react";
import { slides } from "./data";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const VerticalImageCards: React.FC = () => {
    const { t } = useTranslation();

    const isLargeScreen = useBreakpointValue({ base: false, lg: true });

    const lightColor = useColorModeValue("white", "white");
    const darkColor = useColorModeValue("red", "red");
    const strokeColor = useColorModeValue("gray", "gray");

    const sx = {
        WebkitTextStroke: `1px ${strokeColor}`,
        textStroke: `1px ${darkColor}`,
        color: lightColor,
    };

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(8);
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
            height={isLargeScreen ? "100vh" : "auto"}
            bg={useColorModeValue("white", "#0f0f0f")}
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            padding={isLargeScreen ? "0" : "20px 20px"}
        >
            {isLargeScreen ? (
                <>
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        width={{ base: "90%", md: "90%", lg: "90%", xl: "75%" }}
                        maxWidth="1600px"
                        display="flex"
                        justifyContent="center"
                    >
                        <Box
                            display="flex"
                            justifyContent="space-around"
                            width="100%"
                            overflow="hidden"
                        >
                            {slides.map((slide, index) => (
                                <Box
                                    key={slide.id}
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
                                        bottom="10%"
                                        gap={4}
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
                                                fontFamily="'Acme', sans-serif"
                                                opacity={hoveredIndex === index ? 1 : 0}
                                                transition={`opacity ${hoveredIndex === index ? '1s' : '0.2s'} ease-in-out`}
                                                pointerEvents="none"
                                                maxWidth="25rem"
                                                align="center"
                                                sx={sx}
                                            >
                                                {slide.fullName}
                                            </Text>
                                        {/* </Link> */}

                                        {/* <Text
                                            color="white"
                                            fontSize="3rem"
                                            fontWeight="bold"
                                            fontFamily="'Acme', sans-serif"
                                            opacity={hoveredIndex === index ? 1 : 0}
                                            transition={`opacity ${hoveredIndex === index ? '1s' : '0.2s'} ease-in-out`}
                                            pointerEvents="none"
                                            align="center"
                                            sx={sx}
                                        >
                                            {slide.lastName}
                                        </Text> */}
                                    </VStack>

                                    {/* <Link
                                        position="absolute"
                                        top="3%"
                                        className="btn btn--secondary btn--block"
                                        as={RouterLink}
                                        to={slide.profileSrc}
                                        border="1px solid #d4d4d4"
                                        borderRadius="5px"
                                        cursor="pointer"
                                        fontSize={{ base: "1.5rem", lg: "1.5rem" }}
                                        padding="0.5rem 1.5rem"
                                        textAlign="center"
                                        whiteSpace="nowrap"
                                        bg="transparent"
                                        color="#d4d4d4"
                                        display="inline-block"
                                        width={{ base: "fit-content", lg: "fit-content" }}
                                        _hover={{
                                            border: "1px solid white",
                                            bg: "transparent",
                                            color: "white",
                                        }}
                                        opacity={hoveredIndex === index ? 1 : 0}
                                        transition={`opacity ${hoveredIndex === index ? '1s' : '0.2s'} ease-in-out`}
                                        onMouseEnter={handleHoverButton}
                                        onMouseLeave={handleUnHoverButton}
                                    >
                                        <Text>{t("seeProfile")}</Text>
                                    </Link> */}
                                </Box>
                            ))}
                        </Box>
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
                        minHeight="100vh" // Ensure the container takes full height
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
                                    key={slide.id}
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
                                    >
                                        <Link
                                            as={RouterLink}
                                            to={slide.profileSrc}
                                            _hover={{ textDecoration: 'none' }}
                                        >
                                            <Text
                                                color="white"
                                                fontSize="3rem"
                                                fontWeight="bold"
                                                fontFamily="'Acme', sans-serif"
                                                opacity={hoveredIndex === index ? 1 : 0}
                                                transition={`opacity ${hoveredIndex === index ? '1s' : '0.3s'} ease-in-out`}
                                                pointerEvents="none"
                                                align="center"
                                                sx={sx}
                                            >
                                                {slide.fullName}
                                            </Text>
                                        </Link>
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

export default VerticalImageCards;


