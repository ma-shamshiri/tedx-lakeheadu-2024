import React, { useEffect, useState } from "react";
import {aminBadge, amirNoBG, farazNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../PageTransition";

const Faraz: React.FC = () => {
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
          firstName="Faraz"
          lastName="Khorsandi"
          fullName="Faraz Khorsandi"
          title="MSc. Civil Engineering"
          role="Project Director"
          imageSrc={farazNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/farazkhorsandi"
          twitterHref="mailto:tedxdirector@lakeheadu.ca/"
          tedHref="https://www.ted.com/profiles/45396494/about"
          quoteText={t("...")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Faraz;