import Image from "next/image";
import Link from "next/link";
import { products } from "./data";

export default function ProductsPage() {
  return (
    <main className="bg-white text-[#00384a] min-h-screen pt-28 pb-16 px-6">
      <section className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-orange-600 font-semibold">
            Products
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold mt-2">
            Radon safety storefront
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group rounded-lg border border-orange-100 bg-gray-50/70 shadow-sm hover:shadow-md transition-shadow block"
            >
              <div className="relative w-full h-56 overflow-hidden rounded-t-lg bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-bold leading-tight">
                    {product.name}
                  </h2>
                  <span className="text-[#00a1d6] font-bold">
                    {product.price}
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold">
            Need guidance before you buy? We&apos;re happy to help.
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex justify-center rounded bg-[#00384a] px-6 py-3 text-white text-sm font-semibold transition-colors hover:bg-[#002a34]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
