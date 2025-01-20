import React, { useEffect, useState } from "react";
import { aaryaNoBG, aminBadge } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../PageTransition";

const Aarya: React.FC = () => {
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
          firstName="Aarya"
          lastName="Sadhwani"
          fullName="Aarya Sadhwani"
          title="Business Student | Aspiring Financial Leader | Entrepreneur"
          role="Director of Finance"
          imageSrc={aaryaNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="mailto:asadhwan@lakeheadu.ca/"
          tedHref="https://www.instagram.com/"
          quoteText={t("I’m Aarya Sadhwani, an international business student at Lakehead University, passionate about finance and entrepreneurship. Growing up in a business-driven family, I developed a keen interest in strategic decision-making. At Lakehead, I’ve contributed to TEDxLakeheadU, promoting meaningful ideas. My goals include earning a CFA certification, gaining finance industry experience, and launching my own brokerage firm, with aspirations to expand into real estate and the hospitality sector.")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Aarya;
