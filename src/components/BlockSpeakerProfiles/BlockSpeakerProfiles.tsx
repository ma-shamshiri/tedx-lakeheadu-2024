import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import SpeakerProfileCard from "./SpeakerProfileCard";
import { sliderDataProps } from './sliderData';
import SpeakerSlider from "./SpeakerSlider";
import { videoThumbnail } from "../../assets";

interface BlockSpeakerProfilesProps {
  name?: string;
  title?: string;
  biography?: string;
  talkTopic?: string;
  imageSrc?: string;
  videoSrc?: string;
  videoDescription?: string;
  slides: sliderDataProps[];
}

export const BlockSpeakerProfiles: React.FC<BlockSpeakerProfilesProps> = ({
  name,
  title,
  biography,
  talkTopic,
  imageSrc,
  videoSrc = "",
  videoDescription = "",
  slides
}) => {
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
      position="relative"
      // width="100vw"
      overflow="hidden"
    >
      <SpeakerSlider slides={slides} />

      <SpeakerProfileCard
        name={name}
        title={title}
        imageSrc={imageSrc}
        biography={biography}
      />

      <Flex
        className="video_section_container"
        position="relative"
        width="100%"
        height="fit-content"
        bg={useColorModeValue("black", "black")}
        justifyContent="center"
        alignItems="center"
        paddingY={{ base: "4rem", lg: "6rem" }}
        flexDirection="column"
        overflow="hidden"
      >
        <Box
          className="video_embed_container"
          position="relative"
          width={{ base: "90vw", lg: "55vw" }}
          height={{ base: "50.5vw", lg: "31vw" }}
        >
          {videoSrc !== "" ? (
            <ReactPlayer
              className="react-player"
              url={videoSrc}
              controls={true}
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0
              }}
              allowFullScreen
            />
          ) : (
            <>
              <Image
                className="video_thumbnail"
                src={videoThumbnail}
                alt="Video Thumbnail Image"
                objectFit="cover"
                opacity="0.5"
                borderRadius="20px"

              />
              <Box
                className="title_container"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="white"
                opacity="0.55"
                justifyContent="center"
                alignItems="center"
                display={videoSrc === "" ? "flex" : "none"}
                borderRadius="20px"
              // zIndex={2}
              >
                <VStack>
                  <Text
                    className="title"
                    fontSize={{ base: "3rem", lg: "5rem" }}
                    fontWeight="bold"
                    color={useColorModeValue("black", "black")}
                  >
                    {t("videoThumbnailTitle")}
                  </Text>
                  <Text
                    className="title"
                    fontSize={{ base: "1.8rem", lg: "3rem" }}
                    fontWeight="bold"
                    color={useColorModeValue("black", "black")}
                  >
                    {t("videoThumbnailSubTitle")}
                  </Text>
                </VStack>
              </Box>
            </>
          )}
        </Box>
        {videoDescription &&
          <Box
            className="video_description"
            position="relative"
            display="flex"
            width="100%"
            maxWidth={{ base: "90vw", lg: "55vw" }}
            paddingTop="4rem"
          >
            <Text
              className="speaker_title"
              fontSize={{ base: "1.5rem", lg: "1.8rem" }}
              lineHeight={{ base: "", lg: "32px" }}
              color={useColorModeValue("gray.200", "gray.200")}
            >
              {videoDescription}
            </Text>
          </Box>
        }

        <Flex
          bg={useColorModeValue("black", "black")}
          justifyContent="center"
          alignItems="center"
          paddingTop="6rem"
          display={{ base: "none", lg: "block" }}
        >
          <Link
            position="relative"
            className="btn btn--secondary btn--block"
            as={RouterLink}
            to={"/tedx-2023/videos/"}
            // href="/videos/"
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
            width={{ base: "fit-content", lg: "fit-content" }}
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
            <Text>{t("exploreAllTalks")}</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

// export default BlockSpeakerProfiles;
