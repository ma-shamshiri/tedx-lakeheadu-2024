import React, { useEffect, useState } from "react";
import {aminBadge, parinazNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../PageTransition";

const Parinaz: React.FC = () => {
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
          firstName="Parinaz"
          lastName="Beigi"
          fullName="Parinaz Beigi"
          title="Master of Education | Lakehead University"
          role="Curation Manager"
          imageSrc={parinazNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/parinaz-gharooni-beigi-12b465219/"
          twitterHref="mailto:pgharoon@lakeheadu.ca/"
          tedHref="https://www.instagram.com/"
          quoteText={t("Parinaz Gharooni Beigi holds a Master of Education degree from Lakehead University and a Bachelor’s degree in English Literature and Creative Writing from Khayyam University. She currently works as an educator with the Lakehead School Board and as a research assistant at the Thunder Bay Regional Health Research Institute, focusing on teaching, mentorship, and fostering inclusivity. She also serves as a curator leader for TEDxLakeheadU, contributing to community engagement and inspiring ideas.")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Parinaz;
