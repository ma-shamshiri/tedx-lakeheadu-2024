import React from 'react';
import { Image } from '@chakra-ui/react';
import {
    Box,
    VStack,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
// import { Link as RouterLink } from "react-router-dom";

interface CarouselCardProps {
    postImageSrc?: string;
    postUrl?: string;
    icon: IconType;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
    postImageSrc,
    postUrl,
    icon: IconComponent,
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
                maxH="85rem"
                // bg={cardBackgroundColor}
                bg={"transparent"}
                padding={{ base: "1.5rem", lg: "1.5rem" }}
                borderRadius="7px"
                boxShadow={useColorModeValue(
                    "0 0 20px 5px rgba(0, 0, 0, 0.1)",
                    "0 0 20px 5px rgba(0, 0, 0, 0.2)"
                )}
            >
                <VStack spacing={5} position="relative">
                    <Flex
                        className="buttonContainer"
                        justifyContent="center"
                        alignItems="center"
                        width="95%"
                        onClick={() => window.open(postUrl, "_blank")}
                        rel="noopener noreferrer"
                        cursor="pointer"
                    >
                        <Image src={postImageSrc} maxH="55rem" objectFit="cover" />
                    </Flex>
                </VStack>
            </Box>
        </Box>
    );
};

export default CarouselCard;
