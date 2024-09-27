import React, { useState } from 'react';
import { Box, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import { sponsorData } from "./sponsorsCarouselData";
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const SampleNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <Box
            className="slick-arrow"
            position="absolute"
            right={{ base: "-37px", lg: "-70px" }}
            top="50%"
            transform="translateY(-50%)"
            display="block"
            onClick={onClick}
            cursor="pointer"
            _hover={{
                svg: { color: "red" }
            }}
        >
            <MdKeyboardArrowRight
                size={useBreakpointValue({ base: "30px", lg: "65px" })}
                color={useColorModeValue("black", "white")}
            />
        </Box>
    );
};

const SamplePrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {

    return (
        <Box
            className="slick-arrow"
            position="absolute"
            left={{ base: "-37px", lg: "-70px" }}
            top="50%"
            transform="translateY(-50%)"
            display="block"
            onClick={onClick}
            cursor="pointer"
        >
            <MdKeyboardArrowLeft
                size={useBreakpointValue({ base: "30px", lg: "65px" })}
                color={useColorModeValue("black", "white")}
            />
        </Box>
    );
};


export const BlockSponsorsCarousel: React.FC = () => {
    const { t } = useTranslation();

    const [centerSlide, setCenterSlide] = useState<number>(0);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        // centerMode: true,
        autoplay: true,
        // cssEase: "linear",
        // speed: 2000,
        // autoplaySpeed: 2000,
        speed: 800,
        pauseOnHover: false,
        // focusOnSelect: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (current: number) => {
            // Adjust calculation based on number of slides shown
            const slidesToShow = window.innerWidth < 1400 ? 2 : 4;
            setCenterSlide(Math.floor(current / slidesToShow));
        },
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                }
            },
        ],
        appendDots: (dots: React.ReactNode) => (
            <Box
                position="absolute"
                bottom={{ base: "-61px", lg: "-20" }}
                padding="10px"
            >
                <Box>{dots}</Box>
            </Box>
        ),
        customPaging: (i: number) => (
            <div
                style={{
                    width: '15px',
                    height: '15px',
                    borderRadius: '100%',
                    backgroundColor: i === centerSlide ? 'gold' : 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <span
                    style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: i === centerSlide ? 'black' : '#5e5e5e',
                    }}
                ></span>
            </div>
        ),
    };
    return (
        <Box
            width={{ base: "80%", md: "85%", lg: "65%" }}
            marginX="auto"
            padding="2rem"
            paddingY="6rem"
        >
            <Slider
                {...settings}
            >
                {sponsorData.map((d, index) => (
                    <Box
                        key={d.name}
                        padding={{ base: "0", lg: "1rem" }}
                        transition="opacity 0.6s ease"
                        // opacity={centerSlide === index ? 1 : 0.2}
                        width="100%"
                        marginBottom="3rem"
                    >
                        <CarouselCard
                            imageUrl={d.imageUrl}
                            sourceUrl={d.sourceUrl}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}



// export default App;