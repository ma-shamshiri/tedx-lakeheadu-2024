import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Link,
  useColorModeValue,
  ResponsiveValue,
} from "@chakra-ui/react";
import Typed from "react-typed";

interface HeroEventCardProps {
  isHovered: boolean;
  handleHover: () => void;
  handleUnhover: () => void;
  eventPageHref: string;
  eventImageHref: string;
  titleText: string;
  subtitleText: string;
  topBorderColor: string;
  bottomBorderColor: string;
  rightBorderColor: string;
  leftBorderColor: string;
  topBorderPosition: string;
  bottomBorderPosition: string;
  rightBorderPosition: string;
  leftBorderPosition: string;
  topBorderWidth: string;
  bottomBorderWidth: string;
  rightBorderWidth: string;
  leftBorderWidth: string;
  topBorderHeight: string;
  bottomBorderHeight: string;
  rightBorderHeight: string;
  leftBorderHeight: string;
  marginRight?: ResponsiveValue<string>;
}

const HeroEventCard: React.FC<HeroEventCardProps> = ({
  isHovered,
  handleHover,
  handleUnhover,
  eventPageHref,
  eventImageHref,
  titleText,
  subtitleText,
  topBorderColor,
  bottomBorderColor,
  rightBorderColor,
  leftBorderColor,
  topBorderPosition,
  bottomBorderPosition,
  rightBorderPosition,
  leftBorderPosition,
  topBorderWidth,
  bottomBorderWidth,
  rightBorderWidth,
  leftBorderWidth,
  topBorderHeight,
  bottomBorderHeight,
  rightBorderHeight,
  leftBorderHeight,
  marginRight,
}) => {
  return (
    <>
      <Link
        className="event2024Link"
        as={RouterLink}
        to={eventPageHref}
        // target="_blank"
        cursor="pointer"
        style={{ textDecoration: "none" }}
      >
        <Box
          //   boxShadow="0 0 10px 1px black"
          //   boxShadow="5px 5px 30px 0px black"
          //   boxShadow="0px 2px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.1), -1px 1px 3px 0.5px "
          boxShadow={`0px 2px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 1px 3px 0.5px rgba(0, 0, 0, 0.8)`}
          className="plan"
          width={{
            sm: "15rem",
            base: "15rem",
            md: "26rem",
            lg: "30rem",
            xl: "30rem",
          }}
          height={{
            sm: "15rem",
            base: "15rem",
            md: "26rem",
            lg: "30rem",
            xl: "30rem",
          }}
          borderRadius="9px"
          overflow="hidden"
          position="relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleUnhover}
          marginRight={marginRight}
        // transform="scale(1.1)"
        //   _hover={{ transform: "scale(1.02)" }}
        //   transition="transform 0.15s ease-out"
        >
          <Box
            className="topBorder"
            position="absolute"
            top={topBorderPosition}
            left={"0"}
            width={topBorderWidth}
            height={topBorderHeight}
            style={{
              background: topBorderColor,
              transform: `scaleX(${isHovered ? 1 : 0})`,
              transformOrigin: "left",
              transition: "transform 0.5s ease-in-out",
            }}
          // style={{
          //   background: topBorderColor,
          //   opacity: isHovered ? 1 : 0,
          //   transition: "opacity 0.3s ease-in-out",
          // }}
          ></Box>
          <Box
            className="bottomBorder"
            position="absolute"
            bottom={bottomBorderPosition}
            left={"0"}
            width={bottomBorderWidth}
            height={bottomBorderHeight}
            style={{
              background: bottomBorderColor,
              transform: `scaleX(${isHovered ? 1 : 0})`,
              transformOrigin: "right",
              transition: "transform 0.5s ease-in-out",
            }}
          // style={{
          //   background: bottomBorderColor,
          //   opacity: isHovered ? 1 : 0,
          //   transition: "opacity 0.3s ease-in-out",
          // }}
          ></Box>
          <Box
            className="leftBorder"
            position="absolute"
            left={leftBorderPosition}
            width={leftBorderWidth}
            height={leftBorderHeight}
            style={{
              background: leftBorderColor,
              transform: `scaleY(${isHovered ? 1 : 0})`,
              transformOrigin: "top",
              transition: "transform 0.5s ease-in-out",
            }}
          // style={{
          //   background: leftBorderColor,
          //   opacity: isHovered ? 1 : 0,
          //   transition: "opacity 0.3s ease-in-out",
          // }}
          ></Box>
          <Box
            className="rightBorder"
            position="absolute"
            right={rightBorderPosition}
            width={rightBorderWidth}
            height={rightBorderHeight}
            style={{
              background: rightBorderColor,
              transform: `scaleY(${isHovered ? 1 : 0})`,
              transformOrigin: "bottom",
              transition: "transform 0.5s ease-in-out",
            }}
          // height={isHovered ? rightBorderHeight : 0}
          // style={{
          //   background: rightBorderColor,
          //   opacity: isHovered ? 1 : 0,
          //   transition: "opacity 0.3s ease-in-out",
          // }}
          // style={{
          //   background: rightBorderColor,
          //   transition: "height 0.3s ease-in-out",
          // }}
          ></Box>
          <Image
            src={eventImageHref}
            width="100%"
            height={{ base:"60%", md: "60%", lg: "62%", xl: "57%" }}
            //   objectFit="inherit"
            //   borderTopRadius="7px"
            paddingTop={"1rem"}
            paddingRight={"1rem"}
            paddingLeft={"1rem"}
            borderRadius="9px 9px 0 0"
          />
          <Box
            className="card__header"
            // bg="linear-gradient(to bottom, #6322BF, #F226AA)"
            // bg={useColorModeValue("#CCCC4D", "gray.800")}
            bg={useColorModeValue("gray.800", "gray.800")}
            p={{
              sm: "0.8rem",
              base: "0.8rem",
              md: "2.1rem",
              lg: "2.4rem",
              xl: "3.1rem",
            }}
            borderBottomRadius="9px"
            marginBottom={"1rem"}
            marginRight={"1rem"}
            marginLeft={"1rem"}
          >
            <Text
              className="plan__name"
              // color={useColorModeValue("gray.700", "gray.200")}
              color={useColorModeValue("gray.200", "gray.200")}
              margin="0"
              fontSize={{
                sm: "1rem",
                base: "1rem",
                md: "1.5rem",
                lg: "1.6rem",
                xl: "1.8rem",
              }}
              fontWeight="bold"
              textAlign="center"
            >
              {titleText}
            </Text>
            {/* <Text
              className="plan__name"
              color={useColorModeValue("gray.800", "gray.200")}
              margin="0"
              fontSize={{
                sm: "1.3rem",
                base: "1.3rem",
                md: "2rem",
                lg: "2.6rem",
                xl: "2.4rem",
              }}
              fontWeight="bold"
              textAlign="center"
            >
              {subtitleText}
            </Text> */}
            <Box
              // color={useColorModeValue("black", "#FF3A2D")}
              color={useColorModeValue("#FF3A2D", "#FF3A2D")}
              margin="0"
              fontSize={{
                sm: "0.9rem",
                base: "0.9rem",
                md: "1.7rem",
                lg: "1.8rem",
                xl: "1.8rem",
              }}
              fontWeight="bold"
              textAlign="center"
            >
              <Typed
                strings={[subtitleText]}
                typeSpeed={50}
                backSpeed={20}
                loop
                backDelay={3000}
              />
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default HeroEventCard;
