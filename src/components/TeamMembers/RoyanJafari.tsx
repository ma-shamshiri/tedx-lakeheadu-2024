import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FcBiotech } from "react-icons/fc";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { royan, royanBadgeSrc } from "../../assets";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const RoyanJafari: React.FC = () => {
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
          name="Royan Jafari"
          title="M.Eng. Biological & Biomedical Engineering | McGill"
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/royan-jafari"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("royanQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Royan"
          lastName="Jafari"
          fullName="Royan Jafari"
          title="M.Eng. Biological & Biomedical Engineering | McGill"
          role="Content Creator"
          imageSrc={royan}
          badgeSrc={royanBadgeSrc}
          linkedinHref="https://ca.linkedin.com/in/royan-jafari"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("royanQuote")}
          icon={FcBiotech}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(RoyanJafari);
export default RoyanJafari;
