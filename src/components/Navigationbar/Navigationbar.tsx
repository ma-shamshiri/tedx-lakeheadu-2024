import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Image,
  useColorMode,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import ColorModeSwitch from "./ColorModeSwitch";
import { Sidebar } from "./Sidebar";
import { tedxWhite, tedxBlack } from "../../assets";
import { MenuLinks } from "../MenuLinks";
import { navigationLinks } from "../layout/navigation-links";
// import LanguageSwitcher2 from "./LanguageSwitcher2";
import QuickIcons from "../QuickIcons";

export const Navigationbar: React.FC = () => {
  const { colorMode } = useColorMode();

  const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;

  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  // const [isLaptopScreen, setIsLaptopScreen] = useState(window.innerWidth >= 1400 || window.innerWidth <= 990);

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setIsNavVisible(currentPosition < scrollPosition);
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsLaptopScreen(window.innerWidth >= 1024);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

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
        bg={useColorModeValue("rgb(241,241,241)", "black")}
        py={{ base: "1.5rem" }}
        px={{ base: "1.5rem" }}
        zIndex="999"
        as="nav"
        position={{ base: "sticky", lg: "fixed" }}
        top={{ base: 0, lg: "0.3em" }}
        width={{ base: "100%", md: "100%", lg: "98%" }}
        height="75px"
        padding={{ base: "0.4em 0.4em", lg: "0 2em" }}
        left={{ base: "initial", lg: "50%" }}
        transform={{ base: "initial", lg: "translateX(-50%)" }}
        borderRadius={{ base: "2em", md: "2em" }}
        alignContent="center"
        boxShadow={useColorModeValue("0 0 10px 1px gray", "0 0 10px 1px #424242")}
      >
        <Flex
          justify={{ base: "space-between", lg: "space-between" }}
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
              <Flex justifyContent={"center"} alignItems={"center"}
              // width={{ base: 160, md: "220px", lg: "170px", xl: "250px" }}
              >
                <Image
                  src={tedxImg}
                  width={{ base: 160, md: "220px", lg: "170px", xl: "250px" }}
                />
              </Flex>
            </Link>
            <Box
              position="relative"
              display={{ base: "none", lg: "block" }}
            >
              <MenuLinks menuLinks={navigationLinks} />
            </Box>
          </Flex>
          {isLargeScreen ? (
            <HStack spacing={5} zIndex={999}>
              <Flex display={{ md: "none", lg: "block" }} paddingRight="1.5rem" >
              </Flex>
              <QuickIcons />
              {/* <LanguageSwitcher2 /> */}
              <ColorModeSwitch />
            </HStack>
          ) : (
            <>
              {/* <LanguageSwitcher2 /> */}
              <QuickIcons />
              <ColorModeSwitch />
            </>
          )}
        </Flex>
      </Box>
      <Outlet />
    </>
  );
};

// export default Navigationbar;
