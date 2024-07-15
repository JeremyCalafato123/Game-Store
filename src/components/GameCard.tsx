import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      backgroundColor="#2D3748"
      color="white"
    >
      <Image src={game.background_image} />
      <CardBody>
        {/* Game Name */}
        <Heading fontSize="24">{game.name}</Heading>

        {/* Game Plaforms */}
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
}

export default GameCard;
