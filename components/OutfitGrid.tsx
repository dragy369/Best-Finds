import { OutfitCard } from "@/components/OutfitCard";
import { Outfit } from "@/components/types";

type OutfitGridProps = {
  outfits: Outfit[];
};

export function OutfitGrid({ outfits }: OutfitGridProps) {
  return (
    <section>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {outfits.map((outfit) => (
          <OutfitCard key={outfit.id} outfit={outfit} />
        ))}
      </div>
    </section>
  );
}
