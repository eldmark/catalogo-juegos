import { Game } from "@/data/games";

type Filters = {
  category?: string
  age?: string
  sponsored?: boolean
  search?: string
  maxPrice?: string
  rating?: string
  sort?: string
}

export function filterSponsoredGames(games: Game[]): Game[] {
  return [...games].sort((a, b) => {
    if (a.sponsored && !b.sponsored) return -1;
    if (!a.sponsored && b.sponsored) return 1;
    return 0;
  });
}

export function filterGames(games: any[], filters: Filters) {
  let result = [...games];

  // Category
  if (filters.category) {
    result = result.filter(
      (g) => g.category === filters.category
    );
  }

  // Age
  if (filters.age) {
    result = result.filter(
      (g) => g.age === filters.age
    );
  }

  // Sponsored
  if (filters.sponsored) {
    result = result.filter((g) => g.sponsored);
  }

  // Search
  if (filters.search) {
    const term = filters.search.toLowerCase();
    result = result.filter((g) =>
      g.name.toLowerCase().includes(term)
    );
  }

  // Max price
  if (filters.maxPrice) {
    const max = Number(filters.maxPrice);
    result = result.filter(
      (g) => g.price <= max
    );
  }

  // Rating
  if (filters.rating) {
    const minRating = Number(filters.rating);
    result = result.filter(
      (g) => g.rating >= minRating
    );
  }

  // Sorting
  if (filters.sort) {
    switch (filters.sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }
  }

  return result;
}


