import { Grid, GridItem } from "@chakra-ui/react";

function App() {

  return (
    <Grid templateAreas={{ base: '"nav" "main"' }}>

      <GridItem area="nav" backgroundColor="lightblue" color="black">Nav</GridItem>
      <GridItem area="main" backgroundColor="lightpink" color="black">Main</GridItem>
      
    </Grid>
  );

}

export default App;