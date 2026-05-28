"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Building2,
} from "lucide-react";

import logo from "@/assets/logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="bg-brand px-6 pb-10 pt-20 text-surface/60 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 md:grid-cols-12">
        {/* LEFT */}
        <div className="max-w-sm md:col-span-4">
          <Link href="/" className="mb-8 flex items-center gap-4">
            <Image
              src={logo}
              alt="Anand Charitable Trust Logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-sm bg-white p-1 object-contain"
              priority
            />

            <div>
              <h3 className="font-serif text-3xl text-surface">Anand</h3>

              <p className="text-xs uppercase tracking-[0.25em]">
                Charitable Trust
              </p>
            </div>
          </Link>

          <p className="text-sm leading-7">
            A community-driven NGO empowering children, women and youth through
            education, training, relief support and social welfare initiatives
            since 2018.
          </p>

          <div className="mt-8 space-y-5">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="mt-1 text-accent">
                <MapPin size={18} />
              </div>

              <address className="not-italic text-sm leading-7 text-surface/75">
                ASHIRBAD PALACE, H N-10, 2nd Floor
                <br />
                Kuha, Sundarpada
                <br />
                Opposite K K Restaurant
                <br />
                Bhubaneswar, Odisha – 751002
              </address>
            </div>

            {/* Trust */}
            <div className="flex items-center gap-4">
              <div className="text-accent">
                <Building2 size={18} />
              </div>

              <span className="text-sm text-surface/75">
                Anand Charitable Trust
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="text-accent">
                <Mail size={18} />
              </div>

              <a
                href="mailto:anandcharitabletrust@gmail.com"
                className="text-sm text-surface/75 transition hover:text-accent"
              >
                anandcharitabletrust@gmail.com
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-surface">
              Follow Us
            </p>

            <div className="flex gap-5">
              <a
                href="https://www.facebook.com/anandcharitabletrust"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-accent"
              >
                <Facebook size={18} />
              </a>

              <a href="#" className="transition hover:text-accent">
                <Instagram size={18} />
              </a>

              <a href="#" className="transition hover:text-accent">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* DONATION */}
          <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-surface">
              Support Our Mission
            </p>

            <div className="w-[180px] rounded-[1.75rem] border border-surface/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="grid aspect-square place-items-center rounded-2xl border border-white/10 bg-white/5">
                <div className="px-4 text-center">
                  <div className="mb-3 text-4xl">❤️</div>

                  <p className="text-sm font-medium text-surface">
                    Donation QR
                  </p>

                  <p className="mt-1 text-xs text-surface/50">Coming Soon</p>
                </div>
              </div>

              <p className="mt-3 text-center text-[11px] text-surface/45">
                Secure donation support will be available soon
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-10 md:col-span-8 sm:grid-cols-3">
          {/* Organization */}
          <div>
            <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-surface">
              Organization
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/programmes" className="hover:text-accent">
                  Our Work
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-surface">
              Get Involved
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/donate" className="hover:text-accent">
                  Donate
                </Link>
              </li>

              <li>
                <Link href="/volunteer" className="hover:text-accent">
                  Volunteer
                </Link>
              </li>

              <li>
                <Link href="/impact" className="hover:text-accent">
                  Impact
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-accent">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust Info */}
          <div>
            <h4 className="mb-6 text-[10px] font-medium uppercase tracking-[0.25em] text-surface">
              Trust Info
            </h4>

            <div className="space-y-3">
              {[
                ["Founded", "2018"],
                ["Registration No", "41082001219"],
                ["Registered", "31 Jan 2020"],
                ["Type", "Trust Act"],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-white/10 pb-3">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <span className="shrink-0 text-[11px] uppercase tracking-[0.14em] text-surface/45">
                      {label}
                    </span>

                    <span className="break-words text-sm font-medium text-surface sm:text-right">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-surface/10 pt-8 md:flex-row">
        <p className="text-[10px] uppercase tracking-[0.25em]">
          © {new Date().getFullYear()} ANAND CHARITABLE TRUST
        </p>

        <p className="text-center text-[10px] uppercase tracking-[0.25em]">
          Building stronger communities together
        </p>
      </div>
    </footer>
  );
}
