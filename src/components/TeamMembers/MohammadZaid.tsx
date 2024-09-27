import React, { useEffect, useState } from "react";
// import { GiMining } from "react-icons/gi";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { GiGraduateCap } from "react-icons/gi";
import { mohammad, mohammadBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const MohammadZaid: React.FC = () => {
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
          name="Mohammad Zaid"
          title="Graduate Research Assistant | McGill"
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/mohammad-zaid-34b381187"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("mohammadQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Mohammad"
          lastName="Zaid"
          fullName="Mohammad Zaid"
          title="Graduate Research Assistant | McGill"
          role="Content Creator"
          imageSrc={mohammad}
          badgeSrc={mohammadBadge}
          linkedinHref="https://ca.linkedin.com/in/mohammad-zaid-34b381187"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("mohammadQuote")}
          icon={GiGraduateCap}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(MohammadZaid);
export default MohammadZaid;
