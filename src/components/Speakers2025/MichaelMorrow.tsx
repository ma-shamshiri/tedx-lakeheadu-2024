import React, { useEffect, useState } from "react";
import { michael_morrow } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
import SpeakerProfile2025 from "../SpeakerProfile2025";
// import { PageTransition } from "../PageTransition";

const MichaelMorrow: React.FC = () => {
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
                    name={t("Michael Morrow")}
                    // title={t("Associate Professor in the Department of Geography | McGill")}
                    biography={t("Mike Morrow is a Legacy Strategist, Certified Financial Planner, and author of four best-selling books. Since 1989, he has helped Canadian families and business owners achieve financial security. His expertise is regularly featured in national media, and he has presented to over 60,000 financial advisors and clients worldwide. A two-time president of his local Financial Advisors Association of Canada chapter and a Diamond Knight of the MDRT Foundation.")}
                    talkTopic={t("The rules of money")}
                    imageSrc={michael_morrow}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AlinaGutierrezMejia);
export default MichaelMorrow;
