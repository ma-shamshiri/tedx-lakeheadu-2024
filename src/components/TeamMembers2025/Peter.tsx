import React, { useEffect, useState } from "react";
import { aminBadge, peterNoBG } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";
// import { PageTransition } from "../PageTransition";

const Peter: React.FC = () => {
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
                    firstName="Peter"
                    lastName="Diedrich"
                    fullName="Peter Diedrich"
                    title="Faculty Lecturer at Darwinian Ventures"
                    role="MC"
                    imageSrc={peterNoBG}
                    badgeSrc={aminBadge}
                    linkedinHref="https://ca.linkedin.com/"
                    twitterHref=""
                    tedHref="https://www.instagram.com/"
                    quoteText={t("Peter Diedrich has 30+ years experience in technology product development, global Tier 1 management consulting, tech venture capital, and executive C-suite (CEO, CFO, CSO) roles with McKinsey, BCE/Bell Canada, RBC Financial Group, VOTI Detection, TBayTel and others.  At Lakehead University beginning in 2024, he also lectures teaches graduate engineers with curricula covering entrepreneurship and diverse business disciplines.  With an enthusiastic focus on business startups and accelerating scalable growth, he is a proven, decisive, internationally experienced entrepreneurial leader, collaborator, and multi-disciplinary senior executive with a persistent results orientation, and is known as a strategic thinker and problem solver.  “Just start!”")}
                    icon={FaComputer}
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

// export default PageTransition(AminShamshiri);
export default Peter;
