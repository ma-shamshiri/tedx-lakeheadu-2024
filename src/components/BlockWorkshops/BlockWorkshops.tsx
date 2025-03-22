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
import { workshop1, workshop2, workshop3, workshop4, workshop5 } from "../../assets";

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
    {
        speaker: "Ben & Darren",
        topic: "The Psychology of Persuasion and Communication",
        description:
            "Join us for an engaging session on elevating your persuasion game. This workshop will empower you with the knowledge and skills to make a greater impact in both personal and professional interactions.",
        keyTakeaways: [
            "Learn practical strategies and techniques to enhance persuasive abilities",
            "Gain actionable tools and insights for immediate application in high-pressure communication.",
        ],
        image: workshop4,
    },
    {
        speaker: "Ume",
        topic: "Intro to Building a Personal Brand",
        description:
            "In today’s evolving job market, having a strong personal brand is no longer optional—it’s essential. Employers, recruiters, and industry leaders are looking beyond resumes and cover letters; they want to see a candidate’s online presence, thought leadership, and unique value proposition. This workshop will guide participants through the foundational steps of creating, growing, and maintaining a compelling personal brand that stands out in the age of AI and social media.",
        keyTakeaways: [
            "Learning how to build and maintain a personal brand",
            "The importance of a personal brand in the rise of AI era and social media",
        ],
        image: workshop5,
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
            paddingTop={{ base: "initial", lg: "10rem" }}
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
                width={{ base: "90%", lg: "70%" }}
                onChange={(index) => setSelectedTab(index)}
            >
                <TabList
                    display="flex"
                    flexDirection={{ base: "column", lg: "initial" }}
                    alignItems={{ base: "center", lg: "initial" }}
                    justifyContent="center"
                    mb={10}
                    position="relative"
                    gap={{ base: 3, lg: 10 }}
                    _after={{
                        content: '""',
                        position: "absolute",
                        width: { base: "90%", lg: "90%" },
                        height: "2px",
                        bg: "#CB0000",
                        bottom: "-20px",
                    }}>
                    {workshops.map((workshop, index) => (
                        <Tab
                            key={index}
                            width={{ base: "100%", lg: "initial" }}
                            px={8}
                            py={4}
                            fontSize={{ base: "1.4rem", lg: "2.2rem" }}
                            fontWeight="bold"
                            borderRadius={{ base: "10px", lg: "12px" }}
                            _selected={{ color: "white", bg: "#CB0000" }}
                            _hover={{ bg: "red.500", color: "white" }}
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
                                    boxShadow={useColorModeValue("0 0 30px 1px gray", "0 0 30px 1px black")}
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
