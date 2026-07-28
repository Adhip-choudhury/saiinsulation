import Link from "next/link";

const services = [
  { id: "hot-insulation", name: "Hot Insulation", desc: "Rockwool with aluminum/SS cladding for pipes, vessels, and boilers." },
  { id: "cold-insulation", name: "Cold Insulation", desc: "Nitrile rubber and PUF insulation for chillers, pipelines, and cold storage." },
  { id: "acoustic-insulation", name: "Acoustic Insulation", desc: "Panels, enclosures, and noise barriers for industrial environments." },
  { id: "clean-rooms", name: "Clean Rooms", desc: "Insulated panels for controlled environments requiring strict temperature and cleanliness standards." },
  { id: "false-ceiling", name: "False Ceiling", desc: "Gypsum, mineral fiber, and metal ceiling system installation." },
  { id: "epoxy-flooring", name: "Epoxy Flooring", desc: "Industrial grade epoxy floor solutions for durability and safety." },
  { id: "ducting", name: "Ducting", desc: "HVAC duct fabrication and installation for efficient air distribution." },
  { id: "puf-panels", name: "PUF Panels", desc: "Supply and installation of PUF panels for cold storage and insulation." },
  { id: "amc", name: "AMC Contracts", desc: "Annual maintenance contracts with 30+ years of expertise, ensuring long-term system reliability." },
  { id: "civil-works", name: "Civil Works", desc: "Government and private civil construction projects with quality execution." },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="relative flex items-center overflow-hidden bg-dark py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/5a00a0077d8f8105485ef9cb.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/95" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase text-white drop-shadow-lg md:text-5xl">
            Our <span className="text-orange">Services</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">End-to-end insulation, acoustics, and civil solutions</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className={`group rounded-lg border bg-white p-6 transition-all hover:shadow-md ${
                  i % 2 === 0 ? "border-orange/30" : "border-blue/30"
                }`}
              >
                <h3 className={`mb-3 text-lg font-bold ${i % 2 === 0 ? "text-orange" : "text-blue"}`}>{s.name}</h3>
                <p className="text-sm leading-relaxed text-gray-text">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-dark">
            Our <span className="text-orange">Specialty</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm border-l-4 border-orange">
              <h3 className="mb-3 text-lg font-bold text-orange">AMC Expertise</h3>
              <p className="text-sm leading-relaxed text-gray-text">Masters in AMC contracts with companies for the past 30 years, ensuring total satisfaction.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm border-l-4 border-blue">
              <h3 className="mb-3 text-lg font-bold text-blue">Pan-India Manpower</h3>
              <p className="text-sm leading-relaxed text-gray-text">Capacity of 200+ skilled workers deployed across India for projects of any scale.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm border-l-4 border-orange">
              <h3 className="mb-3 text-lg font-bold text-orange">In-house Manufacturing</h3>
              <p className="text-sm leading-relaxed text-gray-text">Manufacturing acoustic panels and PUF pipe sections with dedicated production team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark py-16 text-center">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Ready to get <span className="text-blue">started</span>?
          </h2>
          <p className="mb-8 text-gray-400">Let us provide the best service in quality as per your requirements.</p>
          <Link
            href="/contact"
            className="inline-block rounded bg-orange px-8 py-3 font-bold uppercase text-black transition-all hover:bg-orange-dark hover:scale-105"
          >
            GET A QUOTE →
          </Link>
        </div>
      </section>
    </main>
  );
}
