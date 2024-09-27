import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { fatemeh, fatemehBadge } from "../../assets";
import { GiMining } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const FatemehTavanaei: React.FC = () => {
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
          name="Fatemeh Tavanaei"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Co-organizer"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/fatemeh-tavanaei-sereshgi-394a7957"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/38189071/about"
          quoteText={t("fatemehQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Fatemeh"
          lastName="Tavanaei"
          fullName="Fatemeh Tavanaei"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Co-organizer"
          imageSrc={fatemeh}
          badgeSrc={fatemehBadge}
          linkedinHref="https://ca.linkedin.com/in/fatemeh-tavanaei-sereshgi-394a7957"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/38189071/about"
          quoteText={t("fatemehQuote")}
          icon={GiMining}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(FatemehTavanaei);
export default FatemehTavanaei;
