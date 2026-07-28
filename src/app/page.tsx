import Link from "next/link";

const services = [
  {
    title: "Thermal Insulation",
    desc: "Hot & cold insulation solutions — Rockwool, Nitrile Rubber, PUF Panels with cladding for industrial efficiency.",
    color: "text-orange",
    icon: (
      <svg className="h-10 w-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25M12 21v-2.25M3 12h2.25M18.75 12H21M4.93 4.93l1.59 1.59m10.96 10.96l1.59 1.59M4.93 19.07l1.59-1.59m10.96-10.96l1.59-1.59M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
      </svg>
    ),
  },
  {
    title: "Acoustic Solutions",
    desc: "Acoustic panels, enclosures, and noise management solutions for industrial and commercial environments.",
    color: "text-blue",
    icon: (
      <svg className="h-10 w-10 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Fire Protection",
    desc: "Fire-rated insulation materials and passive fire protection systems for enhanced safety compliance.",
    color: "text-orange",
    icon: (
      <svg className="h-10 w-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Civil & AMC",
    desc: "Civil construction, epoxy flooring, false ceiling, and long-term annual maintenance contracts.",
    color: "text-blue",
    icon: (
      <svg className="h-10 w-10 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/75 to-dark/90" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/5a00a04b0696810bd81b11fe.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="mb-6 text-4xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
            Your Trusted Partner in <span className="text-orange">Thermal Insulation</span> &amp;{" "}
            <span className="text-blue">Acoustics</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
            42 years of engineering excellence | ISO 9001:2008 Certified
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded bg-orange px-8 py-3.5 font-bold uppercase text-black shadow-lg shadow-orange/30 transition-all hover:bg-orange-dark hover:scale-105 hover:shadow-xl hover:shadow-orange/40"
            >
              GET A QUOTE &rarr;
            </Link>
            <Link
              href="/about"
              className="rounded border-2 border-blue px-8 py-3.5 font-bold uppercase text-blue transition-all hover:bg-blue hover:text-black"
            >
              LEARN MORE
            </Link>
          </div>
          <p className="mt-8 text-sm italic text-gray-500">&ldquo;we save energy..&rdquo;</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "42+", label: "Years of Experience", accent: "border-orange" },
              { value: "500+", label: "Projects Delivered", accent: "border-blue" },
              { value: "200+", label: "Manpower Capacity", accent: "border-orange" },
              { value: "100%", label: "Client Satisfaction", accent: "border-blue" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`relative border-l-4 ${stat.accent} bg-dark-alt px-6 py-8 text-center`}
              >
                <p className="text-4xl font-bold text-white md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-dark">
            What <span className="text-orange">We</span>{" "}
            <span className="text-blue">Do</span>
          </h2>
          <p className="mb-12 text-center text-gray-text">Comprehensive insulation, acoustics, and civil solutions</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-lg border border-gray-200 bg-white p-6 text-center transition-all hover:shadow-md"
              >
                <div className="mb-4 flex justify-center">{s.icon}</div>
                <h3 className={`mb-3 text-lg font-bold ${s.color}`}>{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-text">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28" style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #F0F7FF 100%)" }}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-dark">
              India&apos;s Trusted <span className="text-orange">Insulation</span>{" "}
              <span className="text-blue">Partner</span>
            </h2>
            <p className="mb-6 leading-relaxed text-gray-text">
              First dedicated insulation company in the Marathwada region. ISO 9001:2008 Certified with pan-India
              presence across thermal insulation, acoustic solutions, and civil works. From complex industrial
              projects to annual maintenance contracts — we deliver engineering excellence every time.
            </p>
            <Link
              href="/about"
              className="inline-block font-semibold text-blue transition-all hover:text-orange"
            >
              Know More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16 text-center">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to optimize your <span className="text-blue">energy efficiency</span>?
          </h2>
          <p className="mb-8 text-gray-400">Let our team of experts design the perfect solution for your needs.</p>
          <Link
            href="/contact"
            className="inline-block rounded bg-orange px-8 py-3.5 font-bold uppercase text-black transition-all hover:bg-orange-dark hover:scale-105"
          >
            GET A QUOTE &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
