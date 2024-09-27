import React, { useEffect, useState } from 'react';
import {
    Box,
    HStack,
    Text,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react';

export const BlockScrollingText: React.FC = () => {
    const [offset, setOffset] = useState(0);
    const textColor = useColorModeValue("#FF0000", "#FF0000");
    const textSize = useBreakpointValue({ base: "2rem", lg: "4.5rem" });

    const elements = new Array(20).fill(null);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg={useColorModeValue("white", "black")}
            height={{ base:"12rem", lg: "25rem" }}
            overflow="hidden"
        >
            {elements.map((_, index) => (
                <HStack key={index} paddingX="2.5rem">
                    <Text
                        as="div"
                        color={useColorModeValue("black", "white")}
                        fontSize={ textSize }
                        // fontFamily="'Englebert', cursive"
                        fontFamily="'Acme', sans-serif"
                        // fontFamily="Chicle', serif"
                        style={{
                            transform: `translateX(${offset * -1}px)`, // Adjust factor here for faster horizontal movement
                            transition: 'transform 0.6s ease-out', // Smooth transition
                        }}
                        paddingX="2rem"
                    >
                        ABOUT
                    </Text>
                    <Text
                        as="div"
                        color={textColor}
                        fontSize={ textSize }
                        fontWeight="bold"
                        // fontFamily="'Englebert', cursive"
                        // fontFamily="Chicle', serif"
                        fontFamily="'Acme', sans-serif"
                        style={{
                            transform: `translateX(${offset * -1}px)`, // Adjust factor here for faster horizontal movement
                            transition: 'transform 0.6s ease-out', // Smooth transition
                        }}
                    >
                        TEDxAveLorne
                    </Text>
                </HStack>
            ))}
        </Box>
    );
};

// import React, { useEffect, useState } from 'react';
// import {
//     Box,
//     HStack,
//     Text,
//     useBreakpointValue,
//     useColorModeValue
// } from '@chakra-ui/react';

// export const BlockScrollingText: React.FC = () => {
//     const [offset, setOffset] = useState(0);
//     const textColor = useColorModeValue("#FF0000", "#FF0000");
//     const textSize = useBreakpointValue({ base: "2rem", lg: "4.5rem" });

//     const elements = new Array(20).fill(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             setOffset(window.pageYOffset);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <Box
//             position="relative"
//             display="flex"
//             flexDirection="column"
//             justifyContent="center"
//             alignItems="center"
//             bg={useColorModeValue("white", "black")}
//             height={{ base: "24rem", lg: "30rem" }}
//             overflow="hidden"
//         >
//             {/* First Row */}
//             <Box
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 width="100%"
//             >
//                 {elements.map((_, index) => (
//                     <HStack key={index} paddingX="2.5rem">
//                         <Text
//                             as="div"
//                             color={useColorModeValue("black", "white")}
//                             fontSize={textSize}
//                             fontFamily="'Acme', sans-serif"
//                             style={{
//                                 transform: `translateX(${offset * -1}px)`,
//                                 transition: 'transform 0.6s ease-out',
//                             }}
//                             paddingX="2rem"
//                         >
//                             ABOUT
//                         </Text>
//                         <Text
//                             as="div"
//                             color={textColor}
//                             fontSize={textSize}
//                             fontWeight="bold"
//                             fontFamily="'Acme', sans-serif"
//                             style={{
//                                 transform: `translateX(${offset * -1}px)`,
//                                 transition: 'transform 0.6s ease-out',
//                             }}
//                         >
//                             TEDxAveLorne
//                         </Text>
//                     </HStack>
//                 ))}
//             </Box>
//             {/* Second Row */}
//             <Box
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 width="100%"
//                 mt="4rem" // Add some margin to separate the rows
//             >
//                 {elements.map((_, index) => (
//                     <HStack key={index} paddingX="2.5rem">
//                         <Text
//                             as="div"
//                             color={useColorModeValue("black", "white")}
//                             fontSize={textSize}
//                             fontFamily="'Acme', sans-serif"
//                             style={{
//                                 transform: `translateX(${offset * 1}px)`, // Opposite direction
//                                 transition: 'transform 0.6s ease-out',
//                             }}
//                             paddingX="2rem"
//                         >
//                             ABOUT
//                         </Text>
//                         <Text
//                             as="div"
//                             color={textColor}
//                             fontSize={textSize}
//                             fontWeight="bold"
//                             fontFamily="'Acme', sans-serif"
//                             style={{
//                                 transform: `translateX(${offset * 1}px)`, // Opposite direction
//                                 transition: 'transform 0.6s ease-out',
//                             }}
//                         >
//                             TEDxAveLorne
//                         </Text>
//                     </HStack>
//                 ))}
//             </Box>
//         </Box>
//     );
// };

// export default BlockScrollingText;
