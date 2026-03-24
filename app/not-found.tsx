import Link from "next/link";
import { Layout } from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-2xl border border-zinc-200 p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
          Outfit not found
        </h1>
        <p className="mt-3 text-sm text-zinc-600">
          The outfit you are looking for does not exist or may have been removed.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          Go Home
        </Link>
      </div>
    </Layout>
  );
}
