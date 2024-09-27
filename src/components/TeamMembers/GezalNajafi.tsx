import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { gezal, gezalBadge } from "../../assets";
import { IoNutritionSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const GezalNajafi: React.FC = () => {
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
          name="Gezal Najafi"
          title="M.Sc. Student in Clinical Nutrition | McGill"
          role="Operation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("gezalQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Gezal"
          lastName="Najafi"
          fullName="Gezal Najafi"
          title="M.Sc. Student in Clinical Nutrition | McGill"
          role="Operation"
          imageSrc={gezal}
          badgeSrc={gezalBadge}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("gezalQuote")}
          icon={IoNutritionSharp}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(GezalNajafi);
export default GezalNajafi;
