export default function RatingBadge({ rating }: { rating: number }) {
  return (
    <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-xs font-bold text-[#2563EB] shadow">
      ⭐ {rating.toFixed(1)}
    </div>
  );
}
