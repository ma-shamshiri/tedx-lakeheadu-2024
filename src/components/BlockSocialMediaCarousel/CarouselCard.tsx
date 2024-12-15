import React from 'react';
import { Image } from '@chakra-ui/react';
import {
    Box,
    VStack,
    Flex,
    useColorModeValue,
    IconButton,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Link as RouterLink } from "react-router-dom";

interface CarouselCardProps {
    postImageSrc?: string;
    postUrl?: string;
    icon: IconType;
    iconColor?: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
    postImageSrc,
    postUrl,
    icon: IconComponent,
    iconColor,
}) => {
    const cardBackgroundColor = useColorModeValue(
        "#900000",
        "linear-gradient(to right bottom, #0e0e29, #0e0e29, #272763, #272763)"
    );

    return (
        <Box
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
        >
            <Box
                className='carouselCard'
                position="relative"
                width="100%"
                minW="30rem"
                maxW="50rem"
                maxH="55rem"
                bg={cardBackgroundColor}
                padding={{ base: "1.5rem", lg: "1.5rem" }}
                borderRadius="7px"
                boxShadow={useColorModeValue(
                    "0 0 20px 5px rgba(0, 0, 0, 0.1)",  // Light mode boxShadow
                    "0 0 20px 5px rgba(0, 0, 0, 0.2)"  // Dark mode boxShadow
                )}
            >
                <VStack spacing={10} position="relative">
                    <Flex justifyContent="left" width="100%">
                        <Box
                            as={IconButton}
                            icon={<IconComponent size={"2rem"} />}
                            bg={iconColor}
                            color="white"
                            borderRadius="10px"
                            boxSize={"4rem"}
                            cursor="initial"
                            _hover={{
                                bg: iconColor
                            }}
                        />
                    </Flex>

                    <Flex
                        className="buttonContainer"
                        justifyContent="center"
                        alignItems="center"
                        width="75%"
                        onClick={() => window.open(postUrl, "_blank")}
                        rel="noopener noreferrer"
                        cursor="pointer"
                    >
                        <Image src={postImageSrc} maxH="35rem" objectFit="cover" />
                    </Flex>

                    <Flex justifyContent="right" width="100%">
                        <Box
                            as={IconButton}
                            cursor="initial"
                            icon={<IconComponent size={"2rem"} />}
                            bg={iconColor}
                            color="white"
                            borderRadius="10px"
                            boxSize={"4rem"}
                            _hover={{
                                bg: "#1773EA"
                            }}
                        />
                    </Flex>
                </VStack>
            </Box>
        </Box>
    );
};

export default CarouselCard;
