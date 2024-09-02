import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

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
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody display="flex" alignItems="center" justifyContent="center">
        <HStack width="100%" justifyContent="space-between">
          <div>
            {/* Game Name */}
            <Heading fontSize="24">{game.name}</Heading>

            {/* Game Platforms */}
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform) || []}
            />
          </div>

          {/* Game Score */}
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
