import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { Fragment } from "react/jsx-runtime";
import useGames from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const adjustHeading = useBreakpointValue({
    lg: "50px",
    base: "20px",
  });

  const heading = `${gameQuery.genre?.name || ""} Games`;

  const { data } = useGames(gameQuery);

  return (
    <Fragment>
      <Box marginLeft="12px">
        <Box
          maxWidth="79em"
          marginX="auto"
          marginTop={adjustHeading}
          marginBottom="10px"
        >
          <Heading fontSize="40px" as="h1">
            {data.length > 0 && heading}
          </Heading>
        </Box>
      </Box>
    </Fragment>
  );
}

export default GameHeading;
