import React, { useEffect, useState } from "react";
import { BlockFooter } from "../components/BlockFooter";
import { BlockGallery } from "../components/BlockGallery";
import { motion } from "framer-motion";
import { Navigationbar } from "../components/Navigationbar";
import { PageTransition } from "../components/PageTransition";
import { ComingSoonMediaPage } from "../components/ComingSoonMediaPage";

const MediaPage: React.FC = () => {
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
        {/* <BlockGallery /> */}
        <ComingSoonMediaPage />
        <BlockFooter />
      </motion.div>
    </>
  );
};
// export default PageTransition(MediaPage);
export default MediaPage;
