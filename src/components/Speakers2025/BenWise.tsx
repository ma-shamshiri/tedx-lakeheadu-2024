import React, { useEffect, useState } from "react";
import { alvin_law, ben_wise } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import SpeakerProfile2025 from "../SpeakerProfile2025";
// import { PageTransition } from "../PageTransition";

const BenWise: React.FC = () => {
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
                    name={t("Ben Wise")}
                    // title={t("Associate Professor in the Department of Geography | McGill")}
                    biography={t("Ben Wise and Darren Chiu are the co-founders of Captivate, providing tactical tools to help you increase your powers of persuasion and communication. They are sought after speakers on the psychology of persuasion and have appeared at industry events, conferences and corporate training programs. Beyond Captivate, Ben Wise is a 15 year advertising industry veteran who has held successive sales and leadership roles at Google, where he is currently the Head of Programmatic Media. Ben is active in his community where he serves on the Board of the Daily Bread Food Bank and advises multiple startups on sales and go to market strategy. Darren is a Strategy Lead at Google, helping brands across all industries develop best in class marketing strategies. With over 12 years of industry experience, Darren’s passion for communication doesn’t stop at the world of business and sales. In his spare time, Darren moonlights as a comedic storyteller, stretching his creativity and perspectives beyond the boundaries of his professional life. As a recognition of his dedication and expertise, Darren was selected as an Emerging Leader in Advertising & Sales by The Peak in 2023.")}
                    talkTopic={t("The Elephant in the Room: How Emotions Drive Change")}
                    imageSrc={ben_wise}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default BenWise;
