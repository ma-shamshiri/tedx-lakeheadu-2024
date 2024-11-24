import React, { useEffect, useRef } from "react";
import { Box, Image, SimpleGrid, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { gsap } from "gsap";
import { slides as originalItems } from "./data";
import { useTranslation } from "react-i18next";

const TeamGridDesign3: React.FC = () => {
    const { t } = useTranslation();

    const menuRef = useRef<HTMLDivElement | null>(null);

    const items = originalItems.map(item => ({
        ...item,
        firstName: t(item.firstName ?? "First Name"),
        lastName: t(item.lastName ?? "Last Name"),
        fullName: t(item.fullName ?? "Full Name"),
        role: t(item.role ?? "Role"),
    }));

    useEffect(() => {
        gsap
            .timeline()
            .set(menuRef.current, { autoAlpha: 1 })
            .from(".menu__item-innertext", {
                delay: 1,
                duration: 0.85,
                xPercent: 25,
                yPercent: 125,
                stagger: 0.095,
                skewY: gsap.utils.wrap([-8, 8]),
                ease: "expo.out",
            })
            .set(menuRef.current, { pointerEvents: "all" });

        const items = document.querySelectorAll(".menu__item");

        items.forEach((item: any) => {
            const imageWrapper = item.querySelector(".menu__item-image_wrapper");
            let itemBounds = item.getBoundingClientRect();

            const onMouseEnter = () => {
                gsap.set(imageWrapper, {
                    scale: 0.8,
                    xPercent: 25,
                    yPercent: 50,
                    rotation: -15,
                    zIndex: 10,
                });
                gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
            };

            const onMouseLeave = () => {
                gsap.to(imageWrapper, {
                    opacity: 0,
                    yPercent: -50,
                    xPercent: 25,
                    scale: 0.8,
                    rotation: -15,
                    zIndex: -1,
                });
            };

            const onMouseMove = (event: MouseEvent) => {
                const imageWrapperBounds = imageWrapper.getBoundingClientRect();
                let yOffset = itemBounds.top / imageWrapperBounds.height;

                // Map the mouse movement to the image movement based on the element's bounding box
                yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
                const xPos = Math.abs(event.clientX - itemBounds.left) - imageWrapperBounds.width / 1.55;
                const yPos = Math.abs(event.clientY - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset;

                gsap.to(imageWrapper, {
                    duration: 1.25,
                    x: xPos,
                    y: yPos,
                });
            };

            item.addEventListener("mouseenter", onMouseEnter);
            item.addEventListener("mouseleave", onMouseLeave);
            item.addEventListener("mousemove", onMouseMove);

            window.addEventListener("resize", () => {
                itemBounds = item.getBoundingClientRect();
            });
        });
    }, []);

    return (
        <Box
            position="relative"
            width="100%"
            overflow="hidden"
        >
            <Box
                // className="menu"
                ref={menuRef}
                display="flex"
                flexDirection="column"
                // gap="2rem"
                width="100%"
                // minHeight={{ base: "initial", md: "95vh", lg: "95vh" }}
                bg={useColorModeValue("white", "#131313")}
                padding={{ base: "6rem 3.5rem", lg: "4rem 6rem" }}
                overflow="hidden"
                paddingLeft={{ lg: "10rem" }}
            >
                <SimpleGrid
                    columnGap={10}
                    columns={1}
                    rowGap={10}
                    zIndex={2000}
                >
                    {items.map((item, index) => (
                        <VStack
                            className="menu__item"
                            key={item.lastName}
                            width="max-content"
                            align="start"
                            cursor="pointer"
                            _hover={{
                                zIndex: 2
                            }}
                        >
                            <Box
                                className="menu__item-image_wrapper"
                                position="fixed"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                width={{ base: "300px", lg: "600px" }}
                                height={{ base: "200px", lg: "500px" }}
                                pointerEvents="none"
                                opacity="0"
                                _hover={{
                                    zIndex: 2
                                }}
                            >
                                <Box
                                    // className="menu__item-image_inner"
                                    position="absolute"
                                    left={0}
                                    top={0}
                                    height="100%"
                                    width="100%"
                                    objectFit="cover"
                                >
                                    <Image
                                        // className="menu__item-image"
                                        src={item.imageSrc}
                                        alt={item.fullName}
                                        position="absolute"
                                        left={0}
                                        top={0}
                                        height="100%"
                                        width="100%"
                                        borderRadius="20px"
                                        boxShadow="0 8px 16px rgba(0, 0, 0, 0.3)"
                                        objectFit="cover"
                                    />
                                </Box>
                            </Box>
                            <Text
                                // className="menu__item-text"
                                position="relative"
                                color={useColorModeValue("gray.700", "gray.300")}
                                fontSize={{ base: "2rem", lg: "4rem" }}
                                // fontFamily="'Acme', sans-serif"
                                fontWeight="600"
                                lineHeight="1"
                                textTransform="capitalize"
                                whiteSpace="nowrap"
                                cursor="pointer"
                                opacity="1"
                                transition="opacity 350ms ease"
                                overflow="hidden"
                            >

                                <Box
                                    className="menu__item-innertext"
                                    as="span"
                                    _hover={{
                                        color: "#16F8B6"
                                    }}
                                >
                                    <Box
                                        as="span"
                                        paddingRight="0.8rem"
                                    >
                                        {item.firstName}
                                    </Box>
                                    <Box
                                        as="span"
                                    >
                                        {item.lastName}
                                    </Box>
                                </Box>
                            </Text>
                        </VStack>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default TeamGridDesign3;
