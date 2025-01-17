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
          quoteText={t("Akash Balaji holds dual roles as the Director of Marketing and Communications and a Curating Manager at TEDxLakeheadU. Based in Thunder Bay, Ontario, Akash is an experienced professional in Communications and stakeholder Relations who currently serves as the Communications, Outreach, and Events Lead for the constituency office of the Honourable Patty Hajdu, Member of Parliament for Thunder Bay - Superior North. With an MBA in Marketing and Finance and a postgraduate specialization in Digital Marketing and Marketing Analytics, Akash leverages his expertise in Digital Marketing, Public Relations, Strategic Planning, and Financial Management to deliver innovative and strategic initiatives that leave a lasting impact. Beyond his professional work, Akash is deeply committed to community development. He actively volunteers with organizations such as Port Arthur Rotary Club, the India Canada Association, and the Tamil Canada Association, supporting initiatives that unite communities and enhance their quality of life. His role at TEDxLakeheadU reflects his passion for creating a platform where ideas can be shared, celebrated, and acted upon.")}
          icon={FaDigitalOcean}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Akash;
