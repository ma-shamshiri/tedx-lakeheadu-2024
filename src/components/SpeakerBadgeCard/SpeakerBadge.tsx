import { Badge, Box, HStack, ResponsiveValue, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SpeakerBadgeProps {
  text: string;
  textColor?: string;
  textSize?: ResponsiveValue<string>;
  fontWeight?: string;
  score?: string;
  scoreTextColor?: string;
  scoreBackgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  whiteSpace?: string;
  backgroundColor?: string;
  children?: ReactNode;
}

const SpeakerBadge: React.FC<SpeakerBadgeProps> = ({
  text,
  textColor = "#fff",
  textSize = { base: "2rem", lg: "1.5rem" },
  score,
  scoreTextColor = "#000",
  scoreBackgroundColor = "#fff",
  fontWeight = "600",
  borderRadius = "2rem",
  padding = "0.5rem 1.1rem",
  whiteSpace = "nowrap",
  backgroundColor = "#000",
  children,
}) => {
  return (
    <>
      {/* ************* badge--custom ************* */}
      <Badge
        className="badge_custom"
        as={Box}
        borderRadius={borderRadius}
        fontSize={textSize}
        fontWeight={fontWeight}
        padding={padding}
        whiteSpace={whiteSpace}
        bg={backgroundColor}
        color={textColor}
      >
        <HStack>
          <Text
            className="badge_name"
            style={{ paddingRight: score ? "0.5rem" : "0" }}
          >
            {text}
          </Text>
          {score && (
            <Box
              className="bade_score_container"
              fontSize={{ base: "1rem", lg: "1.3rem" }}
              color={scoreTextColor}
              bg={scoreBackgroundColor}
              borderRadius="5px"
              padding="0.4rem"
            >
              <Text className="badge_score">+{score}</Text>
            </Box>
          )}
        </HStack>
      </Badge>
    </>
  );
};

export default SpeakerBadge;
