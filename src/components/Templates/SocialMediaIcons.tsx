import { Box, IconButton, Stack, useColorModeValue } from "@chakra-ui/react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <Stack display="flex" flexDirection="row" spacing={6}>
      <Box as="a" href="#" target="_blank" rel="noopener noreferrer">
        <IconButton
          aria-label="linkedin"
          variant="ghost"
          size="xl"
          icon={<BsLinkedin size="20px" />}
          _hover={{
            bg: useColorModeValue("#0077b5", "gray.200"),
            color: useColorModeValue("white", "gray.700"),
          }}
          isRound
          boxSize="4rem"
        />
      </Box>
      <Box as="a" href="#" target="_blank" rel="noopener noreferrer">
        <IconButton
          aria-label="linkedin"
          variant="ghost"
          size="xl"
          icon={<BsTwitter size="20px" />}
          _hover={{
            bg: useColorModeValue("#4DA6E9", "gray.200"),
            color: useColorModeValue("white", "gray.700"),
          }}
          isRound
          boxSize="4rem"
        />
      </Box>
      <Box as="a" href="#" target="_blank" rel="noopener noreferrer">
        <IconButton
          aria-label="linkedin"
          variant="ghost"
          size="xl"
          icon={<BsInstagram size="20px" />}
          _hover={{
            bg: useColorModeValue("#E1186C", "gray.200"),
            color: useColorModeValue("white", "gray.700"),
          }}
          isRound
          boxSize="4rem"
        />
      </Box>
    </Stack>
  );
};

export default SocialMediaIcons;
