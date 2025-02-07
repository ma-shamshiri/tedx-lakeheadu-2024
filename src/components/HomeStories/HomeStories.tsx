import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { stories } from './data';
import { useTranslation } from 'react-i18next';
import CountdownTimer from '../BlockHero2023/CountdownTimer';

const storyDuration = 4000; // Duration for each story in milliseconds

const HomeStories: React.FC = () => {
    const { t } = useTranslation();

    const buttonHoverTextColor = useColorModeValue("#FF0000", "#FF0000");
    const buttonHoverBorderColor = useColorModeValue("#FF0000", "#FF0000");

    const [activeStory, setActiveStory] = useState(0);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');
    const [isHoveredButton, setIsHoveredButton] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    const eventStartTime = new Date("2025-02-28T09:00:00-08:00");

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            changeStory('next'); // Automatically move to next slide
        }, storyDuration);

        return () => clearTimeout(timeout);
    }, [activeStory]);

    const changeStory = (newDirection: 'next' | 'prev') => {
        setDirection(newDirection);
        setActiveStory((prev) =>
            newDirection === 'next' ? (prev + 1) % stories.length : (prev - 1 + stories.length) % stories.length
        );
    };

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        };

        document.addEventListener('mousemove', moveCursor);
        return () => document.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <Box
            as="div"
            position="relative"
            width="100%"
            _before={{
                content: '""',
                display: "block",
                paddingTop: "56%", // 948 / 1694 * 100 = 56% for aspect ratio
            }}
            overflow="hidden"
        >
            <Flex
                display={{ base: "none", lg: "block" }}
                position="absolute"
                top={{ base: "70%", md: "70%", lg: "17%", xl: "10%" }}
                left={{ base: "50%", md: "50%", lg: "20%", xl: "17%" }}
                transform="translate(-50%, -50%)"
                zIndex={100}
            >
                <CountdownTimer eventStartTime={eventStartTime} />
            </Flex>

            <Flex
                className="block__button"
                justifyContent="center"
                alignItems="center"
                display={{ base: "none", lg: "block" }}
                position="absolute"
                top={{ base: "70%", md: "70%", lg: "17%", xl: "22%" }}
                left={{ base: "50%", md: "50%", lg: "20%", xl: "17%" }}
                transform="translate(-50%, -50%)"
                zIndex={100}
            >
                <HStack>
                    <ScrollLink to="ticket-section" smooth={true} duration={500}>
                        <Button
                            border="2px solid #FF0000"
                            borderRadius="10px"
                            cursor="pointer"
                            fontSize={{ base: "1.8rem", lg: "3.2rem" }}
                            padding={{ base: "0.5rem", lg: "2rem" }}
                            textAlign="center"
                            whiteSpace="nowrap"
                            bg="#FF0000"
                            color="#fff"
                            boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                            display="inline-block"
                            width={{ base: "18rem", lg: "36rem" }}
                            height={{ base: "6rem", lg: "10rem" }}
                            _hover={{
                                border: "0.2rem solid",
                                borderColor: buttonHoverBorderColor,
                                bg: "transparent",
                                color: buttonHoverTextColor,
                                boxShadow:
                                    "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
                            }}
                            transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
                            onMouseEnter={handleHoverButton}
                            onMouseLeave={handleUnHoverButton}
                        >
                            {t("getTicket")}
                        </Button>
                    </ScrollLink>
                </HStack>
            </Flex>

            {/* Custom Cursor */}
            <Box
                ref={cursorRef}
                position="absolute"
                width="30px"
                height="30px"
                background="rgba(255, 255, 255, 0.1)"
                borderRadius="50%"
                pointerEvents="none"
                zIndex={10}
                backdropFilter="blur(5px)"
                transform="translate(-50%, -50%)"
            ></Box>

            {/* Progress Bars */}
            <Box
                position="absolute"
                top="25px"
                left="50%"
                transform="translateX(-50%)"
                width={{ base: "60%", lg: "30%" }}
                zIndex={3}
                display="flex"
                justifyContent="space-between"
                gap="0.25em"
            >
                {stories.map((_, index) => (
                    <Box
                        key={`progress-${index}`}
                        position="relative"
                        width="100%"
                        height={{ base: "3px", lg: "5px" }}
                        borderRadius="20px"
                        bg="rgba(255, 255, 255, 0.25)"
                    >
                        <motion.div
                            key={`progress-${activeStory}-${index}`}
                            className="index-highlight"
                            initial={{ width: 0 }}
                            animate={{
                                width: index === activeStory ? '100%' : '0%',
                            }}
                            transition={{
                                duration: storyDuration / 1000,
                                ease: 'linear',
                            }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                background: '#fff',
                            }}
                        />
                    </Box>
                ))}
            </Box>

            {/* Story Image */}
            <Box
                className="story-img"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeStory}
                        src={stories[activeStory].storyImg}
                        alt=""
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{
                            duration: 0.7,
                            ease: 'easeInOut',
                        }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </AnimatePresence>
            </Box>

            {/* Navigation Controls */}
            <Box
                position="absolute"
                top={0}
                left={0}
                width="50%"
                height="100%"
                zIndex={2}
                onClick={() => changeStory('prev')}
            />
            <Box
                position="absolute"
                top={0}
                right={0}
                width="50%"
                height="100%"
                zIndex={2}
                onClick={() => changeStory('next')}
            />
        </Box>
    );
};

export default HomeStories;
