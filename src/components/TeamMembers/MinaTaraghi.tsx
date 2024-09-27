import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { GiLaptop } from "react-icons/gi";
import { mina, minaBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const MinaTaraghi: React.FC = () => {
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
          name="Mina Taraghi"
          title="Ph.D. Student in Computer Engineering | Polytechnique Montreal"
          role="Content Creator"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/minataraghi?trk=people-guest_people_search-card"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/44654445"
          quoteText={t("minaQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Mina"
          lastName="Taraghi"
          fullName="Mina Taraghi"
          title="Ph.D. Student in Computer Engineering | Polytechnique Montreal"
          role="Content Creator"
          imageSrc={mina}
          badgeSrc={minaBadge}
          linkedinHref="https://ca.linkedin.com/in/minataraghi?trk=people-guest_people_search-card"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/profiles/44654445"
          quoteText={t("minaQuote")}
          icon={GiLaptop}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(MinaTaraghi);
export default MinaTaraghi;
