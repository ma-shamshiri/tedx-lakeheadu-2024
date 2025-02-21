import { Box, Button, Image, Text, VStack, HStack, Link, Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { hotel } from "../../assets";

const MotionBox = motion(Box);

const BlockAccommodation = () => {
    const bgColor = useColorModeValue("gray.100", "gray.900");
    const textColor = useColorModeValue("gray.800", "gray.200");
    const subTextColor = useColorModeValue("gray.700", "gray.200");
    const cardBg = useColorModeValue("white", "gray.800");

    return (
        <Box
            minHeight="100vh"
            width="100%"
            bg={bgColor}
            paddingTop={{ base: "initial", lg: "6rem" }}
            overflow="hidden"
        >
            <VStack spacing={10} align="center" py={10} px={5}>
                {/* Hero Section */}
                <MotionBox
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    textAlign="center"
                    maxW="900px"
                >
                    <Box
                        textAlign="center"
                        padding="4rem 2rem"
                        paddingBottom="6rem"
                        display="flex"
                        flexDirection="column"
                        gap={5}
                    >
                        <Text
                            color={useColorModeValue("gray.900", "#16F8B6")}
                            fontSize={{ base: "2rem", lg: "4rem" }}
                            fontWeight="bold"
                            lineHeight="1.2"
                            pb={4}
                        >
                            Official TEDxLakeheadU Accommodation
                        </Text>
                        <Text
                            color={useColorModeValue("gray.700", "gray.300")}
                            fontSize={{ base: "1.4rem", lg: "2rem" }}
                        >
                            Stay at the event's official partner hotel for a comfortable experience
                        </Text>
                    </Box>


                </MotionBox>

                {/* Hotel Info Section */}
                <Box
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    maxW="1400px"
                    boxShadow="2xl"
                    borderRadius="lg"
                    overflow="hidden"
                    bg={cardBg}
                    padding={6}
                >
                    <Image
                        src={hotel}
                        alt="Delta Hotels Thunder Bay"
                        objectFit="cover"
                        width={{ base: "100%", md: "70%" }}
                        height={{ base: "auto", md: "auto" }}
                    />
                    <VStack
                        padding={{ base: "2rem", lg: "3rem" }}
                        spacing={4}
                        width={{ base: "100%", md: "30%" }}
                    >
                        <Text
                            color={textColor}
                            fontSize={{ base: "1.9rem", lg: "2.5rem" }}
                            fontWeight="bold"
                        >
                            Delta Hotels Thunder Bay
                        </Text>
                        <HStack color={subTextColor} alignItems={{ base: "left", md: "center" }}>
                            <FaMapMarkerAlt />
                            <Text
                                fontSize={{ base: "1.3rem", lg: "1.8rem" }}
                            >
                                Waterfront District, Thunder Bay, ON
                            </Text>
                        </HStack>
                        <Text
                            fontSize={{ base: "1.6rem", lg: "1.6rem" }}
                            color={subTextColor}
                            paddingY="2rem"
                        >
                            Located near Prince Arthur’s Landing, the Delta Hotels Thunder Bay provides modern comfort
                            and easy access to event venues. Enjoy waterfront views, premium amenities, and exclusive
                            rates for TEDx attendees.
                        </Text>
                        <Text
                            fontWeight="bold"
                            fontSize={{ base: "1.8rem", lg: "2rem" }}
                            color={textColor}
                            paddingY="1rem"
                        >
                            From 189.00 CAD / Night
                        </Text>
                        <Link
                            href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1739384939881&key=GRP&guestreslink2=true&app=resvlink"
                            isExternal
                            width={{ base: "100%", lg: "70%" }}
                            height="4rem"
                        >
                            <Button
                                bg="#CB0000"
                                color="#fff"
                                rightIcon={<FaExternalLinkAlt />}
                                _hover={{ bg: "red.500" }}
                                width="100%"
                                height="100%"
                                fontSize={{ base: "1.5rem", lg: "1.5rem" }}
                            >
                                Book Now
                            </Button>
                        </Link>
                    </VStack>
                </Box>

                {/* Booking Information */}
                <Box textAlign="center" maxW="800px">
                    {/* <Text fontSize="lg" fontWeight="bold" color="red.500">BOOK BY FEB 21, 2025</Text> */}
                    <Text
                        fontSize={{ base: "1.3rem", lg: "1.7rem" }}
                        color={subTextColor}
                        mt={2}
                    >
                        Reservations made through TEDxLakeheadU Room Block will be charged for ALL nights in case of late cancellation or no-show.
                        Marriott requires a 72-hour notice for cancellations; late cancellations incur fees.
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default BlockAccommodation;