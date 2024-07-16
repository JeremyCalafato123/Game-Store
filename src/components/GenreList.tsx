import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { BsChevronDown } from "react-icons/bs";

function GenreList() {
  const { genres, error } = useGenres();

  return (
    <Menu>
      <MenuButton
        as={Button}
        borderRadius="0px 14px 14px 0px"
        backgroundColor="#EDF4FF"
        color="#434141"
        minW="1.5em%"
      >
        <HStack>
          <span>Genres</span>
          rightIcon=
          {
            <BsChevronDown
              style={{ marginTop: "2px" }}
              size="0.9em"
            ></BsChevronDown>
          }
        </HStack>
      </MenuButton>
      <MenuList>
        {genres.map((genre) => (
          <MenuItem key={genre.id} color="black">
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default GenreList;
