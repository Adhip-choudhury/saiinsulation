import Link from "next/link";

export default function InsudesignPage() {
  return (
    <main className="flex-1">
      <section className="relative flex items-center overflow-hidden bg-dark py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/5a009fdb0696810bd81b11f7.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/95" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase text-white drop-shadow-lg md:text-5xl">
            <span className="text-orange">INSU</span><span className="text-blue">DESIGN</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">In-house Consultancy &amp; Design Cell</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-dark">
              Engineering-Driven <span className="text-orange">Insulation</span>{" "}
              <span className="text-blue">Design</span>
            </h2>
            <p className="mb-8 leading-relaxed text-gray-text">
              INSUDESIGN is our dedicated in-house consultancy and design cell that brings decades of field
              experience to every project. We provide engineered, code-compliant insulation designs before
              execution begins — ensuring optimal performance, cost efficiency, and regulatory compliance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-orange/30 bg-white p-6 text-center">
              <h3 className="mb-3 text-lg font-bold text-orange">Technical Design</h3>
              <p className="text-sm leading-relaxed text-gray-text">Comprehensive insulation system design including material selection, thickness calculation, and cladding specifications.</p>
            </div>
            <div className="rounded-lg border border-blue/30 bg-white p-6 text-center">
              <h3 className="mb-3 text-lg font-bold text-blue">Energy Audit</h3>
              <p className="text-sm leading-relaxed text-gray-text">Heat loss/gain analysis and energy efficiency assessments to identify optimization opportunities.</p>
            </div>
            <div className="rounded-lg border border-orange/30 bg-white p-6 text-center">
              <h3 className="mb-3 text-lg font-bold text-orange">Specification Drafting</h3>
              <p className="text-sm leading-relaxed text-gray-text">Detailed technical specifications and tender documents for insulation projects of any scale.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block rounded bg-orange px-8 py-3 font-bold uppercase text-black transition-all hover:bg-orange-dark"
            >
              CONSULT WITH US →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
