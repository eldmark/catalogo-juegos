import { Game } from "@/data/games";

export function filterSponsoredGames(games: Game[]): Game[] {
  return [...games].sort((a, b) => {
    if (a.sponsored && !b.sponsored) return -1;
    if (!a.sponsored && b.sponsored) return 1;
    return 0;
  });
}