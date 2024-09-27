import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { erfan, erfanBadge } from "../../assets";
import { GiMining } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const MohammaderfanMohit: React.FC = () => {
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
          name="Mohammaderfan Mohit"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Operation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/41859284"
          quoteText={t("erfanQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Mohammaderfan"
          lastName="Mohit"
          fullName="Mohammaderfan Mohit"
          title="Ph.D. Student in Mining Engineering | McGill"
          role="Operation"
          imageSrc={erfan}
          badgeSrc={erfanBadge}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/41859284"
          quoteText={t("erfanQuote")}
          icon={GiMining}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(MohammaderfanMohit);
export default MohammaderfanMohit;
