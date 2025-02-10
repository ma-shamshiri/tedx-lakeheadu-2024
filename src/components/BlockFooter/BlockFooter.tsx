import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Text,
  Icon,
  Flex,
  Image,
  List,
  ListItem,
  Link,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IconButton, Stack, useColorModeValue } from "@chakra-ui/react";
import { BsInstagram, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { tedxWhite, tedxBlack } from "../../assets";

export const BlockFooter = () => {
  const { t } = useTranslation();

  const { colorMode } = useColorMode();

  const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;
  const titleFontSize = useBreakpointValue({ base: "1.5rem", lg: "1.5rem" });
  const subTitleFontSize = useBreakpointValue({ base: "1.5rem", lg: "1.5rem" });
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // Set your large screen breakpoint

  const [column1Expanded, setColumn1Expanded] = useState(true);
  const [column2Expanded, setColumn2Expanded] = useState(false);
  const [column3Expanded, setColumn3Expanded] = useState(false);
  const [column4Expanded, setColumn4Expanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Update the state when the window is resized
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  const handleColumn1Toggle = () => {
    setColumn1Expanded(!column1Expanded);
  };

  const handleColumn2Toggle = () => {
    setColumn2Expanded(!column2Expanded);
  };

  const handleColumn3Toggle = () => {
    setColumn3Expanded(!column3Expanded);
  };

  const handleColumn4Toggle = () => {
    setColumn4Expanded(!column4Expanded);
  };

  return (
    <Box
      className="block block--dark footer"
      color="#7b858b"
      padding="6rem 2rem"
      paddingBottom="10rem"
      overflow={"hidden"}
      bg={useColorModeValue("gray.300", "#232323")}
    >
      <Box className="grid grid--1x2" maxWidth="1320px" margin="0 auto">
        <Grid
          display="grid"
          templateColumns={[
            "1fr",
            null,
            null,
            "repeat(auto-fit, minmax(10rem, 1fr))",
          ]}
        >
          {isLargeScreen ? (
            <Box
              className={`footer__section`}
              padding="2rem"
              borderBottom={{
                base: `1px solid ${useColorModeValue("#999", "#393939")}`,
                lg: "0",
              }}
              marginLeft={{ lg: "6rem" }}
            >
              <Text
                className="h2 collapsible__heading footer__heading"
                color={useColorModeValue("gray.800", "#ddd")}
                marginBottom="1rem"
                fontSize={titleFontSize}
                fontWeight="bold"
                lineHeight="1.1"
                marginTop="0"
                textTransform="uppercase"
              >
                {t("programs")}
              </Text>
              <Box className="collapsible__content">
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.900", "#777")}
                      _hover={{ color: "#fff" }}
                    >
                      TED
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      TEDx
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      TEDxLakeheadU
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          ) : (
            <Box
              className={`collapsible footer__section ${column1Expanded ? "collapsible--expanded" : ""
                }`}
              padding="2rem"
              borderBottom={{
                base: `1px solid ${useColorModeValue("#999", "#393939")}`,
                lg: "0",
              }}
            >
              <Box
                className="collapsible__header"
                display="flex"
                justifyContent="space-between"
                onClick={handleColumn1Toggle}
              >
                <Text
                  className="h2 collapsible__heading footer__heading"
                  color={useColorModeValue("gray.800", "#ddd")}
                  marginBottom="1rem"
                  fontSize={titleFontSize}
                  fontWeight="bold"
                  lineHeight="1.1"
                  marginTop="0"
                  textTransform="uppercase"
                >
                  {t("programs")}
                </Text>
                <Icon
                  className={`icon icon--white collapsible__chevron ${column1Expanded ? "collapsible--expanded" : ""
                    }`}
                  as={IoIosArrowDropdownCircle}
                  width="40px"
                  height="40px"
                  color="#393939"
                  style={{
                    transform: column1Expanded ? "rotate(0)" : "rotate(-90deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </Box>
              <Box
                className="collapsible__content"
                style={{
                  maxHeight: column1Expanded ? "1000px" : "0",
                  opacity: column1Expanded ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s, opacity 0.3s",
                }}
              >
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="1rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      textTransform="uppercase"
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      TED
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      textTransform="uppercase"
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      TEDx
                    </Link>
                  </ListItem>
                  <ListItem className="list__item">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      TEDxLakeheadU
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          )}
          {isLargeScreen ? (
            <Box
              className={`footer__section`}
              padding="2rem"
              borderBottom={{
                base: `1px solid ${useColorModeValue("#999", "#393939")}`,
                lg: "0",
              }}
              marginLeft={{ lg: "6rem" }}
            >
              <Text
                className="h2 collapsible__heading footer__heading"
                color={useColorModeValue("gray.800", "#ddd")}
                marginBottom="1rem"
                fontSize={titleFontSize}
                fontWeight="bold"
                lineHeight="1.1"
                marginTop="0"
                textTransform="uppercase"
              >
                SECTION
              </Text>
              <Box className="collapsible__content">
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/photos"}
                      // href="/photos/"
                      cursor="pointer"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color={useColorModeValue("gray.800", "#777")}
                      // textTransform="uppercase"
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("photos")}
                    </Link>
                  </ListItem>
                  {/* <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/videos"}
                      // href="/videos/"
                      cursor="pointer"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color={useColorModeValue("gray.800", "#777")}
                      // textTransform="uppercase"
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("videos")}
                    </Link>
                  </ListItem> */}
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/team"}
                      // href="/team/"
                      cursor="pointer"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color={useColorModeValue("gray.800", "#777")}
                      // textTransform="uppercase"
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("team")}
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/event"}
                      // href="/event/"
                      cursor="pointer"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      // fontWeight="bold"
                      color={useColorModeValue("gray.800", "#777")}
                      // textTransform="uppercase"
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("event")}
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          ) : (
            <Box
              className={`collapsible footer__section ${column2Expanded ? "collapsible--expanded" : ""
                }`}
              padding="2rem"
              borderBottom={{
                base: `1px solid ${useColorModeValue("#999", "#393939")}`,
                lg: "0",
              }}
            >
              <Box
                className="collapsible__header"
                display="flex"
                justifyContent="space-between"
                onClick={handleColumn2Toggle}
              >
                <Text
                  className="h2 collapsible__heading footer__heading"
                  color={useColorModeValue("gray.800", "#ddd")}
                  marginBottom="1rem"
                  fontSize={titleFontSize}
                  fontWeight="bold"
                  lineHeight="1.1"
                  marginTop="0"
                  textTransform="uppercase"
                >
                  SECTION
                </Text>
                <Icon
                  className={`icon icon--white collapsible__chevron ${column2Expanded ? "collapsible--expanded" : ""
                    }`}
                  as={IoIosArrowDropdownCircle}
                  width="40px"
                  height="40px"
                  color="#393939"
                  style={{
                    transform: column2Expanded ? "rotate(0)" : "rotate(-90deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </Box>
              <Box
                className="collapsible__content"
                style={{
                  maxHeight: column2Expanded ? "1000px" : "0",
                  opacity: column2Expanded ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s, opacity 0.3s",
                }}
              >
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="1rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/photos"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("media")}
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/team"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("team")}
                    </Link>
                  </ListItem>
                  <ListItem className="list__item">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/event"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("event")}
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          )}
          {isLargeScreen ? (
            <Box
              className={`footer__section`}
              padding="2rem"
              borderBottom={{
                base: `1px solid ${useColorModeValue("#999", "#393939")}`,
                lg: "0",
              }}
              marginLeft={{ lg: "4rem" }}
            >
              <Text
                className="h2 collapsible__heading footer__heading"
                color={useColorModeValue("gray.800", "#ddd")}
                marginBottom="1rem"
                fontSize={titleFontSize}
                fontWeight="bold"
                lineHeight="1.1"
                marginTop="0"
                textTransform="uppercase"
              >
                {t("ourCommunity")}
              </Text>
              <Box className="collapsible__content">
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/team"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("organizers")}
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/speakers"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("speakers")}
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/sponsors"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("sponsors")}
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          ) : (
            <Box
              className={`collapsible footer__section ${column3Expanded ? "collapsible--expanded" : ""
                }`}
              padding="2rem"
              borderBottom={{
                base: `1px solid ${useColorModeValue("#999", "#393939")}`,
                lg: "0",
              }}
            >
              <Box
                className="collapsible__header"
                display="flex"
                justifyContent="space-between"
                onClick={handleColumn3Toggle}
              >
                <Text
                  className="h2 collapsible__heading footer__heading"
                  color={useColorModeValue("gray.800", "#ddd")}
                  marginBottom="1rem"
                  fontSize={titleFontSize}
                  fontWeight="bold"
                  lineHeight="1.1"
                  marginTop="0"
                  textTransform="uppercase"
                >
                  {t("ourCommunity")}
                </Text>
                <Icon
                  className={`icon icon--white collapsible__chevron ${column3Expanded ? "collapsible--expanded" : ""
                    }`}
                  as={IoIosArrowDropdownCircle}
                  width="40px"
                  height="40px"
                  color="#393939"
                  style={{
                    transform: column3Expanded ? "rotate(0)" : "rotate(-90deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </Box>
              <Box
                className="collapsible__content"
                style={{
                  maxHeight: column3Expanded ? "1000px" : "0",
                  opacity: column3Expanded ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s, opacity 0.3s",
                }}
              >
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="1rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/joinus/team"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("organizers")}
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/joinus/speaker"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("speakers")}
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"/joinus/sponsor"}
                      cursor="pointer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      {t("sponsors")}
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          )}
          {isLargeScreen ? (
            <Box
              className={`footer__section`}
              padding="2rem"
              borderBottom={{
                base: `1px solid ${useColorModeValue("#999", "#393939")}`,
                lg: "0",
              }}
              marginLeft={{ lg: "4rem" }}
            >
              <Text
                className="h2 collapsible__heading footer__heading"
                color={useColorModeValue("gray.800", "#ddd")}
                marginBottom="1rem"
                fontSize={titleFontSize}
                fontWeight="bold"
                lineHeight="1.1"
                marginTop="0"
                textTransform="uppercase"
              >
                {t("followUs")}
              </Text>
              <Box className="collapsible__content">
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"https://www.linkedin.com/company/tedxlakeheadu/"}
                      cursor="pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      LinkedIn
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"https://www.instagram.com/tedxlakeheadu2025?igsh=eW5pcTNsanppZA=="}
                      cursor="pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      Instagram
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      // to={"https://x.com/TEDxPlateauMR?t=O9yzFdCp7zgNZ7eXTYr5mw&s=35"}
                      cursor="pointer"
                      // target="_blank"
                      rel="noopener noreferrer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      Twitter
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="0.5rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      // to={"https://www.facebook.com/people/tedxplateaumontroyal/61565416427305/"}
                      cursor="pointer"
                      // target="_blank"
                      rel="noopener noreferrer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      Facebook
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          ) : (
            <Box
              className={`collapsible footer__section ${column4Expanded ? "collapsible--expanded" : ""
                }`}
              padding="2rem"
              borderBottom={{
                base: `1px solid ${useColorModeValue("#999", "#393939")}`,
                lg: "0",
              }}
            >
              <Box
                className="collapsible__header"
                display="flex"
                justifyContent="space-between"
                onClick={handleColumn4Toggle}
              >
                <Text
                  className="h2 collapsible__heading footer__heading"
                  color={useColorModeValue("black", "#ddd")}
                  marginBottom="1rem"
                  fontSize={titleFontSize}
                  fontWeight="bold"
                  lineHeight="1.1"
                  marginTop="0"
                  textTransform="uppercase"
                >
                  {t("followUs")}
                </Text>
                <Icon
                  className={`icon icon--white collapsible__chevron ${column4Expanded ? "collapsible--expanded" : ""
                    }`}
                  as={IoIosArrowDropdownCircle}
                  width="40px"
                  height="40px"
                  color="#393939"
                  style={{
                    transform: column4Expanded ? "rotate(0)" : "rotate(-90deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </Box>
              <Box
                className="collapsible__content"
                style={{
                  maxHeight: column4Expanded ? "1000px" : "0",
                  opacity: column4Expanded ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s, opacity 0.3s",
                }}
              >
                <List
                  className="list"
                  color="var(--color-headings)"
                  paddingLeft="0"
                >
                  <ListItem className="list__item" paddingBottom="1rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"https://www.linkedin.com/company/tedxlakeheadu/"}
                      cursor="pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      LinkedIn
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      to={"https://www.instagram.com/tedxlakeheadu2025?igsh=eW5pcTNsanppZA=="}
                      cursor="pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                      fontSize={{ base: "2rem", lg: "1.5rem" }}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      Instagram
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      // to={"https://twitter.com/tedxavelorne?=gQ5JPPcDU0I54uaHmdPlew&s=35"}
                      cursor="pointer"
                      // target="_blank"
                      rel="noopener noreferrer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      Twitter
                    </Link>
                  </ListItem>
                  <ListItem className="list__item" paddingBottom="1rem">
                    <Link
                      className="link-arrow"
                      as={RouterLink}
                      // to={"https://www.facebook.com/people/tedxplateaumontroyal/61565416427305/"}
                      cursor="pointer"
                      // target="_blank"
                      rel="noopener noreferrer"
                      fontSize={subTitleFontSize}
                      color={useColorModeValue("gray.800", "#777")}
                      _hover={{ color: useColorModeValue("#fff", "#fff") }}
                    >
                      Facebook
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          )}
          <Flex
            className="footer__brand"
            marginTop={{ base: "5rem", lg: "1rem" }}
            textAlign="center"
            maxWidth="230px"
            order={{ lg: "-1" }}
            flexDir="column"
            alignSelf="start"
            marginRight={0}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Link>
              <Image
                className="hero__image"
                src={tedxImg}
                width={{ lg: "50rem" }}
                marginBottom="1rem"
              />
            </Link>
            <Text
              className="p footer__copyright"
              marginTop="0"
              fontSize={{ base: "1.8rem", lg: "1.7rem" }}
              color={useColorModeValue("black", "#fff")}
              opacity="0.5"
              _dark={{ opacity: "0.3" }}
            >
              Copyright 2024 TEDxLakeheadU
            </Text>
          </Flex>
        </Grid>
      </Box>
      <Stack
        display="flex"
        flexDirection="row"
        spacing={6}
        justifyContent={"center"}
        marginTop={{ base: "5rem", lg: "2rem" }}
      >
        <Box
          as="a"
          href="https://www.linkedin.com/company/tedxlakeheadu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            aria-label="linkedin"
            variant="ghost"
            size="xl"
            icon={<BsLinkedin size="20px" />}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.200"),
              color: useColorModeValue("gray.200", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
        <Box
          as="a"
          // href="https://x.com/TEDxPlateauMR?t=O9yzFdCp7zgNZ7eXTYr5mw&s=35"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            aria-label="twitter"
            variant="ghost"
            size="xl"
            icon={<BsTwitter size="20px" />}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.200"),
              color: useColorModeValue("gray.200", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
        <Box
          as="a"
          href="https://www.instagram.com/tedxlakeheadu2025?igsh=eW5pcTNsanppZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            aria-label="instagram"
            variant="ghost"
            size="xl"
            icon={<BsInstagram size="20px" />}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.200"),
              color: useColorModeValue("gray.200", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
        <Box
          as="a"
          // href="https://www.facebook.com/people/tedxplateaumontroyal/61565416427305/"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            aria-label="facebook"
            variant="ghost"
            size="xl"
            icon={<BsFacebook size="20px" />}
            _hover={{
              bg: useColorModeValue("gray.700", "gray.200"),
              color: useColorModeValue("gray.200", "gray.700"),
            }}
            isRound
            boxSize="4rem"
          />
        </Box>
      </Stack>
    </Box>
  );
};

// export default BlockFooter;
