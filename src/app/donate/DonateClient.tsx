"use client";

import { useSearchParams } from "next/navigation";

import { CheckCircle2, Copy, Landmark, QrCode } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";

import { Reveal } from "@/components/Reveal";

const BANK_DETAILS = [
  { label: "Account Name", value: "ANAND CHARITABLE TRUST" },
  { label: "Bank Name", value: "UCO Bank of India" },
  { label: "Account Number", value: "33120110067260" },
  { label: "IFSC Code", value: "UCBA0003312" },
];

function CopyableRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-4
        border-b
        border-brand/10
        py-3
        last:border-none
      "
    >
      <div>
        <p className="text-xs uppercase tracking-wide text-brand/50">{label}</p>
        <p className="font-medium text-brand">{value}</p>
      </div>
      <button
        type="button"
        onClick={() => navigator.clipboard.writeText(value)}
        className="
          rounded-full
          border
          border-brand/10
          p-2
          text-brand/60
          transition
          hover:bg-sage/10
          hover:text-brand
        "
        aria-label={`Copy ${label}`}
      >
        <Copy size={16} />
      </button>
    </div>
  );
}

function DonateDetails() {
  return (
    <div
      className="
        grid
        gap-8
        rounded-[2rem]
        border
        border-brand/5
        bg-white
        p-8
        md:grid-cols-2
        md:p-10
      "
    >
      {/* QR CODE */}
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-4
          rounded-[1.5rem]
          border
          border-dashed
          border-brand/15
          bg-sage/5
          p-6
          text-center
        "
      >
        <div
          className="
    flex
    h-56
    w-56
    items-center
    justify-center
    overflow-hidden
    rounded-2xl
    border
    border-brand/10
    bg-white
  "
        >
          <img
            src="/images/qrcode.png"
            alt="Scan to donate via UPI / bank transfer to Anand Charitable Trust"
            className="h-full w-full object-contain p-2"
          />
        </div>

        <div className="flex items-center gap-2 text-brand/60">
          <QrCode size={18} />
          <p className="text-sm">Scan with any UPI app to donate directly</p>
        </div>
      </div>

      {/* BANK DETAILS */}
      <div>
        <div className="mb-4 flex items-center gap-2 text-brand">
          <Landmark size={20} />
          <h3 className="font-serif text-xl">Bank Transfer Details</h3>
        </div>

        <div className="rounded-2xl border border-brand/5 px-4">
          {BANK_DETAILS.map((row) => (
            <CopyableRow key={row.label} label={row.label} value={row.value} />
          ))}
        </div>

        {/* <p className="mt-4 text-xs leading-relaxed text-brand/50">
          For 80G tax exemption receipts, please email your transaction
          reference and PAN details to{" "}
          <a
            href="mailto:donate@anandcharitabletrust.org"
            className="underline underline-offset-2 hover:text-brand"
          >
            donate@anandcharitabletrust.org
          </a>
          .
        </p> */}
      </div>
    </div>
  );
}

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

      <section className="px-6 py-1 lg:px-8">
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
            <DonateDetails />
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
