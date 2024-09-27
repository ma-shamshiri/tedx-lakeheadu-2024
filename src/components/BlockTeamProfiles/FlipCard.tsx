import {
    Box,
    Icon,
    Image,
    ResponsiveValue,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { IconType } from "react-icons";
  
  interface FlipCardProps {
    name: string;
    title: string;
    icon: IconType;
    nameColor?: ResponsiveValue<string>;
    titleColor?: ResponsiveValue<string>;
    iconColor?: ResponsiveValue<string>;
    imageBackgroundColor?: ResponsiveValue<string>;
    frontImageHref: string;
    backImageHref: string;
    objectFit?: ResponsiveValue<
      "cover" | "contain" | "fill" | "none" | "scale-down"
    >;
  }
  
  const FlipCard: React.FC<FlipCardProps> = ({
    name,
    title,
    icon: IconComponent,
    nameColor,
    titleColor,
    iconColor,
    frontImageHref,
    backImageHref,
    objectFit = "cover",
    imageBackgroundColor,
  }) => {
    const [isFrontFlipped, setIsFrontFlipped] = useState(false);
    const [isBackFlipped, setIsBackFlipped] = useState(false);
  
    const handleFrontCardHover = () => {
      setIsFrontFlipped(!isFrontFlipped);
    };
  
    const handleBackCardHover = () => {
      setIsBackFlipped(!isBackFlipped);
    };
  
    const iconSize = { base: "2.8rem", md: "4rem", lg: "5rem" };
  
    return (
      <Box
        className={`scene scene--card`}
        width="100%"
        height="100%"
        style={{
          perspective: "600px",
        }}
        //   onClick={handleCardClick}
        onMouseEnter={handleFrontCardHover}
        onMouseLeave={handleFrontCardHover}
        //   border="1px solid white"
        bg={imageBackgroundColor}
      >
        <Box
          className="card"
          width="100%"
          height="100%"
          transition="transform 1.3s"
          // cursor="pointer"
          position="relative"
          transform={isFrontFlipped ? "rotateY(180deg)" : "rotateY(0)"}
          style={{
            transformStyle: "preserve-3d",
          }}
          // overflow="hidden"
          //To reverse the image
        >
          <Box
            className="card__face card__face--front"
            position="absolute"
            width="100%"
            height="100%"
            color="white"
            textAlign="center"
            fontWeight="bold"
            fontSize="3rem"
            style={{
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={frontImageHref}
              width="100%"
              height="100%"
              objectFit={objectFit}
              borderRadius={"100%"}
            />
          </Box>
          <Box
            className="card__face card__face--back"
            position="absolute"
            width="100%"
            height="100%"
            color="white"
            textAlign="center"
            fontWeight="bold"
            fontSize="3rem"
            transform="rotateY(180deg)"
            style={{
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
            bg={imageBackgroundColor}
          >
            <Image
              src={backImageHref}
              width="100%"
              height="100%"
              objectFit={objectFit}
              borderRadius={"100%"}
              // opacity="0.4"
              style={{
                opacity: isFrontFlipped ? 0.4 : 1,
                transition: "opacity 0.8s ease-in-out 0.3s",
              }}
              bg={imageBackgroundColor}
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <VStack
              // marginTop="15rem"
              >
                <Text
                  fontSize={{ base: "1.6rem", md: "2.3rem", lg: "2.5rem" }}
                  marginTop={{ base: "3rem", md: "7rem", lg: "8rem" }}
                  marginBottom={{ base: "1rem", md: "1rem", lg: "1rem" }}
                  style={{
                    opacity: isFrontFlipped ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out 0.8s",
                  }}
                  color={nameColor}
                >
                  {name}
                </Text>
                <Box
                  style={{
                    opacity: isFrontFlipped ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out 1s",
                  }}
                >
                  <Icon as={IconComponent} boxSize={iconSize} color={iconColor} />
                </Box>
                <Text
                  maxWidth={{ base: "10rem", md: "21rem", lg: "23rem" }}
                  fontSize={{ base: "1rem", md: "1.3rem", lg: "1.4rem" }}
                  style={{
                    opacity: isFrontFlipped ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    transitionDelay: isFrontFlipped ? "1.2s" : "0s",
                  }}
                  color={titleColor}
                >
                  {title}
                </Text>
  
                {/* <Box
                  maxWidth={{ base: "10rem", md: "21rem", lg: "23rem" }}
                  fontSize={{ base: "1rem", md: "1.3rem", lg: "1.4rem" }}
                  style={{
                    opacity: isFrontFlipped ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    transitionDelay: isFrontFlipped ? "1.2s" : "0s",
                  }}
                >
                  <Typed
                    strings={[title]}
                    typeSpeed={20}
                    backSpeed={20}
                    loop
                    backDelay={1000}
                    startDelay={3000}
                  />
                </Box> */}
              </VStack>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default FlipCard;
  