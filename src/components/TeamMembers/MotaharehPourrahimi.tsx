import React, { useEffect, useState } from "react";
// import BlockTeamProfiles from "../BlockTeamProfiles";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { LuBrainCircuit } from "react-icons/lu";
import { motahareh, motaharehBadge } from "../../assets";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { PageTransition } from "../PageTransition";

const MotaharehPourrahimi: React.FC = () => {
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
          name="Motahareh Pourrahimi"
          title="Ph.D. Student in Neuroscience | McGill"
          role="Curation"
          imageSrc={imageSrc}
          badgeSrc={badgeSrc}
          linkedinHref="https://ca.linkedin.com/in/motahareh-pour-ahimi-43550417b"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("motaharehQuote")}
        /> */}
        <BlockTeamProfiles
          firstName="Motahareh"
          lastName="Pourrahimi"
          fullName="Motahareh Pourrahimi"
          title="Ph.D. Student in Neuroscience | McGill"
          role="Curation"
          imageSrc={motahareh}
          badgeSrc={motaharehBadge}
          linkedinHref="https://ca.linkedin.com/in/motahareh-pour-ahimi-43550417b"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("motaharehQuote")}
          icon={LuBrainCircuit}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(MotaharehPourrahimi);
export default MotaharehPourrahimi;
