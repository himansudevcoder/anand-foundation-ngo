"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import children from "@/assets/children.jpeg";
import computer from "@/assets/computer.jpeg";
import leadership from "@/assets/leadership.jpeg";
import sketching from "@/assets/sketching-class.jpeg";
import youthmeeting from "@/assets/youthmeeting.jpeg";
import womensmeeting from "@/assets/womens-meeting.jpeg";
import hero from "@/assets/heroImg.png";

import gallery1 from "@/assets/children.jpeg";
import centrehead from "@/assets/centrehead.jpeg";
import gallery3 from "@/assets/youthmeeting.jpeg";

import { HomeHeroImage } from "@/components/HomeHeroImage";

import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionEyebrow";

import {
  ArrowRight,
  Sprout,
  Droplets,
  Heart,
  Users,
  Palette,
  Handshake,
  Home,
  School,
  Landmark,
} from "lucide-react";

const stats = [
  {
    value: "2018",
    label: "Serving communities since",
  },

  {
    value: "20+",
    label: "Community programmes conducted",
  },

  {
    value: "500+",
    label: "Children, women & youth supported",
  },

  {
    value: "31 Jan",
    label: "Registered under Trust Act • 2020",
  },
];

const stories = [
  {
    img: gallery1,

    quote:
      "Through training, education and community support, Anand Charitable Trust has created opportunities for children, women and youth to learn, grow and move forward with confidence.",

    name: "Mrs. Madhusmita Das",

    role: "Centre Head",
  },

  // {
  //   img: gallery1,

  //   quote:
  //     "Community initiatives and learning programmes encouraged confidence, growth and stronger opportunities.",

  //   name: "Community Participant",

  //   role: "Leadership Programme",
  // },

  // {
  //   img: gallery3,

  //   quote:
  //     "Support and participation created meaningful change and brought people together.",

  //   name: "Volunteer",

  //   role: "Community Initiative",
  // },
];

const programmes = [
  {
    img: children,
    icon: Sprout,
    title: "Children Club & Summer Camp",
    desc: "Interactive learning, creativity and development activities for children.",
  },

  {
    img: computer,
    icon: Droplets,
    title: "Computer Training",
    desc: "Equipping youth with digital literacy, confidence and leadership skills.",
  },

  {
    img: womensmeeting,
    icon: Heart,
    title: "Women's Meeting",
    desc: "Creating opportunities for discussion, awareness, empowerment and community participation.",
  },

  {
    img: leadership,
    icon: Users,
    title: "Leadership Development Programme",
    desc: "Helping youth build confidence, communication and leadership abilities.",
  },

  {
    img: sketching,
    icon: Palette,
    title: "Sketching Class",
    desc: "Encouraging creativity, expression and artistic development among students.",
  },

  {
    img: youthmeeting,
    icon: Handshake,
    title: "Youth Meeting",
    desc: "Building stronger youth communities through engagement and meaningful discussions.",
  },
];

const partners = [
  "Local Communities",
  "Educational Institutions",
  "Volunteers",
  "Social Leaders",
  "Supporters",
  "Development Partners",
] as const;

export default function HomeClient() {
  return (
    <>
      {/* HERO */}

      <section className="relative overflow-hidden bg-surface px-6 pb-20 pt-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionEyebrow>Est. 2018 • Registered Trust</SectionEyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mb-8 text-balance font-serif text-5xl leading-[1.02] text-brand md:text-7xl lg:text-[5.5rem]">
                Transforming lives through
                <span className="italic text-accent"> compassion</span>,
                education & community support
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mb-10 max-w-xl text-pretty text-lg leading-relaxed text-brand/70 md:text-xl">
                Since 2018, Anand Charitable Trust has worked to uplift
                children, women, youth and underserved communities through
                education, training, relief efforts and social development
                initiatives across Odisha.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/programmes"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-medium text-white transition-all hover:bg-accent hover:shadow-xl"
                >
                  View our programmes
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/impact"
                  className="rounded-full border border-brand/20 px-7 py-4 font-medium transition-all hover:bg-brand/5"
                >
                  Read success stories
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <HomeHeroImage hero={hero} />
          </div>
        </div>
      </section>

      {/* MISSION */}

      <section className="border-y border-brand/5 bg-sage/5 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-balance font-serif text-2xl leading-snug text-brand/90 md:text-3xl">
              We believe meaningful change begins at the community level by
              creating opportunities, building confidence and empowering every
              child, woman and family to build a better future.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMMES */}

      <section className="bg-brand px-6 py-24 text-surface lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Reveal>
                <h2 className="mb-6 font-serif text-4xl text-surface md:text-5xl">
                  Creating opportunities. Building stronger communities.
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="max-w-lg text-lg text-surface/70">
                  Our programmes focus on education, skill development, youth
                  engagement, women empowerment and community welfare.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {programmes.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <Link href="/programmes" className="group block">
                  <div className="mb-6 overflow-hidden rounded-sm bg-white/5 aspect-[4/3]">
                    <Image
                      src={p.img}
                      alt={p.title}
                      width={1000}
                      height={700}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mb-3 flex items-center gap-2">
                    <p.icon size={18} className="text-accent" />

                    <h3 className="font-serif text-2xl text-surface transition-colors group-hover:text-accent">
                      {p.title}
                    </h3>
                  </div>

                  <p className="leading-relaxed text-surface/60">{p.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 rounded-full border border-surface/20 px-8 py-4 font-medium text-surface transition-all hover:bg-surface hover:text-brand"
            >
              See More
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}

      <section className="bg-surface px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionEyebrow>Impact</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mb-16 max-w-2xl font-serif text-4xl text-brand md:text-5xl">
              Every initiative creates real impact in communities.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="border-t border-brand/15 pt-6">
                  <div className="mb-3 font-serif text-5xl text-brand md:text-6xl">
                    {s.value}
                  </div>

                  <p className="max-w-[20ch] text-sm leading-tight text-brand/60">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY STORIES */}

      <section className="bg-sage/10 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionEyebrow>Stories from our community</SectionEyebrow>
          </Reveal>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop
            className="w-full pb-14 pt-8 md:pb-16"
          >
            {stories.map((s) => (
              <SwiperSlide key={s.quote}>
                <div className="grid items-center gap-12 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <div className="relative">
                      <Image
                        src={s.img}
                        alt={s.name}
                        width={1200}
                        height={1500}
                        className="aspect-[4/5] w-full rounded-sm object-cover shadow-xl"
                      />

                      {/* <div className="absolute -bottom-6 right-6 max-w-[260px] rounded-sm bg-accent px-7 py-5 text-white shadow-xl">
                        <p className="font-serif text-xl italic leading-snug">
                          “{s.role}”
                        </p>
                      </div> */}
                    </div>
                  </div>

                  <div className="min-w-0 lg:col-span-7">
                    <h2 className="mb-6 font-serif text-3xl leading-[1.08] text-brand sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl">
                      Real people.
                      <br />
                      Real change.
                    </h2>

                    <blockquote className="mb-8 max-w-[34ch] text-base leading-relaxed text-brand/80 sm:text-lg md:mb-10 md:text-xl lg:text-2xl">
                      “{s.quote}”
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-brand/10 sm:h-16 sm:w-16">
                        <Image
                          src={s.img}
                          alt={s.name}
                          width={100}
                          height={100}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate font-serif text-lg text-brand sm:text-xl md:text-2xl">
                          {s.name}
                        </p>

                        <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-accent sm:text-xs">
                          {s.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* PARTNERS */}

      <section className="overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-12 text-center text-[10px] uppercase tracking-[0.25em] text-brand/40">
            Supported by our community and partners
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />

          <div className="absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

          <motion.div
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-6"
          >
            {partners.map((p) => {
              let Icon = Users;

              if (p === "Local Communities") {
                Icon = Home;
              } else if (p === "Educational Institutions") {
                Icon = School;
              } else if (p === "Volunteers") {
                Icon = Heart;
              } else if (p === "Social Leaders") {
                Icon = Landmark;
              } else if (p === "Supporters") {
                Icon = Heart;
              } else if (p === "Development Partners") {
                Icon = Handshake;
              }

              return (
                <div
                  key={p}
                  className="flex shrink-0 items-center gap-4 rounded-full border border-brand/5 bg-white px-4 py-2 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-sage/10 text-accent">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="whitespace-nowrap font-medium text-brand">
                    {p}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* DONATE CTA */}

      <section className="bg-surface px-6 py-24 lg:px-8">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-sm bg-accent p-6 text-center text-white md:p-12">
          <Reveal>
            <h2 className="mb-6 font-serif text-4xl md:text-5xl">
              Your support can create lasting change.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mx-auto mb-10 max-w-lg text-white/80">
              Help us continue education programmes, relief activities, skill
              training and community development initiatives.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <Link
              href="/donate"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-accent transition-colors hover:bg-brand hover:text-white"
            >
              Donate Securely
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
