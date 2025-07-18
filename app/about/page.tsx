import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#00384a] text-white py-12 px-6 min-h-screen">
      <h2 className="text-center text-2xl font-bold mb-8">ABOUT US</h2>
      <div className="flex flex-col md:flex-col lg:flex-row gap-10 items-center max-w-6xl mx-auto px-4">
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="font-bold">Our Mission</h3>
            <p>
              Our mission is to make every home and workplace in Canada
              radon-safe by providing prefessional testing, mitigaion, and
              education. We are dedicated to raising awareness about radon risks
              and delivering effective solutions to pretect families and
              businesses.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Our Vision</h3>
            <p>
              To be Canda's leading radon mitigation service provider, ensuring
              safe indoor air for future generations. Through innovation,
              education, and high-quality service, we strive to reduce radon
              exposure and create healthier living and working environments.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Our Team</h3>
            <p>
              We are a team of certified radon professionals committed to
              safeguarding your indoor air quality. With extensive experience in
              radon testing, mitigation and consulting, we bring expertise and
              reliability to every project.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Certifications & Compliance</h3>
            <ul className="list-disc list-inside text-sm">
              <li>
                <strong>C-NRPP Certification</strong> - Certified professionals by the Canadian National Radon Proficiency Program.
              </li>
              <li>
                <strong>Health Canada Guidelines</strong> - Our mitigation systems meet or exceed national safety recommendations.
              </li>
              <li>
                <strong>Building Code Compliance</strong> - Ensuring radon safety in new and existing buildings.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/images/about.jpg"
            alt="About"
            width={600}
            height={400}
            className="rounded w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
