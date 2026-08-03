"use client";

import { useMemo, useEffect, useState, useCallback } from "react";

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
  const [selected, setSelected] = useState<Photo | null>(null);

  const [filter, setFilter] = useState("All");

  const [dragDirection, setDragDirection] = useState(0);

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

  const selectedIndex = useMemo(() => {
    if (!selected) return -1;

    return filteredPhotos.findIndex((img) => img.src === selected.src);
  }, [selected, filteredPhotos]);

  const goPrev = useCallback(() => {
    setDragDirection(-1);

    setSelected((prev) => {
      if (!prev) return null;

      const idx = filteredPhotos.findIndex((img) => img.src === prev.src);

      if (idx < 0) return null;

      return filteredPhotos[idx === 0 ? filteredPhotos.length - 1 : idx - 1];
    });
  }, [filteredPhotos]);

  const goNext = useCallback(() => {
    setDragDirection(1);

    setSelected((prev) => {
      if (!prev) return null;

      const idx = filteredPhotos.findIndex((img) => img.src === prev.src);

      if (idx < 0) return null;

      return filteredPhotos[idx === filteredPhotos.length - 1 ? 0 : idx + 1];
    });
  }, [filteredPhotos]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
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

  useEffect(() => {
    if (!selected) return;

    const exists = filteredPhotos.some((img) => img.src === selected.src);

    if (!exists) {
      setSelected(null);
    }
  }, [filter, filteredPhotos, selected]);

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

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-10 font-serif text-3xl text-brand md:text-5xl">
              Community moments
            </h2>
          </Reveal>

          <div className="-mx-6 mb-12 overflow-x-auto px-6">
            <div className="flex min-w-full w-max gap-3 pb-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setSelected(null);

                    setFilter(c);
                  }}
                  className={`
                    shrink-0
                    whitespace-nowrap
                    rounded-full
                    px-5
                    py-2.5
                    text-[13px]
                    transition-all
                    duration-300
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

          <div className="grid auto-rows-[12rem] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[16rem]">
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
                    onClick={() => setSelected(photo)}
                    className="group relative h-full w-full overflow-hidden rounded-sm"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-5 left-5">
                      <p className="text-sm font-medium text-white">
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
        {selected && selectedIndex !== -1 && (
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
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-6 top-5 z-50 text-5xl leading-none text-white transition hover:opacity-70"
              aria-label="Close"
            >
              ×
            </button>

            <div className="pointer-events-none absolute left-1/2 top-5 z-50 -translate-x-1/2 rounded-full bg-black/45 px-5 py-2 text-sm text-white backdrop-blur">
              {selectedIndex + 1} / {filteredPhotos.length}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();

                goPrev();
              }}
              className="absolute left-4 top-1/2 z-50 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-4xl text-white backdrop-blur transition hover:bg-black/60 md:flex"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();

                goNext();
              }}
              className="absolute right-4 top-1/2 z-50 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-4xl text-white backdrop-blur transition hover:bg-black/60 md:flex"
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
              className="relative select-none touch-pan-y active:cursor-grabbing"
            >
              <AnimatePresence mode="wait" custom={dragDirection}>
                <motion.img
                  key={selected.src}
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
                  }}
                  drag={false}
                  className="pointer-events-none block max-h-[85vh] max-w-[95vw] rounded-sm object-contain"
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
