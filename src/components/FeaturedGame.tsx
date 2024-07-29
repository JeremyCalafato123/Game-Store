import { Box, Card, CardBody, Grid, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import TagList from "./TagList";

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
          {/* Game Title */}
          <Heading color="white" marginBottom="13px">
            {game.name}
          </Heading>

          {/* Game Tags */}
          <Box maxHeight="55px" overflow="hidden">
            {game.tags.map((tags) => (
              <TagList key={tags.id} tags={tags}></TagList>
            ))}
          </Box>
        </CardBody>
      </Grid>
    </Card>
  );
}

export default FeaturedGame;
