// TestimonialCard.tsx
import React, { useEffect } from "react";
import {
    Box,
    Image,
    Text,
    Grid,
    IconButton,
    Stack,
    Icon,
    Flex,
    useColorModeValue,
    useMediaQuery,
} from "@chakra-ui/react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiTed } from "react-icons/si";
import { BsFillChatQuoteFill } from "react-icons/bs";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles

interface TestimonialCardProps {
    isHovered: boolean;
    handleHover: () => void;
    handleUnhover: () => void;
    src: string;
    linkedinHref: string;
    twitterHref: string;
    tedHref: string;
    author: string;
    organization: string;
    quoteText: string;
    borderColor: string;
    badgeText: string;
    badgeColor: string;
    badgeTextSize: string;
    badgePaddingRight: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    isHovered,
    handleHover,
    handleUnhover,
    src,
    linkedinHref,
    twitterHref,
    tedHref,
    author,
    organization,
    quoteText,
    borderColor,
    badgeText,
    badgeColor,
    badgeTextSize,
    badgePaddingRight,
}) => {
    const [isLargerThanSm] = useMediaQuery("(min-width: 100rem)");

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
            className="card testimonial aos-animate"
            width="100%"
            height="99%"
            padding="2.5rem 2rem 2rem 2rem"
            borderRadius="7px"
            boxShadow="0 0 30px 1px black"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            position="relative"
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
            borderWidth={"1rem"}
            borderColor={"transparent"}
            data-aos="fade-up"
            data-aos-duration="500"
            bg={useColorModeValue("gray.800", "gray.800")}
        >
            {/* ======= Rectangle ======= */}
            <Box
                top={{ base: "85", xl: "25" }}
                position="absolute"
                right={{ base: "auto", xl: "0" }}
                left={{ base: "-65px", xl: "auto" }}
                // top={{ base: "430", md: "430", lg: "430", xl: "25" }}
                width="160px"
                height="30px"
                // bg="linear-gradient(to left,  #F226AA, #6322BF, #6322BF)"
                bg={badgeColor}
                textAlign="right"
                justifyContent="center"
                alignItems="center"
                transform={{ base: "rotate(90deg)", xl: "rotate(0deg)" }}
                opacity={isHovered ? 1 : 0.6}
                transition="opacity 0.3s ease-in-out"
            >
                <Text
                    paddingTop={{ base: "0", xl: "1" }}
                    paddingBottom={{ base: "1", xl: "auto" }}
                    paddingRight={badgePaddingRight}
                    // paddingRight={badgePaddingRight}
                    fontSize={badgeTextSize}
                    // fontSize={badgeTextSize}
                    fontWeight="bold"
                    textColor="white"
                    transform={{ base: "rotate(180deg)", xl: "rotate(0deg)" }}
                >
                    {badgeText}
                </Text>
            </Box>

            {/* ======= Triangle ======= */}
            <Box
                position="absolute"
                top={{ base: "152", xl: "25" }}
                right={{ base: "auto", xl: "132" }}
                left={{ base: "0", xl: "auto" }}
                width="0"
                height="0"
                backgroundColor="transparent"
                borderStyle="solid"
                borderLeftWidth="15px"
                borderRightWidth="15px"
                borderBottomWidth="30px"
                borderLeftColor="transparent"
                borderRightColor="transparent"
                borderBottomColor="gray.800"
                transform={{ base: "rotate(0deg)", xl: "rotate(90deg)" }}
            // transform={{ base: "rotate(90deg)", xl: "rotate(0deg)" }}
            ></Box>
            <Box
                position="absolute"
                top="-1rem"
                left="0"
                width="100%"
                height="1.2rem"
                style={{
                    background: borderColor,
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                }}
            ></Box>
            <Box
                position="absolute"
                bottom="-1rem"
                left="0"
                width="100%"
                height="1.2rem"
                style={{
                    background: borderColor,
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                }}
            ></Box>

            <Grid
                className="grid grid--1x2"
                display="grid"
                templateColumns={[
                    "1fr",
                    null,
                    null,
                    isLargerThanSm ? "repeat(2, 1fr)" : "1fr",
                ]}
                templateRows="auto 1fr"
                gap={4}
                marginTop={{ base: "2rem", md: "5rem" }}
            >
                {/* -------------------- First row with two columns -------------------- */}

                <Box
                    className="testimonial__image"
                    position="relative"
                    margin={{ base: "0 3rem", lg: "0" }}
                    gridColumn="1"
                >
                    <Image
                        src={src}
                        width="100%"
                        // width="20rem"
                        // height="20rem"
                        alt="A happy smiling customer"
                        _hover={{ transform: "scale(1.05)" }}
                        transition="transform 0.2s ease-out"
                        borderRadius="100%"
                    // borderRadius="2%"
                    />
                    <Stack
                        display="flex"
                        flexDirection="row"
                        spacing={6}
                        justifyContent={"center"}
                        paddingTop="2rem"
                    //   marginBottom="1rem"
                    >
                        <Box as="a" href={linkedinHref} target="_blank" rel="noopener noreferrer">
                            <IconButton
                                aria-label="linkedin"
                                variant="ghost"
                                size="xl"
                                icon={<BsLinkedin size="20px" />}
                                _hover={{
                                    bg: useColorModeValue("#0077b5", "gray.200"),
                                    color: useColorModeValue("white", "gray.700"),
                                }}
                                isRound
                                boxSize="4rem"
                            />
                        </Box>
                        <Box
                            as="a"
                            //   href={twitterHref}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton
                                aria-label="linkedin"
                                variant="ghost"
                                size="xl"
                                icon={<BsTwitter size="20px" />}
                                _hover={{
                                    bg: useColorModeValue("#4DA6E9", "gray.200"),
                                    color: useColorModeValue("white", "gray.700"),
                                }}
                                isRound
                                boxSize="4rem"
                                // opacity="0.3"
                                opacity="1"
                            />
                        </Box>
                        <Box as="a" href={tedHref} target="_blank" rel="noopener noreferrer">
                            <IconButton
                                aria-label="linkedin"
                                variant="ghost"
                                size="xl"
                                icon={<SiTed size="35px" />}
                                _hover={{
                                    bg: useColorModeValue("#E1186C", "gray.200"),
                                    color: useColorModeValue("white", "gray.700"),
                                }}
                                isRound
                                boxSize="4rem"
                                // opacity="0.3"
                                opacity="1"
                            />
                        </Box>
                    </Stack>

                    <Box
                        className="icon-container icon-container--accent"
                        background="#f3f9fa"
                        width="64px"
                        height="64px"
                        borderRadius="100%"
                        display="inline-flex"
                        justifyContent="center"
                        alignItems="center"
                        position="absolute"
                        top="3rem"
                        right="-32px"
                        backgroundColor="var(--color-accent)"
                        marginRight={{ md: "2rem" }}
                    >
                        <Icon
                            className="icon icon--white"
                            as={BsFillChatQuoteFill}
                            width="40px"
                            height="40px"
                            color="#fff"
                        />
                    </Box>
                </Box>
                {isLargerThanSm ? (
                    <Flex
                        className="testimonial__title"
                        gridColumn="2"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                    >
                        <Flex
                        // className="media"
                        // marginBottom="4rem"
                        >
                            <Box
                                className="media__body"
                                margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                            >
                                <Text
                                    className="media__title quote__author"
                                    fontSize={{ base: "3rem", lg: "2.8rem" }}
                                    fontWeight="bold"
                                    fontStyle="normal"
                                    marginTop="0"
                                    marginBottom="1rem"
                                    color="white"
                                >
                                    {author}
                                </Text>
                                <Text
                                    className="quote__organization"
                                    color="#48F380"
                                    // opacity="0.4"
                                    fontSize={{ base: "2rem", lg: "1.8rem" }}
                                    fontStyle="normal"
                                >
                                    {organization}
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                ) : (
                    <Box className="testimonial__title" gridColumn="1">
                        <Flex
                            // className="media"
                            // marginBottom="4rem"
                            marginTop="1.5rem"
                        // justifyContent="center"
                        >
                            <Box
                                className="media__body"
                            // margin={{ base: "0 2rem 0 0", lg: "0 1rem 0 2rem" }}
                            >
                                <Text
                                    className="media__title quote__author"
                                    fontSize={{ base: "3rem", md: "2.5rem", lg: "3rem" }}
                                    fontWeight="bold"
                                    fontStyle="normal"
                                    marginTop="0"
                                    marginBottom="1rem"
                                    color="white"
                                >
                                    {author}
                                </Text>
                                <Text
                                    className="quote__organization"
                                    color="#48F380"
                                    // opacity="0.4"
                                    fontSize={{
                                        base: "2rem",
                                        md: "1.7rem",
                                        lg: "2rem",
                                    }}
                                    fontStyle="normal"
                                >
                                    {organization}
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                )}
                {/* -------------------- Second row with one column -------------------- */}
                <Box
                    className="quote"
                    as="blockquote"
                    fontSize={{ base: "110%", lg: "130%" }}
                    fontStyle="italic"
                    color="var(--color-body-darker)"
                    gridColumn={isLargerThanSm ? "span 2" : "span 1"}
                    margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
                >
                    <Text
                        className="quote__text"
                        textAlign="left"
                        _before={{ content: "open-quote" }}
                        _after={{ content: "close-quote" }}
                        color="gray.400"
                    >
                        {quoteText}
                    </Text>
                </Box>
            </Grid>
        </Box>
    );
};

export default TestimonialCard;
