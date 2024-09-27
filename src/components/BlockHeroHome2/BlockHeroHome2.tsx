// import React from 'react';
// import { Box, Image, Flex } from '@chakra-ui/react';
// import { hero1 } from "../../assets";

// const BlockHeroHome2: React.FC = () => {


//     return (
//         <Box
//         // className="mountains"
//         backgroundImage={hero1}
//         backgroundSize={{ base: "contain", lg: "contain" }}
//         // backgroundPosition="bottom"
//         // backgroundRepeat={{ base: "no-repeat", lg: "initial" }}
//         width="100%"
//         height="100%"
//         position="absolute"
//         top={0}
//         zIndex={4}
//       ></Box>
//     );
// };

// export default BlockHeroHome2;



import React from 'react';
import { Box, Image, Flex, Text, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { hero1 } from "../../assets";
import { ActionId } from 'kbar';
import Typed from "react-typed";

const BlockHeroHome2: React.FC = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    const isLightMode = colorMode === "light";

    const lightColor = useColorModeValue("transparent", "transparent");
    const darkColor = useColorModeValue("black", "black");
    const strokeColor = useColorModeValue("black", "white");

    const sx = {
        WebkitTextStroke: `5px ${strokeColor}`,
        textStroke: `1px ${darkColor}`,
        color: lightColor,
    };

    return (
        <Box
            position="relative"
            width="100%"
            height="100vh"
            overflow="hidden"
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                // bg="black"
                opacity="0.5"
            />

            <Image
                src={hero1}
            // filter="blur(3px)"
            />

            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                // width="60rem"
                width="100%"
                // height="60rem"
                height="30rem"
                bg={isLightMode ? "white" : "blue.700"}
                filter="blur(3px)"
                opacity="0.3"
                zIndex={5}
            // borderRadius="100%"
            />

            {/* <Text
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                fontSize="10rem"
                fontWeight="bold"
                color="transparent"
                sx={sx}
                textTransform="uppercase"
                zIndex={6}
                letterSpacing={10}
                // fontFamily="Chicle', serif"
                fontFamily="'Acme', sans-serif"
            // blur={"0.5"}
            >
                mosaical
            </Text> */}

            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                fontSize="10rem"
                fontWeight="bold"
                color="transparent"
                sx={sx}
                textTransform="uppercase"
                zIndex={6}
                letterSpacing={10}
                fontFamily="'Acme', sans-serif"
            >
                <Typed
                    strings={["mosaical"]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                    backDelay={3000}
                    showCursor
                />
            </Box>
        </Box>
    );
};

export default BlockHeroHome2;