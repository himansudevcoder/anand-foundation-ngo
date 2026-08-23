import Link from "next/link";

export default function DonationSuccessPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-24">
      <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
        <div className="w-full rounded-[2rem] border border-brand/5 bg-white p-8 text-center shadow-sm md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8 text-accent"
              aria-hidden="true"
            >
              <path
                d="M5 12.5 9.5 17 19 7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand/50">
            Donation Successful
          </p>

          <h1 className="font-serif text-4xl leading-tight text-brand md:text-5xl">
            Thank you for your generosity.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand/60 md:text-lg">
            Your contribution helps Anand Charitable Trust continue supporting
            children, women, and communities through meaningful projects and
            services.
          </p>

          <div className="mt-10 rounded-2xl bg-surface p-6">
            <p className="text-sm leading-relaxed text-brand/60">
              Your payment has been completed through Razorpay. Please keep your
              payment confirmation or receipt for your records.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/donate"
              className="rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand"
            >
              Donate Again
            </Link>

            <Link
              href="/"
              className="rounded-full border border-brand/10 px-7 py-4 text-sm font-semibold text-brand transition-colors hover:border-brand/20 hover:bg-surface"
            >
              Back to Home
            </Link>
          </div>

          <p className="mt-8 text-xs text-brand/40">Anand Charitable Trust</p>
        </div>
      </div>
    </main>
  );
}
