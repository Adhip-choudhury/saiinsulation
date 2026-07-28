import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="relative flex items-center overflow-hidden bg-dark py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/5a00a04b0696810bd81b11fe.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/95" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase text-white drop-shadow-lg md:text-5xl">
            <span className="text-orange">Contact</span> <span className="text-blue">Us</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">Get in touch for quotes, inquiries, and technical support</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-dark">
                Get In <span className="text-blue">Touch</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-orange">Phone</h3>
                  <a href="tel:9822261415" className="block text-lg text-blue transition-colors hover:text-orange">9822261415</a>
                  <p className="text-gray-text">9975401440 / 9850977677</p>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-orange">Email</h3>
                  <a href="mailto:insulsai@gmail.com" className="block text-gray-text transition-colors hover:text-blue">insulsai@gmail.com</a>
                  <a href="mailto:saideepinsulations@gmail.com" className="block text-gray-text transition-colors hover:text-blue">saideepinsulations@gmail.com</a>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-orange">Head Office</h3>
                  <p className="text-gray-text">170, N-3, CIDCO, Near Ajaydeep Complex, Aurangabad - 431 003</p>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-orange">Branch Office</h3>
                  <p className="text-gray-text">Flat No. 1, Sidhivinayak Apartment, Kuber Galli, Opp. Hatiin Institute, Parel Village, Mumbai - 400 012</p>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-orange">Godown</h3>
                  <p className="text-gray-text">Sr.No. 109/3/7, Parbhat Road, Vijay Nagar, Kalewadi, Pimpri, Pune</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-8 text-3xl font-bold text-dark">
                Send a <span className="text-orange">Message</span>
              </h2>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-semibold text-dark">Name *</label>
                    <input id="name" type="text" required className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-orange focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-semibold text-dark">Email *</label>
                    <input id="email" type="email" required className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-blue focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-dark">Phone</label>
                  <input id="phone" type="tel" className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-blue focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1 block text-sm font-semibold text-dark">Service Interested In</label>
                  <select id="service" className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-orange focus:outline-none">
                    <option value="">Select a service...</option>
                    <option>Thermal Insulation</option>
                    <option>Acoustic Insulation</option>
                    <option>Civil Works</option>
                    <option>AMC Contract</option>
                    <option>Products</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-semibold text-dark">Message *</label>
                  <textarea id="message" rows={5} required className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-blue focus:outline-none"></textarea>
                </div>
                <button type="submit" className="rounded bg-orange px-8 py-3 font-bold uppercase text-black transition-all hover:bg-orange-dark">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
