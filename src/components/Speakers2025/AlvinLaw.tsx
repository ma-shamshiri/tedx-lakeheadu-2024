import React, { useEffect, useState } from "react";
import { alvin_law } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import SpeakerProfile2025 from "../SpeakerProfile2025";
// import { PageTransition } from "../PageTransition";

const AlvinLaw: React.FC = () => {
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
                <SpeakerProfile2025
                    name={t("Alvin Law")}
                    // title={t("Associate Professor in the Department of Geography | McGill")}
                    biography={t("Alvin Law is an international keynote speaker, 2-time Hall of Fame recipient, Emmy Award winner, world-class musician, and best-selling author. In his 40+ years of public speaking, Alvin has entertained more than 2 million people across 5 different continents. His incredible true story inspires audiences to explore their lives with greater imagination and transform their obstacles into amazing opportunities. When he’s not on stage, Alvin loves mastering sports video games and prides himself on being the best driver in his family. He shares his life with his wife and business partner, Darlene; his adult son, Vance; and assorted pets. They all live in beautiful Calgary, Canada.")}
                    talkTopic={t("Step Into Your Greatness")}
                    imageSrc={alvin_law}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default AlvinLaw;
