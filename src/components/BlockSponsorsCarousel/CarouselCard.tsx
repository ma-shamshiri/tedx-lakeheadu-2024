import React from 'react';
import { Image, Box, useColorModeValue } from '@chakra-ui/react';

interface CarouselCardProps {
    name?: string;
    imageUrl?: string;
    sourceUrl?: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
    name,
    imageUrl,
    sourceUrl
}) => {
    return (
        <Box
            className='carousel_card_container'
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
        >
            <Box
                className='carousel_card'
                as="a"
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                position="relative"
                width={{ base: "9rem", md: "20rem", lg: "17rem" }}
                height={{ base: "9rem", md: "20rem", lg: "17rem" }}
                borderRadius="100%"
                bg="white"
                border="2px solid"
                borderColor={useColorModeValue("black", "white")}
                cursor="pointer"
                _hover={{ textDecoration: "none" }}
                overflow="hidden"
            >
                <Image
                    src={imageUrl}
                    boxShadow="0 0 30px 1px black"
                    objectFit="cover"
                />
            </Box>
        </Box>
    );
};

export default CarouselCard;
