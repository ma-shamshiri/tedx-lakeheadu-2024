import React, { useEffect, useState } from "react";
import { aasthaNoBG, aminBadge } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../PageTransition";

const Aastha: React.FC = () => {
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
        <BlockTeamProfiles
          firstName="Aastha"
          lastName="Malhotra"
          fullName="Aastha Malhotra"
          title="Master of Science in Management | Lakehead University"
          role="Sponsorship and Outreach Manager"
          imageSrc={aasthaNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/aastha29/"
          twitterHref="mailto:tedxsponsorship@lakeheadu.ca/"
          tedHref="https://www.instagram.com/"
          quoteText={t("Aastha Malhotra, Sponsorship Director at TEDxLakeheadU, leverages her marketing expertise to forge transformative partnerships. A Master of Science in Management graduate from Lakehead University, she also excels as a Marketing Specialist at Northern Peak HR and Social Media Strategist at Perfect Fit Lingerie & Fashion. Passionate about connecting bold ideas with communities, Aastha views sponsorship as a catalyst for positive change. She actively volunteers with organizations like the Rotary Club and Terry Fox Foundation, bringing people together to amplify voices, spark ideas, and inspire impactful conversations in Thunder Bay.")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Aastha;
