import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { edwin, edwinBadge } from "../../assets";
import { GiElectricalResistance } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const EdwinMeriaux: React.FC = () => {
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
          name="Edwin Meriaux"
          title="M.Sc. Student in Electrical Engineering | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("edwinQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Edwin"
          lastName="Meriaux"
          fullName="Edwin Meriaux"
          title="M.Sc. Student in Electrical Engineering | McGill"
          role="Curation"
          imageSrc={edwin}
          badgeSrc={edwinBadge}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("edwinQuote")}
          icon={GiElectricalResistance}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(EdwinMeriaux);
export default EdwinMeriaux;
