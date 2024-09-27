import React, { useEffect } from "react";
import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import AgendaSlider from "./AgendaSlider";

export const BlockAgenda: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.onload = () => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
      });
    };
  }, []);

  return (
    <Box
      className="block block--dark block--skewed-right aos-animate"
      padding="6rem 2rem"
      paddingBottom="10rem"
      bg="#16F8B6"
      color="#7b858b"
      // clipPath="polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)"
      overflow={"hidden"}
    >
      <Box
        className="block__header container aos-animate"
        textAlign="center"
        maxWidth={{ base: "100%", md: "85%", lg: "100rem" }}
        margin="0 auto"
        data-aos="fade-up"
        data-aos-duration="500"
        // justifyContent="center"
      >
        <Text
          className="h2 block__heading"
          color={useColorModeValue("gray.700", "gray.700")}
          marginBottom="1.5rem"
          marginTop="0"
          fontSize={{ base: "2.8rem", lg: "4rem" }}
          fontWeight="bold"
          lineHeight="1.1"
        >
          {t("agendaPageTitle")}
        </Text>

        <Text
          className="h3"
          color={useColorModeValue("gray.600", "gray.600")}
          marginBottom="6rem"
          marginTop="0"
          fontSize={{ base: "1.5rem", lg: "2.1rem" }}
          lineHeight="1.1"
        >
          {t("agendaPageSubTitle")}
        </Text>

        <Flex justifyContent="center">
          <Box
            className="aos-animate"
            // justifyContent="center"
            // alignItems="center"
            borderWidth="3px"
            borderColor={useColorModeValue("gray.700", "gray.700")}
            borderRadius="35px"
            padding={{ base: "2rem", lg: "5rem" }}
            data-aos="fade-up"
            data-aos-duration="500"
            width={{ base: "100%", lg: "70%" }}
          >
            <AgendaSlider />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

// export default BlockShowcase;
