import React, { useEffect, useState } from 'react';
import { Box, Link, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import gsap from 'gsap';
import './styles.css';
import { members } from './data';

const TeamGridDesign4: React.FC = () => {
    const { t, i18n } = useTranslation();

    const numElements = 13;

    const [isHoveredArray, setIsHoveredArray] = useState(
        Array(numElements).fill(false)
    );

    const handleHover = (index: number) => {
        setIsHoveredArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = true;
            return newArray;
        });
    };

    const handleUnhover = (index: number) => {
        setIsHoveredArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = false;
            return newArray;
        });
    };

    const lightColor = useColorModeValue("transparent", "#16F8B6");
    const darkColor = useColorModeValue("black", "#16F8B6");
    const strokeColor = useColorModeValue("black", "black");

    const sx = {
        WebkitTextStroke: `1px ${strokeColor}`,
        textStroke: `1px ${darkColor}`,
        color: lightColor,
    };

    useEffect(() => {
        const items = document.querySelectorAll('.item');

        items.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                const spans = item.querySelectorAll('span');
                gsap.set(spans, { opacity: 0 });
                gsap.to(spans, {
                    opacity: 1,
                    duration: 0.075,
                    stagger: { from: 'random', each: 0.02 },
                    ease: 'power2.out',
                });
            });

            item.addEventListener('mouseleave', () => {
                const spans = item.querySelectorAll('span');
                gsap.to(spans, {
                    opacity: 0,
                    duration: 0.075,
                    stagger: { from: 'random', each: 0.02 },
                    ease: 'power2.in',
                });
            });
        });
    }, []);

    return (
        <Box
            position="relative"
            width="100%"
            minHeight="100vh"
            // bg={useColorModeValue('#F6F3E3', '#0c0c0c')}
            bgGradient={useColorModeValue(
                "linear(to-b, gray.100, white)",
                "linear(to-b, black, gray.900)"
            )}
            paddingY={{ base: '5rem', lg: '5rem' }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
        >
            <Box
                className="block__header"
                textAlign="center"
                margin="0 auto"
                fontFamily={i18n.language === 'fa' ? "'Rubik', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
            >
                <Text
                    className="h2"
                    color={useColorModeValue('gray.800', '#16F8B6')}
                    marginBottom="2rem"
                    marginTop="0"
                    fontSize={{ base: '2.8rem', lg: '4rem' }}
                    fontWeight="bold"
                    lineHeight="1.1"
                >
                    {t("scrollingTeamTitle")}
                </Text>
                <Text
                    className="p"
                    color={useColorModeValue('gray.700', 'white')}
                    marginBottom="4rem"
                    marginTop="0"
                    fontSize={{ base: '1.5rem', lg: '2.1rem' }}
                    lineHeight="1.5"
                >
                    {t("scrollingTeamSubTitle")}
                </Text>
            </Box>

            <SimpleGrid
                alignItems="center"
                columns={{ base: 1, md: 1, lg: 3, xl: 3 }}
                spacing="3rem"
                marginY="4rem"
            >
                {members.map(({ id, firstName, lastName, imageSrc, profileSrc, role }, index) => {
                    const itemId = (index % 2) + 1; // Alternates between 1 and 2
                    return (
                        <Link
                            as={RouterLink}
                            position="relative"
                            to={`/team${profileSrc}`}
                            key={id}
                            onMouseEnter={() => handleHover(id)}
                            onMouseLeave={() => handleUnhover(id)}
                        >
                            <Box
                                position="absolute"
                                bottom="0"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                textAlign="center"
                                width="80%"
                                marginBottom="2rem"
                                opacity={isHoveredArray[id] ? 1 : 0}
                                transition="opacity 0.4s ease-in-out"
                                zIndex={1}
                            >
                                <Text
                                    fontSize="2rem"
                                    fontWeight="bold"
                                    color={useColorModeValue("#16F8B6", "#16F8B6")}
                                // sx={sx}
                                >
                                    {role}
                                </Text>
                            </Box>
                            <Box className="item" id={`item-${itemId}`}>
                                <Box className="item-img">
                                    <img src={imageSrc} alt={`Item ${id}`} />
                                </Box>
                                <Box className="item-copy">
                                    <Box className="item-copy-1">
                                        <Box className="shape">
                                            <Box id="number" className={itemId === 2 ? 'text-right' : ''}>
                                                {id > 9 ? (
                                                    <span>{id}</span>
                                                ) : (
                                                    <>
                                                        <span>0</span>
                                                        <span>{id}</span>
                                                    </>
                                                )}
                                            </Box>
                                            <Box>
                                                <Text
                                                    className={itemId === 2 ? 'lastName' : 'firstName'}
                                                    textAlign={itemId === 2 ? 'left' : 'right'}
                                                    fontSize="3.5rem"
                                                    fontWeight="bold"
                                                    fontFamily="'Big Shoulders Display', serif"
                                                >
                                                    {itemId === 2 ? lastName : firstName}
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="item-copy-2">
                                        <Box className="shape">
                                            <Box>
                                                <Text
                                                    className={itemId === 2 ? 'firstName' : 'lastName'}
                                                    textAlign={itemId === 2 ? 'right' : 'left'}
                                                    fontSize="3.5rem"
                                                    fontWeight="bold"
                                                    fontFamily="'Big Shoulders Display', serif"
                                                >
                                                    {itemId === 2 ? firstName : lastName}
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
};

export default TeamGridDesign4;
