import { Mail } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";

const FOOTER_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Mission", href: "#mission" },
  { label: "Subjects", href: "#subjects" },
  { label: "Features", href: "#features" },
  { label: "Waitlist", href: "#waitlist" },
];

const CONTACT_EMAIL = "hello@freeeducamp.org";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-white">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <Image
              src="/logo.png"
              alt="FreeEduCamp Logo"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            FreeEduCamp
          </a>
          <p className="text-sm font-medium text-ink-light">Learn. Practice. Master.</p>
          <p className="max-w-xs text-sm text-ink-light">
            Free educational resources for every learner.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 text-sm text-ink-light transition-colors hover:text-ink"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            {CONTACT_EMAIL}
          </a>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 sm:items-end">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-light">
            Quick Links
          </p>
          <div className="flex flex-col gap-2 sm:items-end">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-light transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </Container>

      <div className="border-t border-ink/10">
        <Container className="py-5">
          <p className="text-xs text-ink-light">
            &copy; {year} FreeEduCamp. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
