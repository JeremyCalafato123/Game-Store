import FullLogo from "../assets/Games-Store Logo.png";
import SmallLogo from "../assets/Games-Store Logo Small.png";
import { BsInfoCircle } from "react-icons/bs";

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
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import GenreList from "./GenreList";
import { Genre } from "../hooks/useGenres";
import SearchInput from "./SearchInput";
import { Fragment } from "react/jsx-runtime";
import HandWaveEmoji from "../assets/HandWaveEmoji.png";
import { useEffect } from "react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  onSearch: (searchText: string) => void;
  selectedGenre: Genre | null;
}

function NavBar({ onSelectGenre, onSearch, selectedGenre }: Props) {
  // Information Modal Operations
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Use effect to handle showing modal on the first visit
  useEffect(() => {
    // Check if the user has already visited (based on localStorage)
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // If no record of a previous visit, open the modal and set the flag
      onOpen();
      localStorage.setItem("hasVisited", "true");
    }
  }, [onOpen]);

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

        {/* Information Icon */}
        <Fragment>
          {/* Information Icon */}
          <Menu autoSelect={false}>
            <MenuButton
              as={Button}
              variant={"link"}
              cursor={"pointer"}
              marginRight="9px"
              onClick={onOpen}
            >
              <BsInfoCircle size={40} /> {/* Adjust size as needed */}
            </MenuButton>
          </Menu>

          {/* Modal triggered by Info icon */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              width={["90vw", "80vw", "70vw", "60vw", "50vw", "40vw"]}
              maxWidth="none"
              borderRadius="20px"
            >
              <Image
                src={HandWaveEmoji}
                boxSize={["22vw", "18vw", "12vw", "10vw", "8vw"]}
                marginX="auto"
                marginTop={["5%", "4%", "4%", "3%", "3%"]}
                marginBottom="2%"
              />
              <ModalHeader
                textAlign={"center"}
                fontFamily={"Montserrat"}
                fontSize={["24px", "29px", "32px", "35px", "37px"]}
                fontWeight="bold"
                paddingBottom="0"
                paddingTop="10px"
              >
                Welcome to Games Store
              </ModalHeader>
              <ModalBody
                fontFamily={"Montserrat"}
                fontSize={["16px", "18px", "20px", "22px", "25px"]}
                textAlign={"center"}
                fontWeight="bold"
                color="#D4D4D4"
              >
                This web application allows its users to explore the entire game
                catalog of RAWG.io, a platform comparable to Steam, which was
                achieved by integrating the RAWG API for dynamic data fetching.
                <br></br>
                <br></br>
                The application is built using modern web development
                technologies, including React, TypeScript, HTML, CSS, and Chakra
                UI.
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={onClose}
                  fontFamily={"Montserrat"}
                  marginX="auto"
                  backgroundColor="#EDF4FF"
                  color="black"
                  _hover={{ backgroundColor: "#e6f0ff" }}
                  _active={{ backgroundColor: "#e6f0ff" }}
                  borderRadius="14px"
                  fontWeight="bold"
                  marginTop="3%"
                  marginBottom="1%"
                  fontSize={["16px", "18px", "20px", "22px", "25px"]}
                  paddingX={["20px", "24px", "28px", "32px", "36px"]}
                  paddingY={["10px", "12px", "14px", "18px", "25px"]}
                >
                  I Understand
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Fragment>
      </HStack>
    </Box>
  );
}

export default NavBar;
