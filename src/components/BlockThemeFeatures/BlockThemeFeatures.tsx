import React, { useEffect } from "react";
import {
    Box,
    Link as ChakraLink,
    Grid,
    Image,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { GiTalk } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { landing1, landing2, landing3, landing4, landing5 } from "../../assets";

const featuresData = [
    {
        icon: GiTalk,
        iconColor: "var(--color-primary)",
        title: "themeItem1Title",
        description: "themeItem1Description",
        linkText: "exploreMore",
        linkUrl: "https://www.ted.com/about/our-organization",
        image: {
            src: landing1,
            alt: "easy",
        },
        size: "40px",
    },
    {
        icon: GiTalk,
        iconColor: "var(--color-primary)",
        title: "themeItem2Title",
        description: `themeItem2Description`,
        linkText: "exploreMore",
        linkUrl:
            "https://www.ted.com/participate/organize-a-local-tedx-event/before-you-start/what-is-a-tedx-event",
        image: {
            src: landing2,
            alt: "easy",
        },
        size: "40px",
    },

    {
        icon: GiTalk,
        iconColor: "var(--color-primary)",
        title: "themeItem3Title",
        description: `themeItem3Description`,
        linkText: "exploreMore",
        linkUrl: "https://www.ted.com/tedx/events/57678",
        image: {
            src: landing3,
            alt: "easy",
        },
        size: "40px",
    },
    {
        icon: GiTalk,
        iconColor: "var(--color-primary)",
        title: "themeItem4Title",
        description: `themeItem4Description`,
        linkText: "exploreMore",
        linkUrl: "https://www.ted.com/tedx/events/57678",
        image: {
            src: landing4,
            alt: "easy",
        },
        size: "40px",
    },
    {
        icon: GiTalk,
        iconColor: "var(--color-primary)",
        title: "themeItem5Title",
        description: `themeItem5Description`,
        linkText: "exploreMore",
        linkUrl: "https://www.ted.com/tedx/events/57678",
        image: {
            src: landing5,
            alt: "easy",
        },
        size: "40px",
    },
    // Add more feature objects as needed
];

interface FeatureProps {
    // icon: React.ElementType;
    // iconColor: string;
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
    image: {
        src: string;
        alt: string;
        // srcSetWebp: string;
        // srcSetPng: string;
    };
    size: string;
}

const Feature: React.FC<FeatureProps> = ({
    // icon: IconComponent,
    // iconColor,
    title,
    description,
    linkText,
    linkUrl,
    image,
    size,
}) => {
    const { t } = useTranslation();

    return (
        <Box
            className="feature__content"
        >
            <Text
                className="h3 feature__heading"
                // color="var(--color-white)"
                color={useColorModeValue("gray.800", "white")}
                fontSize={{ base: "2rem", lg: "2.2rem" }}
                fontWeight="bold"
                lineHeight="1.3"
                margin="1rem 0"
            >
                {t(title)}
            </Text>
            <Text
                className="p"
                fontSize={{ base: "1.6rem", lg: "1.7rem" }}
                marginTop="0"
                marginBottom="1rem"
                color={useColorModeValue("gray.700", "gray.400")}
            // textAlign={"justify"}
            >
                {t(description)}
            </Text>
            {/* <ChakraLink
                className="link-arrow"
                href={linkUrl}
                fontSize={{ base: "1.4rem", lg: "1.4rem" }}
                fontWeight="bold"
                color={useColorModeValue("#fc2d03", "tomato")}
                textTransform="uppercase"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                    "::after": {
                        marginLeft: "10px",
                    },
                }}
                sx={{
                    "::after": {
                        content: '">"',
                        marginLeft: "5px",
                        transition: "margin 0.15s",
                    },
                }}
            >
                {t(linkText)}
            </ChakraLink> */}
        </Box>
    );
};

interface FeatureImageProps {
    image: {
        src: string;
        alt: string;
        // srcSetWebp: string;
        // srcSetPng: string;
    };
}

const FeatureImage: React.FC<FeatureImageProps> = ({ image }) => (
    <Box as="picture">
        {/* <source type="image/webp" srcSet={image.srcSetWebp} />
    <source type="image/png" srcSet={image.srcSetPng} /> */}
        <Image
            className="feature__image"
            src={image.src}
            alt={image.alt}
            width="100%"
            borderRadius={"5%"}
            boxShadow="0 0 30px 1px black"
        />
    </Box>
);

const BlockThemeFeatures: React.FC = () => {
    useEffect(() => {
        window.onload = () => {
            AOS.init({
                duration: 800,
                easing: "ease-in-out",
            });
        };
    }, []);

    const { t } = useTranslation();

    return (
        <Box
            id="more-info-section"
            className="block block--dark aos-animate"
            // bg={useColorModeValue("#F5DEB3	", "gray.800")}
            bg={useColorModeValue("#F0E2B6	", "gray.800")}
            width="100%"
            overflow={"hidden"}
        // clipPath="polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%)"
        >
            <Box
                className="block container"
                padding="6rem 2rem"
                maxWidth={{ md: "70rem", lg: "100rem", xl: "105rem" }}
                margin="0 auto"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    className="block__header aos-animate"
                    textAlign="center"
                    // marginBottom="-4rem"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    <Text
                        className="h2 block__heading"
                        color={useColorModeValue("gray.800", "#E1DCA9")}
                        marginBottom="1rem"
                        marginTop="0"
                        fontSize={{ base: "2.8rem", lg: "3.5rem" }}
                        fontWeight="bold"
                        lineHeight="1.1"
                    >
                        {t("featureThemeTitle")}
                    </Text>
                    <Text
                        className="p"
                        color={useColorModeValue("gray.700", "silver")}
                        fontSize={{ base: "1.5rem", lg: "2.1rem" }}
                        // fontWeight="bold"
                        marginBottom={{ base: "3rem", lg: "6rem" }}
                    >
                        {t("featureThemeSubTitle")}
                    </Text>
                </Box>
                {featuresData.map((feature, index) => (
                    <Box
                        key={index}
                        className={`grid grid--1x2 feature feature-${index % 2 === 0 ? "even" : "odd"
                            }`}

                    >
                        <Grid
                            display="grid"
                            templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
                            gap="4rem 2rem"
                            margin="4rem 0"
                            sx={{
                                order: index % 2 === 0 ? 1 : 2,
                                // textAlign: index % 2 === 0 ? "right" : "left",
                            }}
                        >
                            {index % 2 === 0 ? (
                                <>
                                    <Box
                                        className="aos-animate"
                                        data-aos="fade-right"
                                        data-aos-duration="500"
                                    >
                                        <Feature {...feature} size={feature.size} />
                                    </Box>
                                    <Box
                                        className="aos-animate"
                                        data-aos="fade-left"
                                        data-aos-duration="500"
                                    >
                                        <FeatureImage image={feature.image} />
                                    </Box>
                                </>
                            ) : (
                                <>
                                    <Box
                                        className="aos-animate"
                                        data-aos="fade-right"
                                        data-aos-duration="500"
                                    >
                                        <FeatureImage
                                            image={feature.image}
                                            data-aos-duration="500"
                                        />
                                    </Box>
                                    <Box
                                        className="aos-animate"
                                        data-aos="fade-left"
                                        data-aos-duration="500"
                                    >
                                        <Feature {...feature} size={feature.size} />
                                    </Box>
                                </>
                            )}
                        </Grid>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BlockThemeFeatures;