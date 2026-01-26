"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {
  categories: string[];
  ages: string[];
  search: string;
  setSearch: (value: string) => void;
};

export default function CatalogFilters({
  categories,
  ages,
  search,
  setSearch,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateParam(key: string, value?: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`/catalog?${params.toString()}`);
  }

  function clearFilters() {
    setSearch("");
    router.push("/catalog");
  }

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      updateParam("search", search || undefined);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  const activeCategory = searchParams.get("category");
  const activeAge = searchParams.get("age");
  const activePrice = searchParams.get("maxPrice");
  const activeRating = searchParams.get("rating");
  const activeSort = searchParams.get("sort");

  const hasActiveFilters =
    activeCategory || activeAge || activePrice || activeRating || search;

  return (
    <section className="mb-10 space-y-6 rounded-2xl bg-white p-6 shadow-sm">
      {/* Search */}
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search game..."
          className="w-full max-w-sm rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#2563EB]"
        />
      </div>

      {/* Categories */}
      <div>
        <p className="mb-2 text-sm font-semibold text-slate-700">
          Categories
        </p>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() =>
                  updateParam("category", isActive ? undefined : cat)
                }
                className={`rounded-full px-4 py-1 text-sm transition ${
                  isActive
                    ? "bg-[#2563EB] text-white"
                    : "bg-[#E0F2FE] hover:bg-[#1D4ED8] hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Age + Price */}
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="mb-1 block text-sm font-semibold">
            Age
          </label>
          <select
            value={activeAge ?? ""}
            onChange={(e) =>
              updateParam("age", e.target.value || undefined)
            }
            className="rounded-lg border px-3 py-2"
          >
            <option value="">Todas las edades</option>
            {ages.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold">
            Max price
          </label>
          <select
            value={activePrice ?? ""}
            onChange={(e) =>
              updateParam("maxPrice", e.target.value || undefined)
            }
            className="rounded-lg border px-3 py-2"
          >
            <option value="">Default</option>
            <option value="20">$20</option>
            <option value="40">$40</option>
            <option value="60">$60</option>
            <option value="100">$100</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold">
            Rating
          </label>
          <select
            value={activeRating ?? ""}
            onChange={(e) =>
              updateParam("rating", e.target.value || undefined)
            }
            className="rounded-lg border px-3 py-2"
          >
            <option value="">Default</option>
            <option value="4">4 ★+</option>
            <option value="3">3 ★+</option>
            <option value="2">2 ★+</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold">
            Sort by
          </label>
          <select
            value={activeSort ?? ""}
            onChange={(e) =>
              updateParam("sort", e.target.value || undefined)
            }
            className="rounded-lg border px-3 py-2"
          >
            <option value="">Default</option>
            <option value="price-asc">Precio ↑</option>
            <option value="price-desc">Precio ↓</option>
            <option value="rating">Mejor puntuados</option>
          </select>
        </div>
      </div>

      {/* Clear filters */}
      {hasActiveFilters && (
        <div>
          <button
            onClick={clearFilters}
            className="rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
          >
            Quitar Filtros
          </button>
        </div>
      )}
    </section>
  );
}
