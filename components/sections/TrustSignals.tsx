import { GraduationCap, Heart, Presentation } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const AUDIENCES = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Practice consistently and build mastery.",
  },
  {
    icon: Heart,
    title: "Parents",
    description: "Support learning beyond the classroom.",
  },
  {
    icon: Presentation,
    title: "Teachers",
    description: "Share resources and help learners succeed.",
  },
];

/**
 * TrustSignals sits directly above the Waitlist section, so the last
 * thing a visitor reads before the sign-up form is a reminder that the
 * platform is meant for their whole household or classroom, not just
 * students working alone.
 */
export default function TrustSignals() {
  return (
    <section id="built-for" className="py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading title="Built For" />

        <div className="grid w-full gap-8 sm:grid-cols-3">
          {AUDIENCES.map((audience) => (
            <div key={audience.title} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mastery-50 text-mastery-600">
                <audience.icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-semibold text-ink">{audience.title}</h3>
              <p className="text-sm leading-relaxed text-ink-light">{audience.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
