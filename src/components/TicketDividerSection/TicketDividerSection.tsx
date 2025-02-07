import React, { useState } from 'react';
import { Box, Button, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const TicketDividerSection: React.FC = () => {
    const { t } = useTranslation();

    const buttonHoverTextColor = useColorModeValue("#FF0000", "#FF0000");
    const buttonHoverBorderColor = useColorModeValue("#FF0000", "#FF0000");

    const [isHoveredButton, setIsHoveredButton] = useState(false);

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

    return (
        <Box
            position="relative"
            display={{ base: "block", lg: "none" }}
            width="100%"
            height="10rem"
            bg="#000"
            overflow="hidden"
        >
            <Flex
                className="block__button"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={100}
            >
                <HStack>
                    <ScrollLink to="ticket-section" smooth={true} duration={500}>
                        <Button
                            border="2px solid #FF0000"
                            borderRadius="10px"
                            cursor="pointer"
                            fontSize={{ base: "1.8rem", lg: "3.2rem" }}
                            padding={{ base: "0.5rem", lg: "2rem" }}
                            textAlign="center"
                            whiteSpace="nowrap"
                            bg="#FF0000"
                            color="#fff"
                            boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                            display="inline-block"
                            width={{ base: "18rem", lg: "36rem" }}
                            height={{ base: "6rem", lg: "10rem" }}
                            _hover={{
                                border: "0.2rem solid",
                                borderColor: buttonHoverBorderColor,
                                bg: "transparent",
                                color: buttonHoverTextColor,
                                boxShadow:
                                    "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
                            }}
                            transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
                            onMouseEnter={handleHoverButton}
                            onMouseLeave={handleUnHoverButton}
                        >
                            {t("getTicket")}
                        </Button>
                    </ScrollLink>
                </HStack>
            </Flex>
        </Box>
    );
};

export default TicketDividerSection;































