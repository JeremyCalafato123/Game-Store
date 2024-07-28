import {
  Box,
  ChakraProvider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import FeaturedGame from "./FeaturedGame";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Fragment } from "react/jsx-runtime";

interface Props {
  gameQuery: GameQuery;
}

function CarouselGrid({ gameQuery }: Props) {
  // Show Carousel on Large-Sized Screens and Above
  const showCarousel = useBreakpointValue({
    lg: true,
    base: false,
  });

  const { data, error } = useGames(gameQuery);
  const featuredGames = data.slice(0, 5);

  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      {error && <Text>{error}</Text>}

      <Box
        borderRadius={10}
        marginTop="10px"
        maxWidth="79em"
        width="100vw"
        marginX="auto"
        backgroundColor="#2D3748"
      >
        {showCarousel && (
          <Slider {...settings}>
            {featuredGames.map((game) => (
              <Box key={game.id} width="100%">
                <FeaturedGame game={game} />
              </Box>
            ))}
          </Slider>
        )}
      </Box>
    </Fragment>
  );
}

export default CarouselGrid;
