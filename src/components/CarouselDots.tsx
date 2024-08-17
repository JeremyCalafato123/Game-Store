import { Box } from "@chakra-ui/react";
import React from "react";

interface CarouselDotProps {
  isActive: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CarouselDots = ({ isActive, onClick }: CarouselDotProps) => {
  return (
    <Box
      onClick={onClick}
      marginTop="20px"
      width="20px"
      height="10px"
      borderRadius="30%"
      backgroundColor={isActive ? "white" : "gray"}
      _hover={{
        backgroundColor: isActive ? "white" : "#949494",
      }}
    />
  );
};

export default CarouselDots;
