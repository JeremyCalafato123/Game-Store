import { Badge } from "@chakra-ui/react";

interface Props {
  score: number | null;
  paddingX?: number;
  paddingY?: number;
}

function CriticScore({ score, paddingX = 2, paddingY = 0 }: Props) {
  let color;

  if (score === null) {
    color = "gray";
  } else if (score > 75) {
    color = "green";
  } else if (score > 60) {
    color = "yellow";
  } else {
    color = "red";
  }

  return (
    <Badge
      fontSize="30px"
      colorScheme={color}
      borderRadius="4px"
      paddingX={paddingX}
      paddingY={paddingY}
    >
      {score !== null ? score : "N/A"}
    </Badge>
  );
}

export default CriticScore;
