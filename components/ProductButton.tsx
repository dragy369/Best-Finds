import { Product } from "@/components/types";

type ProductButtonProps = {
  product: Product;
};

export function ProductButton({ product }: ProductButtonProps) {
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="block rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-zinc-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-zinc-500">Shop Product</p>
          <p className="text-base font-semibold text-zinc-900">{product.name}</p>
        </div>
        {product.price ? (
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700">
            {product.price}
          </span>
        ) : null}
      </div>

      {product.label ? (
        <span className="mt-3 inline-block rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
          {product.label}
        </span>
      ) : null}
    </a>
  );
}
