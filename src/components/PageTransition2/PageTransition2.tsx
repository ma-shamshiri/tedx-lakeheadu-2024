import React, { ComponentType } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from "framer-motion";

const calculateRandomBlockDelay = (rowIndex: number, totalRows: number): number => {
    const blockDelay = Math.random() * 0.5;
    const rowDelay = (totalRows - rowIndex - 1) * 0.05;
    return blockDelay + rowDelay;
}

export const PageTransition2 = (Page: ComponentType): React.FC => {
    return () => (
        <>
            <Page />

            <motion.div
                className='slide-in'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    background: "white",
                    transformOrigin: "bottom"
                }}
            />

            <motion.div
                className='slide-out'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    background: "white",
                    transformOrigin: "top"
                }}
            />
        </>
    );
};

// export default PageTransition2;
