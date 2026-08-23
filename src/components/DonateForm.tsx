// "use client";

// import { useState } from "react";
// import { Loader2 } from "lucide-react";

// const PRESETS = [500, 1500, 5000, 15000] as const;

// declare global {
//   interface Window {
//     Razorpay?: new (options: any) => {
//       open: () => void;
//     };
//   }
// }

// const RAZORPAY_KEY =
//   process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_1DP5mmOlF5G5ag";

// function loadRazorpay(): Promise<boolean> {
//   return new Promise((resolve) => {
//     if (typeof window === "undefined") {
//       return resolve(false);
//     }

//     if (window.Razorpay) {
//       return resolve(true);
//     }

//     const script = document.createElement("script");

//     script.src = "https://checkout.razorpay.com/v1/checkout.js";

//     script.onload = () => resolve(true);

//     script.onerror = () => resolve(false);

//     document.body.appendChild(script);
//   });
// }

// export function DonateForm() {
//   const [amount, setAmount] = useState<number>(1500);

//   const [custom, setCustom] = useState("");

//   const [name, setName] = useState("");

//   const [email, setEmail] = useState("");

//   const [phone, setPhone] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [error, setError] = useState<string | null>(null);

//   const submit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setError(null);

//     const finalAmount = custom ? Number(custom) : amount;

//     if (!finalAmount || finalAmount < 50) {
//       return setError("Minimum donation is ₹50.");
//     }

//     if (!name.trim()) {
//       return setError("Please add your name.");
//     }

//     if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
//       return setError("Please enter a valid email.");
//     }

//     setLoading(true);

//     const loaded = await loadRazorpay();

//     if (!loaded || !window.Razorpay) {
//       setLoading(false);

//       return setError("Could not load Razorpay. Please retry.");
//     }

//     const razorpay = new window.Razorpay({
//       key: RAZORPAY_KEY,

//       amount: finalAmount * 100,

//       currency: "INR",

//       name: "Anand Charitable Trust",

//       description: "Donation in support of community welfare initiatives",

//       image: "/favicon.ico",

//       prefill: {
//         name,
//         email,
//         contact: phone,
//       },

//       notes: {
//         purpose: "general-donation",
//       },

//       theme: {
//         color: "#E86D48",
//       },

//       handler: (response: any) => {
//         console.log("Razorpay payment", response);

//         window.location.href = "/donate?status=success";
//       },

//       modal: {
//         ondismiss: () => {
//           setLoading(false);
//         },
//       },
//     });

//     razorpay.open();

//     setLoading(false);
//   };

//   return (
//     <form
//       onSubmit={submit}
//       className="
//         rounded-[2rem]
//         border
//         border-brand/5
//         bg-white
//         p-8
//         shadow-sm
//         md:p-12
//       "
//     >
//       <h2
//         className="
//           mb-3
//           text-center
//           font-serif
//           text-3xl
//           text-brand
//           md:text-4xl
//         "
//       >
//         Fueled by your generosity.
//       </h2>

//       <p
//         className="
//           mx-auto
//           mb-10
//           max-w-md
//           text-center
//           text-brand/60
//         "
//       >
//         100% of public donations go directly to project costs. Our operational
//         overhead is covered by private grants.
//       </p>

//       {/* PRESET AMOUNTS */}
//       <fieldset className="mb-6">
//         <legend className="sr-only">Donation amount in INR</legend>

//         <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
//           {PRESETS.map((preset) => {
//             const active = !custom && amount === preset;

//             return (
//               <button
//                 type="button"
//                 key={preset}
//                 onClick={() => {
//                   setAmount(preset);

//                   setCustom("");
//                 }}
//                 className={`
//                   rounded-xl
//                   border
//                   py-4
//                   text-lg
//                   font-medium
//                   transition-all
//                   ${
//                     active
//                       ? "border-accent bg-accent/5 text-brand"
//                       : "border-brand/10 text-brand/70 hover:border-accent hover:bg-accent/5"
//                   }
//                 `}
//               >
//                 ₹{preset.toLocaleString("en-IN")}
//               </button>
//             );
//           })}
//         </div>
//       </fieldset>

//       {/* CUSTOM AMOUNT */}
//       <div className="mb-6">
//         <label
//           htmlFor="custom"
//           className="
//             text-[10px]
//             font-semibold
//             uppercase
//             tracking-[0.18em]
//             text-brand/50
//           "
//         >
//           Other amount (INR)
//         </label>

//         <input
//           id="custom"
//           type="number"
//           min={50}
//           inputMode="numeric"
//           value={custom}
//           onChange={(e) => setCustom(e.target.value)}
//           placeholder="Enter custom amount"
//           className="
//             mt-1
//             w-full
//             border-b
//             border-brand/10
//             bg-surface
//             py-3
//             outline-none
//             transition-colors
//             focus:border-accent
//           "
//         />
//       </div>

//       {/* USER INFO */}
//       <div className="mb-8 grid gap-6 md:grid-cols-2">
//         <div>
//           <label
//             htmlFor="name"
//             className="
//               text-[10px]
//               font-semibold
//               uppercase
//               tracking-[0.18em]
//               text-brand/50
//             "
//           >
//             Full name
//           </label>

//           <input
//             id="name"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             maxLength={120}
//             className="
//               mt-1
//               w-full
//               border-b
//               border-brand/10
//               bg-transparent
//               py-2
//               outline-none
//               focus:border-accent
//             "
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="email"
//             className="
//               text-[10px]
//               font-semibold
//               uppercase
//               tracking-[0.18em]
//               text-brand/50
//             "
//           >
//             Email
//           </label>

//           <input
//             id="email"
//             required
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             maxLength={200}
//             className="
//               mt-1
//               w-full
//               border-b
//               border-brand/10
//               bg-transparent
//               py-2
//               outline-none
//               focus:border-accent
//             "
//           />
//         </div>

//         <div className="md:col-span-2">
//           <label
//             htmlFor="phone"
//             className="
//               text-[10px]
//               font-semibold
//               uppercase
//               tracking-[0.18em]
//               text-brand/50
//             "
//           >
//             Phone (optional)
//           </label>

//           <input
//             id="phone"
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             maxLength={20}
//             className="
//               mt-1
//               w-full
//               border-b
//               border-brand/10
//               bg-transparent
//               py-2
//               outline-none
//               focus:border-accent
//             "
//           />
//         </div>
//       </div>

//       {/* ERROR */}
//       {error && (
//         <p role="alert" className="mb-4 text-sm font-medium text-accent">
//           {error}
//         </p>
//       )}

//       {/* SUBMIT */}
//       <button
//         type="submit"
//         disabled={loading}
//         className="
//           flex
//           w-full
//           items-center
//           justify-center
//           gap-3
//           rounded-full
//           bg-accent
//           py-5
//           text-lg
//           font-semibold
//           text-white
//           transition-colors
//           hover:bg-brand
//           disabled:opacity-60
//         "
//       >
//         {loading ? <Loader2 className="animate-spin" size={18} /> : null}
//         Complete Donation via Razorpay
//         <span
//           className="
//             rounded
//             bg-white/20
//             px-2
//             py-0.5
//             text-[10px]
//             uppercase
//             tracking-widest
//           "
//         >
//           Secure
//         </span>
//       </button>
//     </form>
//   );
// }

"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { Loader2, X } from "lucide-react";
// import { QRCodeSVG } from "qrcode.react";
const QR_CODE_IMAGE = "/images/qrcode.png";

const PRESETS = [500, 1500, 5000, 15000] as const;

// IMPORTANT: Replace this with the NGO's actual UPI ID
const NGO_UPI_ID = "9934319226@ucobank";
const NGO_NAME = "ANAND CHARITABLE TRUST";

// NGO WhatsApp number WITH country code, without +
// Example: 919438222888
const WHATSAPP_NUMBER = "919861194145";

export function DonateForm() {
  const [amount, setAmount] = useState<number>(1500);
  const [custom, setCustom] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [paymentStarted, setPaymentStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // NEW: controls the "confirm your QR payment" popup
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const waitingForUPIReturn = useRef(false);

  const finalAmount = custom ? Number(custom) : amount;

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (
        document.visibilityState === "visible" &&
        waitingForUPIReturn.current
      ) {
        waitingForUPIReturn.current = false;
        setPaymentStarted(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Shared UPI URL builder — used by both the button flow and the QR code
  const buildUpiUrl = (amountToUse: number) =>
    `upi://pay` +
    `?pa=${encodeURIComponent(NGO_UPI_ID)}` +
    `&pn=${encodeURIComponent(NGO_NAME)}` +
    `&am=${encodeURIComponent(amountToUse)}` +
    `&cu=INR` +
    `&tr=${encodeURIComponent(crypto.randomUUID())}` +
    `&tn=${encodeURIComponent("Donation to Anand Charitable Trust")}`;

  // NEW: QR code value — regenerates only when the amount changes,
  // not on every render (otherwise the tr changes constantly)
  const qrUpiUrl = useMemo(() => {
    if (!finalAmount || finalAmount <= 1) return "";
    return buildUpiUrl(finalAmount);
  }, [finalAmount]);

  const startUPIPayment = () => {
    setError(null);

    if (!finalAmount || finalAmount < 5) {
      setError("Minimum donation is ₹50.");
      return;
    }

    const upiUrl = buildUpiUrl(finalAmount);

    waitingForUPIReturn.current = true;
    window.location.href = upiUrl;
  };

  const submitDonationDetails = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    setLoading(true);

    const msg = [
      "Donation Details",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      email.trim() ? `Email: ${email.trim()}` : null,
      `Amount: ₹${finalAmount.toLocaleString("en-IN")}`,
      "",
      "I have made the donation via UPI.",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  // NEW: submit handler for the QR popup form
  const submitQrDonationDetails = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    setLoading(true);

    const msg = [
      "Donation Details (Paid via QR)",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      email.trim() ? `Email: ${email.trim()}` : null,
      `Amount donated: ₹${finalAmount.toLocaleString("en-IN")}`,
      message.trim() ? `Message: ${message.trim()}` : null,
      "",
      "I have scanned the QR code and completed my UPI payment.",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div
      className="
        rounded-[2rem]
        border
        border-brand/5
        bg-white
        p-8
        shadow-sm
        md:p-12
        relative
      "
    >
      {!paymentStarted ? (
        <>
          <h2 className="mb-3 text-center font-serif text-3xl text-brand md:text-4xl">
            Fueled by your generosity.
          </h2>

          <p className="mx-auto mb-10 max-w-md text-center text-brand/60">
            100% of public donations go directly to project costs.
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
                      rounded-xl border py-4 text-lg font-medium transition-all
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
              className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand/50"
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
              className="mt-1 w-full border-b border-brand/10 bg-surface py-3 outline-none focus:border-accent"
            />
          </div>

          {error && (
            <p role="alert" className="mb-4 text-sm font-medium text-accent">
              {error}
            </p>
          )}

          {/* UPI PAYMENT (app intent) */}
          <button
            type="button"
            onClick={startUPIPayment}
            className="
              flex w-full items-center justify-center gap-3
              rounded-full bg-accent py-5 text-lg font-semibold text-white
              transition-colors hover:bg-brand
            "
          >
            Pay ₹{finalAmount.toLocaleString("en-IN")} via UPI
          </button>

          <p className="mt-4 text-center text-xs text-brand/50">
            Pay securely using PhonePe, Google Pay or another UPI app.
          </p>

          {/* NEW: OR divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-brand/10" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand/40">
              Or
            </span>
            <div className="h-px flex-1 bg-brand/10" />
          </div>

          {/* NEW: QR CODE PAYMENT */}
          <div className="flex flex-col items-center">
            <p className="mb-4 text-center text-sm text-brand/60">
              Scan with any UPI app to pay ₹
              {finalAmount.toLocaleString("en-IN")}
            </p>

            <div className="rounded-2xl border border-brand/10 bg-white p-4">
              <img
                src={QR_CODE_IMAGE}
                alt={`Scan to donate to ${NGO_NAME} via UPI`}
                width={220}
                height={220}
                className="h-[220px] w-[220px] object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() => setQrModalOpen(true)}
              className="
                mt-6 w-full rounded-full border border-accent
                py-4 text-base font-semibold text-accent
                transition-colors hover:bg-accent hover:text-white
              "
            >
              I've paid via QR — send my details
            </button>
          </div>
        </>
      ) : (
        <>
          {/* DONOR DETAILS (existing flow for the direct UPI button) */}
          <h2 className="mb-3 text-center font-serif text-3xl text-brand">
            Donation Details
          </h2>

          <p className="mb-8 text-center text-sm text-brand/60">
            After making your UPI payment, please enter your details below so we
            can record your donation.
          </p>

          <form onSubmit={submitDonationDetails}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand/50"
              >
                Full name *
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={120}
                className="mt-1 w-full border-b border-brand/10 bg-transparent py-2 outline-none focus:border-accent"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand/50"
              >
                Phone number *
              </label>
              <input
                id="phone"
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={20}
                className="mt-1 w-full border-b border-brand/10 bg-transparent py-2 outline-none focus:border-accent"
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="email"
                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand/50"
              >
                Email (optional)
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={200}
                className="mt-1 w-full border-b border-brand/10 bg-transparent py-2 outline-none focus:border-accent"
              />
            </div>

            {error && (
              <p role="alert" className="mb-4 text-sm font-medium text-accent">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="
                flex w-full items-center justify-center gap-3
                rounded-full bg-accent py-5 text-lg font-semibold text-white
                transition-colors hover:bg-brand disabled:opacity-60
              "
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              Send Donation Details on WhatsApp
            </button>
          </form>

          <button
            type="button"
            onClick={() => setPaymentStarted(true)}
            className="mt-4 w-full text-sm text-brand/50 hover:text-brand"
          >
            ← Change donation amount
          </button>
        </>
      )}

      {/* NEW: QR PAYMENT CONFIRMATION POPUP */}
      {qrModalOpen && (
        <div
          className="
            fixed inset-0 z-50 flex items-center justify-center
            bg-black/50 p-4
          "
          onClick={() => setQrModalOpen(false)}
        >
          <div
            className="
              relative w-full max-w-md rounded-[2rem] bg-white p-8
              shadow-xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQrModalOpen(false)}
              className="absolute right-5 top-5 text-brand/40 hover:text-brand"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h3 className="mb-2 text-center font-serif text-2xl text-brand">
              Thank you! 🙏
            </h3>

            <p className="mb-6 text-center text-sm text-brand/60">
              Please share your details on WhatsApp so we can confirm and thank
              you personally for your support.
            </p>

            <form onSubmit={submitQrDonationDetails}>
              <div className="mb-5">
                <label
                  htmlFor="qr-name"
                  className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand/50"
                >
                  Full name *
                </label>
                <input
                  id="qr-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={120}
                  className="mt-1 w-full border-b border-brand/10 bg-transparent py-2 outline-none focus:border-accent"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="qr-phone"
                  className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand/50"
                >
                  Phone number *
                </label>
                <input
                  id="qr-phone"
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={20}
                  className="mt-1 w-full border-b border-brand/10 bg-transparent py-2 outline-none focus:border-accent"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="qr-email"
                  className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand/50"
                >
                  Email (optional)
                </label>
                <input
                  id="qr-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={200}
                  className="mt-1 w-full border-b border-brand/10 bg-transparent py-2 outline-none focus:border-accent"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="qr-message"
                  className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand/50"
                >
                  A message for us (optional)
                </label>
                <textarea
                  id="qr-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={300}
                  rows={2}
                  placeholder="e.g. Wishing you all the best with the project!"
                  className="mt-1 w-full resize-none border-b border-brand/10 bg-transparent py-2 outline-none focus:border-accent"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="mb-4 text-sm font-medium text-accent"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="
                  flex w-full items-center justify-center gap-3
                  rounded-full bg-accent py-4 text-base font-semibold text-white
                  transition-colors hover:bg-brand disabled:opacity-60
                "
              >
                {loading && <Loader2 className="animate-spin" size={18} />}
                Send Details on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
