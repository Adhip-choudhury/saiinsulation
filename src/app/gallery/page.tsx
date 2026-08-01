"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Link from "next/link";

const photos = Array.from({ length: 14 }, (_, i) => ({
  src: `/gallery/photo-${i + 1}.jpeg`,
  alt: `Gallery Photo ${i + 1}`,
}));

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(
    () => setSelected((s) => (s === null ? s : (s + photos.length - 1) % photos.length)),
    []
  );
  const next = useCallback(
    () => setSelected((s) => (s === null ? s : (s + 1) % photos.length)),
    []
  );

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close, prev, next]);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden bg-dark py-28 lg:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gallery/photo-1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/85 to-dark/70" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-7xl px-4 text-center lg:px-8"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-orange" />
            Our Work
          </span>
          <h1 className="text-4xl font-bold uppercase text-white drop-shadow-lg md:text-6xl">
            Photo <span className="text-orange">Gallery</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            A glimpse of our projects, craftsmanship, and the dedication we bring to every site
          </p>
        </motion.div>
      </section>

      {/* Masonry Gallery */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-dark">
              Moments from <span className="text-orange">the Field</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-text">
              Click any photo to view it in full screen
            </p>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-orange to-blue" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]"
          >
            {photos.map((photo, i) => (
              <motion.button
                key={photo.src}
                variants={item}
                onClick={() => setSelected(i)}
                className="group relative mb-6 block w-full cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm break-inside-avoid transition-all duration-300 hover:shadow-2xl"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-end justify-between p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-white">
                      Gallery Photo {i + 1}
                    </p>
                    <p className="text-xs text-gray-300">Sai Enterprises</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange/15 via-transparent to-blue/15" />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold uppercase text-white md:text-4xl">
            Want to see more of <span className="text-orange">our work</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Visit our projects page to explore how we deliver excellence across industries.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="rounded bg-orange px-8 py-3.5 font-bold uppercase text-black shadow-lg shadow-orange/30 transition-all hover:bg-orange-dark hover:scale-105"
            >
              VIEW PROJECTS &rarr;
            </Link>
            <Link
              href="/contact"
              className="rounded border-2 border-blue px-8 py-3.5 font-bold uppercase text-blue transition-all hover:bg-blue hover:text-black"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={close}
          >
            <div className="absolute left-4 top-4 flex items-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                {selected + 1} / {photos.length}
              </span>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-orange hover:text-black"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-orange hover:text-black max-sm:hidden"
              aria-label="Previous"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={photos[selected].src}
              alt={photos[selected].alt}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-orange hover:text-black max-sm:hidden"
              aria-label="Next"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-400">
              Use arrow keys to navigate &middot; Esc to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
