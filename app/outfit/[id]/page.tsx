import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { Layout } from "@/components/Layout";
import { ProductButton } from "@/components/ProductButton";
import { Outfit } from "@/components/types";
import outfitsData from "@/data/outfits.json";

type OutfitPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  const outfits = outfitsData as Outfit[];
  return outfits.map((outfit) => ({ id: outfit.id }));
}

export default async function OutfitPage({ params }: OutfitPageProps) {
  const { id } = await params;
  const outfits = outfitsData as Outfit[];
  const outfit = outfits.find((item) => item.id === id);

  if (!outfit) {
    notFound();
  }

  return (
    <Layout>
      <Link
        href="/"
        className="mb-6 inline-block text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
      >
        ← Back to all outfits
      </Link>

      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-sm">
        <div className="relative aspect-[4/5] w-full sm:aspect-[3/2]">
          <Image
            src={outfit.image}
            alt={outfit.title}
            fill
            priority
            className="object-contain p-3"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
        </div>
      </div>

      <div className="mt-8 space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            {outfit.category ? (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {outfit.category}
              </p>
            ) : null}
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              {outfit.title}
            </h1>
          </div>
          <CopyLinkButton />
        </div>

        {outfit.description ? (
          <p className="max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
            {outfit.description}
          </p>
        ) : null}

        <div className="grid gap-3 sm:grid-cols-2">
          {outfit.products.map((product) => (
            <ProductButton key={product.name} product={product} />
          ))}
        </div>

        {(outfit.style_notes && outfit.style_notes.length > 0) ||
        (outfit.occasion && outfit.occasion.length > 0) ? (
          <div className="grid gap-6 pt-3 md:grid-cols-2">
            {outfit.style_notes && outfit.style_notes.length > 0 ? (
              <section className="rounded-2xl border border-zinc-200 bg-white p-5">
                <h2 className="text-sm font-semibold tracking-tight text-zinc-900">
                  Style Notes
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {outfit.style_notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {outfit.occasion && outfit.occasion.length > 0 ? (
              <section className="rounded-2xl border border-zinc-200 bg-white p-5">
                <h2 className="text-sm font-semibold tracking-tight text-zinc-900">
                  Occasions
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {outfit.occasion.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
