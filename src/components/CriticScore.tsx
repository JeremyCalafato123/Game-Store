import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "#9AE6B4" : score > 60 ? "yellow" : "red";
  let backgroundColor = score > 75 ? "#3F5359" : score > 60 ? "yellow" : "red";

  return (
    <Badge
      fontSize="30px"
      color={color}
      backgroundColor={backgroundColor}
      borderRadius="4px"
      paddingX={2}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
