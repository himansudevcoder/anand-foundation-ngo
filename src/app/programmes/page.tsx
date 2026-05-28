import type { Metadata } from "next";

import Link from "next/link";

import Image from "next/image";

import {
  HeartPulse,
  GraduationCap,
  Award,
  Utensils,
  School,
  HandHeart,
  Palette,
  Users,
  Sparkles,
} from "lucide-react";

import { PageHeader } from "@/components/PageHeader";

import { Reveal } from "@/components/Reveal";

import children from "@/assets/children.jpeg";

import computer from "@/assets/computer.jpeg";

import womensmeeting from "@/assets/womens-meeting.jpeg";

export const metadata: Metadata = {
  title: "Our Programmes — Anand Charitable Trust",

  description:
    "Explore education, training, youth development and community initiatives by Anand Charitable Trust.",

  openGraph: {
    title: "Our Programmes — Anand Charitable Trust",

    description:
      "Supporting communities through meaningful programmes and initiatives.",

    url: "/programmes",
  },

  alternates: {
    canonical: "/programmes",
  },
};

const programmes = [
  {
    img: children,

    title: "Children Club & Summer Camp",

    location: "Children Development",

    desc: "Interactive camps and activities designed to encourage learning, creativity, confidence and stronger community participation among children.",

    stat: "Education & Engagement",
  },

  {
    img: computer,

    title: "Computer Training & Leadership Development",

    location: "Youth Empowerment",

    desc: "Practical training programmes helping youth develop digital skills, confidence and leadership abilities for future opportunities.",

    stat: "Skill Development",
  },

  {
    img: womensmeeting,

    title: "Women Empowerment & Community Programmes",

    location: "Women Development",

    desc: "Training initiatives including beautician training, meetings and community support programmes that encourage independence and growth.",

    stat: "Community Support",
  },
];

const initiatives = [
  {
    icon: HeartPulse,

    title: "Dental Camp for Kids",

    emoji: "🦷",
  },

  {
    icon: GraduationCap,

    title: "Student Meeting",

    emoji: "🎓",
  },

  {
    icon: Award,

    title: "Certificate Convocation",

    emoji: "🏆",
  },

  {
    icon: Utensils,

    title: "Food for Needy",

    emoji: "🍛",
  },

  {
    icon: School,

    title: "Government School Programme",

    emoji: "🏫",
  },

  {
    icon: HandHeart,

    title: "Fanni Relief",

    emoji: "❤️",
  },

  {
    icon: Palette,

    title: "Sketching Class",

    emoji: "🎨",
  },

  {
    icon: Users,

    title: "Youth Meeting",

    emoji: "👥",
  },

  {
    icon: Sparkles,

    title: "Other Activities",

    emoji: "✨",
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title={
          <>
            Creating <span className="italic text-accent">opportunities</span>{" "}
            for stronger communities.
          </>
        }
        intro="
From education and training to leadership and social support, our programmes focus on creating meaningful opportunities for children, women and youth.
"
      />

      {/* PROGRAMMES */}
      <section className="px-6 py-8 lg:px-8">
        <div
          className="
            mx-auto
            max-w-7xl
            space-y-28
          "
        >
          {programmes.map((programme, index) => (
            <Reveal key={programme.title}>
              <article
                className={`
                    grid
                    items-center
                    gap-10
                    lg:grid-cols-12
                    ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}
                  `}
              >
                {/* IMAGE */}
                <div className="lg:col-span-7">
                  <Image
                    src={programme.img}
                    alt={programme.title}
                    className="
                        aspect-[4/3]
                        w-full
                        rounded-sm
                        object-cover
                        shadow-lg
                      "
                  />
                </div>

                {/* CONTENT */}
                <div className="lg:col-span-5">
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
                    {programme.location}
                  </p>

                  <h2
                    className="
                        mb-5
                        font-serif
                        text-3xl
                        text-brand
                        md:text-5xl
                      "
                  >
                    {programme.title}
                  </h2>

                  <p
                    className="
                        mb-8
                        leading-relaxed
                        text-brand/70
                      "
                  >
                    {programme.desc}
                  </p>

                  <div
                    className="
                        inline-block
                        rounded-full
                        bg-sage/15
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-brand
                      "
                  >
                    {programme.stat}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXTRA PROGRAMMES */}
      <section
        className="
          bg-sage/10
          px-6
          py-20
          lg:px-8
        "
      >
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
              Additional initiatives
            </h2>
          </Reveal>

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {initiatives.map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title}>
                  <div
                    className="
                        group
                        rounded-[2rem]
                        border
                        border-brand/5
                        bg-white
                        p-8
                        transition-all
                        hover:-translate-y-1
                        hover:shadow-xl
                      "
                  >
                    {/* ICON */}
                    <div
                      className="
                          mb-5
                          flex
                          items-center
                          gap-4
                        "
                    >
                      <div
                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-sage/15
                          "
                      >
                        <Icon
                          size={24}
                          className="
                              text-accent
                            "
                        />
                      </div>

                      <span className="text-2xl">{item.emoji}</span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                          mb-3
                          font-serif
                          text-2xl
                          text-brand
                        "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                          leading-relaxed
                          text-brand/60
                        "
                    >
                      Supporting communities through meaningful engagement and
                      social initiatives.
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="
          bg-brand
          px-6
          py-20
          text-center
          text-surface
          lg:px-8
        "
      >
        <Reveal>
          <h2
            className="
              mx-auto
              mb-8
              max-w-3xl
              font-serif
              text-3xl
              md:text-5xl
            "
          >
            Want to support community initiatives?
          </h2>

          <Link
            href="/volunteer"
            className="
              inline-block
              rounded-full
              bg-accent
              px-8
              py-4
              font-medium
              text-white
              transition
              hover:bg-white
              hover:text-brand
            "
          >
            Get Involved
          </Link>
        </Reveal>
      </section>
    </>
  );
}
