import {
  Input,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

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
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputRightElement
          cursor="pointer"
          children={<BsSearch color="black"></BsSearch>}
          onClick={() => {
            if (ref.current) onSearch(ref.current.value);
          }}
        ></InputRightElement>
        <Input
          ref={ref}
          flex="1"
          borderRadius={curveSearchBar}
          backgroundColor="white"
          color="#6C6C6C"
          fontWeight="semibold"
          placeholder={showPlaceholder}
          _placeholder={{ color: "#6C6C6C", fontWeight: "semibold" }}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
