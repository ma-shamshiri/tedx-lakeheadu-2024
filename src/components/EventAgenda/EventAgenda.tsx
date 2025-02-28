import {
    Box,
    Text,
    VStack,
    Divider,
    useColorModeValue,
    Collapse,
    Icon,
    Flex,
    UnorderedList,
    ListItem
} from "@chakra-ui/react";

import {
    FaChevronDown,
    FaChevronUp,
    FaCoffee,
    FaMicrophone,
    FaHandshake,
    FaMusic,
    FaBrain,
    FaUsers,
    FaLightbulb,
    FaChalkboardTeacher
} from "react-icons/fa";
import { useState } from "react";

interface AgendaItem {
    time: string;
    title: string;
    description?: string[];
    icon?: any;
}

const agenda: AgendaItem[] = [
    {
        time: "7:30 AM – 8:45 AM", title: "Registration & Breakfast", description: [
            "Start the day with a fresh cup of coffee and a variety of breakfast options.",
            "Network with other attendees and speakers before the event begins.",
            "Check-in and receive your event materials and goodies."
        ], icon: FaCoffee
    },
    {
        time: "9:00 AM – 9:30 AM", title: "Opening Ceremony & Remarks", description: [
            "A warm welcome from the organizers and a preview of the day's events.",
            "Introduction of key speakers and the TEDx mission.",
            "Inspiring words to set the tone for an impactful event."
        ], icon: FaMicrophone
    },
    {
        time: "9:30 AM – 9:55 AM", title: "Alvin Law - Step Into Your Greatness", description: [
            "Alvin Law shares his inspiring journey overcoming adversity and defying expectations.",
            "A motivational talk on how to embrace your potential and achieve greatness.",
            "Discover key insights on resilience, determination, and personal success."
        ], icon: FaLightbulb
    },
    {
        time: "9:55 AM – 10:20 AM", title: "Ben Wise & Darren Chiu - The Elephant in the Room", description: [
            "A powerful discussion on emotional intelligence and its role in fostering meaningful change.",
            "How understanding emotions can drive leadership, influence, and decision-making.",
            "Practical strategies to harness emotions for personal and professional success."
        ], icon: FaUsers
    },
    {
        time: "10:20 AM – 10:45 AM", title: "Break & Networking with Sponsors", description: [
            "Take a short break to refresh and connect with event sponsors.",
            "Explore unique opportunities and industry insights from sponsors.",
            "Engage in discussions and form valuable connections with peers."
        ], icon: FaHandshake
    },
    {
        time: "10:45 AM – 11:30 AM", title: "Dr. Kris Alexander - How AI Can Level Up the Way You Teach", description: [
            "Discover how AI is transforming education and enhancing teaching methodologies.",
            "Live demonstrations of AI-driven interactive learning techniques.",
            "Insights on the future of AI in education and student engagement."
        ], icon: FaBrain
    },
    {
        time: "11:30 AM – 11:55 AM", title: "Ume Habiba - Being Yourself in the 2025 Job Market", description: [
            "Navigating the evolving job market with authenticity and confidence.",
            "Essential skills and strategies for standing out in competitive industries.",
            "The importance of personal branding and continuous learning."
        ], icon: FaChalkboardTeacher
    },
    {
        time: "11:55 AM – 12:20 PM", title: "Workshops", description: [
            "The Origin – Interactive VR Workshop: Experience immersive learning in virtual reality.",
            "Ben Wise & Darren Chiu – Mastering Persuasion and Communication: Enhance your ability to influence and connect."
        ], icon: FaLightbulb
    },
    {
        time: "12:20 PM – 1:50 PM", title: "Networking & Social Lunch", description: [
            "Enjoy a delightful meal while engaging in stimulating discussions.",
            "Live string quartet performance for a refined and inspiring atmosphere.",
            "A great opportunity to establish meaningful connections with fellow attendees."
        ], icon: FaUsers
    },
    {
        time: "1:50 PM – 2:20 PM", title: "Performance by Sara Kae", description: [
            "A captivating musical performance to rejuvenate and inspire attendees.",
            "Sara Kae’s unique sound blends emotion and storytelling through music.",
            "Relax, reflect, and enjoy the artistic atmosphere."
        ], icon: FaMusic
    },
    {
        time: "2:20 PM – 2:45 PM", title: "Albert Brulé - United for Good: Better is Possible", description: [
            "An inspiring talk on how collective action can create lasting positive change.",
            "Strategies for building communities that drive innovation and social impact.",
            "Stories of individuals and organizations making a difference in the world."
        ], icon: FaUsers
    },
    {
        time: "3:35 PM – 4:20 PM", title: "Break & Networking with Sponsors + Workshops", description: [
            "Engage in interactive discussions and gain insights from industry leaders.",
            "Live AI demonstrations by Dr. Kris Alexander.",
            "Kari Chiapetta - Embracing Change: Strategies for Effective Change Management."
        ], icon: FaHandshake
    },
    {
        time: "4:20 PM – 4:45 PM", title: "Richard Dobson - Make Simplicity Your Superpower", description: [
            "How simplifying your approach can lead to greater efficiency and success.",
            "Practical techniques for eliminating complexity in professional and personal life.",
            "Examples of companies and individuals who thrive through simplicity."
        ], icon: FaLightbulb
    },
    {
        time: "4:45 PM – 5:10 PM", title: "Richard Togman - The Competitive Advantage of Designing for Community", description: [
            "Why building a strong community is a key advantage in business and leadership.",
            "Practical ways to foster collaboration and engagement within organizations.",
            "Lessons from successful companies that prioritize community-driven growth."
        ], icon: FaUsers
    },
    {
        time: "5:10 PM – 5:30 PM", title: "Closing Ceremony & Remarks", description: [
            "Reflect on the key insights from the day’s inspiring talks and discussions.",
            "Final thoughts from the organizers and gratitude for all participants.",
            "A powerful conclusion to an unforgettable TEDx experience."
        ], icon: FaMicrophone
    }
];

const EventAgenda = () => {
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const textColor = useColorModeValue("gray.800", "white");
    const timeColor = useColorModeValue("red.600", "red.300");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleCollapse = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Box
            position="relative"
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            minHeight="100vh"
            bgGradient={useColorModeValue(
                "linear(to-b, gray.100, white)",
                "linear(to-b, black, gray.900)"
            )}
            py={10}
            paddingTop={{ base: "initial", lg: "10rem" }}
            overflow="hidden"
        >
            <Box textAlign="center" padding="4rem 2rem" paddingBottom="7rem">
                <Text
                    color={useColorModeValue("gray.900", "#16F8B6")}
                    fontSize={{ base: "2.5rem", lg: "4rem" }}
                    fontWeight="bold"
                    lineHeight="1.2"
                    pb={4}
                >
                    A Roadmap to Inspiration
                </Text>
                <Text
                    color={useColorModeValue("gray.700", "gray.300")}
                    fontSize={{ base: "1.4rem", lg: "2.4rem" }}
                    fontWeight="bold"
                >
                    Your Guide to an Unmissable TEDx Event
                </Text>
            </Box>
            <Box
                maxW={{ base: "full", md: "800px" }}
                mx="auto"
                py={10}
                px={5}
                bg={bgColor}
                borderRadius="lg"
                boxShadow="2xl"
            >
                {/* <Text fontSize="2rem" fontWeight="bold" textAlign="center" color={textColor} mb={6}>
                    Event Agenda
                </Text> */}
                <VStack spacing={6} align="stretch">
                    {agenda.map((item, index) => (
                        <Box key={index} w="full" borderRadius="lg" p={4} bg={useColorModeValue("white", "gray.800")} boxShadow="md">
                            <Flex justify="space-between" align="center" cursor="pointer" onClick={() => toggleCollapse(index)}>
                                <Flex align="center">
                                    <Icon as={item.icon} w={8} h={8} color={timeColor} mr={4} />
                                    <Box>
                                        <Text fontSize={{ base: "1.5rem", lg: "1.7rem" }} fontWeight="bold" color={textColor}>{item.title}</Text>
                                        <Text fontSize={{ base: "1.5rem", lg: "1.7rem" }} fontWeight="medium" color={timeColor}>{item.time}</Text>
                                    </Box>
                                </Flex>
                                <Icon as={openIndex === index ? FaChevronUp : FaChevronDown} w={6} h={6} color={textColor} />
                            </Flex>
                            <Collapse in={openIndex === index} animateOpacity>
                                {item.description && (
                                    <UnorderedList fontSize="1.3rem" color={textColor} pl={10} py={3}>
                                        {item.description.map((desc, i) => (
                                            <ListItem key={i} fontSize={{ base: "1.4rem", lg: "1.5rem" }}>{desc}</ListItem>
                                        ))}
                                    </UnorderedList>
                                )}
                            </Collapse>
                            {index !== agenda.length - 1 && <Divider my={3} />}
                        </Box>
                    ))}
                </VStack>
            </Box>
        </Box>
    );
};

export default EventAgenda;
