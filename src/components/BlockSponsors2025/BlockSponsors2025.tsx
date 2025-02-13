import React from "react";
import {
    Box,
    Text,
    VStack,
    SimpleGrid,
    Divider,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";
import {
    sponsor_cedc,
    sponsor_impact,
    sponsor_lakeheadu,
    sponsor_lusu,
    sponsor_nphr,
    sponsor_opg,
    sponsor_peterson,
    sponsor_rbc,
    sponsor_tbcc,
    sponsor_tbh,
} from "../../assets";

const sponsorsData = [
    {
        title: "Visionary",
        gridColumn: 2,
        logos: [
            {
                name: "RBC",
                url: "https://www.rbcroyalbank.com",
                src: sponsor_rbc,
                alt: "RBC",
                boxSize: { base: "100%", lg: "350px" },
            },
            {
                name: "Lakehead University",
                url: "https://www.lakeheadu.ca",
                src: sponsor_lakeheadu,
                alt: "Lakehead University",
                boxSize: { base: "100%", lg: "350px" },
            },
        ],
    },
    {
        title: "Catalyst",
        gridColumn: 2,
        logos: [
            {
                name: "LUSU",
                url: "https://lusu.ca/",
                src: sponsor_lusu,
                alt: "LUSU",
                boxSize: { base: "80%", lg: "300px" },
            },
            {
                name: "Impact Promotions",
                url: "https://www.impactpromos.ca",
                src: sponsor_impact,
                alt: "Impact Promotions",
                boxSize: { base: "80%", lg: "300px" },
            },
        ],
    },
    {
        title: "Advocate",
        gridColumn: 3,
        logos: [
            {
                name: "TB Chamber",
                url: "https://www.tbchamber.ca",
                src: sponsor_tbcc,
                alt: "sponsor_tbcc",
                boxSize: { base: "100%", lg: "300px" },
            },
            {
                name: "OPG",
                url: "https://www.opg.com",
                src: sponsor_opg,
                alt: "sponsor_opg",
                boxSize: { base: "100%", lg: "300px" },
            },
            {
                name: "CEDC",
                url: "https://gotothunderbay.ca",
                src: sponsor_cedc,
                alt: "sponsor_cedc",
                boxSize: { base: "100%", lg: "300px" },
            },
        ],
    },
    {
        title: "Connector",
        gridColumn: 3,
        logos: [
            {
                name: "Thunder Bay Hydraulics",
                url: "https://www.thunderbayhydraulics.com",
                src: sponsor_tbh,
                alt: "sponsor_tbh",
                boxSize: { base: "70%", lg: "200px" },
            },
            {
                name: "Northern Peak HR",
                url: "https://northernpeakhr.com",
                src: sponsor_nphr,
                alt: "sponsor_nphr",
                boxSize: { base: "70%", lg: "200px" },
            },
            {
                name: "Peterson",
                url: "https://patersonfoundation.ca",
                src: sponsor_peterson,
                alt: "sponsor_peterson",
                boxSize: { base: "70%", lg: "200px" },
            },
        ],
    },
];

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
            bg="linear-gradient(to bottom, #3E2327, #8A0607)"
            overflow="hidden"
        >
            <Box textAlign="center" padding="6rem 2rem">
                <Text
                    color="#fff"
                    fontSize={{ base: "2.5rem", lg: "3.2rem" }}
                    fontWeight="bold"
                    lineHeight="1.2"
                    paddingBottom="2rem"
                >
                    Grateful for the support of our incredible
                </Text>
                <Text
                    color="#fff"
                    fontSize={{ base: "2.5rem", lg: "4rem" }}
                    fontWeight="bold"
                    lineHeight="1.2"
                    paddingBottom="2rem"
                >
                    Change Makers who make this event a reality!
                </Text>
            </Box>

            <VStack spacing={8} align="stretch" width={{ base: "90%", lg: "70%" }}>
                {sponsorsData.map((section) => (
                    <Box key={section.title}>
                        <Text fontSize={{ base: "2.3rem", lg: "4rem" }} fontWeight="bold" color="#fff" mb={4} textAlign="center">
                            {section.title}
                        </Text>
                        <Divider borderColor={dividerColor} borderWidth={2} mb={6} />
                        <SimpleGrid columns={{ base: 1, lg: section.gridColumn }} spacing={{ base: "6rem", lg: 6 }}>
                            {section.logos.map((logo, index) => (
                                <Box
                                    key={index}
                                    as="a"
                                    href={logo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Image src={logo.src} alt={logo.alt} boxSize={logo.boxSize} objectFit="contain" />
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default BlockSponsors2025;
