import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BlockFooter } from "../BlockFooter";
import { Navigationbar } from "../Navigationbar";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";
// import { PageTransition } from "../PageTransition";

import {
  peggy_noBG2,
  peggy_talk10,
  peggy_talk20,
  peggy_talk30,
  peggy_talk40,
  peggy_talk50,
  peggy_talk60,
  peggy_talk70,
  peggy_talk80,
  peggy_talk90,
  peggy_talk100,
  peggy_talk110,
  peggy_talk120,
  peggy_talk130,
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
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk10,
  },
  {
    id: "2",
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk80,
  },
  {
    id: "3",
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk30,
  },
  {
    id: "4",
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk40,
  },
  {
    id: "5",
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk50,
  },
  {
    id: "6",
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk60,
  },
  {
    id: "7",
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk70,
  },
  {
    id: "8",
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk20,
  },
  {
    id: "9",
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk90,
  },
  {
    id: "10",
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk100,
  },
  {
    id: "11",
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk110,
  },
  {
    id: "12",
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk120,
  },
  {
    id: "13",
    title: 'Peggy Bell',
    text: "...",
    image: peggy_talk130,
  },
];

const PeggyBell: React.FC = () => {
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
          name="Peggy Bell"
          title="Founder | Principal Consultant"
          biography={t("peggyBellBiography")}
          talkTopic="Revolutionizing Mining: From Challenges to Empowerment"
          imageSrc={peggy_noBG2}
          videoSrc="https://www.youtube.com/embed/l0P-C0hg2no"
          videoDescription={t("peggyBellTalkDescription")}
          slides={sliderData}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(PeggyBell);
export default PeggyBell;
