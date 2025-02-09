import React, { useEffect, useState } from "react";
import {aminBadge, yashNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../PageTransition";

const Yash: React.FC = () => {
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
          firstName="Yash"
          lastName="Amethiya"
          fullName="Yash Amethiya"
          title="Master of Computer Science | Lakehead University"
          role="Operations Manager and Director of Volunteers"
          imageSrc={yashNoBG}
          badgeSrc={aminBadge}
          linkedinHref="#"
          twitterHref="#"
          tedHref="https://www.instagram.com/"
          quoteText={t("I'm here at TEDxLakeheadU to bring people together, and create a space where ideas turn into action. As Operations Manager and Director of Volunteers at TEDxLakeheadU, I oversee logistics and lead a passionate team to create a seamless event experience. With a Master’s in Computer Science from Lakehead University, my work bridges technology and healthcare, making complex information accessible. Passionate about education, I teach programming through storytelling and interactive learning. At TEDxLakeheadU, I blend innovation, leadership, and storytelling to inspire, challenge, and connect. Let’s make this event a celebration of knowledge, creativity, and impact!")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Yash;
