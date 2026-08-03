"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type HomeHeroImageProps = {
  hero: StaticImageData;
};

export function HomeHeroImage({ hero }: HomeHeroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative"
    >
      <Image
        src={hero}
        alt="Community support"
        width={1200}
        height={1500}
        className="w-full aspect-[4/5] object-cover rounded-sm"
        priority
      />

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.7,
        }}
        className="absolute -bottom-30 -left-6 md:-left-12 bg-white p-7 rounded-sm shadow-2xl max-w-[15rem]"
      >
        <p className="text-3xl font-serif text-accent mb-1">12+</p>

        <p className="text-xs text-brand/60 uppercase tracking-wide leading-tight">
          Community programmes supporting children, women & youth.
        </p>
      </motion.div> */}
    </motion.div>
  );
}
