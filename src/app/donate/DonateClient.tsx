"use client";

import { useSearchParams } from "next/navigation";

import { CheckCircle2 } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";

import { DonateForm } from "@/components/DonateForm";

import { Reveal } from "@/components/Reveal";

export default function DonateClient() {
  const searchParams = useSearchParams();

  const status = searchParams.get("status");

  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title={
          <>
            Your support creates{" "}
            <span className="italic text-accent">opportunity</span>.
          </>
        }
        intro="
Every contribution helps support children, women and communities through education, training and social initiatives.
"
      />

      {/* SUCCESS */}

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {status === "success" && (
            <Reveal>
              <div
                className="
                  mb-10
                  flex
                  gap-4
                  rounded-[2rem]
                  border
                  border-sage/30
                  bg-sage/15
                  p-6
                "
              >
                <CheckCircle2
                  className="
                    mt-1
                    shrink-0
                    text-sage
                  "
                />

                <div>
                  <p
                    className="
                      font-medium
                      text-brand
                    "
                  >
                    Thank you for supporting Anand Charitable Trust.
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-brand/60
                    "
                  >
                    Your contribution will help create meaningful impact.
                  </p>
                </div>
              </div>
            </Reveal>
          )}

          <Reveal>
            <DonateForm />
          </Reveal>
        </div>
      </section>

      {/* DONATION IMPACT */}

      <section
        className="
          bg-sage/10
          px-6
          py-20
          lg:px-8
        "
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2
              className="
                mb-14
                text-center
                font-serif
                text-3xl
                text-brand
                md:text-5xl
              "
            >
              How your donation helps
            </h2>
          </Reveal>

          <div
            className="
              grid
              gap-10
              text-center
              md:grid-cols-3
            "
          >
            {[
              {
                v: "₹500",

                l: "Supports learning materials and community activities for children.",
              },

              {
                v: "₹1,500",

                l: "Helps conduct training and skill development initiatives.",
              },

              {
                v: "₹5,000",

                l: "Supports larger community programmes and relief initiatives.",
              },
            ].map((item) => (
              <Reveal key={item.v}>
                <div
                  className="
                    rounded-[2rem]
                    border
                    border-brand/5
                    bg-white
                    p-8
                  "
                >
                  <p
                    className="
                      mb-4
                      font-serif
                      text-5xl
                      text-brand
                    "
                  >
                    {item.v}
                  </p>

                  <p
                    className="
                      leading-relaxed
                      text-brand/70
                    "
                  >
                    {item.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
