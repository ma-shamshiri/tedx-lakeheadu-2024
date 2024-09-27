import React, { useEffect, useRef, useState } from "react";
import { Box, Image, Text, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { videosData } from "./videosData";
import { starsImage, videoThumbnail } from "../../assets";

interface Item {
    id: string;
    rowId: number;
    video?: videosData;
}

export const BlockVideoGallery: React.FC = () => {
    const galleryRef = useRef<HTMLDivElement | null>(null);
    const [items, setItems] = useState<Item[][]>([]);
    const [isHoveredItem, setIsHoveredItem] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null);
    const [currentVideoTopic, setCurrentVideoTopic] = useState<string | null>(null);

    const handleHoverItem = (id: string) => {
        setIsHoveredItem(true);
        setHoveredItem(id);
    };

    const handleUnHoverItem = () => {
        setIsHoveredItem(false);
        setHoveredItem(null);
    };

    const openModal = (videoUrl: string, videoTopic: string) => {
        setCurrentVideoUrl(videoUrl);
        setCurrentVideoTopic(videoTopic);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideoUrl(null);
    };

    useEffect(() => {
        const generateItems = () => {
            const rows = [
                { id: 1, count: 4 },
                { id: 2, count: 4 },
                { id: 3, count: 4 },
            ];

            const newItems: Item[][] = rows.map((row) => {
                return Array.from({ length: row.count }, (_, index: number) => {
                    const itemId = `${row.id}-${index}`;
                    const video = videosData.find((v) => v.id === itemId);
                    return {
                        id: itemId,
                        rowId: row.id,
                        video: video,
                    };
                });
            });

            setItems(newItems);
        };

        generateItems();

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY, currentTarget } = e;
            const target = currentTarget as HTMLDivElement;
            const { width, height } = target.getBoundingClientRect();
            const centerX = width / 2;
            const centerY = height / 2;

            const sensitivity = 1;
            const deltaX = (centerX - clientX) / sensitivity;
            const deltaY = (centerY - clientY) / sensitivity;

            if (galleryRef.current) {
                galleryRef.current.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
            }
        };

        const container = document.querySelector<HTMLDivElement>(".galleryContainer");
        container?.addEventListener("mousemove", handleMouseMove as EventListener);

        return () => {
            container?.removeEventListener("mousemove", handleMouseMove as EventListener);
        };
    }, []);

    return (
        <Box
            className="galleryContainer"
            width="100vw"
            height="100vh"
            overflow="hidden"
            position="relative"
            // bg={useColorModeValue("#4646ab", "#0E0E29")}
            bg={useColorModeValue("#4646ab", "black")}

            // bg={useColorModeValue(
            //     "linear-gradient(180deg, #6868f7, #6868f7, #a6a6ff, #a6a6ff)",
            //     "linear-gradient(180deg, #0e0e29, #0e0e29, #272763, #272763)"
            // )}
            backgroundImage={starsImage}
        >
            <Box
                className="gallery"
                ref={galleryRef}
                width="200vw"
                height="200vh"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                transition="transform 2s cubic-bezier(0.075, 0.82, 0.165, 1)"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                padding="15rem"
            >
                {items.map((row, rowIndex) => (
                    <Box
                        key={`row-${rowIndex}`}
                        className="row"
                        width="100%"
                        display="flex"
                        justifyContent={rowIndex === 1 ? "space-around" : "space-between"}
                    >
                        {row.map((item) => (
                            <Box
                                key={item.id}
                                className="item"
                                position="relative"
                                width="45rem"
                                height="32rem"
                                borderRadius="10px"
                                cursor="pointer"
                                overflow="hidden"
                                onMouseEnter={() => handleHoverItem(item.id)}
                                onMouseLeave={() => handleUnHoverItem()}
                                onClick={() => item.video && openModal(
                                    `https://www.youtube.com/embed/${item.video.videoId}`,
                                    `${item.video.videoTopic}`)
                                }
                            >
                                <Box
                                    className="preview-img"
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    width="100%"
                                    height="100%"
                                    zIndex="1"
                                    border={isHoveredItem ? "1px solid white" : "none"}
                                    borderRadius="10px"
                                >
                                    <Image
                                        src={item.video?.previewImg}
                                        alt={item.video?.videoName}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                        opacity={hoveredItem === item.id ? "0" : "1"}
                                        borderRadius="10px"
                                        transition="0.5s"
                                    />
                                </Box>
                                <Text
                                    id="videoName"
                                    position="absolute"
                                    width="50%"
                                    top="50%"
                                    left="50%"
                                    transform="translate(-50%, -50%)"
                                    textAlign="center"
                                    fontSize="30px"
                                    fontFamily="'Acme', sans-serif"
                                    color="#fff"
                                    opacity={hoveredItem === item.id ? "1" : "0"}
                                    transition="0.15s"
                                    pointerEvents="none"
                                    zIndex="2"
                                >
                                    {item.video?.videoName}
                                </Text>
                                <Box
                                    className="video-wrapper"
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    width="100%"
                                    height="100%"
                                    transform="scale(2)"
                                    transition="0.3s all"
                                >
                                    {item.video && (
                                        <ReactPlayer
                                            className="react-player"
                                            url={`https://www.youtube.com/embed/${item.video.videoId}`}
                                            controls={false}
                                            playing
                                            loop
                                            muted
                                            width="100%"
                                            height="100%"
                                        />
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>

            {currentVideoUrl && (
                <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
                    <ModalOverlay backdropFilter="blur(10px)" bg="rgba(0, 0, 0, 0.1)" />
                    <ModalContent
                        maxWidth="none"
                        maxHeight="none"
                        width="auto"
                        height="auto"
                    >
                        <ModalHeader fontSize="1.6rem" bg="black">{currentVideoTopic}</ModalHeader>
                        <ModalCloseButton size="1px" />
                        <ModalBody
                            display="flex"
                            justifyContent="center"
                            alignItems="center" padding={0}
                        >
                            <Box width="55vw" height="31vw" position="relative">
                                {currentVideoUrl === `https://www.youtube.com/embed/0` ? (
                                    <Image
                                        className="vide_thumbnail"
                                        src={videoThumbnail}
                                        alt="Video Thumbnail Image"
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                        opacity="0.5"
                                    />

                                ) : (
                                    <ReactPlayer
                                        url={currentVideoUrl}
                                        controls={true}
                                        width="100%"
                                        height="100%"
                                        style={{ position: "absolute", top: 0, left: 0 }}
                                        allowFullScreen
                                    />
                                )}
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </Box>
    );
};

export default BlockVideoGallery;
