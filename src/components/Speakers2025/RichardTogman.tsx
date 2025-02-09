import React, { useEffect, useState } from "react";
import { richard_togman } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import SpeakerProfile2025 from "../SpeakerProfile2025";
// import { PageTransition } from "../PageTransition";

const RichardTogman: React.FC = () => {
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
                    name={t("Richard Togman")}
                    // title={t("Associate Professor in the Department of Geography | McGill")}
                    biography={t("Dr. Richard Togman is the CEO of the Thunder Bay Public Library. He also currently acts as Chair of the Thunder Bay Chamber of Commerce Policy and Advocacy Committee and sits on the Board of the Lakehead Social Planning Council. Previous to his role at the Library, Richard launched real estate start-up 'Rent Panda'. As Co-Founder and CEO, Rent Panda scaled from a 1 person Thunder Bay business to operating in every major city in Ontario within 5 years. Richard also holds a PhD in Political Science from the University of British Columbia and published a book with the world's top academic publisher, Oxford University Press. His book 'Nationalizing Sex' looks at how governments have tried to control and shape demographic growth and decline, why most government efforts fail and what we can do to shape our future.")}
                    talkTopic={t("The Competitive Advantage of Designing for Community")}
                    imageSrc={richard_togman}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default RichardTogman;
