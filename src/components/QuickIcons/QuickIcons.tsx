import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
    Flex,
    IconButton,
    useBreakpointValue,
    Box,
    Image,
    Text,
    chakra,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaFacebookF, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

interface ModalConfig {
    modalType: string;
    title: string;
    posts: string[];
    link: string;
    icon: IconType;
    iconColor: string;
}

const QuickIcons: React.FC = () => {
    const [isOpen, setIsOpen] = useState(() => {
        const storedState = localStorage.getItem("headerIsOpen");
        return storedState ? JSON.parse(storedState) : true;
    });

    const [activeModal, setActiveModal] = useState<string | null>(null);

    useEffect(() => {
        localStorage.setItem("headerIsOpen", JSON.stringify(isOpen));
    }, [isOpen]);

    const instagramIconSize = useBreakpointValue({ md: "30px", lg: "28px" });
    const instagramIconBoxSize = useBreakpointValue({ md: "33px", lg: "35px" });

    const facebookIconSize = useBreakpointValue({ md: "30px", lg: "21px" });
    const facebookIconBoxSize = useBreakpointValue({ md: "33px", lg: "34px" });

    const linkedinIconSize = useBreakpointValue({ md: "30px", lg: "24px" });
    const linkedinIconBoxSize = useBreakpointValue({ md: "33px", lg: "35px" });

    const handleCloseModal = () => {
        setActiveModal(null);
    };

    const renderCreativeModal = ({
        modalType,
        title,
        posts,
        link,
        icon: IconComponent,
        iconColor,
    }: ModalConfig) => {
        if (activeModal !== modalType) return null;

        return (
            <Box
                position="fixed"
                top={0}
                left={0}
                width="100%"
                height="100vh"
                bg="rgba(0, 0, 0, 0.6)"
                onClick={handleCloseModal}
                display="flex"
                justifyContent="center"
                alignItems="center"
                zIndex={10}
            >
                <MotionBox
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                    bg="white"
                    boxShadow="lg"
                    borderRadius="md"
                    p={6}
                    zIndex={11}
                    width="800px"
                    height="500px"
                    maxW="90vw"
                    maxH="90vh"
                    overflow="hidden"
                    position="relative"
                >
                    {/* Close Button */}
                    <IconButton
                        aria-label="Close modal"
                        icon={<chakra.span fontSize="20px" fontWeight="bold">×</chakra.span>}
                        position="absolute"
                        top="8px"
                        right="8px"
                        onClick={handleCloseModal}
                        bg="transparent"
                        _hover={{ bg: "gray.100" }}
                    />

                    <Text fontSize="xl" mb={4} fontWeight="bold" textAlign="center">
                        {title}
                    </Text>
                    <Flex direction="column" align="center" gap={3}>
                        {posts.map((post, index) => (
                            <Image key={index} src={post} boxSize="100px" borderRadius="md" />
                        ))}
                    </Flex>
                    <Flex
                        justifyContent="center"
                        alignItems="center">
                        <Box
                            as={IconButton}
                            onClick={() => window.open(link, "_blank")}
                            icon={<IconComponent size="60px" />}
                            bg={iconColor}
                            color="white"
                            _hover={{ bg: iconColor }}
                            borderRadius="10px"
                            boxSize={"70px"}
                        />
                    </Flex>
                </MotionBox>
            </Box>
        );
    };

    return (
        <Flex align="center" gap={4}>
            {/* Toggle Button */}
            <IconButton
                icon={isOpen ? <FaChevronRight size="16px" /> : <FaChevronLeft size="16px" />}
                aria-label="Toggle Icons"
                onClick={() => setIsOpen(!isOpen)}
                bg="#16F8B6"
                color="#000"
                borderRadius="md"
                _hover={{ bg: "green.300" }}
                boxSize="30px"
            />

            {/* Collapsible Icons */}
            <MotionFlex
                initial={false}
                animate={{
                    width: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                }}
                overflow="hidden"
                align="center"
                gap={4}
            >
                {/* Instagram Button */}
                <Box
                    as={IconButton}
                    // onClick={() => setActiveModal("instagram")}
                    onClick={() => window.open("https://www.instagram.com/tedxlakeheadu2025?igsh=eW5pcTNsanppZA==", "_blank")}
                    rel="noopener noreferrer"
                    icon={<FaInstagram size={instagramIconSize} />}
                    bg={"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"}
                    color="white"
                    _hover={{ bg: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" }}
                    borderRadius="10px"
                    boxSize={instagramIconBoxSize}
                />

                {/* LinkedIn Button */}
                <Box
                    as={IconButton}
                    // onClick={() => setActiveModal("linkedin")}
                    onClick={() => window.open("https://www.linkedin.com/company/tedxlakeheadu/posts/", "_blank")}
                    rel="noopener noreferrer"
                    icon={<FaLinkedin size={linkedinIconSize} />}
                    bg="#0077B5"
                    color="white"
                    _hover={{ bg: "#0077B5" }}
                    borderRadius="10px"
                    boxSize={linkedinIconBoxSize}
                />

                {/* Facebook Button */}
                <Box
                    as={IconButton}
                    // onClick={() => setActiveModal("facebook")}
                    onClick={() => window.open("https://www.facebook.com/profile.php?id=61566357362138", "_blank")}
                    rel="noopener noreferrer"
                    icon={<FaFacebookF size={facebookIconSize} />}
                    bg="#1773EA"
                    color="white"
                    _hover={{ bg: "#1773EA" }}
                    borderRadius="10px"
                    boxSize={facebookIconBoxSize}
                />
            </MotionFlex>

            {/* Instagram Modal */}
            {renderCreativeModal({
                modalType: "instagram",
                title: "Instagram",
                posts: ["/path/to/instagram/post1.jpg", "/path/to/instagram/post2.jpg"],
                link: "https://www.instagram.com/",
                icon: FaInstagram,
                iconColor: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            })}

            {/* LinkedIn Modal */}
            {renderCreativeModal({
                modalType: "linkedin",
                title: "LinkedIn",
                posts: ["/path/to/linkedin/post1.jpg", "/path/to/linkedin/post2.jpg"],
                link: "https://www.linkedin.com/",
                icon: FaLinkedin,
                iconColor: "#0077B5",
            })}

            {/* Facebook Modal */}
            {renderCreativeModal({
                modalType: "facebook",
                title: "Facebook",
                posts: ["/path/to/facebook/post1.jpg", "/path/to/facebook/post2.jpg"],
                link: "https://www.facebook.com/",
                icon: FaFacebookF,
                iconColor: "#1773EA",
            })}
        </Flex>
    );
};

export default QuickIcons;
