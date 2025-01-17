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
          quoteText={t("Shreya is the Co-Design and Social Media Manager for TEDxLakeheadU, where she, with her co-manager, leads creative design initiatives and manages digital engagement to spread innovative ideas. A fourth-year Honours Bachelor of Kinesiology student at Lakehead University, Shreya is passionate about promoting physical activity and mental well-being, particularly for international students. Originally from Nepal and having grown up in Brunei, she is committed to fostering an inclusive environment through leadership and mentorship. As President of the Lakehead University Nepali Students Association and a former Peer Mentor, Shreya advocates for international students, helping them navigate cultural challenges and build supportive communities. She also volunteers with older adults at St. Joseph’s Hospital, furthering her dedication to community engagement. Outside of academics, Shreya enjoys staying active through exercise and sports, believing in the transformative power of movement for both physical and mental well-being. She embraces new experiences and challenges as opportunities to learn and grow, bringing a sense of curiosity and openness to all her endeavors.")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Shreya;
