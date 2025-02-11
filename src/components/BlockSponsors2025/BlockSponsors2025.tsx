import React from "react";
import { Box, Text, VStack, SimpleGrid, Divider, useColorModeValue, Image } from "@chakra-ui/react";
import { sponsor_cedc, sponsor_impact, sponsor_lakeheadu, sponsor_lusu, sponsor_opg, sponsor_rbc, sponsor_tbcc, sponsor_tbh } from "../../assets";

const BlockSponsors2025: React.FC = () => {
    const bgGradient = useColorModeValue(
        "linear(to-b, white, gray.100)",
        "linear(to-b, gray.800, gray.900)"
    );
    const dividerColor = useColorModeValue("teal.500", "teal.300");

    return (
        <Box
            bgGradient={bgGradient}
            py={12}
            px={6}
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            bg={useColorModeValue("#fff", "#fff")}
            overflow="hidden"
        >
            {/* Header */}
            <Box textAlign="center" padding="6rem 2rem">
                <Text
                    color={useColorModeValue("gray.800", "gray.800")}
                    fontSize={{ base: "2.5rem", lg: "4rem" }}
                    fontWeight="bold"
                    lineHeight="1.2"
                    paddingBottom="2rem"
                >
                    Meet Our Partners
                </Text>
            </Box>

            <VStack spacing={8} align="stretch" width={{ base: "90%", lg: "70%" }}>
                {/* Section: Visionary Partners */}
                <Box>
                    <Text
                        fontSize={{ base: "2.3rem", lg: "2.5rem" }}
                        fontWeight="bold"
                        color={useColorModeValue("gray.800", "gray.800")}
                        mb={4}
                    // mt={10}
                    >
                        Visionary
                    </Text>
                    <Divider borderColor={dividerColor} borderWidth={2} mb={6} />
                    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Image src={sponsor_rbc} alt="RBC" boxSize={{ base: "100%", lg: "600px" }} objectFit="contain" />
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Image src={sponsor_lakeheadu} alt="Lakehead University" boxSize={{ base: "100%", lg: "600px" }} objectFit="contain" />
                        </Box>
                    </SimpleGrid>
                </Box>

                {/* Section: Catalyst Partners */}
                <Box>
                    <Text
                        fontSize={{ base: "2.3rem", lg: "2.5rem" }}
                        fontWeight="bold"
                        color={useColorModeValue("gray.800", "gray.800")}
                        mb={4}
                        mt={10}
                    >
                        Catalyst
                    </Text>
                    <Divider borderColor={dividerColor} borderWidth={2} mb={6} />
                    <SimpleGrid columns={{ base: 2, lg: 2 }} spacing={6}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Image src={sponsor_lusu} alt="LUSU" boxSize={{ base: "80%", lg: "300px" }} objectFit="contain" />
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Image src={sponsor_impact} alt="sponsor_impact" boxSize={{ base: "80%", lg: "300px" }} objectFit="contain" />
                        </Box>
                    </SimpleGrid>
                </Box>

                {/* Section: Advocates Partners */}
                <Box>
                    <Text
                        fontSize={{ base: "2.3rem", lg: "2.5rem" }}
                        fontWeight="bold"
                        color={useColorModeValue("gray.800", "gray.800")}
                        mb={4}
                        mt={10}
                    >
                        Advocate
                    </Text>
                    <Divider borderColor={dividerColor} borderWidth={2} mb={6} />
                    <SimpleGrid columns={{ base: 3, lg: 3 }} spacing={6}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Image src={sponsor_tbcc} alt="sponsor_tbcc" boxSize={{ base: "100%", lg: "300px" }} objectFit="contain" />
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Image src={sponsor_opg} alt="sponsor_opg" boxSize={{ base: "100%", lg: "300px" }} objectFit="contain" />
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Image src={sponsor_cedc} alt="sponsor_cedc" boxSize={{ base: "100%", lg: "300px" }} objectFit="contain" />
                        </Box>
                    </SimpleGrid>
                </Box>

                {/* Section: Connector Partners */}
                <Box>
                    <Text
                        fontSize={{ base: "2.3rem", lg: "2.5rem" }}
                        fontWeight="bold"
                        color={useColorModeValue("gray.800", "gray.800")}
                        mb={4}
                        mt={10}
                    >
                        Connector
                    </Text>
                    <Divider borderColor={dividerColor} borderWidth={2} mb={6} />
                    <SimpleGrid columns={{ base: 1, lg: 1 }} spacing={6}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Image src={sponsor_tbh} alt="TBH" boxSize={{ base: "70%", lg: "200px" }} objectFit="contain" />
                        </Box>
                    </SimpleGrid>
                </Box>
            </VStack>
        </Box>
    );
};

export default BlockSponsors2025;
