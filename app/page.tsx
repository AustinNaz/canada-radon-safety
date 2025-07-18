import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Clean living room with air flow"
          fill
          className="object-cover brightness-110"
          priority
        />
        <div className="absolute inset-0 bg-white/60 z-10" />
        <div className="absolute z-20 top-1/3 left-8 max-w-xl text-[#00384a]">
          <h1 className="text-2xl font-bold">
            Protect Your Home and Family from <span className="text-[#004d71]">Radon</span>
          </h1>
          <h2 className="text-xl font-semibold mt-2">Breathe Safe Today!</h2>
          <p className="mt-4">
            Learn how radon affects your health and how to keep your home safe.
          </p>
          <button className="mt-6 bg-[#00a1d6] text-white px-6 py-2 rounded text-lg hover:bg-[#008dbd]">
            Get a free Quote
          </button>
        </div>
      </main>
    </div>
  );
}
