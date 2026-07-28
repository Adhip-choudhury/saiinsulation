import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark/95 backdrop-blur-md text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/images/logo.webp" alt="Sai Enterprises" className="mb-4 h-12 w-auto" />
            <p className="text-sm leading-relaxed text-gray-400">
              ISO 9001:2008 Certified &mdash; Thermal Insulation, Acoustics &amp; Civil solutions since 1982.
            </p>
            <p className="mt-2 text-sm italic text-gray-500">&ldquo;we save energy..&rdquo;</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="transition-all hover:text-blue hover:translate-x-1">Home</Link></li>
              <li><Link href="/about" className="transition-all hover:text-blue hover:translate-x-1">About Us</Link></li>
              <li><Link href="/products" className="transition-all hover:text-blue hover:translate-x-1">Products</Link></li>
              <li><Link href="/services" className="transition-all hover:text-blue hover:translate-x-1">Services</Link></li>
              <li><Link href="/projects" className="transition-all hover:text-blue hover:translate-x-1">Projects</Link></li>
              <li><Link href="/contact" className="transition-all hover:text-blue hover:translate-x-1">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services#hot-insulation" className="transition-all hover:text-blue hover:translate-x-1">Hot Insulation</Link></li>
              <li><Link href="/services#cold-insulation" className="transition-all hover:text-blue hover:translate-x-1">Cold Insulation</Link></li>
              <li><Link href="/services#acoustic-insulation" className="transition-all hover:text-blue hover:translate-x-1">Acoustic Insulation</Link></li>
              <li><Link href="/services#amc" className="transition-all hover:text-blue hover:translate-x-1">AMC Contracts</Link></li>
              <li><Link href="/services#civil-works" className="transition-all hover:text-blue hover:translate-x-1">Civil Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="font-semibold text-blue">Phone:</span><br />
                <a href="tel:9822261415" className="transition-all hover:text-blue">9822261415</a> / 9975401440 / 9850977677
              </li>
              <li>
                <span className="font-semibold text-blue">Email:</span><br />
                <a href="mailto:insulsai@gmail.com" className="transition-all hover:text-blue">insulsai@gmail.com</a>
              </li>
              <li>
                <span className="font-semibold text-blue">Head Office:</span><br />
                170, N-3, CIDCO, Near Ajaydeep Complex, Aurangabad - 431 003
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-dark/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-gray-400 lg:flex-row lg:text-left">
          <p>&copy; {new Date().getFullYear()} Sai Enterprises. All rights reserved.</p>
          <p>ISO 9001:2008 Certified Company</p>
        </div>
      </div>
    </footer>
  );
}
