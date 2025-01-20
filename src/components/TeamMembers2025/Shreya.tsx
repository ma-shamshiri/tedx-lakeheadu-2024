import React, { useEffect, useState } from "react";
import {aminBadge, shreyaNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../PageTransition";

const Shreya: React.FC = () => {
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
          firstName="Shreya"
          lastName="Pradhan"
          fullName="Shreya Pradhan"
          title="4th Year Honours Bachelor of Kinesiology Student"
          role="Co-Design and Social Media Manager"
          imageSrc={shreyaNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/shreyapradhan02?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app/"
          twitterHref="mailto:spradha1@lakeheadu.ca/"
          tedHref="https://www.instagram.com/"
          quoteText={t("Shreya is the Co-Design and Social Media Manager for TEDxLakeheadU, leading creative initiatives and digital engagement. A fourth-year Honours Bachelor of Kinesiology student at Lakehead University, she is passionate about promoting physical activity and mental well-being, especially for international students. Originally from Nepal and raised in Brunei, Shreya fosters inclusivity through leadership as President of the Lakehead Nepali Students Association and a former Peer Mentor. She volunteers at St. Joseph’s Hospital, supporting older adults, and values community engagement. An advocate for personal growth, Shreya enjoys sports, exercise, and embracing challenges to inspire learning and connection.")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Shreya;
