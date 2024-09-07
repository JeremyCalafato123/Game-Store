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
import CarouselDots from "./CarouselDots";
import { useState } from "react";
import FeaturedGameSkeleton from "./FeaturedGameSkeleton";

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

  const { data, error, isLoading } = useGames(gameQuery);

  const featuredGames = data
    .slice(0, 20)
    .sort((a, b) => b.metacritic - a.metacritic)
    .slice(0, 5);

  const [activeSlide, setActiveSlide] = useState(0);
  const skeletons = [1];

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: showArrows && !isLoading && data.length > 0,
    prevArrow: <CarouselPreviousArrow />,
    nextArrow: <CarouselNextArrow />,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    customPaging: (i: number) => <CarouselDots isActive={i === activeSlide} />,
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
            {isLoading ? (
              skeletons.map((skeleton) => (
                <FeaturedGameSkeleton key={skeleton}></FeaturedGameSkeleton>
              ))
            ) : (
              <Slider {...settings}>
                {featuredGames.map((game) => (
                  <Box key={game.id}>
                    <FeaturedGame game={game} />
                  </Box>
                ))}
              </Slider>
            )}
          </Fragment>
        )}
      </Box>
    </Fragment>
  );
}

export default CarouselGrid;
