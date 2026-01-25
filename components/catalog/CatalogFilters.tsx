"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {
  categories: string[];
  ages: string[];
  search: string;
  setSearch: (value: string) => void;
};

export default function CatalogFilters({ categories, ages, search, setSearch }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

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
        className="w-full max-w-sm rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#2563EB] bg-white"
      />

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => updateParam("category", cat)}
            className={`rounded-full px-4 py-1 text-sm transition-all duration-200 text-[#0F172A] ${
              activeCategory === cat
                ? "bg-[#2563EB] text-white scale-105"
                : "bg-[#E0F2FE] hover:bg-[#1D4ED8] hover:text-white"
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
        className="rounded-lg border px-3 py-2 text-[#0F172A] bg-white focus:ring-2 focus:ring-[#2563EB]"
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
