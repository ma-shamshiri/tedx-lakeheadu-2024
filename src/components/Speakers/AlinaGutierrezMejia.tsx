import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BlockFooter } from "../BlockFooter";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";
import { Navigationbar } from "../Navigationbar";
// import { PageTransition } from "../PageTransition";

import {
  alina_noBG,
  alina_talk10,
  alina_talk20,
  alina_talk30,
  alina_talk40,
  alina_talk50,
  alina_talk60,
  alina_talk70,
  alina_talk80,
  alina_talk90,
  alina_talk100,
  alina_talk110,
  alina_talk120,
  alina_talk130,
  alina_talk140,
  alina_talk150,
  alina_talk160,
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
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk40,
  },
  {
    id: "2",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk50,
  },
  {
    id: "3",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk60,
  },
  {
    id: "4",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk10,
  },
  {
    id: "5",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk20,
  },
  {
    id: "6",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk30,
  },
  {
    id: "7",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk70,
  },
  {
    id: "8",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk80,
  },
  {
    id: "9",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk90,
  },
  {
    id: "10",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk100,
  },
  {
    id: "11",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk110,
  },
  {
    id: "12",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk120,
  },
  {
    id: "13",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk130,
  },
  {
    id: "14",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk140,
  },
  {
    id: "15",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk150,
  },
  {
    id: "16",
    title: 'Alina Gutierrez Mejia',
    text: "Let Me Draw What I Mean",
    image: alina_talk160,
  },
];


const AlinaGutierrezMejia: React.FC = () => {
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
          name="Alina Gutierrez Mejia"
          title="Graphic Facilitator | Creative Consultant"
          biography={t("alinaBiography")}
          talkTopic="Let Me Draw What I Mean"
          imageSrc={alina_noBG}
          videoSrc="https://www.youtube.com/embed/w-nQcPa2HTs"
          videoDescription={t("alinaTalkDescription")}
          slides={sliderData}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(AlinaGutierrezMejia);
export default AlinaGutierrezMejia;
