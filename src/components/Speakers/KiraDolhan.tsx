import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BlockFooter } from "../BlockFooter";
import { Navigationbar } from "../Navigationbar";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";

// import { PageTransition } from "../PageTransition";

import {
  kira_noBG,
  kira_talk10,
  kira_talk20,
  kira_talk30,
  kira_talk40,
  kira_talk50,
  kira_talk60,
  kira_talk70,
  kira_talk80,
} from "../../assets";

interface sliderDataProps {
  id: string;
  title: string;
  text: string;
  image: string;
}

export const sliderData: sliderDataProps[] = [
  {
    id: "1",
    title: 'Kira Dolhan',
    text: "Personal strength is not always so personal",
    image: kira_talk30,
  },
  {
    id: "2",
    title: 'Kira Dolhan',
    text: "Personal strength is not always so personal",
    image: kira_talk80,
  },
  {
    id: "3",
    title: 'Kira Dolhan',
    text: "Personal strength is not always so personal",
    image: kira_talk60,
  },
  {
    id: "4",
    title: 'Kira Dolhan',
    text: "Personal strength is not always so personal",
    image: kira_talk50,
  },
  {
    id: "5",
    title: 'Kira Dolhan',
    text: "Personal strength is not always so personal",
    image: kira_talk10,
  },
  {
    id: "6",
    title: 'Kira Dolhan',
    text: "Personal strength is not always so personal",
    image: kira_talk70,
  },
  {
    id: "7",
    title: 'Kira Dolhan',
    text: "Personal strength is not always so personal",
    image: kira_talk40,
  },
  {
    id: "8",
    title: 'Kira Dolhan',
    text: "Personal strength is not always so personal",
    image: kira_talk20,
  },
];

const KiraDolhan: React.FC = () => {
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
        <BlockSpeakerProfiles
          name="Kira Dolhan"
          title="Search and Rescue Volunteer"
          biography={t("kiraDolhanBiography")}
          talkTopic="Personal strength is not always so personal"
          imageSrc={kira_noBG}
          videoSrc="https://www.youtube.com/embed/nf72XHsGok8"
          videoDescription={t("kiraDolhanTalkDescription")}
          slides={sliderData}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(KiraDolhan);
export default KiraDolhan;
