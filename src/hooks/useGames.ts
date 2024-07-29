import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform
{
  id: number,
  name: string,
  slug: string
}

export interface Tag
{
  id: number,
  name: string
}

export interface Game 
{
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform } []
  metacritic: number;
  tags: Tag[];
}

function useGames(gameQuery: GameQuery)
{
  return useData<Game>('/games', {params: {genres: gameQuery.genre?.id, search: gameQuery.searchText}}, [gameQuery])
}

export default useGames
