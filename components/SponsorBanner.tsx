import Image from 'next/image'
import { SponsorBrand } from '@/data/sponsors'

export function SponsorBanner({ sponsor }: { sponsor: SponsorBrand }) {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      className="col-span-full rounded-xl border bg-white p-6 flex items-center justify-between hover:shadow-md transition"
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
    </a>
  )
}
