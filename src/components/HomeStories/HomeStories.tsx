import React, { useEffect, useState, useRef } from 'react';
import { stories } from './data';
import { Box, Flex } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import CountdownTimer from '../BlockHero2023/CountdownTimer';

const storyDuration = 4000; // Duration for each story in milliseconds

const HomeStories: React.FC = () => {
    const [activeStory, setActiveStory] = useState(0);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');
    const cursorRef = useRef<HTMLDivElement>(null);

    const eventStartTime = new Date("2025-02-28T09:00:00-08:00");

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
                top={{ base: "35%", md: "40%", lg: "18%" }}
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={100}
            >
                <CountdownTimer eventStartTime={eventStartTime} />
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
