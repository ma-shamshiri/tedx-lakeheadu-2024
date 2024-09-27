import React from "react";
import {
    Box,
    Flex,
    Image,
    Text,
    VStack,
    useBreakpointValue,
    useColorModeValue,
} from "@chakra-ui/react";
import { BsChatRightQuoteFill } from "react-icons/bs";

interface SpeakerProfileCardProps {
    name?: string;
    title?: string;
    biography?: string;
    imageSrc?: string;
}

export const SpeakerProfileCard: React.FC<SpeakerProfileCardProps> = ({
    name,
    title,
    biography,
    imageSrc,
}) => {
    const iconSize = useBreakpointValue({ base: "25px", lg: "55px" });
    return (
        <Flex
            position="relative"
            direction={{ base: "column", md: "column", lg: "row" }}
            height={{ base: "auto", lg: "fit-content" }}
            width="100%"
            bg={useColorModeValue("white", "black")}
            overflow="hidden"
        >
            {/* Left Section */}
            <Box
                className="left-section"
                position="relative"
                display="flex"
                flex={{ base: "1", lg: "1" }}
            >
                <Image src={imageSrc} zIndex={1} />
            </Box>

            {/* Right Section */}
            <Box
                className="right-section"
                position="relative"
                display="flex"
                flex={{ base: "1", lg: "1" }}
                justifyContent="center"
                alignItems="center"
            >
                <Flex
                    position="relative"
                    direction={{ base: "column", md: "column", lg: "column" }}
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height={{ base: "100%", lg: "100%" }}
                    zIndex={1}
                >
                    {/* Top Section */}
                    <Box
                        className="top_section"
                        position="relative"
                        display="flex"
                        flex={{ lg: "1" }}
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
                        height="100%"
                    >
                        <VStack>
                            <Text
                                className="speaker_title"
                                fontSize={{ base: "2.8rem", lg: "4.5rem" }}
                                fontWeight="bold"
                                fontFamily="'Acme', sans-serif"
                                letterSpacing="2px"
                                textAlign="center"
                                paddingTop={{ base: "2rem", lg: "0" }}

                                color={useColorModeValue("black", "white")}
                            >
                                {name}
                            </Text>
                            <Text
                                className="speaker_title"
                                fontSize={{ base: "1.4rem", lg: "2rem" }}
                                textAlign="center"
                                color={useColorModeValue("black", "white")}
                                paddingBottom="2rem"
                            >
                                {title}
                            </Text>
                        </VStack>
                    </Box>

                    {/* Bottom Section */}
                    <Box
                        className="bottom_section"
                        position="relative"
                        display="flex"
                        flex={{ base: "2", lg: "2" }}
                        maxWidth="75%"
                        paddingBottom={{ base: "4rem", lg: "0" }}
                    >
                        <Text
                            className="speaker_title"
                            fontSize={{ base: "1.5rem", lg: "1.8rem" }}
                            lineHeight={{ base: "initial", lg: "32px" }}
                            color={useColorModeValue("black", "gray.300")}
                            letterSpacing={{ base: "initial", lg: "2px" }}
                            fontFamily="'Literata', serif"
                        // textAlign="center"
                        >
                            <Box as="span" display="inline-block">
                                <BsChatRightQuoteFill size={iconSize} color="#fc5a03" />
                            </Box>
                            {" "}
                            {biography}
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default SpeakerProfileCard;
