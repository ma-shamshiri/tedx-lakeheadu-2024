import React, { useEffect, useState } from "react";
import { aminBadge, javanNoBG, khushiNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../PageTransition";

const Khushi: React.FC = () => {
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
          firstName="Khushi"
          lastName="Shah"
          fullName="Khushi Shah"
          title="Bachelor's in computer science | Lakehead University"
          role="Curation Manager"
          imageSrc={khushiNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/khushi-shah-compsci?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app/"
          twitterHref="mailto:kshah30@lakeheadu.ca/"
          tedHref="https://www.instagram.com/"
          quoteText={t("Khushi Shah, Curating Manager at TEDxLakeheadU, collaborates to spotlight diverse speakers and foster innovation. A final-year Computer Science student at Lakehead University, she graduates this April, having also completed a Software Development Engineer internship. Her blend of academic and practical experience fuels her passion for technology and meaningful connections. Beyond work, Khushi enjoys reading and dancing, embracing creativity and collaboration in all she does. Through her dedication and problem-solving mindset, she contributes to impactful conversations and events, embodying the TEDx mission of sparking positive change in the community.")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Khushi;
