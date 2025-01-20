import React, { useEffect, useState } from "react";
import { aminBadge, javanNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { SiConstruct3 } from "react-icons/si";
// import { PageTransition } from "../PageTransition";

const Javan: React.FC = () => {
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
          firstName="Javan"
          lastName="Chhatwal"
          fullName="Javan Chhatwal"
          title="Constituency Office Manager at Minister Patty Hajdu’s constituency office"
          role="Operations Manager"
          imageSrc={javanNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/javanjyot-k-b0b85b23b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app/"
          twitterHref="mailto:jchhatwa@lakeheadu.ca/"
          tedHref="https://www.instagram.com/"
          quoteText={t("Javan is the Design and Social Media Manager for TEDxLakeheadU, crafting captivating visuals and impactful digital storytelling. With a Master of Education in Social Justice from Lakehead University, she is passionate about education, empowerment, and social change. Javan serves as Constituency Office Manager for Minister Patty Hajdu, supporting her community through advocacy. A former student assistant and teacher with six years of experience, she also established a peer support group for Master’s students and volunteered with the India Canada Association. Javan channels her creativity into waterbrush art, using colors and expression to inspire and make a positive impact.")}
          icon={SiConstruct3}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Javan;
