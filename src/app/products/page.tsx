import Link from "next/link";

const products = [
  { id: "rockwool", name: "Rockwool Insulation", desc: "High-temperature resistant mineral wool for industrial pipes, ducts, and vessels.", accent: "border-orange" },
  { id: "nitrile-rubber", name: "Nitrile Rubber", desc: "Flexible closed-cell foam insulation for cold applications, HVAC, and chillers.", accent: "border-blue" },
  { id: "aluminum-sheet", name: "Aluminum Sheet", desc: "Cladding and jacketing material providing protective outer layer for insulation systems.", accent: "border-orange" },
  { id: "ss-sheet", name: "SS Sheet", desc: "Stainless steel cladding for high-corrosion and demanding environments.", accent: "border-blue" },
  { id: "acoustic-panels", name: "Acoustic Panels", desc: "Sound-absorbing panels manufactured in-house for studios and industrial noise control.", accent: "border-orange" },
  { id: "puf-panel", name: "PUF Panel", desc: "Polyurethane foam panels and pipe sections manufactured in-house for cold storage and ducting.", accent: "border-blue" },
  { id: "ducting", name: "Ducting Material", desc: "HVAC ducting components for air conditioning and ventilation systems.", accent: "border-orange" },
  { id: "hvac", name: "HVAC Products", desc: "Heating, ventilation, and air conditioning products for comfort cooling systems.", accent: "border-blue" },
];

export default function ProductsPage() {
  return (
    <main className="flex-1">
      <section className="relative flex items-center overflow-hidden bg-dark py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/5a009fe5325a1605b409827c.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/95" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase text-white drop-shadow-lg md:text-5xl">
            Our <span className="text-blue">Products</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">Comprehensive range of insulation and allied materials</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className={`group rounded-lg border ${p.accent} bg-white p-6 transition-all hover:shadow-md`}
              >
                <h3 className="mb-3 text-lg font-bold text-dark">{p.name}</h3>
                <p className="text-sm leading-relaxed text-gray-text">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-16 text-center">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Need a <span className="text-orange">custom</span> solution?
          </h2>
          <p className="mb-8 text-gray-400">Contact us for product specifications, pricing, and technical support.</p>
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
