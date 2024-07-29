import { Badge } from "@chakra-ui/react";
import { Tag } from "../hooks/useGames";

interface Props {
  tags: Tag;
}

function TagList({ tags }: Props) {
  return (
    <Badge
      paddingX="12px"
      paddingY="2px"
      marginX="3px"
      marginY="2px"
      backgroundColor="#425169"
      color="white"
      fontWeight="500"
    >
      {tags.name}
    </Badge>
  );
}

export default TagList;
