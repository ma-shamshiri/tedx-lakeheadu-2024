import {
    Box,
    useColorModeValue,
    useToken,
    Link,
    Flex,
    Image,
    useColorMode,
    useBreakpointValue,
    HStack
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MenuLinks } from "../MenuLinks";
import { navigationLinks } from "../layout/navigation-links";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { tedxWhite, tedxBlack } from "../../assets";
import ColorModeSwitch from "./ColorModeSwitch";
import QuickIcons from "../QuickIcons";

const Navigationbar2 = () => {
    // Define colors from Chakra UI theme if needed
    const [borderColor, textColor] = useToken("colors", [
        "gray.300", // Replace with your color token or variable
        "blackAlpha.900", // Replace with your color token or variable
    ]);

    const isLargeScreen = useBreakpointValue({ base: false, md: true });

    const { colorMode } = useColorMode();

    const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;

    return (
        <>
            <Box
                width="100%"
                py={{ base: "1rem" }}
                px={{ base: "1rem" }}
                bg={useColorModeValue("rgb(241,241,241)", "black")}
                display={{ base: "block", md: "none" }}
                zIndex="999"
            >
                <Link as={RouterLink} to={"/"} cursor="pointer">
                    <Flex justifyContent={"center"} alignItems={"center"}>
                        <Image src={tedxImg} width={{ base: "80%", lg: 300 }} />
                    </Flex>
                </Link>
            </Box>

            <Box
                as="nav"
                position="fixed"
                display={{ base: "none", md: "block" }}
                top="0.3em"
                width={{ base: "100%", md: "90%", lg: "90%" }}
                height="75px"
                padding="0 2em"
                color={textColor}
                zIndex="100000"
                left="50%"
                transform="translateX(-50%)"
                borderRadius={{ base: "0", md: "2em" }}
                _before={{
                    content: '""',
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    margin: "0 auto",
                    bg: useColorModeValue("rgb(241,241,241)", "black"),
                    // backdropFilter: "blur(30px) saturate(120%)",
                    // WebkitBackdropFilter: "blur(30px) saturate(120%)",
                    border: `1px solid ${borderColor}`,
                    zIndex: "-1",
                    borderRadius: { base: "0", md: "2em" },
                }}
            >
                <Box
                    position="relative"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    height="100%"
                >
                    <Flex
                        justify="space-between"
                        align="center"
                    >
                        <Flex align="center">
                            <Box
                                zIndex="1000"
                                marginTop="-10rem"
                                marginLeft="-1.8rem"
                                marginRight={{ base: "9rem", lg: "10rem" }}
                                display={{ base: "block", lg: "none" }}
                            >
                                <Sidebar />
                            </Box>
                            <Link
                                display={{ base: "none", md: "block" }}
                                as={RouterLink}
                                to={"/"}
                                cursor="pointer"
                            >
                                <Flex justifyContent={"center"} alignItems={"center"}>
                                    <HStack>
                                        <Image
                                            src={tedxImg}
                                            width={{ base: 160, md: 220, lg: 170, xl: 200 }}
                                        />
                                    </HStack>
                                </Flex>
                            </Link>
                            <Box
                                position="relative"
                                display={{ base: "none", lg: "block" }}
                            >
                                <MenuLinks menuLinks={navigationLinks} />
                            </Box>
                        </Flex>
                    </Flex>
                    <HStack gap={10}>
                        <QuickIcons />
                        <ColorModeSwitch />
                    </HStack>
                </Box>
            </Box>
            <Outlet />
        </>
    );
};

export default Navigationbar2;
