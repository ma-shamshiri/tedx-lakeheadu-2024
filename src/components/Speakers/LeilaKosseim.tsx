import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BlockFooter } from "../BlockFooter";
import { Navigationbar } from "../Navigationbar";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";
// import { PageTransition } from "../PageTransition";

import {
  leila_noBG,
  leila_talk10,
  leila_talk20,
  leila_talk30,
  leila_talk40,
  leila_talk50,
  leila_talk60,
  leila_talk70,
  leila_talk80,
  leila_talk90,
  leila_talk100,
  leila_talk110,
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
    title: 'Leila Kosseim',
    text: "How can we make computers understand natural language?",
    image: leila_talk70,
  },
  {
    id: "2",
    title: 'Leila Kosseim',
    text: "How can we make computers understand natural language?",
    image: leila_talk50,
  },
  {
    id: "3",
    title: 'Leila Kosseim',
    text: "How can we make computers understand natural language?",
    image: leila_talk90,
  },
  {
    id: "4",
    title: 'Leila Kosseim',
    text: "How can we make computers understand natural language?",
    image: leila_talk40,
  },
  {
    id: "5",
    title: 'Leila Kosseim',
    text: "How can we make computers understand natural language?",
    image: leila_talk10,
  },
  {
    id: "6",
    title: 'Leila Kosseim',
    text: "How can we make computers understand natural language?",
    image: leila_talk60,
  },
  {
    id: "7",
    title: 'Leila Kosseim',
    text: "How can we make computers understand natural language?",
    image: leila_talk20,
  },
  {
    id: "8",
    title: 'Leila Kosseim',
    text: "How can we make computers understand natural language?",
    image: leila_talk80,
  },
  {
    id: "9",
    title: 'Leila Kosseim',
    text: "How can we make computers understand natural language?",
    image: leila_talk30,
  },
  {
    id: "10",
    title: 'Leila Kosseim',
    text: "How can we make computers understand natural language?",
    image: leila_talk100,
  },
  {
    id: "11",
    title: 'Leila Kosseim',
    text: "How can we make computers understand natural language?",
    image: leila_talk110,
  },
];

const LeilaKosseim: React.FC = () => {
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
          name="Leila Kosseim"
          title="Professor in Computer Science | Concordia Universit"
          biography={t("leilaKosseimBiography")}
          talkTopic="How can we make computers understand natural language?"
          imageSrc={leila_noBG}
          videoSrc="https://www.youtube.com/embed/Uh-A3cIEiTc"
          videoDescription={t("leilaKosseimTalkDescription")}
          slides={sliderData}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(LeilaKosseim);
export default LeilaKosseim;
