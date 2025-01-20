import React, { useEffect, useState } from "react";
import {akashNoBG, aminBadge } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { FaDigitalOcean } from "react-icons/fa";
// import { PageTransition } from "../PageTransition";

const Akash: React.FC = () => {
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
          firstName="Akash"
          lastName="Balaji"
          fullName="Akash Balaji"
          title="Communications, Outreach & Events Lead at Minister Patty Hajdu’s constituency office"
          role="Director of Marketing & Communications"
          imageSrc={akashNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/akash-subramaniyam-balaji?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app/"
          twitterHref="mailto:akashsubramaniyam03@gmail.com/"
          tedHref="https://www.instagram.com/"
          quoteText={t("Akash Balaji serves as Director of Marketing and Communications and Curating Manager at TEDxLakeheadU in Thunder Bay, Ontario. With expertise in digital marketing, public relations, and strategic planning, he also leads Communications, Outreach, and Events for MP Patty Hajdu’s office. Holding an MBA in Marketing and Finance and a postgraduate specialization in Digital Marketing, Akash drives impactful initiatives. A dedicated community builder, he volunteers with the Port Arthur Rotary Club and cultural associations, fostering unity and growth. At TEDxLakeheadU, Akash channels his passion for creating platforms that inspire and celebrate transformative ideas.")}
          icon={FaDigitalOcean}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Akash;
