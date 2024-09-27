import React, { useEffect, useState } from "react";
import { BlockAgenda } from "../components/BlockAgenda";
import { BlockEvent } from "../components/BlockEvent";
import { BlockFooter } from "../components/BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../components/Navigationbar";
import { PageTransition } from "../components/PageTransition";
import { PageTransition2 } from "../components/PageTransition2";
import { ComingSoonEventPage } from "../components/ComingSoonEventPage";

const EventPage: React.FC = () => {
  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <Navigationbar />
        <ComingSoonEventPage />
        {/* <BlockEvent /> */}
        {/* <BlockAgenda /> */}
        <BlockFooter />
      </motion.div>
    </>
  );
};
// export default PageTransition(EventPage);
// export default PageTransition2(EventPage);
export default EventPage;
