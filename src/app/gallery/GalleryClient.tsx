"use client";

import { useMemo, useEffect, useState, useCallback, useRef } from "react";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

import { PageHeader } from "@/components/PageHeader";

import { Reveal } from "@/components/Reveal";

import { ngoPhotos } from "@/data/galleryData";

const videos = [
  {
    id: "ijsmaxm-CIA",

    title: "Children Club & Summer Camp",
  },

  {
    id: "DhEPiq0DKEo",

    title: "Community Development Activities",
  },
];

type Photo = {
  src: string;

  alt: string;

  h?: string;

  category: string;
};

export default function GalleryClient() {
  // Track the open image by INDEX into filteredPhotos, not by src.
  // (Some photos repeat across categories, so matching by src can
  // resolve to the wrong occurrence and make next/prev jump around.)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [filter, setFilter] = useState("All");

  const [dragDirection, setDragDirection] = useState(0);

  const preloadedRef = useRef<Set<string>>(new Set());

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(ngoPhotos.map((g) => g.category)))],
    [],
  );

  const allPhotos = useMemo<Photo[]>(() => {
    return ngoPhotos.flatMap((group) =>
      group.photos.map((img) => ({
        ...img,

        category: group.category,
      })),
    );
  }, []);

  const filteredPhotos = useMemo<Photo[]>(() => {
    if (filter === "All") {
      return allPhotos;
    }

    return allPhotos.filter((photo) => photo.category === filter);
  }, [filter, allPhotos]);

  const selected = useMemo(() => {
    if (selectedIndex === null) return null;

    return filteredPhotos[selectedIndex] ?? null;
  }, [selectedIndex, filteredPhotos]);

  // Preload the src into the browser cache so switching is instant.
  const preload = useCallback((src?: string) => {
    if (!src || preloadedRef.current.has(src)) return;

    const img = new window.Image();
    img.src = src;
    preloadedRef.current.add(src);
  }, []);

  // Whenever the open image changes, warm up its neighbors.
  useEffect(() => {
    if (selectedIndex === null || filteredPhotos.length === 0) return;

    const nextIdx =
      selectedIndex === filteredPhotos.length - 1 ? 0 : selectedIndex + 1;

    const prevIdx =
      selectedIndex === 0 ? filteredPhotos.length - 1 : selectedIndex - 1;

    preload(filteredPhotos[nextIdx]?.src);
    preload(filteredPhotos[prevIdx]?.src);
  }, [selectedIndex, filteredPhotos, preload]);

  const goPrev = useCallback(() => {
    setDragDirection(-1);

    setSelectedIndex((prev) => {
      if (prev === null || filteredPhotos.length === 0) return prev;

      return prev === 0 ? filteredPhotos.length - 1 : prev - 1;
    });
  }, [filteredPhotos.length]);

  const goNext = useCallback(() => {
    setDragDirection(1);

    setSelectedIndex((prev) => {
      if (prev === null || filteredPhotos.length === 0) return prev;

      return prev === filteredPhotos.length - 1 ? 0 : prev + 1;
    });
  }, [filteredPhotos.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowLeft") {
        goPrev();
      }

      if (e.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [goPrev, goNext]);

  // If the filter changes and the current index no longer exists
  // (or the list shrank), close the lightbox instead of showing
  // a stale/mismatched image.
  useEffect(() => {
    if (selectedIndex === null) return;

    if (selectedIndex > filteredPhotos.length - 1) {
      setSelectedIndex(null);
    }
  }, [filter, filteredPhotos, selectedIndex]);

  // Lock background scroll while lightbox is open (mobile especially).
  useEffect(() => {
    if (selected) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [selected]);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={
          <>
            Moments that{" "}
            <span className="italic text-accent">create impact</span>
          </>
        }
        intro="
Explore the stories, programmes and community moments that reflect our journey of empowering people and creating meaningful change.
"
      />

      <section className="px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-6 font-serif text-2xl text-brand sm:mb-10 sm:text-3xl md:text-5xl">
              Community moments
            </h2>
          </Reveal>

          <div className="-mx-4 mb-8 overflow-x-auto px-4 sm:-mx-6 sm:mb-12 sm:px-6">
            <div className="flex min-w-full w-max gap-2 pb-2 sm:gap-3">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setSelectedIndex(null);

                    setFilter(c);
                  }}
                  className={`
                    shrink-0
                    whitespace-nowrap
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    transition-all
                    duration-300
                    sm:px-5
                    sm:py-2.5
                    sm:text-[13px]
                    md:text-sm

                    ${
                      filter === c
                        ? "bg-brand text-white"
                        : "border border-brand/10 bg-white text-brand hover:bg-sage/10"
                    }
                  `}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid auto-rows-[9rem] grid-cols-2 gap-2.5 xs:auto-rows-[10rem] sm:auto-rows-[12rem] sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:auto-rows-[16rem] lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={`${photo.category}__${photo.src}__${index}`}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.92,
                  }}
                  transition={{
                    duration: 0.3,

                    delay: (index % 6) * 0.04,
                  }}
                  className={photo.h}
                >
                  <button
                    onClick={() => setSelectedIndex(index)}
                    onMouseEnter={() => preload(photo.src)}
                    className="group relative h-full w-full overflow-hidden rounded-sm"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 639px) 50vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
                      <p className="text-xs font-medium text-white sm:text-sm">
                        {photo.category}
                      </p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && selectedIndex !== null && (
          <motion.div
            key="lightbox-backdrop"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-3xl leading-none text-white transition hover:opacity-70 sm:right-6 sm:top-5 sm:h-auto sm:w-auto sm:bg-transparent sm:text-5xl"
            >
              ×
            </button>

            <div className="pointer-events-none absolute left-1/2 top-3 z-50 -translate-x-1/2 rounded-full bg-black/45 px-3 py-1.5 text-xs text-white backdrop-blur sm:top-5 sm:px-5 sm:py-2 sm:text-sm">
              {selectedIndex + 1} / {filteredPhotos.length}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();

                goPrev();
              }}
              aria-label="Previous image"
              className="absolute left-1 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-2xl text-white backdrop-blur transition hover:bg-black/60 active:scale-90 sm:left-4 sm:h-12 sm:w-12 sm:text-4xl"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();

                goNext();
              }}
              aria-label="Next image"
              className="absolute right-1 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-2xl text-white backdrop-blur transition hover:bg-black/60 active:scale-90 sm:right-4 sm:h-12 sm:w-12 sm:text-4xl"
            >
              ›
            </button>

            <motion.div
              drag="x"
              dragDirectionLock
              dragElastic={0.4}
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              onClick={(e) => e.stopPropagation()}
              whileDrag={{
                scale: 0.97,
              }}
              onDragEnd={(_, info) => {
                const { offset, velocity } = info;

                if (offset.x < -35 || velocity.x < -180) {
                  goNext();
                } else if (offset.x > 35 || velocity.x > 180) {
                  goPrev();
                }
              }}
              className="relative flex h-[78vh] w-[88vw] select-none items-center justify-center touch-pan-y active:cursor-grabbing sm:h-[85vh] sm:w-[90vw]"
            >
              <AnimatePresence
                initial={false}
                custom={dragDirection}
                mode="sync"
              >
                <motion.img
                  key={`${selectedIndex}-${selected.src}`}
                  src={selected.src}
                  alt={selected.alt}
                  custom={dragDirection}
                  variants={{
                    enter: (dir: number) => ({
                      x: dir >= 0 ? 45 : -45,

                      opacity: 0,
                    }),

                    center: {
                      x: 0,
                      opacity: 1,
                    },

                    exit: (dir: number) => ({
                      x: dir >= 0 ? -45 : 45,

                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 520,
                    damping: 24,
                    opacity: { duration: 0.22 },
                  }}
                  drag={false}
                  className="pointer-events-none absolute inset-0 m-auto block max-h-[78vh] max-w-[88vw] rounded-sm object-contain sm:max-h-[85vh] sm:max-w-[90vw]"
                />
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <section className="bg-brand px-6 py-20 text-surface lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-12 font-serif text-3xl md:text-5xl">
              Stories in motion
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {videos.map((video, index) => (
              <Reveal key={video.id} delay={index * 0.08}>
                <div className="aspect-video overflow-hidden rounded-3xl">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>

                <p className="mt-5 font-serif text-2xl">{video.title}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
