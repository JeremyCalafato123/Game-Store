import FullLogo from "../assets/Games-Store Logo.png";
import SmallLogo from "../assets/Games-Store Logo Small.png";
import profile from "../assets/Profile Icon 2.png";
import { BsChevronDown, BsSearch } from "react-icons/bs";

import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import GenreList from "./GenreList";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function NavBar({ onSelectGenre }: Props) {
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

  // Change the Curviture of the Search Bar According to the Size of the Screen
  const curveSearchBar = useBreakpointValue({
    md: "14px 0px 0px 14px",
    base: "14px 14px 14px 14px",
  });

  // Show "Search Games" Placeholder on Medium-Sized Screens and Above, Else Show "Search" Placeholder
  const showPlaceholder = useBreakpointValue({
    md: "Search Games",
    base: "Search",
  });

  return (
    <Box px={4} paddingY="10px">
      {/* Spacing and Positioning of All Elements within NavBar */}
      <HStack justifyContent={"space-between"} maxWidth="80em" margin="auto">
        {/* Logo */}
        <Image
          src={showLogo}
          width={{ base: "80px", md: "200px" }}
          padding="10px"
        />

        {/* Search Bar */}
        <HStack spacing={0} flex="1" mx="5%">
          <InputGroup>
            <InputRightElement
              children={<BsSearch color="black"></BsSearch>}
            ></InputRightElement>
            <Input
              flex="1"
              borderRadius={curveSearchBar}
              backgroundColor="white"
              color="#6C6C6C"
              fontWeight="semibold"
              placeholder={showPlaceholder}
              _placeholder={{ color: "#6C6C6C", fontWeight: "semibold" }}
            />
          </InputGroup>

          {/* Genres Filter */}
          {showGenresFilter && <GenreList onSelectGenre={onSelectGenre} />}
        </HStack>

        {/* Profile Icon */}
        <Menu>
          <MenuButton as={Button} variant={"link"} cursor={"pointer"}>
            <Avatar size={"md"} src={profile} />
          </MenuButton>
          <MenuList alignItems={"center"} color="black">
            <br />
            <Center>
              <Avatar size={"2xl"} src={profile} />
            </Center>
            <br />
            <Center>
              <p>Username</p>
            </Center>
            <br />
            <MenuDivider></MenuDivider>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default NavBar;
