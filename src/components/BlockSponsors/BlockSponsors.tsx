import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { BlockSponsorsCarousel } from "../BlockSponsorsCarousel";

const variants: { [key: string]: any } = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

export const BlockSponsors: React.FC = () => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);

  const numElements = 6;

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

  return (
    <Box
      padding="6rem 2rem"
      paddingTop={{ base: "5rem", lg: "10rem" }}
      paddingBottom={{ base: "5rem", lg: "10rem" }}
      bg={useColorModeValue("#EFE8D6", "#0D1224")}
      overflow={"hidden"}
    >
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <Box
          className="block__header container"
          textAlign="center"
          margin="0 auto"
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
            {t("sponsorPageTitle")}
          </Text>

          <Text
            className="p"
            color={useColorModeValue("gray.700", "white")}
            marginBottom="1rem"
            marginTop="0"
            fontSize={{ base: "1.5rem", lg: "2.1rem" }}
            lineHeight="1.5"
          >
            {t("sponsorPageSubTitle")}
          </Text>
        </Box>
      </motion.div>
      <Box
        className="block__header container"
        textAlign="center"
        margin="0 auto"
      >
        <BlockSponsorsCarousel />
      </Box>

    </Box>
  );
};

// export default BlockSponsors;