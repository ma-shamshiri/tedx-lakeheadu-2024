import React, { useRef } from 'react';
import { Box, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import { sliderDataProps } from './sliderData';
import { andrew_talk10 } from "../../assets";

interface SpeakerSliderProps {
  slides: sliderDataProps[];
}

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

export const SpeakerSlider: React.FC<SpeakerSliderProps> = ({ slides }) => {

  const sliderRef = useRef<Slider | null>(null);

  return (
    <Box
      position="relative"
      height={{ base: "fit-content", lg: `calc(70vh - 6rem)` }}
      width='full'
      overflow='hidden'
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

      {/* Slider */}
      <Slider className="slider" {...settings} ref={sliderRef}>
        {slides.map((card, index) => (
          <Box
            className="slider_container"
            key={index}
            height={{ base: "100%", lg: `calc(100vh - 6rem)` }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={{ base: "contain", lg: "cover" }}
            backgroundImage={`url(${card.image})`}
          >
            <Image src={andrew_talk10} opacity={0} />
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="linear-gradient(to left, blue, transparent, red)"
              opacity="0.35"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default SpeakerSlider;
