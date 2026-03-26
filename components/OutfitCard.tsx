import Image from "next/image";
import Link from "next/link";
import { Outfit } from "@/components/types";

type OutfitCardProps = {
  outfit: Outfit;
};

export function OutfitCard({ outfit }: OutfitCardProps) {
  return (
    <Link
      href={`/outfit/${outfit.id}`}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-[4/5] w-full bg-zinc-100">
        <Image
          src={outfit.image}
          alt={outfit.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        {outfit.category ? (
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            {outfit.category}
          </p>
        ) : null}
        <h2 className="text-base font-semibold tracking-tight text-zinc-900 sm:text-lg">
          {outfit.title}
        </h2>
        {outfit.description ? (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600">
            {outfit.description}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
