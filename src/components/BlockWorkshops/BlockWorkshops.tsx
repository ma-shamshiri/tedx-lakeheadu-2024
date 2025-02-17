import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    Box,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    VStack,
    Flex,
    Icon,
    UnorderedList,
    ListItem,
    Divider,
    Badge,
    Stack,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { workshop1, workshop2, workshop3 } from "../../assets";

const workshops = [
    {
        speaker: "Origin",
        topic:
            "Career Exploration VR Workshop: A Journey Through Professions & Seven Grandfather Teachings",
        description:
            "Imagine stepping into a virtual world where you can explore various professions firsthand before choosing your career path. This Career Exploration VR Workshop is designed to provide an immersive experience where participants can step into the shoes of different professionals—doctors, engineers, artists, teachers, pilots, and many more—while integrating the wisdom of the Seven Grandfather Teachings.",
        image: workshop1,
    },
    {
        speaker: "Dr. Kris Alexander",
        topic: "AI in Education: Live Interactive Demonstrations and Open Discussion",
        description:
            "This interactive workshop builds on the TEDx Talk \"How AI and Level Up Education\" by providing hands-on demonstrations and real-world applications of AI tools in educational settings. Participants will witness real-time demonstrations of AI tools and discuss their implementation across different educational levels.",
        image: workshop2,
    },
    {
        speaker: "Kari Chiappetta",
        topic: "Embracing Change: Strategies for Effective Change Management",
        description:
            "This session builds upon the insights shared in the keynote presentation 'Recognizing Our Strengths and Celebrating Our Gifts.' Participants will learn how different temperaments manage change and practical strategies to navigate transitions effectively.",
        keyTakeaways: [
            "Gain an understanding of how each temperament manages change.",
            "Learn strategies to assist others in managing change more effectively.",
            "Recognize that individuals have varying needs and stressors that influence their reactions to change.",
            "Learn to appreciate our differences, viewing them as strengths rather than weaknesses.",
        ],
        image: workshop3,
    },
];

const BlockWorkshops: React.FC = () => {
    const { t } = useTranslation();
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Box
            position="relative"
            width="100%"
            minHeight="100vh"
            bgGradient={useColorModeValue(
                "linear(to-b, gray.100, white)",
                "linear(to-b, black, gray.900)"
            )}
            overflow="hidden"
            display="flex"
            flexDirection="column"
            alignItems="center"
            py={10}
        >
            <Box textAlign="center" padding="4rem 2rem" paddingBottom="7rem">
                <Text
                    color={useColorModeValue("gray.900", "#16F8B6")}
                    fontSize={{ base: "2.5rem", lg: "4rem" }}
                    fontWeight="bold"
                    lineHeight="1.2"
                    pb={4}
                >
                    {t("Beyond the Talks")}
                </Text>
                <Text
                    color={useColorModeValue("gray.700", "gray.300")}
                    fontSize={{ base: "1.4rem", lg: "2.4rem" }}
                    fontWeight="bold"
                >
                    {t("TEDxLakeheadU Interactive Workshops")}
                </Text>
            </Box>

            <Tabs
                variant="unstyled"
                width={{ base: "90%", lg: "50%" }}
                onChange={(index) => setSelectedTab(index)}
            >
                <TabList
                    display="flex"
                    justifyContent="center"
                    mb={10}
                    position="relative"
                    gap={{ base: 3, lg: 20 }}
                    _after={{
                        content: '""',
                        position: "absolute",
                        width: { base: "90%", lg: "80%" },
                        height: "2px",
                        bg: "#CB0000",
                        bottom: "-20px",
                    }}>
                    {workshops.map((workshop, index) => (
                        <Tab
                            key={index}
                            px={8}
                            py={4}
                            fontSize={{ base: "1.4rem", lg: "2.2rem" }}
                            fontWeight="bold"
                            borderRadius={{ base: "10px", lg: "full" }}
                            _selected={{ color: "white", bg: "#CB0000" }}
                            _hover={{bg:"red.500"}}
                        >
                            {workshop.speaker}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {workshops.map((workshop, index) => (
                        <TabPanel key={index} py={6}>
                            <VStack spacing={6} align="stretch">
                                <Box
                                    p={6}
                                    borderWidth={1}
                                    borderRadius="lg"
                                    bg={useColorModeValue("white", "gray.800")}
                                    boxShadow={useColorModeValue("0 0 30px 1px gray", "boxShadow=0 0 30px 1px black")}
                                >
                                    <Text
                                        fontWeight="bold"
                                        fontSize={{ base: "1.5rem", lg: "2rem" }}
                                        color={useColorModeValue("gray.900", "gray.100")}
                                        textAlign="center"
                                        paddingY="1rem"
                                    >
                                        {workshop.topic}
                                    </Text>

                                    <Divider my={4} />

                                    <Image src={workshop.image} alt={workshop.topic} borderRadius="lg" mb={4} />

                                    <Divider my={4} />
                                    <Text
                                        fontSize={{ base: "1.5rem", lg: "1.8rem" }}
                                        color={useColorModeValue("gray.700", "gray.300")}
                                        paddingY="1rem"
                                    >
                                        {workshop.description}
                                    </Text>
                                    {workshop.keyTakeaways && (
                                        <>
                                            <Text
                                                fontWeight="bold"
                                                mt={4}
                                                fontSize={{ base: "1.5rem", lg: "1.8rem" }}
                                            >
                                                Key Takeaways:
                                            </Text>
                                            <UnorderedList
                                                mt={2}
                                                pl={5}
                                                color={useColorModeValue("gray.700", "gray.300")}
                                                spacing={2}
                                            >
                                                {workshop.keyTakeaways.map((point, i) => (
                                                    <ListItem key={i} display="flex" alignItems="left" fontSize={{ base: "1.5rem", lg: "1.8rem" }}>
                                                        <Icon as={FaChevronRight} color="red.400" mr={2} /> {point}
                                                    </ListItem>
                                                ))}
                                            </UnorderedList>
                                        </>
                                    )}
                                </Box>
                            </VStack>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Box >
    );
};

export default BlockWorkshops;
