"use client";

import { useMemo, useState } from "react";
import { OutfitCard } from "@/components/OutfitCard";
import { Outfit } from "@/components/types";

type OutfitGridProps = {
  outfits: Outfit[];
};

export function OutfitGrid({ outfits }: OutfitGridProps) {
  const [query, setQuery] = useState("");

  const filteredOutfits = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return outfits;
    }
    return outfits.filter((outfit) =>
      outfit.title.toLowerCase().includes(term),
    );
  }, [outfits, query]);

  return (
    <section className="space-y-6">
      <div className="mx-auto w-full max-w-xl">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search outfits..."
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400"
          aria-label="Search outfits by title"
        />
      </div>

      {filteredOutfits.length === 0 ? (
        <p className="text-center text-sm text-zinc-500">
          No outfits found for that search.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredOutfits.map((outfit) => (
            <OutfitCard key={outfit.id} outfit={outfit} />
          ))}
        </div>
      )}
    </section>
  );
}
