'use client'

import React, { useRef } from 'react';
import {
  Box,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { sliderData } from './sliderData'; // Import cards from the new file
import { PiArrowFatLineLeftLight, PiArrowFatLineRightLight } from "react-icons/pi";

// Settings for the slider
const settings = {
  dots: false,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1200,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const EventSlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const { colorMode } = useColorMode();

  const titleColor = useBreakpointValue({
    base: colorMode === 'dark' ? 'white' : 'gray.800',
    lg: 'white',
  });

  const subTitleColor = useBreakpointValue({
    base: colorMode === 'dark' ? 'white' : 'gray.700',
    lg: 'white',
  });

  const arrowIconSize = useBreakpointValue({ base: "45px", lg: '55px' });
  const arrowIconColor = useColorModeValue('black', 'white');
  const hoverArrowIconColor = useColorModeValue('#16F8B6', '#16F8B6');

  return (
    <Box
      position="relative"
      // height={'600px'}
      height={{ base: "65vh", lg: `calc(100vh - 6rem)` }}
      width={'full'} overflow={'hidden'}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={{ base: '20%', md: '40px' }}
        top={{ base: '90%', md: '50%' }}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => sliderRef.current?.slickPrev()}
        _hover={{ bg: "transparent" }}
      >
        <Box
          as={PiArrowFatLineLeftLight}
          size={arrowIconSize}
          color={arrowIconColor}
          _hover={{ color: hoverArrowIconColor, bg: "transparent" }}
          transition="color 0.3s ease"
        />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={{ base: '20%', md: '40px' }}
        top={{ base: '90%', md: '50%' }}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => sliderRef.current?.slickNext()}
        _hover={{ bg: "transparent" }}
      >
        <Box
          as={PiArrowFatLineRightLight}
          size={arrowIconSize}
          color={arrowIconColor}
          _hover={{ color: hoverArrowIconColor, bg: "transparent" }}
          transition="color 0.3s ease"
        />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {sliderData.map((slide, index) => (
          <Box
            key={index}
            height={{ base: "65vh", lg: `calc(100vh - 6rem)` }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={{ base: "contain", lg: "cover" }}
            backgroundImage={`url(${slide.image})`}
          >
            <Stack
              // spacing={6}
              position="absolute"
              top="8%"
              left="10%"
            // transform="translate(0, -10%)"
            >
              <Text
                color={titleColor}
                fontSize={{ base: '1.9rem', md: '4rem', lg: "5rem" }}
                fontWeight="bold"
                // fontFamily="Chicle', serif"
                fontFamily="'Acme', sans-serif"
                letterSpacing="1px"
              // fontFamily="'Englebert', cursive"
              >
                {slide.title}
              </Text>
              <Text
                color={subTitleColor}
                fontSize={{ base: 'md', md: "", lg: '2.5rem' }}
              >
                {slide.text}
              </Text>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default EventSlider;
