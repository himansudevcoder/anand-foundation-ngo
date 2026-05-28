"use client";

import Image from "next/image";

import { Reveal } from "./Reveal";
import { SectionEyebrow } from "./SectionEyebrow";

type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image?: string;
};

export function PageHeader({ eyebrow, title, intro, image }: PageHeaderProps) {
  return (
    <section className="bg-surface px-6 pb-16 pt-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative inline-block">
            {image && (
              <Image
                src={image}
                alt=""
                aria-hidden
                width={420}
                height={420}
                className="pointer-events-none absolute left-1/2 top-1/2 max-w-[240px] -translate-x-1/2 -translate-y-1/2 scale-110 select-none rounded-sm object-cover opacity-[0.27] blur-[0.1px] md:w-[420px]"
              />
            )}

            <h1 className="relative z-10 max-w-4xl text-balance font-serif text-5xl leading-[1.05] text-brand md:text-7xl">
              {title}
            </h1>
          </div>
        </Reveal>

        {intro && (
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-brand/70">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
