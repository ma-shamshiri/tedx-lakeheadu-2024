import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { SiCoinmarketcap } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { aminBadge, andreiNoBG } from "../../assets";
// import { PageTransition } from "../PageTransition";

const Andrei: React.FC = () => {
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
                <BlockTeamProfiles
                    firstName="Andrei"
                    lastName="Rosario"
                    fullName="Andrei Rosario"
                    title="Independent Events and Marketing Consultant | Rotarian"
                    role="Manager of Grants"
                    imageSrc={andreiNoBG}
                    badgeSrc={aminBadge}
                    linkedinHref="https://ca.linkedin.com/in/andrei-rosario/"
                    twitterHref="mailto:andreijrosario@gmail.com/"
                    tedHref="https://www.instagram.com"
                    quoteText={t("Andrei Rosario, Co-Director of Sponsorship at TEDxLakeheadU, specializes in grant writing and sponsorships. A Business - Marketing graduate from Confederation College, he is deeply engaged in the Thunder Bay community, with experience in event planning, marketing, and youth development. Beyond TEDx, Andrei serves as a Public Affairs Representative for the Canadian Cadet Organizations, plays trombone with the Thunder Bay Community Orchestra, volunteers with various organizations, writes poetry, and enjoys hiking. Passionate about fostering collaboration and inspiration, Andrei aims to create an open, engaging environment for learning and connection through TEDxLakeheadU!")}
                    icon={SiCoinmarketcap}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AminShamshiri);
export default Andrei;
