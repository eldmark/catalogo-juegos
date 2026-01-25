import { Game } from '@/data/games'
import { SponsorBrand } from '@/data/sponsors'

type CatalogItem =
  | { type: 'game'; data: Game }
  | { type: 'sponsor'; data: SponsorBrand }

export function injectSponsors(
  games: Game[],
  sponsors: SponsorBrand[],
  every: number = 3
): CatalogItem[] {
  const result: CatalogItem[] = []
  let sponsorIndex = 0

  games.forEach((game, index) => {
    result.push({ type: 'game', data: game })

    if ((index + 1) % every === 0 && sponsors.length > 0) {
      result.push({
        type: 'sponsor',
        data: sponsors[sponsorIndex % sponsors.length],
      })
      sponsorIndex++
    }
  })

  return result
}
