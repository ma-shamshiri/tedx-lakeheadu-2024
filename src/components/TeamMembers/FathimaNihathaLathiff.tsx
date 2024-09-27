import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { fathima, fathimaBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const FathimaNihathaLathiff: React.FC = () => {
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
          name="Fathima Nihatha Lathiff"
          title="M.Sc. Student in Computer Science | Concordia"
          role="Operation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/nihatha"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("fathimaQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Fathima Nihatha"
          lastName="Lathiff"
          fullName="Fathima Nihatha Lathiff"
          title="M.Sc. Student in Computer Science | Concordia"
          role="Operation"
          imageSrc={fathima}
          badgeSrc={fathimaBadge}
          linkedinHref="https://ca.linkedin.com/in/nihatha"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("fathimaQuote")}
          icon={FaComputer}
        />

        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(FathimaNihathaLathiff);
export default FathimaNihathaLathiff;
