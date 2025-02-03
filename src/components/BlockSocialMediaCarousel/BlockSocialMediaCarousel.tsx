import React from 'react';
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import { socialMediaData } from "./socialMediaCarouselData";

const BlockSocialMediaCarousel: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,        // Centers the active slide
        autoplay: true,          // Enables automatic sliding
        cssEase: "linear",       // Ensures smooth, linear transitions
        speed: 15000,             // Set a high speed for the continuous effect
        autoplaySpeed: 0,        // No delay between slides (set to 0)
        pauseOnHover: false,     // Prevent pausing when hovered
        focusOnSelect: true,     // Allows users to focus on slides
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false
                }
            }
        ],
    };
    return (
        <Box
            width="100%"
            marginX="auto"
            padding="2rem"
            paddingY="6rem"
            bg="#000"
        >
            <Slider
                {...settings}
            >
                {socialMediaData.map((d, index) => (
                    <Box
                        key={d.postImageSrc}
                        padding={{ base: "2rem", lg: "1rem" }}
                        width="100%"
                    >
                        <CarouselCard
                            postImageSrc={d.postImageSrc}
                            postUrl={d.postUrl}
                            icon={d.icon}
                            iconColor={d.iconColor}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default BlockSocialMediaCarousel;