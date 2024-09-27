import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { aryana, aryanaBadge } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { IoLogoElectron } from "react-icons/io5";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { SiNeutralinojs } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const AryanaHaghjoo: React.FC = () => {
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
          name="Aryana Haghjoo"
          title="M.Sc. Student in Physics | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/AryanaHaghjoo"
          tedHref="https://www.ted.com/profiles/44809246"
          quoteText={t("aryanaQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Aryana"
          lastName="Haghjoo"
          fullName="Aryana Haghjoo"
          title="M.Sc. Student in Physics | McGill"
          role="Curation"
          imageSrc={aryana}
          badgeSrc={aryanaBadge}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/AryanaHaghjoo"
          tedHref="https://www.ted.com/profiles/44809246"
          quoteText={t("aryanaQuote")}
          icon={SiNeutralinojs}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AryanaHaghjoo);
export default AryanaHaghjoo;
