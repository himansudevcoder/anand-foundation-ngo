"use client";

import { Mail, Phone, ExternalLink, ShieldCheck } from "lucide-react";

const NGO_NAME = "Anand Charitable Trust";
const CONTACT_EMAIL = "support@anandcharitabletrust.org"; // update with real email
const CONTACT_PHONE = "+91 98611 94145";
const RAZORPAY_PAGE_URL = "https://rzp.io/rzp/YR208Wh";

export function DonatePage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-0 md:grid-cols-2 md:gap-16 md:py-0">
      {/* LEFT: NGO info */}
      <div className="flex flex-col">
        <span className="mb-8 font-serif text-2xl font-semibold text-brand">
          {NGO_NAME}
        </span>

        <h1 className="mb-3 font-serif text-4xl text-brand md:text-5xl">
          Donate
        </h1>
        <div className="mb-8 h-1 w-14 rounded-full bg-accent" />

        <p className="mb-10 max-w-md text-brand/70">
          Your contribution directly supports our ongoing projects and programs.
          Every rupee donated goes toward the communities and causes we serve.
          Thank you for standing with us.
        </p>

        <div className="mb-10 flex items-center gap-2 text-sm text-brand/60">
          <ShieldCheck size={18} className="text-accent" />
          Payments are securely processed by Razorpay
        </div>

        <div className="mt-auto">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand/50">
            Contact Us
          </p>
          <div className="mb-2 flex items-center gap-3 text-brand/80">
            <Mail size={18} className="text-brand/40" />
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent">
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="mb-8 flex items-center gap-3 text-brand/80">
            <Phone size={18} className="text-brand/40" />
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
              className="hover:text-accent"
            >
              {CONTACT_PHONE}
            </a>
          </div>

          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand/50">
            Terms &amp; Privacy
          </p>
          <p className="max-w-md text-xs leading-relaxed text-brand/50">
            By donating, you agree to share the information entered on the
            payment page with {NGO_NAME} and Razorpay, in accordance with
            applicable laws. Your details are used only to acknowledge and
            record your donation.
          </p>
        </div>
      </div>

      {/* RIGHT: Donate card */}
      <div className="flex items-center">
        <div className="w-full rounded-[2rem] border border-brand/5 bg-white p-8 text-center shadow-sm md:p-12">
          <h2 className="mb-3 font-serif text-2xl text-brand md:text-3xl">
            Fueled by your generosity.
          </h2>

          <p className="mx-auto mb-10 max-w-sm text-sm text-brand/60">
            100% of public donations go directly to project costs. Choose your
            amount and payment method on the next secure screen.
          </p>

          <a
            href={RAZORPAY_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
        flex w-full items-center justify-center gap-3
        rounded-full bg-accent py-5 text-lg font-semibold text-white
        transition-colors hover:bg-brand
      "
          >
            Donate Now
            <ExternalLink size={18} />
          </a>

          <p className="mt-4 text-center text-xs text-brand/50">
            Pay via UPI, card, netbanking or wallet — powered by Razorpay.
          </p>
        </div>
      </div>
    </div>
  );
}
