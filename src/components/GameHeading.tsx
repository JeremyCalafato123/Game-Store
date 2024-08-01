import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { Fragment } from "react/jsx-runtime";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.genre?.name || ""} Games`;

  return (
    <Fragment>
      <Box marginLeft="12px">
        <Box
          maxWidth="79em"
          marginX="auto"
          marginTop="50px"
          marginBottom="10px"
        >
          <Heading fontSize="40px" as="h1">
            {heading}
          </Heading>
        </Box>
      </Box>
    </Fragment>
  );
}

export default GameHeading;
