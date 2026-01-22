import { Game } from "@/data/games";

type Filters = {
  category?: string;
  age?: string;
  sponsored?: boolean;
  search?: string;
};

export function filterSponsoredGames(games: Game[]): Game[] {
  return [...games].sort((a, b) => {
    if (a.sponsored && !b.sponsored) return -1;
    if (!a.sponsored && b.sponsored) return 1;
    return 0;
  });
}

export function filterGames(games: Game[], filters: Filters): Game[] {
  return games.filter((game) => {
    if (filters.sponsored && !game.sponsored) return false;
    if (filters.category && game.category !== filters.category) return false;
    if (filters.age && game.age !== filters.age) return false;
    if (
      filters.search &&
      !game.name.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }
    return true;
  });
}
