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
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
        </div>
      </div>

      <div className="mt-8 space-y-5">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            {outfit.title}
          </h1>
          <CopyLinkButton />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {outfit.products.map((product) => (
            <ProductButton key={product.name} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
