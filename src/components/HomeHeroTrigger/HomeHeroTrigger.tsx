// import React, { useEffect, useRef } from 'react';
// import { Box, Image, Flex, Text, VStack, Heading } from '@chakra-ui/react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ted } from "../../assets";

// gsap.registerPlugin(ScrollTrigger);

// const HomeHeroTrigger: React.FC = () => {
//     const contentHolderRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (contentHolderRef.current) {
//             const contentHolderHeight = contentHolderRef.current.offsetHeight;
//             const imgHolderHeight = window.innerHeight;
//             const additionalScrollHeight = window.innerHeight;

//             const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight;
//             document.body.style.height = `${totalBodyHeight}px`;

//             ScrollTrigger.create({
//                 trigger: contentHolderRef.current,
//                 start: '-0.1% top',
//                 end: 'bottom bottom',
//                 onEnter: () => {
//                     gsap.set(contentHolderRef.current, { position: 'absolute', top: '195%' });
//                 },
//                 onLeaveBack: () => {
//                     gsap.set(contentHolderRef.current, { position: 'fixed', top: '0' });
//                 },
//             });

//             gsap.to('.header .letters:first-child', {
//                 x: () => -innerWidth * 3,
//                 scale: 10,
//                 ease: 'power2.inOut',
//                 scrollTrigger: {
//                     start: 'top top',
//                     end: '+=200%',
//                     scrub: 1,
//                 },
//             });

//             gsap.to('.header .letters:last-child', {
//                 x: () => innerWidth * 3,
//                 scale: 10,
//                 ease: 'power2.inOut',
//                 scrollTrigger: {
//                     start: 'top top',
//                     end: '+=200%',
//                     scrub: 1,
//                 },
//             });

//             gsap.to('.img-holder', {
//                 rotation: 0,
//                 clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//                 ease: 'power2.inOut',
//                 scrollTrigger: {
//                     start: 'top top',
//                     end: '+=200%',
//                     scrub: 1,
//                 },
//             });

//             gsap.to('.img-holder img', {
//                 scale: 1,
//                 ease: 'power2.inOut',
//                 scrollTrigger: {
//                     start: 'top top',
//                     end: '+=200%',
//                     scrub: 1,
//                 },
//             });
//         }
//     }, []);

//     return (
//         <Box>
//             <Flex
//                 className="header"
//                 position="fixed"
//                 top="50%"
//                 left="50%"
//                 transform="translate(-50%, -50%)"
//                 width="100%"
//                 zIndex="2"
//             >
//                 <Flex className="letters" flex="1" textTransform="uppercase">
//                     {['p', 'l', 'a', 't', 'e', 'a', 'u'].map((letter, index) => (
//                         <Box
//                             key={index}
//                             display="flex"
//                             flex="1"
//                             fontSize="8rem"
//                             fontWeight="400"
//                             color="#000"
//                             textAlign="center"
//                         >
//                             {letter}
//                         </Box>
//                     ))}
//                 </Flex>
//                 <Flex className="letters" flex="1" textTransform="uppercase">
//                     {['m', 'o', 'n', 't', 'r', 'o', 'y', 'a', 'l'].map((letter, index) => (
//                         <Box
//                             key={index}
//                             display="flex"
//                             flex="1"
//                             fontSize="8rem"
//                             fontWeight="400"
//                             color="#000"
//                             textAlign="center"
//                         >
//                             {letter}
//                         </Box>
//                     ))}
//                 </Flex>
//             </Flex>

//             <Box
//                 ref={contentHolderRef}
//                 className="website-content"
//                 position="fixed"
//                 top="0"
//                 width="100%"
//                 minHeight="100vh"
//             >
//                 <Box
//                     className="img-holder"
//                     position="relative"
//                     top="0"
//                     width="100%"
//                     height="100vh"
//                     bg="#fff"
//                     clipPath="polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)"
//                     transform="rotate(30deg)"
//                 >
//                     <Image src={ted} alt="Hero" position="relative" transform="scale(2)" />
//                 </Box>

//                 <Box
//                     className="content-holder"
//                     position="relative"
//                     top="-5px"
//                     width="100%"
//                     bg="#000"
//                     color="#fff"
//                     p="1em"
//                 >
//                     <VStack spacing="2em">
//                         <Box className="row">
//                             <Heading as="h1" fontSize="80px" fontWeight="400" textTransform="uppercase" letterSpacing="-0.02em">
//                                 History
//                             </Heading>
//                         </Box>

//                         {['./img-1.jpg', './img-2.jpg', './img-3.jpg'].map((src, index) => (
//                             <Flex key={index} className="row">
//                                 <Box
//                                     className="img"
//                                     w="200px"
//                                     h="275px"
//                                     position="relative"
//                                     left={index === 0 ? '50%' : index === 1 ? '15%' : '70%'}
//                                 >
//                                     <Image src={src} alt={`Image ${index + 1}`} />
//                                 </Box>
//                             </Flex>
//                         ))}

//                         <Box className="row">
//                             <Text fontSize="18px" fontWeight="400" lineHeight="1.5" width="50%">
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit corrupti assumenda maiores, illum
//                                 repudiandae hic dolore pariatur voluptates necessitatibus incidunt eos eveniet, doloremque sequi, facilis
//                                 saepe harum reprehenderit non exercitationem quisquam libero facere praesentium! Consequuntur rem
//                                 voluptas perferendis veniam neque fuga natus, modi aut? Deleniti sequi soluta nobis assumenda.
//                             </Text>
//                         </Box>

//                         <Box className="row" textAlign="center" width="100%">
//                             <Text
//                                 fontSize="18px"
//                                 fontWeight="400"
//                                 lineHeight="1.5"
//                                 width="50%"
//                                 position="relative"
//                                 left="30%"
//                                 my="4em"
//                             >
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, beatae? Quae similique illo iusto
//                                 dignissimos non nulla dolore. Praesentium, repellendus!
//                             </Text>
//                         </Box>
//                     </VStack>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };


// export default HomeHeroTrigger;

// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------

import React, { useEffect, useRef } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hero2 } from "../../assets";

gsap.registerPlugin(ScrollTrigger);

const HomeHeroTrigger: React.FC = () => {
    const contentHolderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentHolderRef.current) {
            const contentHolderHeight = contentHolderRef.current.offsetHeight;
            const imgHolderHeight = window.innerHeight;
            const additionalScrollHeight = window.innerHeight;

            const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight;
            document.body.style.height = `${totalBodyHeight}px`;

            ScrollTrigger.create({
                trigger: contentHolderRef.current,
                start: '-0.1% top',
                end: 'bottom bottom',
                pin: true,
                onEnter: () => {
                    gsap.set(contentHolderRef.current, { position: 'absolute', top: '195%' });
                },
                onLeaveBack: () => {
                    gsap.set(contentHolderRef.current, { position: 'fixed', top: '0' });
                },
            });

            gsap.to('.header .letters:first-child', {
                x: () => -innerWidth * 3,
                scale: 10,
                ease: 'power2.inOut',
                scrollTrigger: {
                    start: 'top top',
                    end: '+=200%',
                    scrub: 1,
                },
            });

            gsap.to('.header .letters:last-child', {
                x: () => innerWidth * 3,
                scale: 10,
                ease: 'power2.inOut',
                scrollTrigger: {
                    start: 'top top',
                    end: '+=200%',
                    scrub: 1,
                },
            });

            gsap.to('.img-holder', {
                rotation: 0,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'power2.inOut',
                scrollTrigger: {
                    start: 'top top',
                    end: '+=200%',
                    scrub: 1,
                },
            });

            gsap.to('.img-holder img', {
                scale: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    start: 'top top',
                    end: '+=200%',
                    scrub: 1,
                },
            });
        }
    }, []);

    return (
        <Box bg={"black"}>
            <Flex
                className="header"
                position="fixed"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                width="100%"
                zIndex="2"
            >
                <Flex
                    className="letters"
                    flex="1"
                    textTransform="uppercase"
                    justifyContent="space-between"
                    paddingX="10rem"
                >
                    {['m', 'o', 's', 'a'].map((letter, index) => (
                        <Box
                            key={index}
                            display="flex"
                            // flex="1"
                            // justifyContent="space-between"
                            fontSize="15rem"
                            fontWeight="400"
                            fontFamily="'Acme', sans-serif"
                            color="#fff"
                            textAlign="center"
                        >
                            {letter}
                        </Box>
                    ))}
                </Flex>
                <Flex
                    className="letters"
                    flex="1"
                    textTransform="uppercase"
                    justifyContent="space-between"
                    paddingX="10rem"
                >
                    {['i', 'c', 'a', 'l'].map((letter, index) => (
                        <Box
                            key={index}
                            display="flex"
                            // flex="1"
                            // justifyContent="space-between"
                            flex=""
                            fontSize="15rem"
                            fontWeight="400"
                            fontFamily="'Acme', sans-serif"
                            color="#fff"
                            textAlign="center"
                        >
                            {letter}
                        </Box>
                    ))}
                </Flex>
            </Flex>

            <Box
                ref={contentHolderRef}
                className="website-content"
                position="fixed"
                top="0"
                width="100%"
                minHeight="100vh"
            >
                <Box
                    className="img-holder"
                    position="relative"
                    top="0"
                    width="100%"
                    height="100vh"
                    bg="#fff"
                    clipPath="polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)"
                    transform="rotate(45deg)"
                >
                    <Image
                        src={hero2}
                        alt="Hero"
                        position="relative"
                        transform="scale(1)"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default HomeHeroTrigger;


// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------

// import React, { useEffect, useRef } from 'react';
// import { Box, Image, Flex, Text, VStack, Heading } from '@chakra-ui/react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ted } from "../../assets";

// gsap.registerPlugin(ScrollTrigger);

// const HomeHeroTrigger: React.FC = () => {
//     const contentHolderRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (contentHolderRef.current) {
//             const contentHolderHeight = contentHolderRef.current.offsetHeight;
//             const imgHolderHeight = window.innerHeight;
//             const additionalScrollHeight = window.innerHeight;

//             const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight;
//             document.body.style.height = `${totalBodyHeight}px`;

//             ScrollTrigger.create({
//                 trigger: contentHolderRef.current,
//                 start: '-0.1% top',
//                 end: 'bottom bottom',
//                 onEnter: () => {
//                     gsap.set(contentHolderRef.current, { position: 'absolute', top: '195%' });
//                 },
//                 onLeaveBack: () => {
//                     gsap.set(contentHolderRef.current, { position: 'fixed', top: '0' });
//                 },
//             });

//             gsap.to('.header .letters:first-child', {
//                 x: () => -innerWidth * 3,
//                 scale: 10,
//                 ease: 'power2.inOut',
//                 scrollTrigger: {
//                     start: 'top top',
//                     end: '+=200%',
//                     scrub: 1,
//                 },
//             });

//             gsap.to('.header .letters:last-child', {
//                 x: () => innerWidth * 3,
//                 scale: 10,
//                 ease: 'power2.inOut',
//                 scrollTrigger: {
//                     start: 'top top',
//                     end: '+=200%',
//                     scrub: 1,
//                 },
//             });

//             gsap.to('.img-holder', {
//                 rotation: 0,
//                 clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//                 ease: 'power2.inOut',
//                 scrollTrigger: {
//                     start: 'top top',
//                     end: '+=200%',
//                     scrub: 1,
//                 },
//             });

//             gsap.to('.img-holder img', {
//                 scale: 1,
//                 ease: 'power2.inOut',
//                 scrollTrigger: {
//                     start: 'top top',
//                     end: '+=200%',
//                     scrub: 1,
//                 },
//             });
//         }
//     }, []);

//     return (
//         <Box>
//             <Flex
//                 className="header"
//                 position="fixed"
//                 top="50%"
//                 left="50%"
//                 transform="translate(-50%, -50%)"
//                 width="100%"
//                 zIndex="2"
//             >
//                 <Flex className="letters" flex="1" textTransform="uppercase">
//                     {['p', 'l', 'a', 't', 'e', 'a', 'u'].map((letter, index) => (
//                         <Box
//                             key={index}
//                             display="flex"
//                             flex="1"
//                             fontSize="8rem"
//                             fontWeight="400"
//                             color="#000"
//                             textAlign="center"
//                         >
//                             {letter}
//                         </Box>
//                     ))}
//                 </Flex>
//                 <Flex className="letters" flex="1" textTransform="uppercase">
//                     {['m', 'o', 'n', 't', 'r', 'o', 'y', 'a', 'l'].map((letter, index) => (
//                         <Box
//                             key={index}
//                             display="flex"
//                             flex="1"
//                             fontSize="8rem"
//                             fontWeight="400"
//                             color="#000"
//                             textAlign="center"
//                         >
//                             {letter}
//                         </Box>
//                     ))}
//                 </Flex>
//             </Flex>

//             <Box
//                 ref={contentHolderRef}
//                 className="website-content"
//                 position="fixed"
//                 top="0"
//                 width="100%"
//                 minHeight="100vh"
//             >
//                 <Box
//                     className="img-holder"
//                     position="relative"
//                     top="0"
//                     width="100%"
//                     height="100vh"
//                     bg="#fff"
//                     clipPath="polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)"
//                     transform="rotate(30deg)"
//                 >
//                     <Image src={ted} alt="Hero" position="relative" transform="scale(2)" />
//                 </Box>

//                 <Box
//                     className="content-holder"
//                     position="relative"
//                     top="0"
//                     width="100%"
//                     bg="#000"
//                     color="#fff"
//                     p="1em"
//                     zIndex="1" // Ensure content-holder appears above the image
//                 >
//                     <VStack spacing="2em">
//                         <Box className="row">
//                             <Heading as="h1" fontSize="80px" fontWeight="400" textTransform="uppercase" letterSpacing="-0.02em">
//                                 History
//                             </Heading>
//                         </Box>

//                         {['./img-1.jpg', './img-2.jpg', './img-3.jpg'].map((src, index) => (
//                             <Flex key={index} className="row">
//                                 <Box
//                                     className="img"
//                                     w="200px"
//                                     h="275px"
//                                     position="relative"
//                                     left={index === 0 ? '50%' : index === 1 ? '15%' : '70%'}
//                                 >
//                                     <Image src={src} alt={`Image ${index + 1}`} />
//                                 </Box>
//                             </Flex>
//                         ))}

//                         <Box className="row">
//                             <Text fontSize="18px" fontWeight="400" lineHeight="1.5" width="50%">
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit corrupti assumenda maiores, illum
//                                 repudiandae hic dolore pariatur voluptates necessitatibus incidunt eos eveniet, doloremque sequi, facilis
//                                 saepe harum reprehenderit non exercitationem quisquam libero facere praesentium! Consequuntur rem
//                                 voluptas perferendis veniam neque fuga natus, modi aut? Deleniti sequi soluta nobis assumenda.
//                             </Text>
//                         </Box>

//                         <Box className="row" textAlign="center" width="100%">
//                             <Text
//                                 fontSize="18px"
//                                 fontWeight="400"
//                                 lineHeight="1.5"
//                                 width="50%"
//                                 position="relative"
//                                 left="30%"
//                                 my="4em"
//                             >
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, beatae? Quae similique illo iusto
//                                 dignissimos non nulla dolore. Praesentium, repellendus!
//                             </Text>
//                         </Box>
//                     </VStack>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default HomeHeroTrigger;




