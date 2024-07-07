import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {

  return (
    <Grid templateAreas={{ base: '"nav" "main"' }}>

      <GridItem area="nav" backgroundColor="#2d3748" color="White">
        <NavBar></NavBar>
      </GridItem>

      <GridItem area="main" backgroundColor="#1e1e1e" color="White">Main</GridItem>
      
    </Grid>
  );

}

export default App;