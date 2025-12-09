import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen w-full">
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
        <div className="absolute z-20 top-[60%] left-8 max-w-2xl text-[#00384a] transform -translate-y-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Protect Your Home and Family from{" "}
            <span className="text-[#004d71]">Radon</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-3 font-semibold">
            Breathe Safe Today!
          </h2>
          <p className="mt-5 text-base sm:text-lg md:text-xl max-w-xl">
            Learn how radon affects your health and how to keep your home safe.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex bg-[#00a1d6] text-white px-6 py-2 rounded text-lg hover:bg-[#008dbd]"
          >
            Get a free Quote
          </a>
        </div>
      </section>

      {/* What is Radon Section */}
      <section
        id="learn"
        className="bg-white text-[#00384a] px-6 text-center pt-32 pb-8 min-h-screen flex flex-col justify-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-orange-600 mb-1">
          WHAT IT IS RADON?
        </h2>
        <h3 className="text-xl lg:text-2xl font-semibold mb-6">
          Protect Your Home and Health Today.
        </h3>
        <p className="max-w-3xl mx-auto mb-12 text-base md:text-lg text-gray-800">
          Radon is a naturally occurring radioactive gas that forms from the
          decay of uranium in soil, rock, and water.
          <strong>It is colorless, odorless, and tasteless</strong>, making it
          undetectable withou specialized testing. Radon is part of the
          environment and can be found almost everywhere, but it becomes a
          concern when it accumulates to high levels indoors, particularly in
          enclosed spaces like homes, schools, and workplaces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="relative bg-gray-100 p-6 rounded">
            <div className="absolute -top-10 left-0 w-16 h-16">
              <Image
                src="/lung.png"
                alt="Lung Icon"
                width={64}
                height={64}
                className="mx-auto"
              />
            </div>
            <h4 className="text-orange-500 font-semibold mb-2 text-lg">
              Impact on Health
            </h4>
            <p className="text-sm md:text-base text-left">
              Radon is a radioactive gas and the
              <strong> second leading cause of lung cancer</strong> after
              smoking, responsible for thousands of deaths annually.
            </p>
            <br />
            <p className="text-sm md:text-base text-left">
              Prolonged exposure to high radon levels damages lung tissue,
              increasing cancer risk, especially for smokers.
            </p>
          </div>
          <div className="relative bg-gray-100 p-6 rounded">
            <div className="absolute -top-10 left-0 w-16 h-16">
              <Image
                src="/regulations.png"
                alt="Regulations Icon"
                width={64}
                height={64}
                className="mx-auto"
              />
            </div>
            <h4 className="text-orange-500 font-semibold mb-2 text-lg">
              Regulations and Statistics
            </h4>
            <p className="text-sm md:text-base text-left">
              Radon is a significant issue in Canada due to its geology and
              climate, with <strong>7% of Canadian Homes</strong> having radon
              levels above the national guideline of 200 Bq/m³.
            </p>
            <br />
            <p className="text-sm md:text-base text-left">
              Health Canada actively promotes radon testing and mitigation, and
              the National Building Code includes radon reduction measures for
              new homes.
            </p>
          </div>
          <div className="relative bg-gray-100 p-6 rounded">
            <div className="absolute -top-12 left-0 w-16 h-16">
              <Image
                src="/house.png"
                alt="House Icon"
                width={60}
                height={60}
                className="mx-auto"
              />
            </div>
            <h4 className="text-orange-500 font-semibold mb-2 text-lg">
              How Radon Enters Your Home?
            </h4>
            <p className="text-sm md:text-base text-left">
              Radon seeps into homes through cracks in foundations, gaps around
              pipes, sump pumps, and construction joints.
            </p>
            <br />
            <p className="text-sm md:text-base text-left">
              It originates from the natural decay of uranium in soil and rock,
              moving upward into buildings due to pressure differences.
            </p>
          </div>
        </div>
        <div className="text-xl font-semibold pt-8">
          <a
            className="inline-flex items-center gap-1 text-orange-500 underline underline-offset-4 hover:text-orange-600 transition-colors"
            href="https://www.canada.ca/en/health-canada/services/health-risks-safety/radiation/radon.html"
          >
            Click here
          </a>{' '}
          to learn what the Government of Canada says about Radon
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="bg-orange-500 text-black p-10 pt-24 min-h-screen flex flex-col justify-center"
      >
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-white mb-6">
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
              <h3 className="text-lg lg:text-xl font-bold">Radon Mitigation</h3>
              <p className="mt-1 text-base lg:text-lg">
                Our professional radon mitigation services ensure your home is
                safe from harmful radon gas.
              </p>
              <p className="mt-1 text-base lg:text-lg">
                We design and install customized systems to reduce radon levels
                below safety guidelines.
              </p>
              <a
                href="#contact"
                className="w-full sm:w-auto lg:w-sm mt-2 inline-flex justify-center bg-[#00a1d6] text-white px-4 py-2 rounded hover:bg-[#008dbd]"
              >
                Book Now
              </a>
            </div>
            <div>
              <h3 className="text-lg lg:text-xl font-bold">Radon Testing</h3>
              <p className="mt-1 text-base lg:text-lg">
                Ensure your home&apos;s safety with our professional radon
                testing services. Using advanced equipment, we accurately
                measure radon levels to determine if your home is at risk.
              </p>
              <a
                href="#contact"
                className="w-full sm:w-auto lg:w-sm mt-2 inline-flex justify-center bg-[#00a1d6] text-white px-4 py-2 rounded hover:bg-[#008dbd]"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-[#00384a] text-white py-12 px-6 pt-24 min-h-screen flex flex-col justify-center"
      >
        <h2 className="text-center text-2xl lg:text-3xl font-bold mb-8">
          ABOUT US
        </h2>
        <div className="flex flex-col md:flex-col lg:flex-row gap-10 items-center max-w-6xl mx-auto px-4">
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="font-bold">Our Mission</h3>
              <p>
                Our mission is to make every home and workplace in Canada
                radon-safe by providing prefessional testing, mitigaion, and
                education. We are dedicated to raising awareness about radon
                risks and delivering effective solutions to pretect families and
                businesses.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Our Vision</h3>
              <p>
                To be Canda&apos;s leading radon mitigation service provider,
                ensuring safe indoor air for future generations. Through
                innovation, education, and high-quality service, we strive to
                reduce radon exposure and create healthier living and working
                environments.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Our Team</h3>
              <p>
                We are a team of certified radon professionals committed to
                safeguarding your indoor air quality. With extensive experience
                in radon testing, mitigation and consulting, we bring expertise
                and reliability to every project.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Certifications & Compliance</h3>
              <ul className="list-disc list-inside text-sm">
                <li>
                  <strong>C-NRPP Certification</strong> - Certified
                  professionals by the Canadian National Radon Proficiency
                  Program.
                </li>
                <li>
                  <strong>Health Canada Guidelines</strong> - Our mitigation
                  systems meet or exceed national safety recommendations.
                </li>
                <li>
                  <strong>Building Code Compliance</strong> - Ensuring radon
                  safety in new and existing buildings.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/about_us_image.png"
              alt="About"
              width={600}
              height={400}
              className="rounded w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-orange-500 py-12 px-4 text-black pt-24 min-h-screen flex flex-col justify-center"
      >
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-white mb-6">
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

      {/* Footer */}
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
    </main>
  );
}
