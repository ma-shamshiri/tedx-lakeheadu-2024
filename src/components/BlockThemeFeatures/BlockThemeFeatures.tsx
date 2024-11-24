import React, { useEffect } from "react";
import {
    Box,
    Grid,
    Image,
    Text,
    UnorderedList,
    ListItem,
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
        description: "themeItem2Description",
        linkText: "exploreMore",
        linkUrl: "https://www.ted.com/about/our-organization",
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
        description: "themeItem3Description",
        linkText: "exploreMore",
        linkUrl: "https://www.ted.com/about/our-organization",
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
        description: "themeItem4Description", // Description is an array in the JSON file
        linkText: "exploreMore",
        linkUrl: "https://www.ted.com/tedx/events/57678",
        image: {
            src: landing4,
            alt: "easy",
        },
        size: "40px",
    },
];

interface FeatureProps {
    title: string;
    description: string | string[]; // Accept either a string or an array
    linkText: string;
    linkUrl: string;
    image: {
        src: string;
        alt: string;
    };
    size: string;
}

const Feature: React.FC<FeatureProps> = ({
    title,
    description,
    linkText,
    linkUrl,
    image,
    size,
}) => {
    const { t } = useTranslation();

    return (
        <Box className="feature__content">
            <Text
                className="h3 feature__heading"
                color={useColorModeValue("#fff", "#fff")}
                fontSize={{ base: "2rem", lg: "2.2rem" }}
                fontWeight="bold"
                lineHeight="1.3"
                margin="1rem 0"
            >
                {t(title)}
            </Text>

            {(() => {
                const localizedDescription = t(description, { returnObjects: true });

                if (Array.isArray(localizedDescription)) {
                    return (
                        <>
                            {localizedDescription.map((item, index) => {
                                if (typeof item === "string") {
                                    // Render plain text
                                    return (
                                        <Text
                                            key={index}
                                            fontSize={{ base: "1.6rem", lg: "1.7rem" }}
                                            color={useColorModeValue("gray.100", "gray.100")}
                                            marginBottom={index === localizedDescription.length - 1 ? "1rem" : "0"}
                                        >
                                            {item}
                                        </Text>
                                    );
                                } else if (Array.isArray(item)) {
                                    // Render bullet points
                                    return (
                                        <UnorderedList
                                            key={index}
                                            spacing={2}
                                            fontSize={{ base: "1.6rem", lg: "1.7rem" }}
                                            color={useColorModeValue("gray.100", "gray.100")}
                                            marginLeft="1.5rem"
                                        >
                                            {item.map((listItem, listIndex) => (
                                                <ListItem key={listIndex}>{listItem}</ListItem>
                                            ))}
                                        </UnorderedList>
                                    );
                                }
                                return null;
                            })}
                        </>
                    );
                }

                // If localizedDescription is a plain string
                if (typeof localizedDescription === "string") {
                    return (
                        <Text
                            className="p"
                            fontSize={{ base: "1.6rem", lg: "1.7rem" }}
                            color={useColorModeValue("gray.100", "gray.100")}
                        >
                            {localizedDescription}
                        </Text>
                    );
                }

                // Fallback for unexpected cases
                return null;
            })()}
        </Box>
    );
};

const FeatureImage: React.FC<{ image: { src: string; alt: string } }> = ({ image }) => (
    <Box as="picture">
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
            bg={useColorModeValue("#FE2B06", "#FE2B06")}
            width="100%"
            overflow="hidden"
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
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    <Text
                        className="h2 block__heading"
                        color={useColorModeValue("#fff", "#fff")}
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
                        color={useColorModeValue("gray.100", "gray.100")}
                        fontSize={{ base: "1.5rem", lg: "2.1rem" }}
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
                                        <FeatureImage image={feature.image} />
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
                <Text color={"#fff"} fontSize={"1.3rem"}>
                    Photo Credits: Suman D'Souza
                </Text>
            </Box>
        </Box>
    );
};

export default BlockThemeFeatures;
