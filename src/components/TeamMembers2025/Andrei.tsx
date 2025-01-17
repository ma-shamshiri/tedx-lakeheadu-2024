import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { SiCoinmarketcap } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { aminBadge, farazNoBG } from "../../assets";
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
                    role="Co-Director of Sponsorship"
                    imageSrc={farazNoBG}
                    badgeSrc={aminBadge}
                    linkedinHref="https://ca.linkedin.com/in/andrei-rosario/"
                    twitterHref="mailto:andreijrosario@gmail.com/"
                    tedHref="https://www.instagram.com"
                    quoteText={t("Andrei Rosario is a Co-Director of Sponsorship, where he provides consultations on writing grants and sourcing sponsorships for TEDxLakeheadU. He is a graduate of the Business - Marketing program at Confederation College. Being heavily involved in the Thunder Bay community, Andrei has an array of experience in event planning, marketing, advocacy, and youth development. Outside of TEDx, Andrei is a Unit Public Affairs Representative in the Canadian Cadet Organizations. In his free time, he plays the trombone with the Thunder Bay Community Orchestra, actively volunteers in local to national organizations, writes poetry, and hikes in Northwestern Ontario. Andrei is excited to bring people together through TEDxLakeheadU! He's looking forward to inspiring younger generations and continuously building an open environment for learning, entertainment, and collaboration in Thunder Bay!")}
                    icon={SiCoinmarketcap}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AminShamshiri);
export default Andrei;
