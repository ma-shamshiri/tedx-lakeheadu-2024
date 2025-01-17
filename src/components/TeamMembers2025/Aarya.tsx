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
          quoteText={t("I’m Aarya Sadhwani, an international business student at Lakehead University, Thunder Bay, with a passion for finance and entrepreneurship. Growing up in a business-oriented family, I developed a strong interest in strategic decision-making and creating opportunities in the financial world. At Lakehead, I’ve been actively involved in TEDxLakeheadU, helping to foster a platform for meaningful ideas. My career goals include earning my CFA certification, gaining experience in the finance industry, and eventually starting my own brokerage firm. I also plan to expand into real estate and establish a hotel business in the future.")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Aarya;
