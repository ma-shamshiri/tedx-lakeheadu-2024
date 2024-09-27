import React from 'react';
import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { event2023 } from "../../assets";
import { useTranslation } from 'react-i18next';

export const ParallaxSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box
            position="relative"
            height="100vh"
            backgroundAttachment="fixed"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            bgImage={event2023}
            opacity={useColorModeValue("0.90", "0.8")}
        // filter={"blur(4px)"}
        >
            <Box
                className="overlay"
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="blue"
                opacity="0.22"
            ></Box>

            <Box
                className="text_container"
                position="relative"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                color="white"
                width="100%"
                height="100%"
                zIndex="1"
            >
                <Text
                    fontSize={{ base: "2.5rem", lg: "6rem" }}
                    fontWeight="bold"
                    fontFamily="'Acme', sans-serif"
                >
                    {t("parallaxSectionTitle")}
                </Text>
                <Text
                    fontSize={{ base: "2.5rem", lg: "4rem" }}
                    fontWeight="bold"
                    fontFamily="'Acme', sans-serif"
                >
                    {t("fromOurPreviousEvent")}
                </Text>
                <Text
                    fontSize={{ base: "1.5rem", lg: "2.5rem" }}
                    // fontWeight="bold"
                    fontFamily="'Acme', sans-serif"
                    letterSpacing="1.2px"
                    marginTop="2rem"
                    textAlign="center"
                    maxW={{ base: "400px", lg: "initial" }}
                >
                    {t("parallaxSectionSubTitle")}
                </Text>
                {/* <Button mt={6} colorScheme="blue" size="lg">
                    VIEW AVAILABLE OPPORTUNITIES
                </Button> */}
            </Box>
        </Box>
    );
};

// export default ParallaxSection;
