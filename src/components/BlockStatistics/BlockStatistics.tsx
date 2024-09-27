import React, { useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NumberCard from "./NumberCard";

export const BlockStatistics: React.FC = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <Box
      className="block block--dark block--skewed-right block-showcase"
      padding="6rem 2rem 6rem 2rem"
      //   bg={useColorModeValue("gray.800", "#16F8B6")}
      //   bg={useColorModeValue("#ACD1B4", "#23214A")}
      bg={useColorModeValue(
        "linear-gradient(45deg, #685ACD, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
        "#23214A"
      )}
      color="#16F8B6"
      overflow={"hidden"}
    >
      <Flex justifyContent="center" alignItems="center">
        {/* <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        > */}
          <Box
            className="block__header container"
            textAlign="center"
            maxWidth="100rem"
          >
            <Text
              className="h2"
              color={useColorModeValue("white", "#16F8B6")}
              marginBottom="2rem"
              fontSize={{ base: "2.8rem", lg: "4rem" }}
              fontWeight="bold"
              lineHeight="1.1"
            >
              {t("statisticsTitle")}
            </Text>

            <Text
              className="p"
              color={useColorModeValue("gray.100", "white")}
              //   marginBottom="1rem"
              marginTop="0"
              fontSize={{ base: "1.5rem", lg: "2.1rem" }}
              lineHeight="1.1"
              paddingBottom={{ lg: "2rem" }}
            >
              {t("statisticsSubTitle")}
            </Text>
            <Center>
              {/* <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              > */}
                <SimpleGrid
                  columns={{ sm: 2, base: 2, md: 2, lg: 2, xl: 4 }}
                  spacing={{ base: "3rem", lg: "10rem" }}
                  padding="5rem 0"
                  alignItems="center"
                  width="100%"
                >
                  <NumberCard
                    width={{
                      base: "fit-content",
                      md: "fit-content",
                      lg: "fit-content",
                      xl: "fit-content"
                    }}
                    height={{
                      base: "fit-content",
                      md: "fit-content",
                      lg: "fit-content",
                      xl: "fit-content",
                    }}
                    endNumber={20}
                    hasPlusSign={false}
                    text={t("coreTeam")}
                    textSize={{
                      base: "1.5rem",
                      md: "1.8rem",
                      lg: "1.8rem",
                      xl: "1.8rem",
                    }}
                    textColor="white"
                    numberFontSize={{
                      base: "3.2rem",
                      md: "3.5rem",
                      lg: "3.5rem",
                      xl: "3.5rem",
                    }}
                    borderColor="linear-gradient(to left, transparent, #409F8F, transparent)"
                    numberColor="#4CCFAF"
                  />

                  <NumberCard
                    width={{
                      base: "fit-content",
                      md: "fit-content",
                      lg: "fit-content",
                      xl: "fit-content"
                    }}
                    height={{
                      base: "fit-content",
                      md: "fit-content",
                      lg: "fit-content",
                      xl: "fit-content",
                    }}
                    endNumber={8}
                    text={t("speakers")}
                    textSize={{
                      base: "1.5rem",
                      md: "1.8rem",
                      lg: "1.8rem",
                      xl: "1.8rem",
                    }}
                    textColor="white"
                    numberFontSize={{
                      base: "3.2rem",
                      md: "3.5rem",
                      lg: "3.5rem",
                      xl: "3.5rem",
                    }}
                    borderColor="linear-gradient(to left, transparent, #EF40BA, transparent)"
                    numberColor="#FF5FCC"
                  />

                  <NumberCard
                    width={{
                      base: "fit-content",
                      md: "fit-content",
                      lg: "fit-content",
                      xl: "fit-content"
                    }}
                    height={{
                      base: "fit-content",
                      md: "fit-content",
                      lg: "fit-content",
                      xl: "fit-content",
                    }}
                    endNumber={100}
                    hasPlusSign={true}
                    text={t("attendees")}
                    textSize={{
                      base: "1.5rem",
                      md: "1.8rem",
                      lg: "1.8rem",
                      xl: "1.8rem",
                    }}
                    textColor="white"
                    numberFontSize={{
                      base: "3.2rem",
                      md: "3.5rem",
                      lg: "3.5rem",
                      xl: "3.5rem",
                    }}
                    numberColor="#A679FF"
                  />

                  <NumberCard
                    width={{
                      base: "fit-content",
                      md: "fit-content",
                      lg: "fit-content",
                      xl: "fit-content"
                    }}
                    height={{
                      base: "fit-content",
                      md: "fit-content",
                      lg: "fit-content",
                      xl: "fit-content",
                    }}
                    endNumber={8}
                    text={t("sponsors")}
                    textSize={{
                      base: "1.5rem",
                      md: "1.8rem",
                      lg: "1.8rem",
                      xl: "1.8rem",
                    }}
                    textColor="white"
                    numberFontSize={{
                      base: "3.2rem",
                      md: "3.5rem",
                      lg: "3.5rem",
                      xl: "3.5rem",
                    }}
                    borderColor="linear-gradient(to left, transparent, #FF9F24, transparent)"
                    numberColor="#FF9F24"
                  />
                </SimpleGrid>
              {/* </motion.div> */}
            </Center>
          </Box>
        {/* </motion.div> */}
      </Flex>
    </Box>
  );
};

// export default BlockStatistics;
