"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

const PRESETS = [500, 1500, 5000, 15000] as const;

declare global {
  interface Window {
    Razorpay?: new (options: any) => {
      open: () => void;
    };
  }
}

const RAZORPAY_KEY =
  process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_1DP5mmOlF5G5ag";

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      return resolve(false);
    }

    if (window.Razorpay) {
      return resolve(true);
    }

    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => resolve(true);

    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
}

export function DonateForm() {
  const [amount, setAmount] = useState<number>(1500);

  const [custom, setCustom] = useState("");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);

    const finalAmount = custom ? Number(custom) : amount;

    if (!finalAmount || finalAmount < 50) {
      return setError("Minimum donation is ₹50.");
    }

    if (!name.trim()) {
      return setError("Please add your name.");
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return setError("Please enter a valid email.");
    }

    setLoading(true);

    const loaded = await loadRazorpay();

    if (!loaded || !window.Razorpay) {
      setLoading(false);

      return setError("Could not load Razorpay. Please retry.");
    }

    const razorpay = new window.Razorpay({
      key: RAZORPAY_KEY,

      amount: finalAmount * 100,

      currency: "INR",

      name: "Anand Charitable Trust",

      description: "Donation in support of community welfare initiatives",

      image: "/favicon.ico",

      prefill: {
        name,
        email,
        contact: phone,
      },

      notes: {
        purpose: "general-donation",
      },

      theme: {
        color: "#E86D48",
      },

      handler: (response: any) => {
        console.log("Razorpay payment", response);

        window.location.href = "/donate?status=success";
      },

      modal: {
        ondismiss: () => {
          setLoading(false);
        },
      },
    });

    razorpay.open();

    setLoading(false);
  };

  return (
    <form
      onSubmit={submit}
      className="
        rounded-[2rem]
        border
        border-brand/5
        bg-white
        p-8
        shadow-sm
        md:p-12
      "
    >
      <h2
        className="
          mb-3
          text-center
          font-serif
          text-3xl
          text-brand
          md:text-4xl
        "
      >
        Fueled by your generosity.
      </h2>

      <p
        className="
          mx-auto
          mb-10
          max-w-md
          text-center
          text-brand/60
        "
      >
        100% of public donations go directly to project costs. Our operational
        overhead is covered by private grants.
      </p>

      {/* PRESET AMOUNTS */}
      <fieldset className="mb-6">
        <legend className="sr-only">Donation amount in INR</legend>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {PRESETS.map((preset) => {
            const active = !custom && amount === preset;

            return (
              <button
                type="button"
                key={preset}
                onClick={() => {
                  setAmount(preset);

                  setCustom("");
                }}
                className={`
                  rounded-xl
                  border
                  py-4
                  text-lg
                  font-medium
                  transition-all
                  ${
                    active
                      ? "border-accent bg-accent/5 text-brand"
                      : "border-brand/10 text-brand/70 hover:border-accent hover:bg-accent/5"
                  }
                `}
              >
                ₹{preset.toLocaleString("en-IN")}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* CUSTOM AMOUNT */}
      <div className="mb-6">
        <label
          htmlFor="custom"
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-brand/50
          "
        >
          Other amount (INR)
        </label>

        <input
          id="custom"
          type="number"
          min={50}
          inputMode="numeric"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder="Enter custom amount"
          className="
            mt-1
            w-full
            border-b
            border-brand/10
            bg-surface
            py-3
            outline-none
            transition-colors
            focus:border-accent
          "
        />
      </div>

      {/* USER INFO */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-brand/50
            "
          >
            Full name
          </label>

          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={120}
            className="
              mt-1
              w-full
              border-b
              border-brand/10
              bg-transparent
              py-2
              outline-none
              focus:border-accent
            "
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-brand/50
            "
          >
            Email
          </label>

          <input
            id="email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={200}
            className="
              mt-1
              w-full
              border-b
              border-brand/10
              bg-transparent
              py-2
              outline-none
              focus:border-accent
            "
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="phone"
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-brand/50
            "
          >
            Phone (optional)
          </label>

          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={20}
            className="
              mt-1
              w-full
              border-b
              border-brand/10
              bg-transparent
              py-2
              outline-none
              focus:border-accent
            "
          />
        </div>
      </div>

      {/* ERROR */}
      {error && (
        <p role="alert" className="mb-4 text-sm font-medium text-accent">
          {error}
        </p>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          bg-accent
          py-5
          text-lg
          font-semibold
          text-white
          transition-colors
          hover:bg-brand
          disabled:opacity-60
        "
      >
        {loading ? <Loader2 className="animate-spin" size={18} /> : null}
        Complete Donation via Razorpay
        <span
          className="
            rounded
            bg-white/20
            px-2
            py-0.5
            text-[10px]
            uppercase
            tracking-widest
          "
        >
          Secure
        </span>
      </button>
    </form>
  );
}
