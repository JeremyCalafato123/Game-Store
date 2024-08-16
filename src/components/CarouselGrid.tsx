import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import FeaturedGame from "./FeaturedGame";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react/jsx-runtime";
import "../App.css";
import CarouselPreviousArrow from "./CarouselPreviousArrow";
import CarouselNextArrow from "./CarouselNextArrow";

interface Props {
  gameQuery: GameQuery;
}

function CarouselGrid({ gameQuery }: Props) {
  // Show Carousel on Large-Sized Screens and Above
  const showCarousel = useBreakpointValue({
    lg: true,
    base: false,
  });

  // Show Arrows on Screens 1600px and Above
  const showArrows = useBreakpointValue({
    "2xl": true,
    base: false,
  });

  const { data, error } = useGames(gameQuery);
  const featuredGames = data.slice(0, 5);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: showArrows,
    prevArrow: <CarouselPreviousArrow />,
    nextArrow: <CarouselNextArrow />,
  };

  return (
    <Fragment>
      {error && <Text>{error}</Text>}

      <Box
        position="relative"
        borderRadius={10}
        marginTop="10px"
        maxWidth="98vw"
        width="79em"
        marginX="auto"
        backgroundColor="#2D3748"
        overflow-x="hidden"
      >
        {showCarousel && (
          <Fragment>
            <Slider {...settings}>
              {featuredGames.map((game) => (
                <Box key={game.id}>
                  <FeaturedGame game={game} />
                </Box>
              ))}
            </Slider>
          </Fragment>
        )}
      </Box>
    </Fragment>
  );
}

export default CarouselGrid;
