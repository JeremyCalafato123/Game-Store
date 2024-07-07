import logo from "../assets/Games-Store Logo.png";
import settings from "../assets/Settings Icon.png";
import profile from "../assets/Profile Icon.png";

import { HStack, Image, Input } from "@chakra-ui/react";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} width="200px" padding="10px"></Image>
      <Input
        size="md"
        width="800px"
        borderRadius="14px"
        backgroundColor="white"
        color="#6C6C6C"
        fontWeight="semibold"
        placeholder="Search Game"
        _placeholder={{ color: "#6C6C6C", fontWeight: "smibold" }}
      ></Input>

      <div>
        <HStack padding="10px">
          <Image src={settings} boxSize="40px"></Image>
          <Image src={profile} boxSize="50px"></Image>
        </HStack>
      </div>
    </HStack>
  );
}

export default NavBar;
