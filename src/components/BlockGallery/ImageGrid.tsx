import React, { useRef, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import FlipCardTest2 from "./FlipCardTest2";
import { motion } from 'framer-motion';

interface ImageGridProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const variants: { [key: string]: any } = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const ImageGrid: React.FC<ImageGridProps> = ({ data, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, base: 1, md: 3, lg: 4, xl: 5 }}
      spacing={35}
      padding="10px"
    >
      {data.map((slide, index) => (
        <Box
          key={index}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >

          <Box width="100%">
            <motion.div
              ref={ref}
              variants={variants}
              initial="initial"
              whileInView="animate"
            >
              <Box
                className="image"
                key={index}
                position="relative"
                cursor="pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onClick(index)}
              >
                <FlipCardTest2
                  frontImageHref={slide.src}
                  backImageHref={slide.src}
                />
              </Box>
            </motion.div>
          </Box>

        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ImageGrid;
