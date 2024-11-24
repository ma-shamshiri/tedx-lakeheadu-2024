import { Box, Flex, Image, SimpleGrid, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { slides as originalItems } from "./data";
import { useTranslation } from "react-i18next";



const TeamGridDesign1 = () => {
    const { t } = useTranslation();
    const isLargeScreen = useBreakpointValue({ base: false, lg: true });

    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    const items = originalItems.map(item => ({
        ...item,
        firstName: t(item.fullName ?? "First Name"),
        lastName: t(item.fullName ?? "Last Name"),
        fullName: t(item.fullName ?? "Full Name"),
        role: t(item.role ?? "Role"),
    }));

    useEffect(() => {
        // Iterate over all items to set hover animation
        itemsRef.current.forEach((item) => {
            if (item) {
                const imageOverlay = item.querySelector(".img-overlay");
                const imageElement = item.querySelector("img");

                if (imageOverlay && imageElement) {
                    item.addEventListener("mouseenter", () => {
                        gsap.to(imageOverlay, {
                            top: isLargeScreen ? "-100%" : "0%",
                            left: isLargeScreen ? "0%" : "-100%",
                            duration: 1,
                            ease: "cubic-bezier(0.075, 0.82, 0.165, 1)",
                        });
                        gsap.to(imageElement, {
                            scale: 1,
                            duration: 2,
                            ease: "cubic-bezier(0.075, 0.82, 0.165, 1)",
                        });
                    });

                    item.addEventListener("mouseleave", () => {
                        gsap.to(imageOverlay, {
                            top: isLargeScreen ? "0%" : "0%",
                            left: isLargeScreen ? "0%" : "0%",
                            duration: 1,
                            ease: "cubic-bezier(0.075, 0.82, 0.165, 1)",
                        });
                        gsap.to(imageElement, {
                            scale: 1.5,
                            duration: 2,
                            ease: "cubic-bezier(0.075, 0.82, 0.165, 1)",
                        });
                    });
                }
            }
        });
    }, [isLargeScreen]);

    return (
        <Box width="100%" overflow="hidden">
            {isLargeScreen ? (
                <Flex height="100%" width="100%">
                    <SimpleGrid columns={{ base: 1, md: 3, lg: 4, xl: 4 }} spacing={0}>
                        {items.map((item, index) => (
                            <Flex key={item.firstName} direction="row" alignItems="stretch" flex="1">
                                <Box flex="1" position="relative" overflow="hidden">
                                    <Box
                                        className="item-wrapper"
                                        position="relative"
                                        height="100%"
                                        _hover={{
                                            ".img-overlay": {
                                                top: "-100%", // Move overlay out of view on hover
                                            },
                                            img: {
                                                transform: "scale(1)", // Scale image back to normal size on hover
                                            },
                                            ".item-copy": {
                                                color: "#fff", // Change text color on hover
                                            },
                                        }}
                                    >
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.fullName}
                                            width="100%"
                                            height="100%"
                                            objectFit="cover"
                                            transform="scale(1.5)"
                                            transition="2s cubic-bezier(0.075, 0.82, 0.165, 1)"
                                        />
                                        <Box
                                            className="img-overlay"
                                            position="absolute"
                                            bg={useColorModeValue("#dfdbd5", "#232323")}
                                            opacity="0.92"
                                            top="0"
                                            left="0"
                                            width="100%"
                                            height="100%"
                                            transition="1.5s cubic-bezier(0.075, 0.82, 0.165, 1)"
                                            zIndex="1"
                                        />
                                        <Box
                                            className="item-copy"
                                            position="absolute"
                                            top="0"
                                            width="100%"
                                            height="100%"
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            textAlign="center"
                                            padding="8em 2em"
                                            fontFamily="'Acme', sans-serif"
                                            color={useColorModeValue("black", "white")}
                                            transition="0.3s cubic-bezier(0.075, 0.82, 0.165, 1)"
                                            zIndex="2"
                                        >
                                            <Text fontSize="3.2rem">
                                                {item.fullName}
                                            </Text>
                                            <Text
                                                fontSize="3.2rem"
                                            >
                                                {item.role}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                {/* Only add divider if it's not the last item */}
                                {index < items.length - 1 && (
                                    <Box
                                        width="1px"
                                        height="100vh"
                                        bg={useColorModeValue("gray.600", "gray")}
                                        flexShrink={0}
                                    />
                                )}
                            </Flex>
                        ))}
                    </SimpleGrid>
                </Flex>
            ) : (
                <Flex height="100%" width="100%" direction="column">
                    {items.map((item, index) => (
                        <Box key={item.firstName} position="relative" overflow="hidden" flex="1">
                            <Box
                                className="item-wrapper"
                                position="relative"
                                height="100%"
                                _hover={{
                                    ".img-overlay": {
                                        left: "100%", // Move overlay from left to right on hover
                                    },
                                    img: {
                                        transform: "scale(1)", // Scale image back to normal size on hover
                                    },
                                    ".item-copy": {
                                        color: "#fff", // Change text color on hover
                                    },
                                }}
                            >
                                <Image
                                    src={item.imageSrc}
                                    alt={item.role}
                                    width="100%"
                                    height="100%"
                                    objectFit="cover"
                                    transform="scale(1.5)"
                                    transition="2s cubic-bezier(0.075, 0.82, 0.165, 1)"
                                />
                                <Box
                                    className="img-overlay"
                                    position="absolute"
                                    bg={useColorModeValue("#dfdbd5", "#232323")}
                                    opacity="0.92"
                                    top="0"
                                    left="0"
                                    width="100%"
                                    height="100%"
                                    transition="1s cubic-bezier(0.075, 0.82, 0.165, 1)"
                                    zIndex="1"
                                />
                                <Box
                                    className="item-copy"
                                    position="absolute"
                                    top="0"
                                    width="100%"
                                    height="100%"
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    textAlign="center"
                                    fontFamily="'Acme', sans-serif"
                                    color={useColorModeValue("black", "white")}
                                    transition="0.3s cubic-bezier(0.075, 0.82, 0.165, 1)"
                                    zIndex="2"
                                >
                                    <Flex
                                        flexDirection="column"
                                        width="100%"
                                        height="100%"
                                        padding="2em 2em"
                                        justifyContent="space-between"
                                    >
                                        <Text fontSize="3rem">
                                            {item.fullName}
                                        </Text>
                                        <Text fontSize="2.8rem">
                                            {item.role}
                                        </Text>
                                    </Flex>
                                </Box>
                            </Box>

                            {/* Divider for small screens */}
                            {index < items.length - 1 && (
                                <Box
                                    height="1px"
                                    width="100%"
                                    bg={useColorModeValue("#fff", "#fff")}
                                />
                            )}
                        </Box>
                    ))}
                </Flex>
            )}
        </Box>
    );
};

export default TeamGridDesign1;
