// ItemsComponent.tsx
import React, { useEffect } from 'react';
import { Box, Link, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from "react-router-dom";
import gsap from 'gsap';
import './styles.css';
import {
    javan,
    aminBG,
    aarya,
    aastha,
    akash,
    amir,
    faraz,
    haard,
    harshit,
    khushi,
    parinaz,
    sanjana,
    shreya,
    amin,
} from "../../assets";

const TeamGridDesign4: React.FC = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const items = document.querySelectorAll(".item");

        items.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                const spans = item.querySelectorAll("span");
                gsap.set(spans, { opacity: 0 });
                gsap.to(spans, {
                    opacity: 1,
                    duration: 0.075,
                    stagger: {
                        from: "random",
                        each: 0.02,
                    },
                    ease: "power2.out",
                });
            });

            item.addEventListener("mouseleave", () => {
                const spans = item.querySelectorAll("span");
                gsap.to(spans, {
                    opacity: 0,
                    duration: 0.075,
                    stagger: {
                        from: "random",
                        each: 0.02,
                    },
                    ease: "power2.in",
                });
            });
        });
    }, []);

    return (
        <Box
            position="relative"
            width="100%"
            minHeight="100vh"
            bg={useColorModeValue("#F6F3E3", "#0c0c0c")}
            paddingY={{ base: "5rem", lg: "5rem" }}
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
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
            >
                <Text
                    className="h2"
                    color={useColorModeValue("gray.800", "#16F8B6")}
                    marginBottom="2rem"
                    marginTop="0"
                    fontSize={{ base: "2.8rem", lg: "4rem" }}
                    fontWeight="bold"
                    lineHeight="1.1"
                >
                    {t("scrollingTeamTitle")}
                </Text>

                <Text
                    className="p"
                    color={useColorModeValue("gray.700", "white")}
                    marginBottom="4rem"
                    marginTop="0"
                    fontSize={{ base: "1.5rem", lg: "2.1rem" }}
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
                {/* Item 1 */}
                <Link
                    as={RouterLink}
                    to={`/team/faraz-khorsandi/`}
                    href={`/team/faraz-khorsandi/`}
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={faraz} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            01
                                        </Text> */}
                                        <span>0</span><span>1</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Faraz
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Khorsandi
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 2 */}
                <Link
                    as={RouterLink}
                    to={`/team/sanjana-ravi/`}
                    href={`/team/sanjana-ravi/`}
                >
                    <Box className="item" id="item-2">
                        <Box className="item-img">
                            <img src={sanjana} alt="Item 2" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number" className="text-right">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            02
                                        </Text> */}
                                        <span>0</span><span>2</span>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Ravi
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Sanjana
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 3 */}
                <Link
                    as={RouterLink}
                    to={`/team/akash-balaji/`}
                    href={`/team/akash-balaji/`}
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={akash} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            03
                                        </Text> */}
                                        <span>0</span><span>3</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Akash
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Balaji
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 4 */}
                <Link
                    as={RouterLink}
                    to={`/team/harshit-maann/`}
                    href={`/team/harshit-maann/`}
                >
                    <Box className="item" id="item-2">
                        <Box className="item-img">
                            <img src={harshit} alt="Item 2" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number" className="text-right">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            04
                                        </Text> */}
                                        <span>0</span><span>4</span>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Maann
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Harshit
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 5 */}
                <Link
                    as={RouterLink}
                    to={`/team/haard-pathak/`}
                    href={`/team/haard-pathak/`}
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={haard} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            05
                                        </Text> */}
                                        <span>0</span><span>5</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Haard
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Pathak
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 6 */}
                <Link
                    as={RouterLink}
                    to={`/team/khushi-shah/`}
                    href={`/team/khushi-shah/`}
                >
                    <Box className="item" id="item-2">
                        <Box className="item-img">
                            <img src={khushi} alt="Item 2" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number" className="text-right">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            06
                                        </Text> */}
                                        <span>0</span><span>6</span>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Shah
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Khushi
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 7 */}
                <Link
                    as={RouterLink}
                    to={`/team/parinaz-beigi/`}
                    href={`/team/parinaz-beigi/`}
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={parinaz} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            07
                                        </Text> */}
                                        <span>0</span><span>7</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Parinaz
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Beigi
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 8 */}
                <Link
                    as={RouterLink}
                    to={`/team/javan-chhatwal/`}
                    href={`/team/javan-chhatwal/`}
                >
                    <Box className="item" id="item-2">
                        <Box className="item-img">
                            <img src={javan} alt="Item 2" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number" className="text-right">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            08
                                        </Text> */}
                                        <span>0</span><span>8</span>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Chhatwal
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Javan
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 9 */}
                <Link
                    as={RouterLink}
                    to={`/team/shreya-pradhan/`}
                    href={`/team/shreya-pradhan/`}
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={shreya} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            09
                                        </Text> */}
                                        <span>0</span><span>9</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Shreya
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Pradhan
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 10 */}
                <Link
                    as={RouterLink}
                    to={`/team/mohammad-amin-shamshiri/`}
                    href={`/team/mohammad-amin-shamshiri/`}
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={amin} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            09
                                        </Text> */}
                                        <span>1</span><span>0</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >

                                            Amin
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Shamshiri
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 11 */}
                <Link
                    as={RouterLink}
                    to={`/team/aarya-sadhwani/`}
                    href={`/team/aarya-sadhwani/`}
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={aarya} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            09
                                        </Text> */}
                                        <span>1</span><span>1</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Sadhwani
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Aarya
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 12 */}
                <Link
                    as={RouterLink}
                    to={`/team/amirmohammad-tayeban/`}
                    href={`/team/amirmohammad-tayeban/`}
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={amir} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            09
                                        </Text> */}
                                        <span>1</span><span>2</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="2.2rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Amirmohammad
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Tayeban
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                {/* Item 13 */}
                <Link
                    as={RouterLink}
                    to={`/team/aastha-malhotra/`}
                    href={`/team/aastha-malhotra/`}
                >
                    <Box className="item" id="item-1">
                        <Box className="item-img">
                            <img src={aastha} alt="Item 1" />
                        </Box>
                        <Box className="item-copy">
                            <Box className="item-copy-1">
                                <Box className="shape">
                                    <Box id="number">
                                        {/* <Text
                                            fontSize="5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            09
                                        </Text> */}
                                        <span>1</span><span>3</span>
                                    </Box>
                                    <Box className="text-right">
                                        <Text
                                            textAlign="right"
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Malhotra
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item-copy-2">
                                <Box className="shape">
                                    <Box>
                                        <Text
                                            fontSize="3.5rem"
                                            fontWeight="bold"
                                            fontFamily="'Big Shoulders Display', serif"
                                        >
                                            Aastha
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>
            </SimpleGrid>
        </Box>
    );
};

export default TeamGridDesign4;
