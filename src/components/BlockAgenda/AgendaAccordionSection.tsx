import React, { useState } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function AgendaAccordionSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const titleColor = useColorModeValue("gray.200", "gray.200");
  const titleBackgroundColor = useColorModeValue("gray.800", "gray.800");
  const titleHoverColor = useColorModeValue("gray.600", "gray.600");
  const descriptionColor = useColorModeValue("gray.400", "gray.400");
  const descriptionBackgroundColor = useColorModeValue("#202736", "#202736");

  return (
    <AccordionItem borderRadius={10}>
      <AccordionButton
        borderRadius={10}
        display="flex"
        flexDir={{ base: "column", md: "column", lg: "row" }}
        alignItems="center"
        width={"100%"}
        padding={{ base: "1rem 1rem", md: "1rem 1rem", lg: "1.5rem 1rem" }}
        backgroundColor={titleBackgroundColor}
        _hover={{ bg: titleHoverColor }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text
          fontSize={{ base: "1.4rem", md: "1.8rem", lg: "1.8rem" }}
          color={titleColor}
          flex="1"
        >
          {title}
        </Text>
        <ChevronDownIcon
          fontSize="22px"
          color={"gray.400"}
          style={{ transform: isOpen ? "rotate(180deg)" : "" }}
          transition="transform 0.3s ease-in-out"
          marginTop={{ base: "1rem" }}
        />
      </AccordionButton>
      <AccordionPanel
        padding={{ base: "1rem 2rem", md: "2rem 2rem", lg: "2rem 2rem" }}
        backgroundColor={descriptionBackgroundColor}
        justifyContent="center"
        alignItems="center"
      >
        <Text
          color={descriptionColor}
          textAlign="left"
          fontSize={{ base: "1.4rem", md: "1.5rem", lg: "1.6rem" }}
        >
          {description}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default AgendaAccordionSection;
