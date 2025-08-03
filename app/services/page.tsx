import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-orange-500 text-black p-10 min-h-screen">
      <h2 className="text-center text-2xl font-bold text-white mb-6">
        OUR SERVICES
      </h2>
      <div className="flex flex-col md:flex-col lg:flex-row gap-8 items-center justify-center">
        <div className="w-full lg:w-1/2 flex justify-end">
          <Image
            src="/services_image.png"
            alt="Services"
            width={600}
            height={400}
            className="rounded"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <h3 className="text-lg font-bold">Radon Mitigation</h3>
            <p className="mt-1">
              Our professional radon mitigation services ensure your home is
              safe from harmful radon gas.
            </p>
            <p className="mt-1">
              We design and install customized systems to reduce radon levels
              below safety guidelines.
            </p>
            <button className="w-full sm:w-auto lg:w-sm mt-2 bg-[#00a1d6] text-white px-4 py-2 rounded">
              Book Now
            </button>
          </div>
          <div>
            <h3 className="text-lg font-bold">Radon Testing</h3>
            <p className="mt-1">
              Ensure your home&apos;s safety with our professional radon testing
              services. Using advanced equipment, we accurately measure radon
              levels to determine if your home is at risk.
            </p>
            <button className="w-full sm:w-auto lg:w-sm mt-2 bg-[#00a1d6] text-white px-4 py-2 rounded">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
