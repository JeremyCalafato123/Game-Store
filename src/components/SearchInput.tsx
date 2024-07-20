import {
  Input,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
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
  );
}

export default SearchInput;
