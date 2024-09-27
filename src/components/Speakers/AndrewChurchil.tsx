import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BlockFooter } from "../BlockFooter";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";
import { Navigationbar } from "../Navigationbar";
// import { PageTransition } from "../PageTransition";

import {
  andrew_noBG,
  andrew_talk10,
  andrew_talk20,
  andrew_talk30,
  andrew_talk40,
  andrew_talk50,
  andrew_talk60,
  andrew_talk70,
  andrew_talk80,
  andrew_talk90,
  andrew_talk100,
  andrew_talk110,
  andrew_talk120,
  andrew_talk130,
  andrew_talk140,
  andrew_talk150,
  andrew_talk160,
  andrew_talk170,
  andrew_talk180,
  andrew_talk190,
  andrew_talk200,
  andrew_talk210,
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
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk210,
  },
  {
    id: "2",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk20,
  },
  {
    id: "3",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk30,
  },
  {
    id: "4",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk40,
  },
  {
    id: "5",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk50,
  },
  {
    id: "6",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk60,
  },
  {
    id: "7",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk70,
  },
  {
    id: "8",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk80,
  },
  {
    id: "9",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk90,
  },
  {
    id: "10",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk100,
  },
  {
    id: "11",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk110,
  },
  {
    id: "12",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk120,
  },
  {
    id: "13",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk130,
  },
  {
    id: "14",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk140,
  },
  {
    id: "15",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk150,
  },
  {
    id: "16",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk160,
  },
  {
    id: "17",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk170,
  },
  {
    id: "18",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk180,
  },
  {
    id: "19",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk190,
  },
  {
    id: "20",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk200,
  },
  {
    id: "21",
    title: 'Andrew Churchil',
    text: "...",
    image: andrew_talk10,
  },
];

const AndrewChurchil: React.FC = () => {
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
          name="Andrew Churchil"
          title="Carolyn Jack MD | Professor | Start-Up Entrepreneur"
          biography={t("andrewChurchilBiography")}
          talkTopic=""
          imageSrc={andrew_noBG}
          videoSrc=""
          videoDescription={""}
          slides={sliderData}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AndrewChurchil);
export default AndrewChurchil;
