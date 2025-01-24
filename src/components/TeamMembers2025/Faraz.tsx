import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { SiGoogleearthengine } from "react-icons/si";
import { useTranslation } from "react-i18next";
import {aminBadge, farazNoBG } from "../../assets";
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
          title="MSc. in Civil Engineering | Lakehead University"
          role="Project Director"
          imageSrc={farazNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/in/farazkhorsandi"
          twitterHref="mailto:tedxdirector@lakeheadu.ca/"
          tedHref="https://www.instagram.com"
          quoteText={t("Faraz Khorsandi is the Project Director for TEDxLakeheadU, where he leads efforts to bring innovative ideas and inspiring speakers to the community. With a background in civil engineering and project management, Faraz has worked with TBT Engineering and serves as the president of the Lakehead University Student Union (LUSU). He is passionate about community engagement, mentoring, and advocating for marginalized groups. Outside of TEDx, Faraz supports causes related to education, social justice, and environmental sustainability. He is driven by a desire to empower individuals to share their stories and inspire positive change.")}
          icon={SiGoogleearthengine}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AminShamshiri);
export default Faraz;
