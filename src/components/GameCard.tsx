import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

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
        <Heading fontSize="24">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
