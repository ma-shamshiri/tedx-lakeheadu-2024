import React, { useEffect, useState } from "react";
import { albert_brule } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import SpeakerProfile2025 from "../SpeakerProfile2025";
// import { PageTransition } from "../PageTransition";

const AlbertBrule: React.FC = () => {
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
                    name={t("Albert Brulé")}
                    // title={t("Associate Professor in the Department of Geography | McGill")}
                    biography={t("Albert Brulé is the CEO of United Way of Thunder Bay. Originally from London, Ontario, Albert first came to Thunder Bay in 1980 as a student in the arts management program at Confederation College. After graduation, he worked across Canada with a variety of arts, post-secondary, healthcare, and international charities, always maintaining close ties to Thunder Bay. In 2019, he returned to lead United Way, where he brings people, businesses, and organizations together to tackle urgent issues related to poverty. Albert believes that real change happens when communities unite with purpose. Under his leadership, United Way is fostering innovative partnerships and collective action to build a stronger, more inclusive Thunder Bay — because when we unite for good, Better is Possible.")}
                    talkTopic={t("United for Good: Better is Possible")}
                    imageSrc={albert_brule}
                    videoSrc="https://drive.google.com/file/d/1StBGDsspAp9UkBOxzQsiGMVa07IJT_cw/preview"
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default AlbertBrule;
