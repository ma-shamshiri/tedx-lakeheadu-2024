import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BlockFooter } from "../BlockFooter";
import { Navigationbar } from "../Navigationbar";
import { BlockSpeakerProfiles } from "../BlockSpeakerProfiles";
// import { PageTransition } from "../PageTransition";

import {
  flore_noBG,
  flore_talk10,
  flore_talk20,
  flore_talk30,
  flore_talk40,
  flore_talk50,
  flore_talk60,
  flore_talk70,
  flore_talk80,
  flore_talk90,
  flore_talk100,
  flore_talk110,
  flore_talk120,
  flore_talk130,
  flore_talk140,
  flore_talk150,
  flore_talk160,
  flore_talk170,
  flore_talk180,
  flore_talk190,
  flore_talk200,
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
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk30,
  },
  {
    id: "2",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk100,
  },
  {
    id: "3",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk110,
  },
  {
    id: "4",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk40,
  },
  {
    id: "5",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk50,
  },
  {
    id: "6",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk60,
  },
  {
    id: "7",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk70,
  },
  {
    id: "8",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk80,
  },
  {
    id: "9",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk90,
  },
  {
    id: "10",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk10,
  },
  {
    id: "11",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk20,
  },
  {
    id: "12",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk120,
  },
  {
    id: "13",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk130,
  },
  {
    id: "14",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk140,
  },
  {
    id: "15",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk150,
  },
  {
    id: "16",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk160,
  },
  {
    id: "17",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk170,
  },
  {
    id: "18",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk180,
  },
  {
    id: "19",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk190,
  },
  {
    id: "20",
    title: 'Flore Deshayes',
    text: "La pouvoir du silence dans nos interactions humaines",
    image: flore_talk200,
  },
];

const FloreDeshayes: React.FC = () => {
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
          name="Flore Deshayes"
          title="Social worker"
          biography={t("floreDeshayesBiography")}
          talkTopic="La pouvoir du silence dans nos interactions humaines"
          imageSrc={flore_noBG}
          videoSrc="https://www.youtube.com/embed/M-mU37Er5B8"
          videoDescription={t("floreDeshayesTalkDescription")}
          slides={sliderData}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(FloreDeshayes);
export default FloreDeshayes;
