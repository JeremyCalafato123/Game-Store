import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { Fragment } from "react/jsx-runtime";
import useGames from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

function FeaturedGameHeading({ gameQuery }: Props) {
  const showHeading = useBreakpointValue({
    lg: true,
    base: false,
  });

  const heading = `Featured ${
    gameQuery.genre?.name ? gameQuery.genre.name + " Games" : ""
  }`;

  const { data } = useGames(gameQuery);

  return (
    <Fragment>
      {showHeading && (
        <Box marginLeft="12px">
          <Box
            maxWidth="79em"
            margin="auto"
            marginTop="30px"
            marginBottom="10px"
          >
            <Heading fontSize="40px">{data.length > 0 && heading}</Heading>
          </Box>
        </Box>
      )}
    </Fragment>
  );
}

export default FeaturedGameHeading;
