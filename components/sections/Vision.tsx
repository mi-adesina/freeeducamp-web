import { Sparkles, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";

const REASONS = [
  "Free education for every student, regardless of background or budget.",
  "Learning through daily practice, not one-off cram sessions before exams.",
  "Building strong study habits that outlast any single school term.",
  "Community-driven growth, shaped by the students and teachers who use it.",
  "A foundation for long-term academic success, not just short-term grades.",
];

export default function Vision() {
  return (
    <section id="vision" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="kicker w-fit">
              <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
              Why FreeEduCamp?
            </span>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Built for students who show up, one day at a time
            </h2>
            <p className="text-base leading-relaxed text-ink-light sm:text-lg">
              FreeEduCamp exists because mastery isn&rsquo;t bought or rushed &mdash; it&rsquo;s
              practiced. We&rsquo;re building a platform that removes cost as a barrier and
              replaces cramming with small, steady habits that actually last.
            </p>
          </div>

          <ul className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 flex-none text-mastery-500"
                />
                <span className="text-sm leading-relaxed text-ink sm:text-base">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prominent, visually distinct callout -- the one dark surface on
            an otherwise light page, used deliberately here so the
            long-term vision statement reads as the section's centerpiece
            rather than another paragraph. */}
        <div className="rounded-2xl bg-ink px-6 py-10 sm:px-12 sm:py-14">
          <span className="kicker w-fit">Our Long-Term Vision</span>
          <p className="mt-5 max-w-3xl font-display text-2xl italic leading-snug text-white sm:text-3xl lg:text-4xl">
            Our goal is to become the free educational platform students
            across Africa can rely on every day to learn, practice, and
            master academic subjects.
          </p>
        </div>
      </Container>
    </section>
  );
}
