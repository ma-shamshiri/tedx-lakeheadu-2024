import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    Box,
    Text,
    VStack,
    Collapse,
    useColorModeValue,
    Flex,
    Icon,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const workshops = [
    {
        speaker: "Origin",
        topic:
            "Career Exploration VR Workshop: A Journey Through Professions & Seven Grandfather Teachings",
        description:
            "Imagine stepping into a virtual world where you can explore various professions firsthand before choosing your career path. This Career Exploration VR Workshop is designed to provide an immersive experience where participants can step into the shoes of different professionals—doctors, engineers, artists, teachers, pilots, and many more—while integrating the wisdom of the Seven Grandfather Teachings (Wisdom, Love, Respect, Bravery, Honesty, Humility, and Truth).",
    },
    {
        speaker: "Dr. Kris Alexander",
        topic: "AI in Education: Live Interactive Demonstrations and Open Discussion",
        description:
            "This interactive workshop builds on the TEDx Talk \"How AI and Level Up Education\" by providing hands-on demonstrations and real-world applications of AI tools in educational settings. Participants will witness real-time demonstrations of AI tools like ChatGPT, Claude, PI, and Coconote while engaging in open dialogue about implementing these technologies across different educational levels. The session will showcase OBS, demonstrating how AI can make education more accessible and efficient when teaching online.",
    },
    {
        speaker: "Kari Chiappetta",
        topic: "Embracing Change: Strategies for Effective Change Management",
        description:
            "This session builds upon the insights shared in the keynote presentation 'Recognizing Our Strengths and Celebrating Our Gifts.' In this interactive workshop, participants will acquire knowledge and understanding of how different temperaments manage change. Through practical activities, participants will identify the various ways individuals respond to change, fostering an appreciation of these differences as strengths rather than weaknesses."
        ,
        keyTakeaways: [
            "Gain an understanding of how each temperament manages change.",
            "Learn strategies to assist others in managing change more effectively.",
            "Recognize that individuals have varying needs and stressors that influence their reactions and responses to change.",
            "Learn to appreciate our differences, viewing them as strengths rather than weaknesses.",
        ],
    },
];

const BlockWorkshops: React.FC = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Box
            position="relative"
            width="100%"
            minHeight="100vh"
            // bg={useColorModeValue("#0D1224", "#0D1224")}
            bg={useColorModeValue(
                "linear-gradient(180deg, #F1F1F1, #FFFFFF)",
                "linear-gradient(180deg, #000000, #171923)"
            )}
            overflow="hidden"
            display="flex"
            flexDirection="column"
            alignItems="center"
            py={10}
        >
            <Box textAlign="center" padding="6rem 2rem">
                <Text
                    color={useColorModeValue("gray.900", "#16F8B6")}
                    fontSize={{ base: "2.5rem", lg: "4rem" }}
                    fontWeight="bold"
                    lineHeight="1.2"
                    paddingBottom="2rem"
                >
                    {t("Beyond the Talks")}
                </Text>
                <Text
                    color={useColorModeValue("gray.700", "gray.300")}
                    fontSize={{ base: "1.2rem", lg: "2.4rem" }}
                    mt={2}
                >
                    {t("TEDxLakeheadU Interactive Workshops")}
                </Text>
            </Box>

            <Flex width={{ base: "90%", lg: "55%" }} flexDirection="column" alignItems="stretch">
                <VStack spacing={6} align="stretch">
                    {workshops.map((workshop, index) => (
                        <Box
                            key={index}
                            p={5}
                            borderWidth={1}
                            borderRadius="lg"
                            bg={useColorModeValue("#E2E8F0", "gray.800")}
                            boxShadow={useColorModeValue("0 0 15px 1px gray", "0 0 15px 1px black")}
                        >
                            <Flex justifyContent="space-between" alignItems="center" cursor="pointer" onClick={() => toggleOpen(index)}>
                                <Box flex="1">
                                    <Text fontWeight="bold" fontSize={{ base: "1.5rem", lg: "2.5rem" }} color={useColorModeValue("gray.900", "gray.100")}>
                                        {workshop.speaker}
                                    </Text>
                                    <Text fontWeight="bold" fontSize={{ base: "1.3rem", lg: "2.2rem" }} color={useColorModeValue("gray.700", "gray.300")}>
                                        {workshop.topic}
                                    </Text>
                                </Box>
                                <Icon as={openIndex === index ? FaChevronUp : FaChevronDown} color={useColorModeValue("gray.900", "gray.100")} boxSize={6} />
                            </Flex>
                            <Collapse in={openIndex === index} animateOpacity>
                                <Text mt={4} fontSize={{ base: "1.1rem", lg: "1.8rem" }} color={useColorModeValue("gray.700", "gray.300")}>
                                    {workshop.description}
                                </Text>
                                {workshop.keyTakeaways && (
                                    <>
                                        <Text fontWeight="bold" mt={4}>Key Takeaways:</Text>
                                        <UnorderedList mt={2} pl={5} color={useColorModeValue("gray.700", "gray.300")}>
                                            {workshop.keyTakeaways.map((point, i) => (
                                                <ListItem key={i}>{point}</ListItem>
                                            ))}
                                        </UnorderedList>
                                    </>
                                )}
                            </Collapse>
                        </Box>
                    ))}
                </VStack>
            </Flex>
        </Box>
    );
};

export default BlockWorkshops;
