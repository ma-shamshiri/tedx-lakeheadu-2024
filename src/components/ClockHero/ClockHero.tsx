import React, { useRef, useEffect } from "react";
import "./styles.css";
import { amin } from "../../assets";
import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import Typed from "react-typed";

gsap.registerPlugin(ScrollTrigger);

const ClockHero = () => {
    const clockContainer = useRef<HTMLDivElement | null>(null);
    const stickyRef = useRef<HTMLDivElement | null>(null);
    const handContainerRef = useRef<HTMLDivElement | null>(null);
    const handRef = useRef<HTMLDivElement | null>(null);
    const handImageRef = useRef<HTMLImageElement | null>(null);
    const introRef = useRef<HTMLDivElement | null>(null);
    const h1ElementRef = useRef<HTMLHeadingElement | null>(null);
    const introCopyRef = useRef<HTMLDivElement | null>(null);
    const websiteContentRef = useRef<HTMLDivElement | null>(null);
    const expandingSectionRef = useRef<HTMLDivElement | null>(null);

    const introHeaders = [
        "<span>Time to</span> Spark Curiosity",
        "<span>Time to</span> Meet the Minds",
        "<span>Time to</span> Shape the Future",
    ];

    useGSAP(
        () => {
            let currentCycle = -1;
            let imageRevealed = false;

            const updateHeaderText = () => {
                if (h1ElementRef.current) {
                    h1ElementRef.current.innerHTML = introHeaders[Math.min(currentCycle, introHeaders.length - 1)];
                }
            };

            const pinnedHeight = window.innerHeight * 8;

            ScrollTrigger.create({
                trigger: stickyRef.current!,
                start: "top top",
                end: `+=${pinnedHeight}`,
                pin: true,
                pinSpacing: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const rotationProgress = Math.min((progress * 8) / 5, 1);
                    const totalRotation = rotationProgress * 1080 - 90;
                    const rotationInCycle = ((totalRotation + 90) % 360) - 90;
                    gsap.set(handContainerRef.current, { rotationZ: rotationInCycle });

                    const newCycle = Math.floor((totalRotation + 90) / 360);
                    if (newCycle !== currentCycle && newCycle >= 0 && newCycle < introHeaders.length) {
                        currentCycle = newCycle;
                        updateHeaderText();

                        if (newCycle === 3 && !imageRevealed) {
                            gsap.to(handImageRef.current, { opacity: 1, duration: 0.3 });
                            if (introCopyRef.current) {
                                gsap.to(introCopyRef.current.querySelectorAll("p"), {
                                    x: 0,
                                    opacity: 1,
                                    duration: 0.5,
                                    stagger: 0.1,
                                });
                            }
                            imageRevealed = true;
                        } else if (newCycle !== 3 && imageRevealed) {
                            gsap.to(handImageRef.current, { opacity: 0, duration: 0.3 });
                            if (introCopyRef.current) {
                                gsap.to(introCopyRef.current.querySelectorAll("p"), {
                                    x: 20,
                                    opacity: 0,
                                    duration: 0.5,
                                    stagger: 0.1,
                                });
                            }
                            imageRevealed = false;
                        }
                    }

                    if (progress <= 6 / 8) {
                        const animationProgress = Math.max(0, (progress - 5 / 8) / (1 / 8));
                        const newHeight = gsap.utils.interpolate(52.75, 100, animationProgress);
                        const newOpacity = gsap.utils.interpolate(1, 0, animationProgress);
                        gsap.set(handRef.current, { height: `${newHeight}%` });
                        gsap.set(introRef.current, { opacity: 1 });
                        if (h1ElementRef.current) {
                            gsap.set(h1ElementRef.current, { opacity: newOpacity });
                            const spanElement = h1ElementRef.current.querySelector("span");
                            if (spanElement) {
                                gsap.set(spanElement, { opacity: newOpacity });
                            }
                        }
                    } else {
                        gsap.set(introRef.current, { opacity: 0 });
                    }

                    if (progress <= 7 / 8) {
                        const scaleProgress = Math.max(0, (progress - 6 / 8) / (1 / 8));
                        const newScale = gsap.utils.interpolate(1, 20, scaleProgress);
                        gsap.set(handRef.current, { scale: newScale });
                    }

                    if (progress <= 7.5 / 8) {
                        const opacityProgress = Math.max(0, (progress - 7 / 8) / (0.5 / 8));
                        const newOpacity = gsap.utils.interpolate(1, 0, opacityProgress);
                        gsap.set(handRef.current, { opacity: newOpacity });
                    }

                    if (progress > 7.5 / 8) {
                        const revealProgress = (progress - 7.5 / 8) / (0.5 / 8);
                        const newOpacity = gsap.utils.interpolate(0, 1, revealProgress);
                        gsap.set(websiteContentRef.current, { opacity: newOpacity });
                    } else {
                        gsap.set(websiteContentRef.current, { opacity: 0 });
                    }

                    if (progress > 7.8 / 8) {
                        const expandProgress = (progress - 7.8 / 8) / (0.2 / 8);
                        const newHeight = gsap.utils.interpolate(0, 100, expandProgress);
                        gsap.set(expandingSectionRef.current, { height: `${newHeight}vh`, backgroundColor: "red" });
                    }
                },
            });

            updateHeaderText();

            return () => {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        },
        { scope: clockContainer }
    );

    return <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <Box
            width="100%"
            // height="100vh"
            // color="#fff"
            overflow="hidden"
        >
            <Box ref={clockContainer}>

                <Box
                    className="sticky"
                    ref={stickyRef}
                    width="100%"
                    height={{ base: "100vh", lg: "100vh" }}
                    bg={useColorModeValue("#fff", "#000")}
                >
                    {/* <Box
                        textAlign="center" padding="15rem 2rem" paddingBottom="7rem"
                        color={useColorModeValue("gray.900", "#16F8B6")}
                        fontSize={{ base: "2.5rem", lg: "2.7rem" }}
                        fontWeight="bold"
                        lineHeight="1.2"
                        pb={4}
                    >
                        <Typed
                            strings={["Every second brings us closer to inspiration!"]}
                            typeSpeed={40}
                            backSpeed={20}
                            loop
                            backDelay={3000}
                        />
                    </Box> */}

                    <Box
                        className="hand-container"
                        ref={handContainerRef}
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        width={{ base: "300px", md: "620px", lg: "800px" }}
                        height={{ base: "300px", md: "620px", lg: "800px" }}
                        display="flex"
                        justifyContent="center"
                        alignItems="flex-start"
                        transformOrigin="center center"
                        willChange="transform"
                        // zIndex={2}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <Box
                            className="hand"
                            ref={handRef}
                            position="absolute"
                            width="5.5%"
                            height="52.75%"
                            // bg="linear-gradient(to top,#833ab4, #fd1d1d);"
                            // bg="#fff"
                            bg="#CB0000"
                            borderRadius="1000px"
                            willChange="transform"
                            overflow="hidden"
                            opacity="1"
                        >
                            <Image
                                // src={amin}
                                alt=""
                                ref={handImageRef}
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                opacity="0"
                            />
                        </Box>
                    </Box>

                    <Box
                        className="intro"
                        ref={introRef}
                        position="absolute"
                        top="calc(50% - 20px)"
                        left={{ base: "1em", md: "8%", lg: "15%" }}
                        width={{ base: "80%", md: "32.5%", lg: "32.5%" }}
                    >
                        <Text ref={h1ElementRef}
                            fontSize={{ base: "1.3rem", md: "2rem", lg: "3rem" }}
                            fontWeight="bold"
                            color={useColorModeValue("#000", "#fff")}
                        >
                            <span>time to</span> Spark Curiosity
                        </Text>
                    </Box>

                    <Box
                        className="website-content"
                        ref={websiteContentRef}
                        position="absolute"
                        top={{ base: "100%", md: "100%", lg: "87%" }}
                        left="50%"
                        transform="translate(-50%, -50%)"
                        textAlign="center"
                        opacity="0"
                        bg={useColorModeValue("#fff", "#000")}
                        width="100%"
                        height="100%"
                        paddingX={{ base: "2.5rem", md: "initial" }}
                    >
                        <Text
                            color={useColorModeValue("#000", "#fff")}
                            fontSize={{ base: "3rem", md: "3.2rem", lg: "6rem" }}
                            fontWeight="bold"
                            fontFamily="'Big Shoulders Display', sans-serif"
                            letterSpacing="0.1rem"
                        >
                            Every Second Brings Us Closer to Inspiration
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </ReactLenis>;
};

export default ClockHero;
