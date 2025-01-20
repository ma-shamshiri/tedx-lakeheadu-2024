import React, { useEffect, useState } from "react";
import {aminBadge, harshitNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../PageTransition";

const Harshit: React.FC = () => {
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
          firstName="Harshit"
          lastName="Maann"
          fullName="Harshit Maann"
          title="Bachelors of Science in Computer Science"
          role="Operations Manager"
          imageSrc={harshitNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/harshit-maann?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app/"
          twitterHref="mailto:hmaann@lakeheadu.ca/"
          tedHref="https://www.instagram.com/"
          quoteText={t("Harshit Maann, Operations Manager for TEDxLakeheadU, oversees event logistics to ensure impactful and seamless experiences. A third-year Computer Science student at Lakehead University, he is passionate about problem-solving, efficient systems, and using technology to streamline processes. Originally from New Delhi, Harshit values collaboration and innovation, striving to create opportunities for connection within his community. With strong organizational skills, he brings complex projects to life and fosters meaningful conversations. In his free time, Harshit explores new technologies, works on coding projects, and stays updated on tech advancements, driven by his belief in the power of ideas to inspire change.")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Harshit;
