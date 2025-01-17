import React, { useEffect, useState } from "react";
import { aminBadge, javanNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { SiConstruct3 } from "react-icons/si";
// import { PageTransition } from "../PageTransition";

const Javan: React.FC = () => {
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
          firstName="Javan"
          lastName="Chhatwal"
          fullName="Javan Chhatwal"
          title="Constituency Office Manager at Minister Patty Hajdu’s constituency office"
          role="Operations Manager"
          imageSrc={javanNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/javanjyot-k-b0b85b23b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app/"
          twitterHref="mailto:jchhatwa@lakeheadu.ca/"
          tedHref="https://www.instagram.com/"
          quoteText={t("Javan serves as the Design and Social Media Manager for TEDxLakeheadU, where she brings her creativity and passion to life through captivating visuals and impactful digital storytelling. With a background in public service, Javan works as the Constituency Office Manager for Minister Patty Hajdu, supporting her community through advocacy and meaningful connections. She is a former student assistant at Lakehead University with six years of teaching experience. She has also volunteered as an executive member with the India Canada Association and took the initiative to establish a peer support group for Master of Education students. A proud graduate of the Master of Education program, specializing in Social Justice from Lakehead University, Javan is deeply committed to education, empowerment, and creating positive social change. A natural creative, Javan channels her artistic energy into her personal waterbrush art page, where she explores the beauty of colors and expression. Driven by a belief in the power of creativity, she strives to make a positive impact through every project she undertakes.")}
          icon={SiConstruct3}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Javan;
