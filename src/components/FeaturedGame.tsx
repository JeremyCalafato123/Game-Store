import {
  Box,
  Card,
  CardBody,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import TagList from "./TagList";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

function FeaturedGame({ game }: Props) {
  // Convert mm/dd/yyy to a written date
  var DigitDate = new Date(game.released);
  var FullWrittenDate = DigitDate.toString();

  var Month = FullWrittenDate.slice(4, 8);
  var Day = FullWrittenDate.slice(8, 10);
  var Year = FullWrittenDate.slice(11, 15);

  var FinalWrittenDate = Month + Day + ", " + Year;

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

          <Box position="absolute" bottom="65px" marginLeft="5px">
            {/* Release Date */}
            <Text color="#C7D3E8" marginTop="13px" fontSize="20" bottom="5px">
              Release Date: {FinalWrittenDate}
            </Text>
          </Box>

          <Box position="absolute" bottom="25px" marginLeft="5px">
            {/* Platforms */}
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
              iconSize={6}
            ></PlatformIconList>
          </Box>

          <Box
            position="absolute"
            bottom="25px"
            right="50px"
            marginRight="-5px"
          >
            <CriticScore
              score={game.metacritic}
              paddingX={4}
              paddingY={2}
            ></CriticScore>
          </Box>
        </CardBody>
      </Grid>
    </Card>
  );
}

export default FeaturedGame;
