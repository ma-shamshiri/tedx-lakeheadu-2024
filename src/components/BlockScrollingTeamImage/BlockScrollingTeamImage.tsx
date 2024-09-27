import React, { useState } from "react";
import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollingTeamImage from "./ScrollingTeamImage";

export const BlockScrollingTeamImage: React.FC = () => {
    const { t } = useTranslation();

    const [isHoveredButton, setIsHoveredButton] = useState(false);

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

    return (
        <Box
            className="block_scrolling"
            width="100%"
            bg={useColorModeValue("white", "black")}
            padding={{ base: "6rem 0rem", lg: "10rem 0rem" }}
            overflow="hidden"
        >
            {/* --------------- SCROLLING HEADER --------------- */}
            {/* <Box
                className="header_container"
                textAlign="center"
                paddingBottom={{ base: "0", lg: "2rem" }}
            >
                <Text
                    className="h2"
                    color={useColorModeValue("gray.800", "gray.100")}
                    marginBottom="1rem"
                    marginTop="0"
                    fontSize={{ base: "2.8rem", lg: "4rem" }}
                    fontWeight="bold"
                    lineHeight="1.1"
                >
                    {t("scrollingTeamTitle")}
                </Text>
                <Text
                    className="p"
                    color={useColorModeValue("gray.700", "gray.200")}
                    fontSize={{ base: "1.5rem", lg: "2.1rem" }}
                >
                    {t("scrollingTeamSubTitle")}
                </Text>
            </Box> */}

            {/* --------------- SCROLLING IMAGE --------------- */}
            <Box
                className="block__header"
                bg={useColorModeValue("white", "black")}
                // paddingTop="8rem"
                // paddingBottom={{ base: "2rem", lg: "4rem" }}
            >
                <ScrollingTeamImage />
            </Box>

            {/* <Flex
                bg={useColorModeValue("white", "black")}
                justifyContent="center"
                alignItems="center"
                paddingTop="6rem"
            >
                <Link
                    position="relative"
                    className="btn btn--secondary btn--block"
                    as={RouterLink}
                    to={"/team/"}
                    // href="/team/"
                    border="2px solid #F04E2D"
                    borderRadius="7px"
                    cursor="pointer"
                    fontSize={{ base: "1.8rem", lg: "2rem" }}
                    padding="1.5rem"
                    textAlign="center"
                    whiteSpace="nowrap"
                    bg="#f04e2d"
                    color="#fff"
                    boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                    display="inline-block"
                    width={{ base: "20rem", lg: "20rem" }}
                    _hover={{
                        border: "0.2rem solid #f75540",
                        bg: "transparent",
                        color: "#f04e2d",
                        boxShadow:
                            "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
                    }}
                    transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
                    onMouseEnter={handleHoverButton}
                    onMouseLeave={handleUnHoverButton}
                >
                    <Text>{t("scrollingTeamButtonLabel")}</Text>
                </Link>
            </Flex> */}
        </Box>
    );
};

// export default BlockScrollingTeamImage;
