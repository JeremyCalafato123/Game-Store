import FullLogo from "../assets/Games-Store Logo.png";
import SmallLogo from "../assets/Games-Store Logo Small.png";
import profile from "../assets/Profile Icon 2.png";

import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import GenreList from "./GenreList";
import { Genre } from "../hooks/useGenres";
import SearchInput from "./SearchInput";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  onSearch: (searchText: string) => void;
  selectedGenre: Genre | null;
}

function NavBar({ onSelectGenre, onSearch, selectedGenre }: Props) {
  // Show Full Logo on Medium-Sized Screens and Above
  const showLogo = useBreakpointValue({
    md: FullLogo,
    base: SmallLogo,
  });

  // Show Genres Filter on Medium-Sized Screens and Above
  const showGenresFilter = useBreakpointValue({
    md: true,
    base: false,
  });

  return (
    <Box px={4} paddingY="10px">
      {/* Spacing and Positioning of All Elements within NavBar */}
      <HStack justifyContent={"space-between"} maxWidth="80em" margin="auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src={showLogo}
            width={{ base: "80px", md: "200px" }}
            padding="10px"
          />
        </Link>

        {/* Search Bar And Genres Filter*/}
        <HStack spacing={0} flex="1" mx="5%">
          {/* Search Bar */}
          <SearchInput onSearch={onSearch}></SearchInput>

          {/* Genres Filter */}
          {showGenresFilter && (
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={onSelectGenre}
            />
          )}
        </HStack>

        {/* Profile Icon */}
        <Menu autoSelect={false}>
          <MenuButton
            as={Button}
            variant={"link"}
            cursor={"pointer"}
            marginRight="9px"
          >
            <Avatar size={"md"} src={profile} />
          </MenuButton>
          <MenuList alignItems={"center"} color="black">
            <br />
            <Center>
              <Avatar size={"2xl"} src={profile} />
            </Center>
            <br />
            <Center color="white">
              <p>Username</p>
            </Center>
            <br />
            <MenuDivider></MenuDivider>
            <MenuItem color="white" _hover={{ backgroundColor: "#394353" }}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default NavBar;
