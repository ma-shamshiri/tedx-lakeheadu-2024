import React from "react";
import {
  Box,
  Flex,
  ResponsiveValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import QuoteCard from "./QuoteCard";
import TeamProfileCard from "./TeamProfileCard";

interface BlockTeamProfilesTempProps {
  name: string;
  title: string;
  role: string;
  imageSrc: string;
  badgeSrc: string;
  linkedinHref: string;
  twitterHref: string;
  tedHref: string;
  quoteText: string;
  quoteTopMargin?: ResponsiveValue<string>;
  pageHeight?: ResponsiveValue<string>;
}

const BlockTeamProfilesTemp: React.FC<BlockTeamProfilesTempProps> = ({
  name,
  title,
  role,
  imageSrc,
  badgeSrc,
  linkedinHref,
  twitterHref,
  tedHref,
  quoteText,
  quoteTopMargin,
  pageHeight = { base: "115vh", lg: "105vh" },
}) => {
  const { t } = useTranslation();

  return (
    <Flex
      direction="column"
      height={pageHeight}
      width="100%"
      overflow="hidden"
      position="relative"
    >
      {/* Top Section */}
      <Box
        className="top-section"
        flex="1"
        bg={useColorModeValue("#e0c27e", "gray.800")}
        // bg={useColorModeValue(
        //   "linear-gradient(45deg, #c9ab67, #f5eabc, #c9ab67, #f5eabc, #c9ab67,#f5eabc)",
        //   "gray.800"
        // )}
        display="flex"
        justifyContent="center"
        alignItems="center"
      ></Box>

      {/* Bottom Section */}
      <Box
        className="bottom-section"
        flex="3"
        backgroundColor={useColorModeValue("#FFFDD1", "gray.600")}
        display="flex"
        justifyContent="center"
        alignItems="center"
      ></Box>

      {/* Middle Box */}
      <Box width="100%" position="absolute" top="25%" left="50%">
        <Box
          className="profile-card"
          width={{ base: "90%", lg: "71rem" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          transform="translate(-50%, -50%)"
          zIndex="1"
          marginBottom={{ base: "30rem", md: "5rem", lg: "5rem" }}
        >
          <TeamProfileCard
            name={name}
            title={title}
            role={role}
            imageSrc={imageSrc}
            badgeSrc={badgeSrc}
            linkedinHref={linkedinHref}
            twitterHref={twitterHref}
            tedHref={tedHref}
          />
        </Box>
        <Box
          className="quote-card"
          width={{ base: "70%", lg: "71rem" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          transform="translate(-50%, -50%)"
          zIndex="1"
          marginTop={quoteTopMargin}
        >
          <QuoteCard
            width={{ base: "100%", lg: "80%" }}
            height={{ lg: "90%" }}
            quoteText={quoteText}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default BlockTeamProfilesTemp;
