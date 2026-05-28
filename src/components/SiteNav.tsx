"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import logo from "@/assets/logo.jpeg";

const links = [
  { href: "/programmes", label: "Our Work" },
  { href: "/about", label: "About Us" },
  { href: "/impact", label: "Impact" },
  { href: "/gallery", label: "Gallery" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/partners", label: "Partners" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand/5 bg-surface/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-brand"
        >
          <Image
            src={logo}
            alt="Anand Charitable Trust Logo"
            width={56}
            height={56}
            className="h-14 w-14 rounded-sm object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[0.18em] lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand/70 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-brand active:scale-95 sm:inline-flex"
          >
            Donate Now
          </Link>

          <button
            className="grid min-h-11 min-w-11 place-items-center text-brand lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-brand/5 bg-surface lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-brand"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-white"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
