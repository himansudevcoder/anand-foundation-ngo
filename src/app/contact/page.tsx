import type { Metadata } from "next";

// import { useState } from "react";

import { Mail, Phone, MapPin } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";

import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — Anand Charitable Trust",

  description:
    "Contact Anand Charitable Trust for programmes, volunteering, partnerships and community initiatives.",

  openGraph: {
    title: "Contact — Anand Charitable Trust",

    description: "Connect with Anand Charitable Trust.",

    url: "/contact",
  },

  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  // const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let’s create <span className="italic text-accent">impact</span>{" "}
            together.
          </>
        }
        intro="
We welcome volunteers, supporters, organisations and community members to connect with us.
"
      />

      <section className="px-6 py-8 lg:px-8">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-16
            lg:grid-cols-2
          "
        >
          {/* LEFT */}
          <Reveal>
            <div className="space-y-10">
              {/* ADDRESS */}
              <div>
                <p
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-accent
                  "
                >
                  <MapPin size={14} />
                  Office Address
                </p>

                <p
                  className="
                    font-serif
                    text-2xl
                    leading-snug
                    text-brand
                  "
                >
                  ASHIRBAD PALACE
                  <br />
                  H N-10, 2nd Floor
                  <br />
                  Kuha, Sundarpada
                  <br />
                  Opposite K K Restaurant
                  <br />
                  Bhubaneswar
                  <br />
                  Odisha – 751002
                </p>
              </div>

              {/* PHONE */}
              <div>
                <p
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-accent
                  "
                >
                  <Phone size={14} />
                  Contact
                </p>

                <a
                  href="tel:+917903195082"
                  className="
                    text-xl
                    text-brand
                    hover:text-accent
                  "
                >
                  +91 7903195082
                </a>
              </div>

              {/* EMAIL */}
              <div>
                <p
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-accent
                  "
                >
                  <Mail size={14} />
                  Email
                </p>

                <div className="space-y-2">
                  <a
                    href="mailto:anandcharitabletrust@gmail.com"
                    className="
                      block
                      text-xl
                      text-brand
                      hover:text-accent
                    "
                  >
                    anandcharitabletrust@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* MAP */}
          <Reveal delay={0.1}>
            <div
              className="
                h-[300px]
                max-w-full
                overflow-hidden
                rounded-sm
                border
                border-brand/10
                shadow-sm
                sm:h-[360px]
                md:h-[450px]
                lg:h-[560px]
              "
            >
              <iframe
                title="ANAND Charitable Trust"
                src="
https://www.google.com/maps?q=ANAND+Charitable+Trust+Bhubaneswar&z=17&output=embed
"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="
                  h-full
                  w-full
                  border-0
                  grayscale-[0.15]
                  transition-all
                  duration-700
                  hover:grayscale-0
                "
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT FORM */}

      {/*
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
            rounded-[2rem]
            border
            border-brand/5
            bg-white
            p-8
            md:p-12
          "
        >
          <h2
            className="
              mb-2
              font-serif
              text-3xl
              text-brand
              md:text-4xl
            "
          >
            Send us a message
          </h2>

          <p className="mb-8 text-brand/60">
            We would love to hear from you.
          </p>

          {submitted ? (
            <div
              className="
                rounded-2xl
                bg-sage/15
                p-5
              "
            >
              Message received.
              Thank you for reaching out.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();

                setSubmitted(true);
              }}
              className="grid gap-5"
            >
              <input
                required
                placeholder="Full Name"
                className="
                  border-b
                  border-brand/10
                  py-3
                  outline-none
                "
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                className="
                  border-b
                  border-brand/10
                  py-3
                  outline-none
                "
              />

              <textarea
                required
                rows={5}
                placeholder="Message"
                className="
                  resize-none
                  border-b
                  border-brand/10
                  py-3
                  outline-none
                "
              />

              <button
                className="
                  mt-4
                  rounded-full
                  bg-accent
                  py-4
                  font-medium
                  text-white
                  transition
                  hover:bg-brand
                "
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
      */}
    </>
  );
}
