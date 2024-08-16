import React from "react";
import "../App.css";
import { IconButton } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CarouselNextArrow = ({ onClick }: ArrowProps) => {
  return (
    <IconButton
      aria-label="PreviousArrow"
      onClick={onClick}
      color="#C7D3E8"
      background="#2D3748"
      position="absolute"
      top="50%"
      transform="translate(0, -50%)"
      right="-90px"
      width="4rem"
      height="100px"
      borderRadius="10%"
      icon={<ChevronRightIcon boxSize="4rem" />}
      _hover={{
        color: "#C7D3E8",
        background: "#39465b",
      }}
    ></IconButton>
  );
};

export default CarouselNextArrow;
