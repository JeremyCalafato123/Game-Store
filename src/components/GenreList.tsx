import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, error } = useGenres();

  return (
    <Menu>
      <MenuButton
        as={Button}
        borderRadius="0px 14px 14px 0px"
        backgroundColor="#EDF4FF"
        color="#434141"
        minW="1.5em%"
        _hover={{ backgroundColor: "#e6f0ff" }}
        _active={{ backgroundColor: "#e6f0ff" }}
      >
        <HStack>
          <span>{selectedGenre ? selectedGenre.name : "Genres"}</span>
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
        {data.map((genre) => (
          <MenuItem
            onClick={() => onSelectGenre(genre)}
            key={genre.id}
            color="white"
            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            backgroundColor={genre.id === selectedGenre?.id ? "#515f75" : ""}
          >
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default GenreList;
