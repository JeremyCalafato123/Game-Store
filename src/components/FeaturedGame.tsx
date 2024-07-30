import {
  Box,
  Card,
  CardBody,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import TagList from "./TagList";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

function FeaturedGame({ game }: Props) {
  return (
    <Card
      padding="15px"
      borderRadius={10}
      backgroundColor="#2D3748"
      position="relative"
    >
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

          {/* Platforms */}
          <Box position="absolute" bottom="25px" marginLeft="5px">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
              iconSize={6}
            ></PlatformIconList>
          </Box>
        </CardBody>
      </Grid>
    </Card>
  );
}

export default FeaturedGame;
