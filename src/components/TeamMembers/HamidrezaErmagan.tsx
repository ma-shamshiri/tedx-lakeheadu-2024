import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { GiMining } from "react-icons/gi";
import { hamidreza, hamidrezaBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const HamidrezaErmagan: React.FC = () => {
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
          name="Hamidreza Ermagan"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/hrermagan"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/44509018"
          quoteText={t("hamidrezaQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Hamidreza"
          lastName="Ermagan"
          fullName="Hamidreza Ermagan"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Curation"
          imageSrc={hamidreza}
          badgeSrc={hamidrezaBadge}
          linkedinHref="https://ca.linkedin.com/in/hrermagan"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/44509018"
          quoteText={t("hamidrezaQuote")}
          icon={GiMining}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(HamidrezaErmagan);
export default HamidrezaErmagan;
