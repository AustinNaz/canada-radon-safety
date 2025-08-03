import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/landing_page.png"
        alt="Clean living room with air flow"
        fill
        className="object-fill w-full h-full"
        priority
      />

      {/* Optional: overlay */}
      <div className="absolute inset-0 bg-white/60 z-10" />

      {/* Content */}
      <div className="absolute z-20 top-[60%] left-8 max-w-xl text-[#00384a] transform -translate-y-1/2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Protect Your Home and Family from{" "}
          <span className="text-[#004d71]">Radon</span>
        </h1>
        <h2 className="text-xl sm:text-2xl mt-2 font-semibold">
          Breathe Safe Today!
        </h2>
        <p className="mt-4 text-sm sm:text-base">
          Learn how radon affects your health and how to keep your home safe.
        </p>
        <button className="mt-6 bg-[#00a1d6] text-white px-6 py-2 rounded text-lg hover:bg-[#008dbd]">
          Get a free Quote
        </button>
      </div>
    </main>
  );
}
