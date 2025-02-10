import React, { useEffect, useState } from "react";
import { richard_dobson } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import SpeakerProfile2025 from "../SpeakerProfile2025";
// import { PageTransition } from "../PageTransition";

const RichardDobson: React.FC = () => {
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
                    name={t("Richard Dobson")}
                    // title={t("Associate Professor in the Department of Geography | McGill")}
                    biography={t("He is dedicated to simplifying client communications for financial advisors, authoring 'Make Simplicity Your Superpower' to provide practical communication strategies. Through his 'applied simplistics' approach, he helps advisors clarify the why and how for clients, improving understanding and outcomes. Drawing on his experience as a former FINRA Broker-Dealer Chief Compliance Officer, he emphasizes that clear, effective communication prevents misunderstandings, protects firms, and builds stronger client relationships—proving simplicity is good business.")}
                    talkTopic={t("Make Simplicity Your Superpower, Communication Hacks Every Financial Advisor Should Know")}
                    imageSrc={richard_dobson}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default RichardDobson;
