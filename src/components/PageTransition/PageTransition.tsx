import React, { ComponentType } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from "framer-motion";

const calculateRandomBlockDelay = (rowIndex: number, totalRows: number): number => {
    const blockDelay = Math.random() * 0.5;
    const rowDelay = (totalRows - rowIndex - 1) * 0.05;
    return blockDelay + rowDelay;
}

export const PageTransition = (Page: ComponentType): React.FC => {
    return () => (
        <>
            <Page />
            <Box
                className="blocks-container transition-in"
                position="fixed"
                top="0"
                left="0"
                width="100vw"
                height="100vh"
                display="flex"
                flexDirection="column"
                pointerEvents="none"
                zIndex={100000}
            >
                {Array.from({ length: 10 }).map((_, rowIndex) => (
                    <Box
                        className='row'
                        key={rowIndex}
                        display="flex"
                        flex="1"
                        width="100%"
                    >
                        {Array.from({ length: 11 }).map((_, blockIndex) => (
                            <motion.div
                                key={blockIndex}
                                className='block'
                                initial={{ scaleY: 1 }}
                                animate={{ scaleY: 0 }}
                                exit={{ scaleY: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: calculateRandomBlockDelay(rowIndex, 10),
                                }}
                                style={{
                                    position: "relative",
                                    flex: 1,
                                    background: "#918e8e",
                                    margin: "-0.25px",
                                    transformOrigin: "top"
                                }}
                            ></motion.div>
                        ))}
                    </Box>
                ))}
            </Box>

            <Box
                className="blocks-container transition-out"
                position="fixed"
                top="0"
                left="0"
                width="100vw"
                height="100vh"
                display="flex"
                flexDirection="column"
                pointerEvents="none"
            >
                {Array.from({ length: 10 }).map((_, rowIndex) => (
                    <Box
                        className='row'
                        key={rowIndex}
                        display="flex"
                        flex="1"
                        width="100%"
                    >
                        {Array.from({ length: 11 }).map((_, blockIndex) => (
                            <motion.div
                                key={blockIndex}
                                className='block'
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 0 }}
                                exit={{ scaleY: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: calculateRandomBlockDelay(rowIndex, 10)
                                }}
                                style={{
                                    position: "relative",
                                    flex: 1,
                                    background: "#918e8e",
                                    margin: "-0.25px",
                                    transformOrigin: "bottom"
                                }}
                            ></motion.div>
                        ))}
                    </Box>
                ))}
            </Box>
        </>
    );
};

// export default PageTransition;
