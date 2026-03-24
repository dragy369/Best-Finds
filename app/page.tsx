import { Layout } from "@/components/Layout";
import { OutfitGrid } from "@/components/OutfitGrid";
import { Outfit } from "@/components/types";
import outfitsData from "@/data/outfits.json";

export default function Home() {
  const outfits = outfitsData as Outfit[];

  return (
    <Layout>
      <header className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Best Finds
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Affiliate Fashion Outfits
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-600 sm:text-base">
          Discover clean, curated looks. Tap any outfit to open product links.
        </p>
      </header>

      <OutfitGrid outfits={outfits} />
    </Layout>
  );
}
