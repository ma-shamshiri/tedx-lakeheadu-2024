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
          quoteText={t("Harshit Maann is the Operations Manager for TEDxLakeheadU, where he ensures the smooth execution of event logistics and supports the team in delivering an impactful and seamless experience. A third-year Computer Science student at Lakehead University, Harshit is passionate about problem-solving, efficient systems, and leveraging technology to streamline processes. Beyond TEDx, Harshit is enthusiastic about fostering collaboration and innovation in both academic and professional settings. His strong organizational skills and dedication to teamwork help bring complex projects to life. Originally from New Delhi, Harshit is committed to creating opportunities for connection and inspiration within his community. In his free time, he enjoys exploring new technologies, coding projects, and staying up-to-date with advancements in the tech world. Harshit believes in the power of ideas to inspire positive change and is excited to help provide a platform where diverse voices can share their stories and spark meaningful conversations.")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Harshit;
