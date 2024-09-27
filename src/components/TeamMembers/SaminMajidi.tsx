import React, { useEffect, useState } from "react";
// import { IoLogoElectron } from "react-icons/io5";
// import { SiProtondb } from "react-icons/si";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { samin, saminBadge } from "../../assets";
import { SiNeutralinojs } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const SaminMajidi: React.FC = () => {
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
        {/* <BlockTeamProfiles
          name="Samin Majidi"
          title="Ph.D. Student in Physics | McGill"
          role="Organizer"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/samin-majidi-05b77a250"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/19449036/about"
          quoteText={t("saminQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Samin"
          lastName="Majidi"
          fullName="Samin Majidi"
          title="Ph.D. Student in Physics | McGill"
          role="Organizer"
          imageSrc={samin}
          badgeSrc={saminBadge}
          linkedinHref="https://ca.linkedin.com/in/samin-majidi-05b77a250"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/19449036/about"
          quoteText={t("saminQuote")}
          icon={SiNeutralinojs}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(SaminMajidi);
export default SaminMajidi;
