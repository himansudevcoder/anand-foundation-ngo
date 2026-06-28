import Image from "next/image";
import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

import founder from "@/assets/founder&ceo.jpeg";
import centrehead from "@/assets/centrehead.jpeg";

export const metadata: Metadata = {
  title: "About · Anand Charitable Trust — Empowering Communities",

  description:
    "Learn about Anand Charitable Trust, our mission, values and commitment to empowering children, women and communities through education and social welfare.",

  openGraph: {
    title: "About · Anand Charitable Trust",

    description:
      "Building stronger communities through education, empowerment and social initiatives.",

    url: "/about",
  },

  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    emoji: "🤝",
    t: "Community First",
    d: "Listening before acting.",
  },

  {
    emoji: "📚",
    t: "Education",
    d: "Creating opportunities.",
  },

  {
    emoji: "🌱",
    t: "Growth",
    d: "Building stronger futures.",
  },

  {
    emoji: "❤️",
    t: "Compassion",
    d: "Supporting with dignity.",
  },
];

const team = [
  {
    name: "Mr. Priyaranjan Das",

    role: "Founder & Director",

    image: founder,
  },

  {
    name: "Mrs. Madhusmita Das",

    role: "Centre Head",

    image: centrehead,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title={
          <>
            Building stronger
            <span className="italic text-accent"> communities</span> together.
          </>
        }
        intro="
Anand Charitable Trust started in the year 2018 with some like-minded people to serve anyone in need of any support they feel is required. It’s collaborating with the people and for the people. Anand Charitable repeatedly encountered many poor people and needy children such as slum children, street children, child labourers, and even juvenile delinquents.
"
      />

      {/* Mission & Vision */}
      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <Reveal>
            <div>
              <p
                className="
                  mb-3
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-accent
                "
              >
                Mission
              </p>

              <h2
                className="
                  font-serif
                  text-3xl
                  leading-snug
                  text-brand
                  md:text-4xl
                "
              >
                To support the people in distress and enable them to live in a
                free and peaceful environment
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p
                className="
                  mb-3
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-accent
                "
              >
                Vision
              </p>

              <h2
                className="
                  font-serif
                  text-3xl
                  leading-snug
                  text-brand
                  md:text-4xl
                "
              >
                Leading people from adverse to advantage witnessing the
                everlasting JOY
              </h2>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sage/10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2
              className="
                mb-12
                font-serif
                text-3xl
                text-brand
                md:text-5xl
              "
            >
              What guides our work
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.t} delay={index * 0.05}>
                <div
                  className="
                    rounded-[2rem]
                    border
                    border-brand/5
                    bg-white
                    p-8
                    text-center
                    transition
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  <div className="mb-5 text-5xl">{value.emoji}</div>

                  <h3
                    className="
                      mb-3
                      font-serif
                      text-2xl
                      text-brand
                    "
                  >
                    {value.t}
                  </h3>

                  <p className="text-brand/60">{value.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["2018", "Founded"],
              ["20+", "Programmes"],
              ["500+", "People Reached"],
              ["Odisha", "Community"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="
                  rounded-3xl
                  bg-sage/10
                  py-10
                  text-center
                "
              >
                <div
                  className="
                    mb-2
                    font-serif
                    text-5xl
                    text-brand
                  "
                >
                  {value}
                </div>

                <div className="text-brand/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2
              className="
                mb-4
                font-serif
                text-3xl
                text-brand
                md:text-5xl
              "
            >
              People behind the mission
            </h2>

            <p
              className="
                mb-12
                max-w-2xl
                text-brand/60
              "
            >
              Leadership and dedicated people working to create meaningful
              opportunities and stronger communities.
            </p>
          </Reveal>

          <div
            className="
              grid
              grid-cols-1
              gap-8
              sm:grid-cols-2
              md:grid-cols-3
            "
          >
            {team.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.05}>
                <div className="group">
                  <div
                    className="
                      mb-5
                      aspect-square
                      overflow-hidden
                      rounded-2xl
                    "
                  >
                    <Image
                      src={person.image}
                      alt={person.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-[1.05]
                      "
                    />
                  </div>

                  <p
                    className="
                      text-xl
                      font-medium
                      text-brand
                    "
                  >
                    {person.name}
                  </p>

                  <p className="text-brand/60">{person.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
