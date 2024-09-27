import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { GiMusicalNotes } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { pegah, pegahBadge } from "../../assets";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const PegahEinakchi: React.FC = () => {
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
          name="Pegah Einakchi"
          title="Vocal Coach | Private"
          role="Creativity"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("pegahQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Pegah"
          lastName="Einakchi"
          fullName="Pegah Einakchi"
          title="Vocal Coach | Private"
          role="Creativity"
          imageSrc={pegah}
          badgeSrc={pegahBadge}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("pegahQuote")}
          icon={GiMusicalNotes}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(PegahEinakchi);
export default PegahEinakchi;
