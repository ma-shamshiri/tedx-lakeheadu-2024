import { Box, Image, Text, VStack, HStack, Link, Icon, Flex, useColorModeValue, Divider, background } from "@chakra-ui/react";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaSpotify } from "react-icons/fa";
import { motion } from "framer-motion";
import { amani_sloley, open, sara_kae } from "../../assets";

const MotionBox = motion(Box);

const BlockPerformances = () => {
    const separatorColor = useColorModeValue(
        // "linear-gradient(to left, transparent, #7C42F3, transparent",
        "linear-gradient(to left, transparent, black, transparent",
        "linear-gradient(to left, transparent, #CB0000, transparent"
    );

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            minH="100vh"
            bgGradient={useColorModeValue(
                "linear(to-b, gray.100, white)",
                "linear(to-b, black, gray.900)"
            )}
            color={useColorModeValue("gray.800", "white")}
            padding={{ base: "2.5rem", lg: "4rem" }}
            paddingTop={{ base: "3rem", lg: "12rem" }}
            overflow="hidden"
        >
            <Box
                textAlign="center"
                paddingBottom="5rem"
            >
                <Text
                    color={useColorModeValue("gray.900", "#16F8B6")}
                    fontSize={{ base: "2.5rem", lg: "4rem" }}
                    fontWeight="bold"
                    lineHeight="1.5"
                    pb={4}
                >
                    Performing at TEDxLakeheadU
                </Text>
                <Text
                    color={useColorModeValue("gray.700", "gray.300")}
                    fontSize={{ base: "1.5rem", lg: "2.1rem" }}
                    lineHeight="1.7"
                >
                    Experience an inspiring TEDxLakeheadU performance where storytelling and music unite.
                </Text>
            </Box>

            <Flex
                position="relative"
                direction={{ base: "column", lg: "row" }} // Column on mobile, row on larger screens
                maxWidth={{ base: "100%", lg: "90%", xl: "70%" }}
                paddingX={{ base: "1.5rem", md: "initial" }}
                padding={{ base: "initial", md: "4rem" }}
                gap={{ base: "3rem", lg: "5rem" }}
                marginBottom="5rem"
                align="center"
                justify="space-between" // Ensures equal spacing between the two parts
            >
                {/* <VStack gap={"4rem"}>  */}
                {/* Left part - Image */}
                <Flex flex="1" justify="center">
                    <Image
                        src={sara_kae}
                        alt="Sara Kae"
                        borderRadius="lg"
                        width="100%" // Ensures full width of its container
                        maxWidth="500px" // Prevents overly large images
                        boxShadow={useColorModeValue("0 0 10px 1px gray", "0 0 30px 1px black")}
                    />
                </Flex>
                {/* Right part - Text */}
                <Flex flex="1" flexDirection="column" align="center">
                    <Text
                        fontSize={{ base: "2.5rem", md: "3.5rem", lg: "4rem" }}
                        fontWeight="bold"
                        lineHeight="1.5"
                        marginBottom={{ base: "1rem", md: "2rem" }}
                    >
                        Sara Kae
                    </Text>
                    <Text
                        fontSize={{ base: "1.4rem", md: "1.9rem", lg: "1.7rem", xl: "1.9rem" }}
                        width="100%"
                    >
                        Sara Kae, an Ojibwe and Cree artist from Lake Helen First Nation, is a multifaceted writer,
                        performer, and storyteller. She began touring northern Ontario at 12, speaking and singing
                        alongside her father. An honours graduate and Founders Award recipient at Metalworks Institute,
                        she has collaborated with the Thunder Bay Symphony Orchestra, co-created the musical Trading Places,
                        and partnered with Susan Aglukark’s Arctic Rose Foundation. Sara has also opened for Juno winner
                        Aysanabee and hosted national Truth and Reconciliation Day programming on CBC. Her music career
                        includes debut singles “Rise” and “Constellations,” as well as her latest release, “25.” Funded by
                        the Ontario Arts Council, her upcoming EP Maadaadizi reflects her growth with an organic and upbeat
                        sound. The newly released “One Good Reason” is among many new songs set for 2025.
                    </Text>
                </Flex>
                {/* </VStack> */}
            </Flex>

            {/* Media Section */}
            <Flex textAlign="center" flexDirection="column">
                <Text
                    fontSize={{ base: "2.1rem", lg: "3.5rem" }}
                    fontWeight="bold"
                >
                    Latest Performances
                </Text>
                <Flex mt={8} justify="center" gap="4rem" wrap="wrap">

                    <Flex
                        width={{ base: "90vw", lg: "560px" }}
                        height={{ base: "50.5vw", lg: "315px" }}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/7kQB9iIsJbc"
                            title="Sara Kae - 25 (Visualizer)"
                            frameBorder="0"
                            allowFullScreen>
                        </iframe>
                    </Flex>
                    <Flex
                        width={{ base: "90vw", lg: "560px" }}
                        height={{ base: "50.5vw", lg: "315px" }}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/IL0n8gS8nCw"
                            title="Sara Kae - 25 (Live at Blueprints)"
                            frameBorder="0"
                            allowFullScreen>
                        </iframe>
                    </Flex>
                </Flex>
            </Flex>

            {/* Social Media Section */}
            <Box
                mt={16}
                textAlign="center"
                paddingX={{ base: "1.5rem", md: "4rem" }}

            >
                <Text fontSize="2rem" fontWeight="bold">Follow Sara Kae</Text>
                <HStack spacing={6} justify="center" mt={6}>
                    <Link href="https://www.instagram.com/sarakaeofficial/" isExternal><Icon as={FaInstagram} boxSize={8} _hover={{ color: "#CB0000" }} /></Link>
                    <Link href="https://www.youtube.com/@sarakaeofficial" isExternal><Icon as={FaYoutube} boxSize={8} _hover={{ color: "#CB0000" }} /></Link>
                    <Link href="https://www.tiktok.com/@sarakaeofficial" isExternal><Icon as={FaTiktok} boxSize={8} _hover={{ color: "#CB0000" }} /></Link>
                    <Link href="https://www.facebook.com/Sarakaeofficial/" isExternal><Icon as={FaFacebook} boxSize={8} _hover={{ color: "#CB0000" }} /></Link>
                    <Link href="https://open.spotify.com/artist/7BLXUEOlXHgCMJllFcOtMK" isExternal><Icon as={FaSpotify} boxSize={8} _hover={{ color: "#CB0000" }} /></Link>
                </HStack>
            </Box>

            <Box
                className="separator"
                marginY="4rem"
                width={{ base: "20rem", lg: "70rem" }}
                height="2px"
                style={{
                    background: separatorColor
                }}
            />

            <Flex
                position="relative"
                direction={{ base: "column", lg: "row" }}
                maxWidth={{ base: "100%", lg: "90%", xl: "70%" }}
                paddingX={{ base: "1.5rem", md: "initial" }}
                padding={{ base: "initial", md: "4rem" }}
                gap={{ base: "3rem", lg: "5rem" }}
                marginBottom="5rem"
                align="center"
                justify="space-between"
            >
                {/* Left part - Image */}
                <Flex flex="1" justify="center">
                    <Image
                        src={amani_sloley}
                        alt="Amani Sloley"
                        borderRadius="lg"
                        width="100%" // Ensures full width of its container
                        maxWidth="500px" // Prevents overly large images
                        boxShadow={useColorModeValue("0 0 10px 1px gray", "0 0 30px 1px black")}
                    />
                </Flex>
                {/* Right part - Text */}
                <Flex flex="1" flexDirection="column" align="center">
                    <Text
                        fontSize={{ base: "2.5rem", md: "3.5rem", lg: "4rem" }}
                        fontWeight="bold"
                        lineHeight="1.5"
                        marginBottom={{ base: "1rem", md: "2rem" }}
                    >
                        Amani Sloley
                    </Text>
                    <Text
                        fontSize={{ base: "1.4rem", md: "1.9rem", lg: "1.7rem", xl: "1.9rem" }}
                        width="100%"
                    >
                        Amani Sloley is a Canadian composer and violist whose work blends contemporary classical music with interdisciplinary exploration. Their music has been performed across Canada and internationally, with upcoming premieres by the Thunder Bay Symphony Orchestra and the Cremona Festival Orchestra in Italy. A First-Class Honours graduate in Composition and Viola Performance from Lakehead University, Amani is an Associate Composer with the Canadian Music Centre and a member of the Canadian League of Composers. They have performed at major festivals and were recently featured in The Strad, an international strings-focused magazine based in London.
                    </Text>
                </Flex>
            </Flex>

            <Box
                className="separator"
                marginY="4rem"
                width={{ base: "20rem", lg: "70rem" }}
                height="2px"
                style={{
                    background: separatorColor
                }}
            />

            <Flex
                position="relative"
                direction={{ base: "column", lg: "row" }}
                maxWidth={{ base: "100%", lg: "90%", xl: "70%" }}
                paddingX={{ base: "1.5rem", md: "initial" }}
                padding={{ base: "initial", md: "4rem" }}
                gap={{ base: "3rem", lg: "5rem" }}
                marginBottom="5rem"
                align="center"
                justify="space-between"
            >
                {/* Left part - Image */}
                <Flex flex="1" justify="center">
                    <Image
                        src={open}
                        alt="Thomas Poulin"
                        borderRadius="lg"
                        width="100%" // Ensures full width of its container
                        maxWidth="500px" // Prevents overly large images
                        boxShadow={useColorModeValue("0 0 10px 1px gray", "0 0 30px 1px black")}
                    />
                </Flex>
                {/* Right part - Text */}
                <Flex flex="1" flexDirection="column" align="center">
                    <Text
                        fontSize={{ base: "2.5rem", md: "3.5rem", lg: "4rem" }}
                        fontWeight="bold"
                        lineHeight="1.5"
                        marginBottom={{ base: "1rem", md: "2rem" }}
                    >
                        Thomas Poulin
                    </Text>
                    <Text
                        fontSize={{ base: "1.4rem", md: "1.9rem", lg: "1.7rem", xl: "1.9rem" }}
                        width="100%"
                    >
                        Thomas Poulin is a young, up-and-coming bass player. He is a second-year music student at Lakehead University studying under Martin Blanchet, principal bassist of the TBSO.  He has performed across northwestern Ontario and is excited to call thunderbay home. Experienced in Jazz performance, he sought after Lakehead University to strengthen his classical abilities. He looks forward to working with more groups within Lakehead and the broader community.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default BlockPerformances;
