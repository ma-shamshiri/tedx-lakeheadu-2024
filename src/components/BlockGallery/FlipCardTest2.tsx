import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { GiResize } from "react-icons/gi";

interface FlipCardTest2Props {
  frontImageHref: string;
  backImageHref: string;
}

const FlipCardTest2: React.FC<FlipCardTest2Props> = ({
  frontImageHref,
  backImageHref,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCardHover = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <Box
      className={`scene scene--card`}
      width="100%"
      height="40rem"
      style={{
        perspective: "600px",
      }}
      //   onClick={handleCardClick}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardHover}
      //   border="1px solid white"
    >
      <Box
        className="card"
        width="100%"
        height="100%"
        transition="transform 1.3s"
        cursor="pointer"
        position="relative"
        transform={isFlipped ? "rotateY(180deg)" : "rotateY(0)"}
        style={{
          transformStyle: "preserve-3d",
        }}
        // overflow="hidden"
        //To reverse the image
      >
        <Box
          className="card__face card__face--front"
          position="absolute"
          width="100%"
          height="100%"
          color="white"
          textAlign="center"
          fontWeight="bold"
          fontSize="3rem"
          //   background="red"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={frontImageHref}
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius={"8px"}
          />
        </Box>
        <Box
          className="card__face card__face--back"
          position="absolute"
          width="100%"
          height="100%"
          color="white"
          textAlign="center"
          fontWeight="bold"
          fontSize="3rem"
          //   background="blue"
          transform="rotateY(180deg)"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={backImageHref}
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius={"8px"}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor="rgba(0, 0, 0, 0.5)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            // opacity={hoveredIndex === index ? 1 : 0}
            // transition="opacity 0.3s ease-in-out"
          >
            {/* <MdOutlinePhotoSizeSelectLarge size={"5rem"} /> */}
            {/* <SlSizeFullscreen size={"5rem"} /> */}
            <GiResize size={"5rem"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FlipCardTest2;
