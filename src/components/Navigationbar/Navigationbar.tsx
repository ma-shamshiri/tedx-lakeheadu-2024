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
import LanguageSwitcher from "./LanguageSwitcher";
import { Sidebar } from "./Sidebar";
import { youChooseLogo, tedxWhite, tedxBlack } from "../../assets";
import { MenuLinks } from "../MenuLinks";
import { navigationLinks } from "../layout/navigation-links";
import { KbarInput } from "../KbarInput";
// import { HamburgerButton } from "../HamburgerButton";
// import { MobileMenu } from "../MobileMenu";


export const Navigationbar: React.FC = () => {
  const location = useLocation();

  const { colorMode } = useColorMode();

  const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;

  const isLargeScreen = useBreakpointValue({ base: false, md: true });

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
  //   setIsMobileMenuOpen(false);
  // }, [location]);

  return (
    <>
      {/* <Box
        width="100%"
        py={{ base: "1rem" }}
        px={{ base: "1rem" }}
        bg={useColorModeValue("rgb(241,241,241)", "black")}
        display={{ base: "block", md: "none" }}
        zIndex="999"
      >
        <Link as={RouterLink} to={"/"} cursor="pointer">
          <Flex justifyContent={"center"} alignItems={"center"}>
            <HStack justifyContent={"center"} alignItems={"center"}>
              <Image src={youChooseLogo} boxSize={{ base: "16%", lg: "70px" }} />
              <Image src={tedxImg} width={{ base: "80%", lg: 300 }} />
            </HStack>
          </Flex>
        </Link>
      </Box> */}
      <Box
        bg={useColorModeValue("rgb(241,241,241)", "black")}
        py={{ base: "1.5rem" }}
        px={{ base: "1.5rem" }}
        position="sticky"
        zIndex="999"
        top={isNavVisible ? "0" : "-100px"}
        transition="top 0.3s"
      >
        <Flex
          justify={{ base: "space-between", lg: "space-between" }}
          align="center"
        >
          <Flex align="center">
            {/* <div className="md:hidden">
              <HamburgerButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div> */}
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
                  {/* <Image
                    src={youChooseLogo}
                    boxSize={{ base: "35px", md: "45px", lg: "45px", xl: "50px" }}
                  /> */}
                  <Image
                    src={tedxImg}
                    width={{ base: 160, md: 220, lg: 170, xl: 290 }}
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
          {isLargeScreen ? (
            <HStack spacing={5} zIndex={999}>
              <Flex display={{ md: "none", lg: "block" }} paddingRight="1.5rem" >
                {/* <KbarInput /> */}
              </Flex>
              {/* <LanguageSwitcher /> */}
              <ColorModeSwitch />
            </HStack>
          ) : (
            <>
              {/* <LanguageSwitcher /> */}
              <Image src={tedxImg} width={{ base: "50%", lg: 300 }} />
              <ColorModeSwitch />
            </>
          )}
        </Flex>
        {/* <div className="md:hidden">
          {isMobileMenuOpen && <MobileMenu menuLinks={navigationLinks} />}
        </div> */}
      </Box>
      <Outlet />
    </>
  );
};

// export default Navigationbar;
