import type { Metadata } from "next";

import { Heart, BookOpen, Users, CalendarHeart } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";

import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Volunteer — Anand Charitable Trust",

  description:
    "Join Anand Charitable Trust as a volunteer and support education, training, youth and community initiatives.",

  openGraph: {
    title: "Volunteer — Anand Charitable Trust",

    description: "Become part of meaningful community impact.",

    url: "/volunteer",
  },

  alternates: {
    canonical: "/volunteer",
  },
};

const roles = [
  {
    icon: Heart,

    t: "Programme Volunteer",

    c: "On-ground",

    d: "Support camps and community initiatives.",
  },

  {
    icon: BookOpen,

    t: "Teaching Volunteer",

    c: "Education",

    d: "Guide students through learning.",
  },

  {
    icon: Users,

    t: "Women Empowerment",

    c: "Community",

    d: "Support training and development.",
  },

  {
    icon: CalendarHeart,

    t: "Event Volunteer",

    c: "Flexible",

    d: "Help run outreach and activities.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        // image="/images/children-club-summer-camp/image2.jpeg"
        title={
          <>
            Create <span className="italic text-accent">meaningful</span>{" "}
            change.
          </>
        }
        intro="
Our initiatives grow through the support of volunteers. Join us to empower children, women and communities.
"
      />

      {/* ROLES */}
      <section className="px-6 py-10 lg:px-8">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-8
            md:grid-cols-2
          "
        >
          {roles.map((role, index) => {
            const Icon = role.icon;

            return (
              <Reveal key={role.t} delay={index * 0.06}>
                <div
                  className="
                    rounded-[2rem]
                    border
                    border-brand/5
                    bg-white
                    p-8
                    transition
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-sage/15
                    "
                  >
                    <Icon
                      size={28}
                      className="
                        text-accent
                      "
                    />
                  </div>

                  {/* CATEGORY */}
                  <p
                    className="
                      mb-3
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-accent
                    "
                  >
                    {role.c}
                  </p>

                  {/* TITLE */}
                  <h3
                    className="
                      mb-3
                      font-serif
                      text-2xl
                      text-brand
                    "
                  >
                    {role.t}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-brand/60">{role.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-5xl">
          <div
            className="
              grid
              grid-cols-3
              gap-6
            "
          >
            {[
              ["2018", "Founded"],

              ["100+", "Lives Impacted"],

              ["12+", "Initiatives"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="
                  rounded-3xl
                  bg-sage/10
                  py-8
                  text-center
                "
              >
                <div
                  className="
                    font-serif
                    text-4xl
                    text-brand
                  "
                >
                  {value}
                </div>

                <div
                  className="
                    text-brand/60
                  "
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section
        className="
          bg-sage/10
          px-6
          py-20
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            max-w-2xl
            rounded-sm
            border
            border-brand/5
            bg-white
            p-2
            text-center
            md:p-12
          "
        >
          <h2
            className="
              mb-3
              font-serif
              text-3xl
              text-brand
              md:text-4xl
            "
          >
            Become a volunteer
          </h2>

          <p
            className="
              mx-auto
              mb-8
              max-w-lg
              text-brand/60
            "
          >
            Join our initiatives and help create meaningful impact in the
            community. Fill out the volunteer application form and our team will
            connect with you.
          </p>

          {/* FORM */}
          <div
            className="
              overflow-hidden
              rounded-sm
              border
              border-brand/5
            "
          >
            <iframe
              title="Volunteer Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSddwkTETLBWV92qb2gb7ooZS-WBs-exAKEP-7ibYExEyH-SpA/viewform"
              width="100%"
              height="720"
              loading="lazy"
              className="bg-white"
            />
          </div>

          <p
            className="
              mt-5
              text-xs
              text-brand/45
            "
          >
            Responses are collected securely through Google Forms.
          </p>
        </div>
      </section>
    </>
  );
}
