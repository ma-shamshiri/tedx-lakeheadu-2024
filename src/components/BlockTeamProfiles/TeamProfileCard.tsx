import {
    Box,
    Image,
    useColorModeValue,
    IconButton,
    HStack,
    Flex,
    useBreakpointValue,
    VStack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { BsLinkedin, BsTwitter } from "react-icons/bs";
  import { GiGraduateCap, GiResize } from "react-icons/gi";
  import { SiTed } from "react-icons/si";
  import Typed from "react-typed";
  
  import FlipCard from "./FlipCard";
  import { container } from "../../assets";

  interface TeamProfileCardProps {
    name: string;
    title: string;
    role: string;
    imageSrc: string;
    badgeSrc: string;
    linkedinHref: string;
    twitterHref: string;
    tedHref: string;
  }
  
  const TeamProfileCard: React.FC<TeamProfileCardProps> = ({
    name,
    title,
    role,
    imageSrc,
    badgeSrc,
    linkedinHref,
    twitterHref,
    tedHref,
  }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isBadgeHovered, setIsBadgeHovered] = useState(false);
  
    const handleCardHover = () => {
      setIsFlipped(!isFlipped);
    };
  
    const handleBadgeHover = () => {
      setIsBadgeHovered(!isBadgeHovered);
    };
  
    const iconSize = useBreakpointValue({ base: "1.7rem", lg: "2rem" });
    const tedIconSize = useBreakpointValue({ base: "2.8rem", lg: "3.5rem" });
  
    return (
      <Box
        className="container"
        width={{ base: "100%", lg: "100%" }}
        height={"100%"}
        position="relative"
        borderRadius={15}
        overflow="hidden"
        boxShadow="0 0 30px 1px black"
      >
        <Image
          className="container-image"
          src={container}
          width="100%"
          height="100%"
          objectFit="contain"
        />
  
        <Box
          className="badge_container"
          position="absolute"
          top={{ base: 8, lg: 10 }}
          right={{ base: 5, lg: 10 }}
          onMouseEnter={handleBadgeHover}
          onMouseLeave={handleBadgeHover}
        >
          <VStack className="badge_container">
            <Image
              className="badge_image"
              src={badgeSrc}
              width={{ base: "7rem", md: "10rem", lg: "10rem" }}
              objectFit="contain"
              _hover={{ transform: "scale(1.1)" }}
              transition="transform 0.3s ease-out"
              zIndex={1}
              paddingBottom="1rem"
            />
            {/* <Text
              className="badge_title"
              fontSize={{ base: "1.2rem", lg: "1.8rem" }}
              fontWeight="bold"
              fontFamily="fantasy"
              color="rgb(241,241,241)"
              letterSpacing={1}
              opacity={isBadgeHovered ? 1 : 0}
              transition="opacity 0.3s ease-in-out"
            >
              {role}
            </Text> */}
  
            <Box
              className="badge_title"
              fontSize={{ base: "1.2rem", lg: "1.8rem" }}
              fontWeight="bold"
              fontFamily="fantasy"
              color="rgb(241,241,241)"
              letterSpacing={1}
              opacity={isBadgeHovered ? 1 : 0}
              transition="opacity 0.3s ease-in-out"
            >
              {isBadgeHovered && (
                <Typed
                  strings={[role]}
                  typeSpeed={50}
                  backSpeed={20}
                  loop={false}
                  onComplete={() => {}}
                />
              )}
            </Box>
          </VStack>
        </Box>
        <Box
          className="profile_container"
          width={{ base: "47%", lg: "33rem" }}
          height={{ base: "82%", lg: "33rem" }}
          position={"absolute"}
          top={{ base: "4%", lg: "6" }}
          left={{ base: "27%", lg: "190" }}
          objectFit="cover"
          borderRadius="100%"
          border="2px solid transparent"
          _hover={{
            borderColor: "#16F8B6",
          }}
          transition="border-color 0.9s ease-out 0.8s"
          overflow="hidden"
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardHover}
        >
          <FlipCard
            name={name}
            title={title}
            frontImageHref={imageSrc}
            backImageHref={imageSrc}
            icon={GiGraduateCap}
          />
        </Box>
        <Flex
          className="icon_container"
          justifyContent="center"
          alignItems="flex-end"
          position="absolute"
          bottom="0"
          left="50%"
          transform="translateX(-50%)"
          width="100%"
          marginTop="3rem"
        >
          <HStack
            position="absolute"
            spacing={6}
            justifyContent={"center"}
            marginBottom={{ base: "0.3rem", lg: "0.8rem" }}
          >
            <Box as="a" href={linkedinHref} target="_blank" rel="noopener noreferrer">
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="xl"
                icon={<BsLinkedin size={iconSize} />}
                color={useColorModeValue("gray.200", "gray.200")}
                _hover={{
                  bg: useColorModeValue("gray.200", "gray.200"),
                  color: useColorModeValue("gray.700", "gray.700"),
                }}
                isRound
                boxSize={{ base: "3rem", lg: "4rem" }}
                // opacity="0.3"
                opacity="1"
              />
            </Box>
            <Box as="a" href={twitterHref} target="_blank" rel="noopener noreferrer">
              <IconButton
                aria-label="twitter"
                variant="ghost"
                size="xl"
                icon={<BsTwitter size={iconSize} />}
                color={useColorModeValue("gray.200", "gray.200")}
                _hover={{
                  bg: useColorModeValue("gray.200", "gray.200"),
                  color: useColorModeValue("gray.700", "gray.700"),
                }}
                isRound
                boxSize={{ base: "3.1rem", lg: "4rem" }}
                // opacity="0.3"
                opacity="1"
              />
            </Box>
            <Box as="a" href={tedHref} target="_blank" rel="noopener noreferrer">
              <IconButton
                aria-label="ted"
                variant="ghost"
                size="xl"
                icon={<SiTed size={tedIconSize} />}
                color={useColorModeValue("gray.200", "gray.200")}
                _hover={{
                  bg: useColorModeValue("gray.200", "gray.200"),
                  color: useColorModeValue("gray.700", "gray.700"),
                }}
                isRound
                boxSize={{ base: "3.2rem", lg: "4rem" }}
                // opacity="0.3"
                opacity="1"
              />
            </Box>
          </HStack>
        </Flex>
      </Box>
    );
  };
  
  export default TeamProfileCard;
  