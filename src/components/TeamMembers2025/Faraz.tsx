import React, { useEffect, useState } from "react";
import {aminBadge, amirNoBG, farazNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import { MdOutlineEngineering } from "react-icons/md";
// import { PageTransition } from "../PageTransition";

const Faraz: React.FC = () => {
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
          firstName="Faraz"
          lastName="Khorsandi"
          fullName="Faraz Khorsandi"
          title="MSc. Civil Engineering"
          role="Project Director"
          imageSrc={farazNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/farazkhorsandi"
          twitterHref="mailto:tedxdirector@lakeheadu.ca/"
          tedHref="https://www.ted.com/profiles/45396494/about"
          quoteText={t("Faraz Khorsandi is the Project Director for TEDxLakeheadU, where he leads efforts to bring innovative ideas and inspiring speakers to the community. With a background in civil engineering and project management, Faraz has worked with TBT Engineering and serves as the president of the Lakehead University Student Union (LUSU). He is passionate about community engagement, mentoring, and advocating for marginalized groups. Outside of TEDx, Faraz supports causes related to education, social justice, and environmental sustainability. He is driven by a desire to empower individuals to share their stories and inspire positive change.")}
          icon={MdOutlineEngineering}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Faraz;
