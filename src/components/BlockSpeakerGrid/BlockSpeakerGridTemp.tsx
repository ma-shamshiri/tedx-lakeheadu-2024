import React, { useState } from "react";
import { Box, Center, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import SpeakerGridCard from "./SpeakerGridCard";
import { alina, andrew, flore, janet, kira, leila, myra, peggy } from "../../assets";

export const BlockSpeakerGridTemp: React.FC = () => {
  const { t } = useTranslation();

  const numElements = 8;

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
      className="block block--dark block--skewed-right block-showcase"
      padding="6rem 2rem"
      paddingBottom="10rem"
      // bg={useColorModeValue("gray.800", "#16F8B6")}
      // bg={useColorModeValue("gray.800", "#0B0E37")}
      // bg={useColorModeValue("gray.800", "#374550")}
      // bg={useColorModeValue("#ACD1B4", "#1E2142")}
      bg={useColorModeValue(
        "linear-gradient(45deg, #685ACD, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
        "#1E2142"
      )}
      color="#16F8B6"
      overflow={"hidden"}
    >
      <Box
        className="block__header container"
        textAlign="center"
        maxWidth="100rem"
        margin="0 auto"
      >
        <Text
          className="h2"
          color={useColorModeValue("gray.100", "#16F8B6")}
          marginBottom="2rem"
          marginTop="0"
          fontSize={{ base: "5.5rem", lg: "7rem" }}
          fontWeight="bold"
          lineHeight="1.1"
        >
          {t("speakerPageTitle")}
        </Text>

        <Text
          className="p"
          color={useColorModeValue("gray.200", "white")}
          marginBottom="1rem"
          marginTop="0"
          fontSize={{ base: "2.0rem", lg: "2.8rem" }}
          lineHeight="1.1"
        >
          {t("speakerPageSubTitle")}
        </Text>
        <Center>
          <Box className="grid grid--3x3">
            <Grid
              display="grid"
              templateColumns={["repeat(2, 1fr)", null, null, "repeat(4, 1fr)"]}
              templateRows={["repeat(4, 1fr)", null, null, "repeat(2, 1fr)"]}
              rowGap={"10rem"}
              columnGap={{ base: "5rem", lg: "13rem" }}
              padding="10rem 0"
              alignItems="center"
            >
              {/* ======================== Myra Virgil ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[1]}
                handleHover={() => handleHover(1)}
                handleUnhover={() => handleUnhover(1)}
                src={myra}
                name="Myra Virgil"
                buttonSrc="/speakers/myra-virgil/"
              />

              {/* ======================== Kira Dolhan ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[2]}
                handleHover={() => handleHover(2)}
                handleUnhover={() => handleUnhover(2)}
                src={kira}
                name="Kira Dolhan"
                buttonSrc="/speakers/kira-dolhan/"
              />

              {/* ======================== Flore Deshayes ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[3]}
                handleHover={() => handleHover(3)}
                handleUnhover={() => handleUnhover(3)}
                src={flore}
                name="Flore Deshayes"
                buttonSrc="/speakers/flore-deshayes/"
              />

              {/* ======================== Leila Kosseim ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[4]}
                handleHover={() => handleHover(4)}
                handleUnhover={() => handleUnhover(4)}
                src={leila}
                name="Leila Kosseim"
                buttonSrc="/speakers/leila-kosseim/"
              />

              {/* ======================== Andrew Churchil ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[5]}
                handleHover={() => handleHover(5)}
                handleUnhover={() => handleUnhover(5)}
                src={andrew}
                name="Andrew Churchil"
                buttonSrc="/speakers/andrew-churchil/"
              />

              {/* ======================== Janet Perlman ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[6]}
                handleHover={() => handleHover(6)}
                handleUnhover={() => handleUnhover(6)}
                src={janet}
                name="Janet Perlman"
                buttonSrc="/speakers/janet-perlman/"
              />

              {/* ======================== Peggy Bell ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[7]}
                handleHover={() => handleHover(7)}
                handleUnhover={() => handleUnhover(7)}
                src={peggy}
                name="Peggy Bell"
                buttonSrc="/speakers/peggy-bell/"
              />

              {/* ======================== Alina Gutierrez Mejia ======================== */}
              <SpeakerGridCard
                isHovered={isHoveredArray[8]}
                handleHover={() => handleHover(8)}
                handleUnhover={() => handleUnhover(8)}
                src={alina}
                name="Alina Gutierrez Mejia"
                buttonSrc="/speakers/alina-gutierrez-mejia/"
              />
            </Grid>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

// export default BlockSpeakerGridTemp;
