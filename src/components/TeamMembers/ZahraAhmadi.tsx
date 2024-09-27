import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { ImFilm } from "react-icons/im";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { zahra, zahraBadge } from "../../assets";
import { PageTransition } from "../PageTransition";

const ZahraAhmadi: React.FC = () => {
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
          name="Zahra Ahmadi"
          title="Multimedia Editing Coordinator | Genetec Inc."
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/zahra-1997"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("zahraQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Zahra"
          lastName="Ahmadi"
          fullName="Zahra Ahmadi"
          title="Multimedia Editing Coordinator | Genetec Inc."
          role="Content Creator"
          imageSrc={zahra}
          badgeSrc={zahraBadge}
          linkedinHref="https://ca.linkedin.com/in/zahra-1997"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("zahraQuote")}
          icon={ImFilm}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(ZahraAhmadi);
export default ZahraAhmadi;
