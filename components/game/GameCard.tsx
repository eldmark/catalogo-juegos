import Link from "next/link";
import RatingBadge from "./RatingBadge";
import { games } from "@/data/games";

type GameCardProps = {
  id: string;
  name: string;
  category: string;
  age: string;
  image?: string;
  sponsored?: boolean;
  variant?: "default" | "compact" | "featured";
  rating?: number;
};

export default function GameCard({
  id,
  name,
  category,
  age,
  image,
  sponsored,
  variant = "default",
  rating,

}: GameCardProps) {
  return (
    <div className={`relative
        group block rounded-2xl bg-white
        shadow-sm transition-all duration-200 ease-out
        hover:-translate-y-1 hover:shadow-lg
        
    
        rounded-xl
        shadow-sm 
        transition-colors
          ${variant === "featured" ? "p-6" : "p-4"}`}> 
      {/* Image */}
      <div
        className={`
          relative mb-4 w-full overflow-hidden rounded-xl
          ${variant === "compact" ? "h-32" : "h-40"}
          bg-[#E0F2FE]
        `}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[#475569]">
            No image
          </div>
        )}

        {sponsored && (
          <span className="absolute left-2 top-2 rounded-full bg-[#FACC15] px-3 py-1 text-xs font-semibold">
            ⭐ Sponsored
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold transition-colors group-hover:text-[#2563EB]">
        {name}
      </h3>

      <p className="mt-1 text-sm text-[#475569]">
        {category} · {age}
      </p>

      <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#2563EB]">
        View details
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
      <RatingBadge rating={rating} />
    </div>
  );
}
