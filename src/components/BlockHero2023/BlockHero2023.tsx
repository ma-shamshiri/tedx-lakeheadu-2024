import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import EventSlider from "./EventSlider";


export const BlockHero2023: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    // window.scrollTo(0, 0);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      className="block block--dark"
      width="100%"
      height="100%"
      overflow="hidden"
    >
      {/* --------------- EVENT SLIDER --------------- */}
      <EventSlider />
    </Box>
  );
};

// export default BlockHero2023;
