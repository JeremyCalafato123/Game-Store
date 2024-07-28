import { Card, CardBody, Grid, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

function FeaturedGame({ game }: Props) {
  return (
    <Card padding="15px" borderRadius={10} backgroundColor="#2D3748">
      {/* Have the image take 1/3 of the width, and the rest of the content taking up 2/3 */}
      <Grid templateColumns={{ base: "1fr 2fr" }}>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          borderRadius={10}
        ></Image>
        <CardBody>
          <Heading color="white">{game.name}</Heading>
        </CardBody>
      </Grid>
    </Card>
  );
}

export default FeaturedGame;
