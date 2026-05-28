"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "How can I support Anand Charitable Trust?",
    a: "You can support our initiatives by donating, volunteering, collaborating or helping us spread awareness in your community.",
  },

  {
    q: "Where does my donation go?",
    a: "Donations help support education programmes, community activities, training initiatives, relief support and social development projects.",
  },

  {
    q: "Can I volunteer with your organisation?",
    a: "Yes. We welcome volunteers who want to support children, women, youth and community initiatives.",
  },

  {
    q: "Do you work only in Odisha?",
    a: "Our organisation is based in Bhubaneswar, Odisha and currently focuses on serving local communities through social initiatives and programmes.",
  },

  {
    q: "What programmes does Anand Charitable Trust run?",
    a: "Our activities include Children Club & Summer Camp, Computer Training, Women Meetings, Leadership Development, Dental Camps, Food Support and community programmes.",
  },

  {
    q: "How can organizations collaborate with you?",
    a: "Schools, institutions, local groups and organizations can connect with us through our contact page or official email.",
  },
];

export function FaqClient() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <ul className="divide-y divide-brand/10 border-y border-brand/10">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <li key={faq.q}>
                <Reveal delay={index * 0.04}>
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-serif text-lg text-brand md:text-2xl">
                      {faq.q}
                    </span>

                    <span className="mt-1 shrink-0 text-accent">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 leading-relaxed text-brand/70">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
