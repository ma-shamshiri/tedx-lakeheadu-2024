import React, { useEffect, useState } from "react";
import {aminBadge, javanNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../PageTransition";

const Javan: React.FC = () => {
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
        <BlockTeamProfiles
          firstName="Javan"
          lastName="Chhatwal"
          fullName="Javan Chhatwal"
          title="Master of Education - Specialization in Social Justice | Lakehead University"
          role="Operations Manager"
          imageSrc={javanNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("...")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Javan;
