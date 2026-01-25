export type SponsorBrand = {
  id: string
  name: string
  logo: string
  url: string
  tier: 'gold' | 'silver' | 'bronze'
}

export const sponsorBrands: SponsorBrand[] = [
  {
    id: 'asmodee',
    name: 'Asmodee',
    logo: '/sponsors/asmodee.png',
    url: 'https://www.asmodee.com',
    tier: 'gold',
  },
  {
    id: 'ravensburger',
    name: 'Ravensburger',
    logo: '/sponsors/ravensburger.png',
    url: 'https://www.ravensburger.com',
    tier: 'silver',
  },
  {
    id: 'hasbro',
    name: 'Hasbro Gaming',
    logo: '/sponsors/hasbro.png',
    url: 'https://shop.hasbro.com',
    tier: 'bronze',
  },
]
