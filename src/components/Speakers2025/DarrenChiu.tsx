import React, { useEffect, useState } from "react";
import { darren_chiu } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import SpeakerProfile2025 from "../SpeakerProfile2025";
// import { PageTransition } from "../PageTransition";

const DarrenChiu: React.FC = () => {
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
                    name={t("Darren Chiu")}
                    // title={t("Associate Professor in the Department of Geography | McGill")}
                    biography={t("Darren is a Strategy Lead at Google, helping brands across all industries develop best in class marketing strategies. With over 13 years of industry experience, Darren’s passion for communication doesn’t stop at the world of business and sales. In his spare time, Darren moonlights as a comedian, stretching his creativity and perspectives beyond the boundaries of his professional life. As a recognition of his dedication and expertise, Darren was selected as an Emerging Leader in Advertising & Sales by The Peak in 2023.")}
                    talkTopic={t("The Elephant in the Room: How Emotions Drive Change")}
                    imageSrc={darren_chiu}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default DarrenChiu;
