import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BlockFooter } from "../BlockFooter";
import { Navigationbar } from "../Navigationbar";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";
// import { PageTransition } from "../PageTransition";

import {
  myra_noBG,
  myra_talk10,
  myra_talk20,
  myra_talk30,
  myra_talk40,
  myra_talk50,
  myra_talk60,
  myra_talk70,
  myra_talk80,
  myra_talk90,
  myra_talk100,
  myra_talk110,
  myra_talk120,
  myra_talk130,
  myra_talk140,
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
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk40,
  },
  {
    id: "2",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk20,
  },
  {
    id: "3",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk30,
  },
  {
    id: "4",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk10,
  },
  {
    id: "5",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk50,
  },
  {
    id: "6",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk60,
  },
  {
    id: "7",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk70,
  },
  {
    id: "8",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk80,
  },
  {
    id: "9",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk90,
  },
  {
    id: "10",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk100,
  },
  {
    id: "11",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk110,
  },
  {
    id: "12",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk120,
  },
  {
    id: "13",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk130,
  },
  {
    id: "14",
    title: 'Myra Virgil',
    text: "...",
    image: myra_talk140,
  },
];

const MyraVirgil: React.FC = () => {
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
          name="Myra Virgil"
          title="Philanthropy Executive | Strategist | Storyteller"
          biography={t("myraVirgilBiography")}
          talkTopic=""
          imageSrc={myra_noBG}
          videoSrc=""
          videoDescription={""}
          slides={sliderData}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(MyraVirgil);
export default MyraVirgil;
