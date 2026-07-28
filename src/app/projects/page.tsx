import Link from "next/link";

const categories = ["All", "Commercial", "Educational", "Healthcare", "Residential", "Industrial"];

const projects = [
  { title: "Industrial Insulation Project", category: "Industrial", desc: "Comprehensive thermal insulation for large-scale industrial facility." },
  { title: "Commercial HVAC System", category: "Commercial", desc: "HVAC ducting and cold insulation for commercial complex." },
  { title: "Hospital Clean Rooms", category: "Healthcare", desc: "Clean room insulation panels for healthcare facility." },
  { title: "Educational Building", category: "Educational", desc: "Acoustic insulation and false ceiling for educational institution." },
  { title: "Residential Complex", category: "Residential", desc: "Thermal insulation and PUF panels for residential development." },
  { title: "Manufacturing Plant", category: "Industrial", desc: "Hot insulation with cladding for manufacturing plant piping." },
];

export default function ProjectsPage() {
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
            Our <span className="text-orange">Projects</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">Delivering excellence across industries</p>
        </div>
      </section>

      <section className="bg-dark pb-4">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`rounded px-5 py-2.5 text-sm font-semibold transition-colors ${
                  cat === "All"
                    ? "bg-orange text-black"
                    : "bg-gray-700 text-gray-300 hover:bg-blue/70"
                }`}
              >
                {cat === "All" ? <>&#9881; {cat}</> : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <div key={i} className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="flex aspect-[16/10] items-center justify-center bg-gray-100">
                  <span className="text-4xl text-gray-300">📷</span>
                </div>
                <div className="p-5">
                  <span className={`mb-2 inline-block rounded px-2.5 py-0.5 text-xs font-semibold ${
                    i % 2 === 0 ? "bg-orange/20 text-orange" : "bg-blue/20 text-blue"
                  }`}>
                    {p.category}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-dark">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-text">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
