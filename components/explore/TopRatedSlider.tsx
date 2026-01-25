
import Link from "next/link";
import GameCard from "@/components/game/GameCard";

export default function TopRatedSlider({ games }: { games: any[] }) {
  return (
    <div className="relative">
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
        {games.map(game => (
          <div
            key={game.id}
            className="min-w-[260px] snap-start"
          >
            <Link href={`/game/${game.id}`}>
              <GameCard
                id={game.id}
                name={game.name}
                category={game.category}
                age={game.age}
                image={game.image}
                rating={game.rating}
                variant="compact"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
