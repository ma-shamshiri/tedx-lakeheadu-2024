import React, { useEffect, useState } from "react";
import { BlockFooter } from "../components/BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../components/Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../components/PageTransition";
import TeamGridDesign2 from "../components/TeamGridDesign2";

const TeamPage: React.FC = () => {
  const { t } = useTranslation();

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
        <TeamGridDesign2 />
        <BlockFooter />
      </motion.div>
    </>
  );
};
// export default PageTransition(TeamPage);
export default TeamPage;
