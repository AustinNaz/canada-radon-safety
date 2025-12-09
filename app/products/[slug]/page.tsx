/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import { products } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function ProductDetail({ params }: Props) {
  const { slug } = use(params);
  const [index, setIndex] = useState(0);
  const product = products.find((item) => item.slug === slug);

  if (!product) return notFound();

  const total = product.images.length;

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  return (
    <main className="bg-white text-[#00384a] min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-3">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src={product.images[index]}
              alt={`${product.name} image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-3 py-2 rounded-full shadow hover:bg-white"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-3 py-2 rounded-full shadow hover:bg-white"
              aria-label="Next image"
            >
              ›
            </button>
            <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
              {product.images.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setIndex(dotIndex)}
                  className={`h-2.5 w-2.5 rounded-full border border-white transition ${
                    dotIndex === index ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/products"
            className="text-sm text-[#004d71] hover:underline inline-flex items-center gap-1"
          >
            ← Back to products
          </Link>
          <div>
            <h1 className="text-3xl font-bold leading-tight">{product.name}</h1>
            <p className="mt-2 text-2xl font-semibold text-[#00a1d6]">
              {product.price}
            </p>
          </div>
          <p className="text-base text-gray-800">{product.description}</p>
          <div className="border border-orange-100 rounded-lg p-4 bg-orange-50/50">
            <h2 className="text-lg font-semibold mb-2">Product info</h2>
            <p className="text-sm text-gray-800 leading-relaxed">
              {product.details}
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex justify-center rounded bg-[#00a1d6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#008dbd]"
          >
            Ask about availability
          </Link>
        </div>
      </div>
    </main>
  );
}
