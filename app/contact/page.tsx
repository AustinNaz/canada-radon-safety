import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-orange-500 py-12 px-4 text-black flex-grow">
        <h2 className="text-center text-2xl font-bold text-white mb-6">
          CONTACT US
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row px-4 gap-8">
          <form className="bg-white p-6 rounded w-full lg:w-2/3 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="border w-full px-4 py-2 border-orange-500"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="border w-full px-4 py-2 border-orange-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address*"
              className="border w-full px-4 py-2 border-orange-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border w-full px-4 py-2 border-orange-500"
            />
            <textarea
              placeholder="Message*"
              rows={4}
              className="border w-full px-4 py-2 border-orange-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#00a1d6] text-white px-6 py-2 rounded"
            >
              Send
            </button>
          </form>

          <div className="w-full lg:w-1/3 text-white space-y-3">
            <h2 className="text-2xl font-semibold">
              Have Questions or Ready to Take Action?
            </h2>
            <p className="text-2xl font-bold text-[#00384a]">
              We&apos;re Here to Help!
            </p>
            <p>
              <strong>Email:</strong> info@radonca.ca
            </p>
            <p>
              <strong>Phone:</strong> 587 581 5971
            </p>
            <p>Calgary, AB, Canada</p>
            <div>
              <strong>Operating Hours:</strong>
              <ul className="text-sm list-disc list-inside">
                <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
                <li>Sat: 10:00 AM – 4:00 PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center items-end">
            <Image
              src="/logo_no_name.png"
              alt="Radon Logo Image"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#00384a] text-white w-full py-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:justify-center relative px-4 gap-2">
          {/* Left (Text) */}
          <div className="text-sm flex flex-row items-center justify-center gap-2 lg:absolute lg:left-0">
            <p className="m-0">Our Certifications</p>
          </div>

          {/* Center (Logo) */}
          <div className="flex items-center justify-center">
            <Image
              src="/certification_logo.png"
              alt="Certification Logo"
              width={75}
              height={75}
              priority
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
