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
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.ted.com/"
          quoteText={t("Haard Pathak is the Operations Manager for TEDxLakeheadU, where he orchestrates the seamless execution of events that bring forward-thinking ideas to life. With a keen eye for detail and strategic planning, he ensures these events are not just organized, but also impactful, inspiring the Lakehead University community to engage with the ideas that shape the future. A second-year Computer Science student at Lakehead University, Haard is captivated by the potential of robotics and quantum computing. As the President of the Artificial Intelligence and Robotics Association (ARIA), he leads a community of students eager to explore and experiment with these cutting-edge technologies. Haard envisions a future where AI, quantum computing, and robotics work in unison to unlock new frontiers of technological advancement. With a passion for innovation and a drive to turn ideas into reality, Haard is determined to bridge the gap between theory and application. Whether managing events, leading tech initiatives, or exploring the complexities of tomorrow’s technologies, he’s committed to creating the future, one innovation at a time.")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Haard;
