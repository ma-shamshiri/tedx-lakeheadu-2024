import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { amin, aminBadge } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const AminShamshiri: React.FC = () => {
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
          name="Amin Shamshiri"
          title="Software Engineer | EnerZam Inc."
          role="Webmaster"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/ma-shamshiri"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/11850053"
          // quoteTopMargin={{ base: "50rem", lg: "8rem" }}
          quoteText={t("aminQuote")}
        /> */}

        <BlockTeamProfiles
          firstName="Mohammad Amin"
          lastName="Shamshiri"
          fullName="Mohammad Amin Shamshiri"
          title="Software Engineer | EnerZam Inc."
          role="Webmaster"
          imageSrc={amin}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/ma-shamshiri"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/11850053"
          quoteText={t("aminQuote")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default AminShamshiri;
