import React, { useEffect, useState } from "react";
// import { GiElectricalResistance } from "react-icons/gi";
import { baharan, baharanBadge } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { GiLaptop } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const BaharanNouriinanloo: React.FC = () => {
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
          name="Baharan Nouriinanloo"
          title="M.Sc. Student in Computer Engineering | Polytechnique Montreal"
          role="Marketing"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/baharan-nouriv"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("baharanQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Baharan"
          lastName="Nouriinanloo"
          fullName="Baharan Nouriinanloo"
          title="M.Sc. Student in Computer Engineering | Polytechnique Montreal"
          role="Marketing"
          imageSrc={baharan}
          badgeSrc={baharanBadge}
          linkedinHref="https://ca.linkedin.com/in/baharan-nouriv"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("baharanQuote")}
          icon={GiLaptop}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(BaharanNouriinanloo);
export default BaharanNouriinanloo;
