import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import Carousel from "./components/CarouselGrid";

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
        <Carousel gameQuery={gameQuery}></Carousel>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
