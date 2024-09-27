import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Navigationbar } from "../components/Navigationbar";
import { BlockVideoGallery } from "../components/BlockVideoGallery";
// import { BlockFooter } from "../components/BlockFooter";

const VideoGalleryPage: React.FC = () => {
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
                style={{
                    overflow: "hidden"
                }}
            >
                <Navigationbar />
                <BlockVideoGallery />
                {/* <BlockFooter /> */}
            </motion.div>
        </>
    );
};

// export default PageTransition(VideoGalleryPage);
// export default PageTransition2(VideoGalleryPage);
export default VideoGalleryPage;