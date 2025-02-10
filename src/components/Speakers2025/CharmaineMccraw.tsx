import React, { useEffect, useState } from "react";
import { ben_wise, charmaine_mccraw } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import SpeakerProfile2025 from "../SpeakerProfile2025";
// import { PageTransition } from "../PageTransition";

const CharmaineMccraw: React.FC = () => {
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
                    name={t("Charmaine McCraw")}
                    // title={t("Associate Professor in the Department of Geography | McGill")}
                    biography={t("Charmaine McCraw is the Manager of Indigenous Engagement and Training at ORIGIN, a pioneering organization that bridges the gap between Indigenous peoples and employment opportunities, while supporting corporate Canada on its path to reconciliation. Born and raised in Caramat, Ontario, Charmaine is an Irish-Ojibwe daughter, mother, wife and friend who is deeply rooted in her commitment to community and individual empowerment. Holding a Bachelor of Arts degree from Lakehead University, McCraw boasts over 15 years of expertise in Community Economic and Social Development. She is dedicated to a grassroots approach, emphasizing the importance of building authentic relationships and fostering collaboration at the community level. McCraw actively incorporates Indigenous wisdom and knowledge to address modern challenges, ensuring that solutions are culturally grounded and sustainable. Known for her ability to foster meaningful partnerships, she has successfully built capacity and created opportunities for Indigenous job seekers and employers across Northern Ontario. Through her leadership, McCraw not only champions capacity development and reconciliation but also honours the value of traditional Indigenous practices in shaping a more inclusive, equitable future.")}
                    talkTopic={t("We are all Connected - The Journey of Self-Awareness, Education, and Building Meaningful Relationships: Empowering the Path to Reconciliation")}
                    imageSrc={charmaine_mccraw}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default CharmaineMccraw;
