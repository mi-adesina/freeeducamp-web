"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Mission", href: "#mission" },
  { label: "Subjects", href: "#subjects" },
  { label: "Features", href: "#features" },
  { label: "Waitlist", href: "#waitlist" },
];

/**
 * Navbar is a client component because the mobile menu needs local
 * open/closed state. It stays sticky at the top so "Join Waitlist" is
 * always reachable while scrolling through the page.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
          <Image
            src="/logo.png"
            alt="FreeEduCamp Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg"
          />
          FreeEduCamp
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-light transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#waitlist" variant="primary" className="px-5 py-2.5 text-sm">
            Join Waitlist
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile navigation panel */}
      {isOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-ink/10 bg-paper md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-ink-light hover:bg-white hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#waitlist"
              variant="primary"
              className="mt-2 w-full"
              onClick={() => setIsOpen(false)}
            >
              Join Waitlist
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
