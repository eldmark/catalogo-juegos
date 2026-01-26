import { getSponsoredGames } from "@/lib/getSponsoredGames";
import HomeClient from "@/components/home/HomeClient";

export default async function HomePage() {
  const sponsoredGames = await getSponsoredGames();

  return <HomeClient sponsoredGames={sponsoredGames} />;
}
