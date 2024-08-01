import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import Carousel from "./components/CarouselGrid";
import GameHeading from "./components/GameHeading";
import FeaturedGame from "./components/FeaturedGame";
import FeaturedGameHeading from "./components/FeaturedGameHeading";

export interface GameQuery {
  genre: Genre | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateAreas={{ base: '"nav" "main"' }}>
      <GridItem area="nav" backgroundColor="#2d3748" color="White">
        <NavBar
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <GridItem area="main" backgroundColor="#1e1e1e" color="White">
        <FeaturedGameHeading gameQuery={gameQuery}></FeaturedGameHeading>
        <Carousel gameQuery={gameQuery}></Carousel>
        <GameHeading gameQuery={gameQuery}></GameHeading>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
