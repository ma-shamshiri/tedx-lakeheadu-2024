import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BlockFooter } from "../BlockFooter";
import { Navigationbar } from "../Navigationbar";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";
// import { PageTransition } from "../PageTransition";

import {
  janet_noBG,
  janet_talk10,
  janet_talk20,
  janet_talk30,
  janet_talk40,
  janet_talk50,
  janet_talk60,
  janet_talk70,
  janet_talk80,
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
    title: 'Janet Perlman',
    text: "...",
    image: janet_talk10,
  },
  {
    id: "2",
    title: 'Janet Perlman',
    text: "...",
    image: janet_talk20,
  },
  {
    id: "3",
    title: 'Janet Perlman',
    text: "...",
    image: janet_talk30,
  },
  {
    id: "4",
    title: 'Janet Perlman',
    text: "...",
    image: janet_talk40,
  },
  {
    id: "5",
    title: 'Janet Perlman',
    text: "...",
    image: janet_talk50,
  },
  {
    id: "6",
    title: 'Janet Perlman',
    text: "...",
    image: janet_talk60,
  },
  {
    id: "7",
    title: 'Janet Perlman',
    text: "...",
    image: janet_talk70,
  },
  {
    id: "8",
    title: 'Janet Perlman',
    text: "...",
    image: janet_talk80,
  },
];

const JanetPerlman: React.FC = () => {
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
          name="Janet Perlman"
          title="Animator and Children's Book Author"
          biography={t("janetPerlmanBiography")}
          talkTopic=""
          imageSrc={janet_noBG}
          videoSrc=""
          videoDescription={""}
          slides={sliderData}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(JanetPerlman);
export default JanetPerlman;
