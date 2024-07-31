import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
  paddingX?: number;
  paddingY?: number;
}

function CriticScore({ score, paddingX = 2, paddingY = 0 }: Props) {
  let color = score > 75 ? "#9AE6B4" : score > 60 ? "yellow" : "red";
  let backgroundColor = score > 75 ? "#3F5359" : score > 60 ? "yellow" : "red";

  return (
    <Badge
      fontSize="30px"
      color={color}
      backgroundColor={backgroundColor}
      borderRadius="4px"
      paddingX={paddingX}
      paddingY={paddingY}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
