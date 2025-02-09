import React, { useEffect, useState } from "react";
import { kari_chiappetta } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import SpeakerProfile2025 from "../SpeakerProfile2025";
// import { PageTransition } from "../PageTransition";

const KariChiappetta: React.FC = () => {
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
                    name={t("Kari Chiappetta")}
                    // title={t("Associate Professor in the Department of Geography | McGill")}
                    biography={t("Kari Chiappetta is an award-winning author, speaker, and facilitator who has delivered workshops and keynote addresses to audiences across a variety of industries. Her sessions are designed to inspire and motivate audiences to achieve their goals, overcome challenges, and reach their full potential. Kari’s authentic and engaging personality enables her to connect with audiences on a personal level. She is known for her high-energy presentations and her ability to keep audiences engaged and entertained throughout her speeches. Her use of humor, personal anecdotes, and interactive exercises helps to create a positive and dynamic atmosphere, making her presentations memorable and impactful.")}
                    talkTopic={t("Recognizing our Strengths and Celebrating our Gifts")}
                    imageSrc={kari_chiappetta}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default KariChiappetta;
