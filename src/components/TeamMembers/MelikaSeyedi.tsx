import React, { useEffect, useState } from "react";
// import { FcElectronics } from "react-icons/fc";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { GiLaptop } from "react-icons/gi";
import { melika, melikaBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const MelikaSeyedi: React.FC = () => {
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
          name="Melika Seyedi"
          title="Ph.D. Student in Computer Engineering | Concordia"
          role="Sponsorship"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/melika-seyedi-048416140"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/44509018"
          quoteText={t("melikaQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Melika"
          lastName="Seyedi"
          fullName="Melika Seyedi"
          title="Ph.D. Student in Computer Engineering | Concordia"
          role="Sponsorship"
          imageSrc={melika}
          badgeSrc={melikaBadge}
          linkedinHref="https://ca.linkedin.com/in/melika-seyedi-048416140"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("melikaQuote")}
          icon={GiLaptop}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(MelikaSeyedi);
export default MelikaSeyedi;
