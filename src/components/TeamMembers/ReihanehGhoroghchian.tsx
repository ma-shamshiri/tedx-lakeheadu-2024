import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { GiElectricalResistance } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { unknownGirlProfile, reihanehBadge } from "../../assets";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const ReihanehGhoroghchian: React.FC = () => {
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
          name="Reihaneh Ghoroghchian"
          title="M.Sc. Student in Electrical Engineering | McGill"
          role="Creativity"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/reihaneh-ghoroghchian-636661182"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("reihanehQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Reihaneh"
          lastName="Ghoroghchian"
          fullName="Reihaneh Ghoroghchian"
          title="M.Sc. Student in Electrical Engineering | McGill"
          role="Creativity"
          // imageSrc={unknownGirlProfile}
          badgeSrc={reihanehBadge}
          linkedinHref="https://ca.linkedin.com/in/reihaneh-ghoroghchian-636661182"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("reihanehQuote")}
          icon={GiElectricalResistance}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(ReihanehGhoroghchian);
export default ReihanehGhoroghchian;
