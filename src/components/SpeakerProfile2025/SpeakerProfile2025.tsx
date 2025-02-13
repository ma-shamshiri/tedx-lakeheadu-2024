import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Box, Flex, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import ReactPlayer from "react-player";
import { useTranslation } from 'react-i18next';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { videoThumbnail } from '../../assets';

interface SpeakerProfile2025Props {
    name?: string;
    title?: string;
    talkTopic?: string;
    biography?: string;
    imageSrc?: string;
    videoSrc?: string;
}
const SpeakerProfile2025: React.FC<SpeakerProfile2025Props> = ({
    name,
    title,
    talkTopic,
    biography,
    imageSrc,
    videoSrc,
}) => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const menuImgContainer = document.querySelector('.menu-img');
        const images = document.querySelectorAll('.menu-img img');
        let mouse = { x: 0, y: 0 };
        let cx = window.innerWidth / 2;
        let cy = window.innerHeight / 2;

        const scales = [0.81, 0.84, 0.87, 0.9];

        function update() {
            const dx = mouse.x - cx;
            const dy = mouse.y - cy;

            const tiltx = (dy / cy) * 20;
            const tilty = (dx / cx) * 20;

            gsap.to(menuImgContainer, {
                duration: 2,
                transform: `rotate3d(${tiltx}, ${tilty}, 0, 15deg)`,
                ease: 'power3.out',
            });

            images.forEach((img, index) => {
                const parallaxX = -(dx * (index + 1)) / 100;
                const parallaxY = -(dy * (index + 1)) / 100;

                const transformStyles = `translate(calc(-50% + ${parallaxX}px), calc(-50% + ${parallaxY}px)) scale(${scales[index]})`;
                gsap.to(img, {
                    duration: 2,
                    transform: transformStyles,
                    ease: 'power3.out',
                });
            });
        }

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            update();
        };

        const handleResize = () => {
            cx = window.innerWidth / 2;
            cy = window.innerHeight / 2;
        };

        document.body.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        // Initial menu animation
        const defaultEase = 'power4.inOut';

        gsap.set(['#img-2', '#img-3', '#img-4'], { top: '150%' });

        gsap.to('.menu', {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            pointerEvents: 'all',
            duration: 1.25,
            ease: defaultEase,
        });

        gsap.to(['#img-2', '#img-3', '#img-4'], {
            top: '50%',
            duration: 1.25,
            ease: defaultEase,
            stagger: 0.1,
            delay: 0.25,
        });

        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box
            position="relative"
            width="100%"
            height={{ base: "auto", lg: "fit-content" }}
            minHeight="93vh"
            bg={useColorModeValue("#fff", "#0f0f0f")}
            overflow="hidden"
        >
            <Box
                className="menu"
                display="flex"
                flexWrap="wrap" // Ensure the flex items wrap on smaller screens
                flexDirection={{ base: "column", md: "column", lg: "row" }}
                width="100%"
                height="100%"
                minHeight="93vh"
                padding="1.5em"
                gap="1.5em"
                clipPath="polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
                pointerEvents="none"
                zIndex={2}
            >
                {/* Left Section */}
                <Box
                    className="menu-img"
                    position="relative"
                    flex={{ base: "none", lg: 1 }} // Ensure the image is visible on smaller screens
                    width={{ base: "100%", lg: "50%" }} // Take full width on small screens
                    minHeight={{ base: "300px", md: "700px", lg: "auto" }} // Ensure minimum height
                >
                    <img
                        id="img-1"
                        src={imageSrc}
                        alt=""
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: "0.9"
                        }}
                    />
                    <img
                        id="img-2"
                        src={imageSrc}
                        alt=""
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: "0.7"
                        }}
                    />
                    <img
                        id="img-3"
                        src={imageSrc}
                        alt=""
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: "0.5"
                        }}
                    />
                    <img
                        id="img-4"
                        src={imageSrc}
                        alt=""
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: "0.3"
                        }}
                    />
                </Box>

                {/* Right Section */}
                <Box
                    position="relative"
                    display="flex"
                    flex={1}
                    flexDirection="column"
                    padding="0.5em"
                    paddingY={{ lg: "3em" }}
                    justifyContent="space-between"
                    zIndex={-1}
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
                            flex={{ base: "1", lg: "1" }}
                            justifyContent="center"
                            alignItems="center"
                            width="100%"
                            height="100%"
                            paddingBottom={{ base: "2rem", lg: "2rem" }}
                            fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                            dir={i18n.language === "fa" ? "rtl" : "ltr"}
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
                                    color={useColorModeValue("black", "#16F8B6")}
                                    paddingBottom="2rem"
                                >
                                    {title}
                                </Text>

                                <HStack
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    textAlign={"center"}
                                    paddingX="5rem"
                                >
                                    <FaMicrophoneAlt size={"30px"} color='red' />
                                    {/* <Text
                                        fontSize={{ base: "1.4rem", lg: "2.5rem" }}
                                        fontWeight="bold"
                                        textAlign="center"
                                        color={useColorModeValue("black", "white")}
                                    >
                                        {t("talkTopic")}:
                                    </Text> */}
                                    <Text
                                        className="speaker_title"
                                        fontSize={{ base: "1.2rem", lg: "2.2rem" }}
                                        fontWeight="bold"
                                        textAlign="center"
                                        color={useColorModeValue("black", "white")}
                                    >
                                        {talkTopic}
                                    </Text>

                                </HStack>
                            </VStack>
                        </Box>

                        {/* Bottom Section */}
                        <Box
                            className="bottom_section"
                            position="relative"
                            display="flex"
                            flex={{ base: "2", lg: "2" }}
                            maxWidth={{ base: "initial", md: "80%", lg: "75%" }}
                        >
                            <Text
                                className="speaker_title"
                                fontSize={{ base: "1.5rem", lg: "1.7rem" }}
                                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Literata', serif"}
                                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                // lineHeight={{ base: "initial", lg: "20px" }}
                                color={useColorModeValue("black", "gray.300")}
                                letterSpacing={{ base: "initial", lg: "0.5px" }}
                            // textAlign="center"
                            >
                                <Box as="span" display="inline-block">
                                    {/* <BsChatRightQuoteFill size={iconSize} color="#fc5a03" /> */}
                                </Box>
                                {" "}
                                {biography}
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            {videoSrc !== "" ? (
                <Flex
                    className="video_section_container"
                    position="relative"
                    width="100%"
                    height="fit-content"
                    bg={useColorModeValue("#000", "#000")}
                    justifyContent="center"
                    alignItems="center"
                    paddingY={{ base: "4rem", lg: "6rem" }}
                    flexDirection="column"
                    overflow="hidden"
                >
                    <Text
                        className="speaker_title"
                        fontSize={{ base: "2.2rem", lg: "3rem" }}
                        fontWeight="bold"
                        textAlign="center"
                        color={useColorModeValue("white", "white")}
                        paddingBottom="2.5rem"
                    >
                        The Voice Behind the Ideas
                    </Text>
                    <Box
                        className="video_embed_container"
                        position="relative"
                        width={{ base: "90vw", lg: "55vw" }}
                        height={{ base: "50.5vw", lg: "31vw" }}
                        // border="1px solid red"
                        borderRadius="10px"
                        overflow="hidden"
                    >
                        <iframe
                            src={videoSrc}
                            width="100%"
                            height="100%"
                            allow="autoplay"
                            allowFullScreen
                        />
                    </Box>
                </Flex>
            ) : (
                <></>
            )}
        </Box>
    );
};

export default SpeakerProfile2025;
