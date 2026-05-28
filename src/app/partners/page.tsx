import type { Metadata } from "next";

import {
  Handshake,
  School,
  HeartHandshake,
  Users,
  GraduationCap,
  Heart,
  Building2,
  Briefcase,
  Megaphone,
} from "lucide-react";

import { PageHeader } from "@/components/PageHeader";

import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Partners — Anand Charitable Trust",

  description:
    "Communities, supporters and organizations helping Anand Charitable Trust create meaningful impact.",

  openGraph: {
    title: "Partners — Anand Charitable Trust",

    description: "Building stronger communities together.",

    url: "/partners",
  },

  alternates: {
    canonical: "/partners",
  },
};

const groups = [
  {
    title: "Community Partners",

    icon: Handshake,

    desc: "Local groups creating positive change.",

    partners: [
      "Local Communities",
      "Community Volunteers",
      "Families",
      "Social Workers",
    ],
  },

  {
    title: "Education & Training",

    icon: School,

    desc: "People helping learning and growth.",

    partners: ["Schools", "Training Centres", "Mentors", "Youth Groups"],
  },

  {
    title: "Supporters",

    icon: HeartHandshake,

    desc: "Partners supporting our initiatives.",

    partners: [
      "Donors",
      "Local Businesses",
      "Media Support",
      "Development Partners",
    ],
  },
];

const iconMap: Record<string, any> = {
  "Local Communities": Users,

  "Community Volunteers": Handshake,

  Families: Heart,

  "Social Workers": HeartHandshake,

  Schools: GraduationCap,

  "Training Centres": School,

  Mentors: Users,

  "Youth Groups": Users,

  Donors: Heart,

  "Local Businesses": Briefcase,

  "Media Support": Megaphone,

  "Development Partners": Building2,
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title={
          <>
            Stronger <span className="italic text-accent">together</span>.
          </>
        }
        intro="
Communities, supporters and organizations help us expand opportunities and create meaningful impact.
"
      />

      {/* STATS */}
      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              grid
              grid-cols-3
              gap-6
            "
          >
            {[
              ["2018", "Founded"],
              ["12+", "Programmes"],
              ["100+", "People Supported"],
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
                    mt-2
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

      {/* PARTNERS */}
      <section className="px-6 py-20 lg:px-8">
        <div
          className="
            mx-auto
            max-w-7xl
            space-y-24
          "
        >
          {groups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delay={groupIndex * 0.08}>
                <div>
                  {/* HEADER */}
                  <div className="mb-10">
                    <div
                      className="
                          mb-5
                          inline-flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-full
                          bg-accent/10
                        "
                    >
                      <Icon
                        size={28}
                        className="
                            text-accent
                          "
                      />
                    </div>

                    <h2
                      className="
                          mb-3
                          font-serif
                          text-4xl
                          text-brand
                        "
                    >
                      {group.title}
                    </h2>

                    <p
                      className="
                          text-brand/60
                        "
                    >
                      {group.desc}
                    </p>
                  </div>

                  {/* CARDS */}
                  <div
                    className="
                        grid
                        grid-cols-2
                        gap-6
                        md:grid-cols-4
                      "
                  >
                    {group.partners.map((partner) => {
                      const PartnerIcon = iconMap[partner] || Users;

                      return (
                        <div
                          key={partner}
                          className="
                                rounded-3xl
                                border
                                border-brand/5
                                bg-white
                                p-8
                                text-center
                                transition
                                hover:-translate-y-1
                                hover:shadow-xl
                              "
                        >
                          {/* ICON */}
                          <div
                            className="
                                  mx-auto
                                  mb-5
                                  flex
                                  h-20
                                  w-20
                                  items-center
                                  justify-center
                                  rounded-full
                                  bg-sage/15
                                  text-accent
                                "
                          >
                            <PartnerIcon size={34} strokeWidth={1.7} />
                          </div>

                          {/* TEXT */}
                          <p
                            className="
                                  font-medium
                                  text-brand
                                "
                          >
                            {partner}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section
        className="
          bg-brand
          px-6
          py-24
          text-center
          text-surface
          lg:px-8
        "
      >
        <Reveal>
          <h2
            className="
              mb-6
              font-serif
              text-4xl
              md:text-6xl
            "
          >
            Support change.
            <br />
            Build opportunities.
          </h2>

          <p
            className="
              mx-auto
              mb-10
              max-w-2xl
              text-surface/70
            "
          >
            Join us in empowering children, supporting communities and creating
            long-term social impact.
          </p>

          <a
            href="
mailto:anandcharitabletrust@gmail.com
"
            className="
              inline-flex
              rounded-full
              bg-accent
              px-8
              py-4
              text-white
              transition
              hover:bg-white
              hover:text-brand
            "
          >
            Connect With Us
          </a>
        </Reveal>
      </section>
    </>
  );
}
