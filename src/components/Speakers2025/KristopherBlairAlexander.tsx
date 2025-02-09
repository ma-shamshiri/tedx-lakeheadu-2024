import React, { useEffect, useState } from "react";
import { kristopher_blair_alexander } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import SpeakerProfile2025 from "../SpeakerProfile2025";
// import { PageTransition } from "../PageTransition";

const KristopherBlairAlexander: React.FC = () => {
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
                    name={t("Kristopher Blair Alexander")}
                    // title={t("Associate Professor in the Department of Geography | McGill")}
                    biography={t("Dr. Kris Alexander, an educational technology innovator and professor, has dedicated his career to reimagining how we prepare the next generation of educators. Dr. Kris Alexander, who holds a PhD in Educational Technology from Concordia University, conducts research that bridges the gap between traditional pedagogy and emerging technologies. At Toronto Metropolitan University, where he also earned his BA and MA, Dr. Alexander teaches future educators how to harness the power of game design, AI, and digital tools to create more engaging learning environments. His unique perspective comes from being both a globally ranked video game player and a passionate educator who has successfully integrated gaming and AI across multiple educational contexts. Drawing from his experience as a parent and professor, Dr. Alexander's work demonstrates how artificial intelligence can transform teaching and learning at all levels - from elementary classrooms to special education and post-secondary institutions. His innovative teaching methods, which include leveraging platforms like Twitch for accessible office hours and using AI tools to enhance lecture accessibility, showcase practical applications of technology in education. Through his research and teaching, Dr. Alexander is helping to shape a new paradigm in teacher education - one that prepares educators to confidently embrace and effectively utilize emerging technologies in their classrooms.")}
                    talkTopic={t("How AI Can level up the way you teach")}
                    imageSrc={kristopher_blair_alexander}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default KristopherBlairAlexander;
