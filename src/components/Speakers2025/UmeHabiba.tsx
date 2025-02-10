import React, { useEffect, useState } from "react";
import { richard_togman, ume_habiba } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import SpeakerProfile2025 from "../SpeakerProfile2025";
// import { PageTransition } from "../PageTransition";

const UmeHabiba: React.FC = () => {
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
                    name={t("Ume Habiba")}
                    // title={t("Associate Professor in the Department of Geography | McGill")}
                    biography={t("My name is Ume (pronounced oo-may), and I am an incoming software engineer at Microsoft in NYC! I recently graduated from the University of Maryland, College Park with a Bachelors of Science in Information and Computer Sciences and a minor in QUEST. I became a part of the GWC sisterhood in 2017, when I started the first Girls Who Code club at my high school. Throughout my tech journey, I faced imposter syndrome, countless microagressions, and the unwillingness of my peers to help me when I struggled. This inspired me to start posting on social media, where I was able to post all about my experiences (the good and the bad) which was aimed at inspiring other women to enter the field of tech! I also am a fashion lover—which is another aspect of my life that is constantly compromised because of me being in a male dominated field. However, this also motivated me to post fashion content and express myself through beauty and clothes—something I had never seen done before in the corporate technology sector. I aspire to be the representation I never saw, and use my experiences and insights to make a better tech future for us all!")}
                    talkTopic={t("Being Yourself in the 2025 Job Market")}
                    imageSrc={ume_habiba}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default UmeHabiba;
