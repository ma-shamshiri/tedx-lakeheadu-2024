import React, { useEffect, useState } from "react";
import {aminBadge, haardNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../PageTransition";

const Haard: React.FC = () => {
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
          firstName="Haard"
          lastName="Pathak"
          fullName="Haard Pathak"
          title="2nd Year Honours Bachelor of Computer Science Student | Lakehead University"
          role="Operations Manager"
          imageSrc={haardNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/haard-pathak-697688236/overlay/contact-info/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BpqLqlbKUTt2DXP44qEnqYw%3D%3D/"
          twitterHref="mailto:hpathak1@lakeheadu.ca/"
          tedHref="https://www.instagram.com/"
          quoteText={t("Haard Pathak, Operations Manager for TEDxLakeheadU, ensures seamless, impactful events that inspire the Lakehead University community to engage with forward-thinking ideas. A second-year Computer Science student, he is passionate about robotics and quantum computing. As President of the Artificial Intelligence and Robotics Association (ARIA), Haard leads a student community exploring cutting-edge technologies. He envisions a future where AI, robotics, and quantum computing converge to drive innovation. Committed to bridging theory and application, Haard combines strategic planning with a passion for technology to shape the future through impactful events and pioneering advancements.")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Haard;
