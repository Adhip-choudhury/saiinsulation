import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="relative flex items-center overflow-hidden bg-dark py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/5a00a0077d8f8105485ef9cb.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/95" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase text-white drop-shadow-lg md:text-5xl">About Us</h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div
                className="mb-8 aspect-[16/10] rounded-lg bg-cover bg-center"
                style={{ backgroundImage: "url('/images/5a00a0077d8f8105485ef9cb.webp')" }}
              />
              <h2 className="mb-6 text-3xl font-bold text-dark">
                Our <span className="text-orange">Story</span>
              </h2>
              <p className="mb-4 leading-relaxed text-gray-text">
                Our entrepreneurial journey began during our founder&apos;s time with Lloyd&apos;s, where deep technical grounding in thermal systems was gained. When relocating to Aurangabad, the rapidly growing industrial base and the rising demand for thermal insulation, civil works, and acoustic solutions were recognized — needs that were not being adequately served locally.
              </p>
              <p className="mb-4 leading-relaxed text-gray-text">
                This gap, combined with our technical background, inspired the establishment of our own venture. We went on to become the first dedicated insulation company in the Marathwada region, laying the foundation for everything we&apos;ve built since.
              </p>
              <p className="leading-relaxed text-gray-text">
                With <strong className="text-orange">42 years of experience</strong> working pan-India across a wide range of industries, we&apos;ve developed the versatility and technical depth to take on complex, high-difficulty projects that many competitors are unable to handle.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-8">
              <h3 className="mb-6 text-2xl font-bold text-dark">
                Mission &amp; <span className="text-blue">Vision</span>
              </h3>
              <div className="mb-6">
                <h4 className="mb-2 font-bold text-orange">Our Mission</h4>
                <p className="leading-relaxed text-gray-text">
                  To help industries achieve optimal energy efficiency through reliable, engineered solutions in thermal insulation, comfort cooling, and acoustics.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="mb-2 font-bold text-blue">Our Vision</h4>
                <p className="leading-relaxed text-gray-text">
                  To be the most trusted partner for industrial energy conservation across India, known for technical excellence and long-term client relationships.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-dark">Tagline</h4>
                <p className="text-lg italic text-gray-text">&ldquo;we save energy..&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-dark">
            <span className="text-orange">Core</span> <span className="text-blue">Values</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Technical Excellence", desc: "Deep engineering knowledge applied to every project with precision and expertise.", accent: "border-orange" },
              { title: "Integrity", desc: "Honest, transparent client relationships built on trust and reliability.", accent: "border-blue" },
              { title: "Ownership", desc: "Every team member takes responsibility from planning through execution.", accent: "border-orange" },
              { title: "Continuous Learning", desc: "Staying updated with new materials, techniques, and industry best practices.", accent: "border-blue" },
            ].map((v) => (
              <div key={v.title} className={`rounded-lg bg-white p-6 shadow-sm border-l-4 ${v.accent}`}>
                <h3 className="mb-3 text-lg font-bold text-dark">{v.title}</h3>
                <p className="text-sm leading-relaxed text-gray-text">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-dark">
            <span className="text-orange">Certifications</span> &amp;{" "}
            <span className="text-blue">Recognition</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="rounded-lg border border-orange/30 p-6">
              <p className="text-lg font-bold text-orange">ISO 9001:2008</p>
              <p className="text-sm text-gray-text">Certified Company</p>
            </div>
            <div className="rounded-lg border border-blue/30 p-6">
              <p className="text-lg font-bold text-blue">Bharat Gaurav Puraskar</p>
              <p className="text-sm text-gray-text">Industry Recognition Award</p>
            </div>
            <div className="rounded-lg border border-orange/30 p-6">
              <p className="text-lg font-bold text-orange">42+ Years</p>
              <p className="text-sm text-gray-text">Industry Experience</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
