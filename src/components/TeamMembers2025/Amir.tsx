import React, { useEffect, useState } from "react";
import {aminBadge, amirNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../PageTransition";

const Amir: React.FC = () => {
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
          firstName="Sam"
          lastName="Tayeba"
          fullName="Sam Tayeba"
          title="Master’s degree in Mechanical Engineering | Lakehead University"
          role="Deputy Director of Finance"
          imageSrc={amirNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/sam-tayeba-35615333b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app/"
          twitterHref="mailto:stayeba1@lakeheadu.ca/"
          tedHref="https://www.instagram.com/"
          quoteText={t("Sam Tayeba is the Deputy of the Financial Department at TEDxLakeheadU, managing financial operations with expertise gained from two master’s degrees in Industrial and Mechanical Engineering. With eight years in international trade, Sam specializes in financial management, strategic planning, and problem-solving. He also serves on the Lakehead University Student Union Board of Directors, showcasing his leadership and commitment to community impact. Renowned for his communication and teamwork skills, Sam fosters synergy across teams and consistently delivers excellence in every role.")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Amir;
