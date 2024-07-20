import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedSearch, setSelectedSearch] = useState<String>("");

  return (
    <Grid templateAreas={{ base: '"nav" "main"' }}>
      <GridItem area="nav" backgroundColor="#2d3748" color="White">
        <NavBar
          onSelectGenre={(genre) => setSelectedGenre(genre)}
          onSearch={(searchText) => setSelectedSearch(searchText)}
        />
      </GridItem>

      <GridItem area="main" backgroundColor="#1e1e1e" color="White">
        <GameGrid
          selectedGenre={selectedGenre}
          selectedSearch={selectedSearch}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
