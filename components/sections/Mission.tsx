import { Unlock, Repeat, Target, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    icon: Unlock,
    title: "Accessibility",
    description: "No paywalls, no hidden tiers. Every lesson and practice question is free, for every student.",
  },
  {
    icon: Repeat,
    title: "Consistency",
    description: "Small, daily learning moments compound. FreeEduCamp is built around habits, not cram sessions.",
  },
  {
    icon: Target,
    title: "Mastery",
    description: "Depth over speed. Students revisit ideas until they genuinely stick, not just until a quiz passes.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Learning is easier together. Students, teachers, and parents grow the platform side by side.",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          kicker="Our Mission"
          title="Free education, built for how students actually learn"
          description="FreeEduCamp provides free educational resources, practice questions, daily challenges, and achievement-based learning for secondary school students."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="flex flex-col gap-3 rounded-2xl bg-paper-soft p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-mastery-600">
                <pillar.icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-ink-light">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
