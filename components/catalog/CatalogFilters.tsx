"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  categories: string[];
  ages: string[];
};

export default function CatalogFilters({ categories, ages }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    value ? params.set(key, value) : params.delete(key);
    router.push(`/catalog?${params.toString()}`);
  }

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      updateParam("search", search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  const activeCategory = searchParams.get("category");

  return (
    <section className="mb-8 space-y-4">
      {/* Search */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search game..."
        className="w-full max-w-sm rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#3B82F6]"
      />

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => updateParam("category", cat)}
            className={`rounded-full px-4 py-1 text-sm transition-all duration-200 text-black ${
              activeCategory === cat
                ? "bg-[#A78BFA] text-white scale-105"
                : "bg-[#E5E7EB] hover:bg-[#FACC15]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Ages */}
      <select
        value={searchParams.get("age") ?? ""}
        onChange={(e) => updateParam("age", e.target.value)}
        className="rounded-lg border px-3 py-2 text-black bg-white focus:ring-2 focus:ring-[#3B82F6]"
      >
        <option value="">All ages</option>
        {ages.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
    </section>
  );
}
