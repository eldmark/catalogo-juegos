import Image from 'next/image'
import { SponsorBrand } from '@/data/sponsors'
import GameLink from './navigation/GameLink';

export function SponsorBanner({ sponsor }: { sponsor: SponsorBrand }) {
  return (
    <GameLink
      href={sponsor.url}
      >
      <div>
        <p className="text-xs uppercase text-gray-500">Sponsor</p>
        <h3 className="text-lg font-semibold">{sponsor.name}</h3>
      </div>

      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={120}
        height={40}
      />
    </GameLink>
  )
}
