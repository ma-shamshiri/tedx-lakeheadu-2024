import React, { useEffect, useState } from "react";
import { aminBadge, sanjanaNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { GiBank } from "react-icons/gi";
// import { PageTransition } from "../PageTransition";

const Sanjana: React.FC = () => {
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
          firstName="Sanjana"
          lastName="Ravi"
          fullName="Sanjana Ravi"
          title="MBA, Lakehead University"
          role="Project Manager"
          imageSrc={sanjanaNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/sanjanaravii"
          twitterHref="mailto:tedxplanning@lakeheadu.ca/"
          tedHref="https://www.instagram.com/"
          quoteText={t("Sanjana Ravi is a Project Manager for TEDxLakeheadU, where she oversees events from concept to execution, ensuring seamless operations and impactful experiences. With expertise in project management and a passion for storytelling, Sanjana excels in coordinating teams, managing budgets, and fostering collaboration to bring thought-provoking ideas to life. Beyond TEDx, Sanjana is passionate about creating meaningful connections and driving positive change. She has a strong background in mentoring and community engagement, having worked with diverse teams to implement innovative solutions and improve efficiency in various projects. Sanjana’s dedication to empowering others reflects her belief in the power of shared ideas to inspire growth and transformation.")}
          icon={GiBank}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Sanjana;
