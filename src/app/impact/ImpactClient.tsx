"use client";

import Image from "next/image";

import { PageHeader } from "@/components/PageHeader";

import { Reveal } from "@/components/Reveal";

import { SectionEyebrow } from "@/components/SectionEyebrow";

import hero from "@/assets/hero-image.jpeg";
const stories = [
  {
    img: "/images/children-club-summer-camp/image2.jpeg",

    title: "Children Club and Summer Camp",

    excerpt:
      "Children explored learning beyond the classroom through activities, camps and interactive sessions that encouraged confidence, creativity and participation.",

    location: "Community Learning Programme",
  },

  {
    img: "/images/dental-camp-kids/image1.jpeg",

    title: "Dental Camp for Kids",

    excerpt:
      "Children participated in health awareness and dental care activities designed to promote healthier habits and early preventive care.",

    location: "Child Health Initiative",
  },

  {
    img: "/images/student-meeting-certificate/image1.jpeg",

    title: "Student Meeting & Certificate Convocation Day",

    excerpt:
      "Students celebrated achievements through recognition, certificates and collective participation in educational activities.",

    location: "Education Support Programme",
  },

  {
    img: "/images/beautician-training/image1.jpeg",

    title: "Beautician Training",

    excerpt:
      "Practical training sessions helped participants build skills, confidence and opportunities for future self-employment.",

    location: "Women Skill Development",
  },

  {
    img: "/images/food-for-needy/image1.jpeg",

    title: "Food for Needy",

    excerpt:
      "Support initiatives reached people in need through food distribution and community-led welfare activities.",

    location: "Community Welfare",
  },

  {
    img: "/images/govt-school-child-program/image1.jpeg",

    title: "Government School Children Programme",

    excerpt:
      "Educational activities encouraged participation, improved engagement and created positive learning experiences.",

    location: "Education Outreach",
  },

  {
    img: "/images/fanni-relief/image1.jpeg",

    title: "Fanni Relief in Khetrapala Village",

    excerpt:
      "Relief support focused on helping affected communities through distribution efforts and local recovery initiatives.",

    location: "Disaster Relief",
  },

  {
    img: "/images/computer-training/image1.jpeg",

    title: "Computer Training",

    excerpt:
      "Digital learning introduced practical computer knowledge and encouraged confidence in technology use.",

    location: "Digital Education",
  },

  {
    img: "/images/womens-meeting/image1.jpeg",

    title: "Women's Meeting",

    excerpt:
      "Community gatherings created space for discussion, awareness and stronger social participation among women.",

    location: "Women Empowerment",
  },

  {
    img: "/images/sketching-class/image1.jpeg",

    title: "Sketching Class",

    excerpt:
      "Creative learning activities encouraged imagination, artistic expression and confidence among participants.",

    location: "Creative Learning",
  },

  {
    img: "/images/leadership-development-program/image1.jpeg",

    title: "Leadership Development Programme",

    excerpt:
      "Interactive sessions focused on communication, teamwork and developing leadership qualities for the future.",

    location: "Youth Development",
  },

  {
    img: "/images/youth-meeting/image1.jpeg",

    title: "Youth Meeting",

    excerpt:
      "Youth gatherings encouraged collaboration, active participation and engagement in community activities.",

    location: "Youth Engagement",
  },

  {
    img: "/images/other-activities/image1.jpeg",

    title: "Other Activities",

    excerpt:
      "Through various outreach programmes and initiatives, Anand Charitable Trust continues creating meaningful community impact.",

    location: "Community Impact",
  },
];

const audited = [
  {
    v: "2018",

    l: "Serving communities since",
  },

  {
    v: "20+",

    l: "Programmes & activities",
  },

  {
    v: "500+",

    l: "Children & youth engaged",
  },

  // {
  //   v: "50+",

  //   l: "Women supported",
  // },

  {
    v: "2020",

    l: "Registered under Trust Act",
  },

  {
    v: "Odisha",

    l: "Community impact",
  },
];

export default function ImpactClient() {
  return (
    <>
      <PageHeader
        eyebrow="Impact"
        title={
          <>
            Real impact.{" "}
            <span className="italic text-accent">Real people.</span>
          </>
        }
        intro="
Through education, training, community engagement and social initiatives, Anand Charitable Trust continues to support stronger and more empowered communities.
"
      />

      {/* IMPACT NUMBERS */}
      <section className="px-6 py-20 lg:px-8">
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
              Impact at a glance
            </h2>
          </Reveal>

          <div
            className="
              grid
              grid-cols-2
              gap-x-10
              gap-y-12
              md:grid-cols-3
            "
          >
            {audited.map((stat, index) => (
              <Reveal key={stat.l} delay={index * 0.05}>
                <div
                  className="
                    border-t
                    border-brand/15
                    pt-6
                  "
                >
                  <div
                    className="
                      mb-3
                      font-serif
                      text-5xl
                      text-brand
                      md:text-6xl
                    "
                  >
                    {stat.v}
                  </div>

                  <p
                    className="
                      text-sm
                      text-brand/60
                    "
                  >
                    {stat.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
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
              Stories from our community
            </h2>
          </Reveal>

          <div
            className="
              grid
              gap-10
              md:grid-cols-2
            "
          >
            {stories.map((story, index) => (
              <Reveal key={story.title} delay={index * 0.08}>
                <article className="group">
                  <div
                    className="
                      mb-6
                      aspect-[4/3]
                      overflow-hidden
                      rounded-sm
                    "
                  >
                    <Image
                      src={story.img}
                      alt={story.title}
                      width={800}
                      height={600}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <p
                    className="
                      mb-2
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-accent
                    "
                  >
                    {story.location}
                  </p>

                  <h3
                    className="
                      mb-3
                      font-serif
                      text-2xl
                      text-brand
                      md:text-3xl
                    "
                  >
                    {story.title}
                  </h3>

                  <p
                    className="
                      leading-relaxed
                      text-brand/70
                    "
                  >
                    {story.excerpt}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
