import { Fragment } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameQuery } from "../App";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Fragment>
      {error && <Text>{error}</Text>}

      {data.length === 0 && isLoading === false && (
        <Text fontSize="2xl" textAlign="center" marginTop="4">
          No Games Found
        </Text>
      )}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="10px"
        maxWidth="80em"
        margin="auto"
      >
        {isLoading
          ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
          : data.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </Fragment>
  );
};

export default GameGrid;
