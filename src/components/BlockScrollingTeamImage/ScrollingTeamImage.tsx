// import React, { useEffect, useState } from 'react';
// import {
//     Box,
//     HStack,
//     Image,
//     useColorModeValue
// } from '@chakra-ui/react';
// import { scrollingData, TeamMember } from './scrollingData';

// export const ScrollingTeamImage: React.FC = () => {
//     const [offset, setOffset] = useState(0);

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
//             justifyContent="center"
//             alignItems="center"
//             bg={useColorModeValue("white", "black")}
//             height={{ base: "12rem", lg: "25rem" }}
//             overflow="hidden"
//         >
//             {scrollingData.map((member: TeamMember) => (
//                 <HStack key={member.id} paddingX="2.5rem">
//                     <Box
//                         className='carousel_card'
//                         position="relative"
//                         width={{ base: "9rem", md: "20rem", lg: "12rem" }}
//                         height={{ base: "9rem", md: "20rem", lg: "12rem" }}
//                         borderRadius="100%"
//                         bg="white"
//                         border="2px solid"
//                         borderColor={useColorModeValue("black", "white")}
//                         _hover={{ textDecoration: "none" }}
//                         style={{
//                             transform: `translateX(${offset * -1}px)`, // Adjust factor here for faster horizontal movement
//                             transition: 'transform 0.6s ease-out', // Smooth transition
//                         }}
//                         overflow="hidden"
//                     >
//                         <Image
//                             src={member.imageUrl}
//                             objectFit="cover"
//                         />
//                     </Box>
//                 </HStack>
//             ))}
//         </Box>
//     );
// };

import React, { useEffect, useState } from 'react';
import {
    Box,
    HStack,
    Image,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react';
import {
    TeamMember,
    scrollingDataFirstRow,
    scrollingDataSecondRow,
    scrollingDataThirdRow
} from './scrollingData';

const ScrollingTeamImage: React.FC = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getImageSize = (index: number) => {
        const baseSize = index % 2 === 0 ? "10rem" : "12rem";
        const mdSize = index % 2 === 0 ? "10rem" : "15rem";
        const lgSize = index % 2 === 0 ? "17rem" : "22rem";

        return { baseSize, mdSize, lgSize };
    };

    return (
        <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg={useColorModeValue("white", "black")}
            overflow="hidden"
        >
            {/* First Row */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
            >
                {scrollingDataFirstRow.map((member: TeamMember, index: number) => {

                    const { baseSize, mdSize, lgSize } = getImageSize(index);

                    return (
                        <HStack key={member.id} paddingX="2.5rem">
                            <Box
                                className='carousel_card'
                                position="relative"
                                width={useBreakpointValue({
                                    base: baseSize,
                                    md: mdSize,
                                    lg: lgSize,
                                })}
                                height={useBreakpointValue({
                                    base: baseSize,
                                    md: mdSize,
                                    lg: lgSize,
                                })}
                                borderRadius="100%"
                                bg="white"
                                border="2px solid"
                                borderColor={useColorModeValue("black", "white")}
                                _hover={{ textDecoration: "none" }}
                                style={{
                                    transform: `translateX(${offset * -1}px)`, // Adjust factor here for faster horizontal movement
                                    transition: 'transform 0.6s ease-out', // Smooth transition
                                }}
                                overflow="hidden"
                            >
                                <Image
                                    src={member.imageUrl}
                                    objectFit="cover"
                                />
                            </Box>
                        </HStack>
                    );
                })}
            </Box>

            {/* Second Row */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                marginTop="4rem"
            >
                {scrollingDataSecondRow.map((member: TeamMember, index: number) => {

                    const { baseSize, mdSize, lgSize } = getImageSize(index);

                    return (
                        <HStack key={member.id} paddingX="2.5rem">
                            <Box
                                className='carousel_card'
                                position="relative"
                                width={useBreakpointValue({
                                    base: baseSize,
                                    md: mdSize,
                                    lg: lgSize,
                                })}
                                height={useBreakpointValue({
                                    base: baseSize,
                                    md: mdSize,
                                    lg: lgSize,
                                })}
                                borderRadius="100%"
                                bg="white"
                                border="2px solid"
                                borderColor={useColorModeValue("black", "white")}
                                _hover={{ textDecoration: "none" }}
                                style={{
                                    transform: `translateX(${offset * 1}px)`, // Adjust factor here for faster horizontal movement
                                    transition: 'transform 0.6s ease-out', // Smooth transition
                                }}
                                overflow="hidden"
                            >
                                <Image
                                    src={member.imageUrl}
                                    objectFit="cover"
                                />
                            </Box>
                        </HStack>
                    );
                })}
            </Box>

            {/* Third Row */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                marginTop="4rem"
            >
                {scrollingDataThirdRow.map((member: TeamMember, index: number) => {

                    const { baseSize, mdSize, lgSize } = getImageSize(index);

                    return (
                        <HStack key={member.id} paddingX="2.5rem">
                            <Box
                                className='carousel_card'
                                position="relative"
                                width={useBreakpointValue({
                                    base: baseSize,
                                    md: mdSize,
                                    lg: lgSize,
                                })}
                                height={useBreakpointValue({
                                    base: baseSize,
                                    md: mdSize,
                                    lg: lgSize,
                                })}
                                borderRadius="100%"
                                bg="white"
                                border="2px solid"
                                borderColor={useColorModeValue("black", "white")}
                                _hover={{ textDecoration: "none" }}
                                style={{
                                    transform: `translateX(${offset * -1}px)`,
                                    transition: 'transform 0.6s ease-out',
                                }}
                                overflow="hidden"
                            >
                                <Image
                                    src={member.imageUrl}
                                    objectFit="cover"
                                />
                            </Box>
                        </HStack>
                    );
                })}
            </Box>
        </Box>
    );
};

export default ScrollingTeamImage;
