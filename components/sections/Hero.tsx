import { BookOpen, PenLine, Trophy, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// The three steps of the tagline, rendered as a visual "trail" in the
// hero. This is the page's signature element: it turns "Learn. Practice.
// Master." from a slogan into a small, literal diagram, and it's a real
// sequence (each step follows from the last), so the connecting line and
// order genuinely mean something.
const TRAIL = [
  { label: "Learn", icon: BookOpen, color: "bg-learn-400" },
  { label: "Practice", icon: PenLine, color: "bg-practice-400" },
  { label: "Master", icon: Trophy, color: "bg-mastery-500" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        {/* Copy column */}
        <div className="flex flex-col gap-6">
          <span className="kicker w-fit">Free, forever &mdash; for every student</span>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              FreeEduCamp
            </h1>
            <p className="font-display text-xl italic text-mastery-600 sm:text-2xl">
              Learn. Practice. Master.
            </p>
          </div>

          <p className="max-w-md text-base leading-relaxed text-ink-light sm:text-lg">
            Free educational resources, daily practice, and guided learning
            paths designed to help students master academic subjects.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#waitlist" variant="primary">
              Join Waitlist
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button href="#mission" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>

        {/* Visual column: the Learn -> Practice -> Master trail, set on a
            "worksheet" card with a faint ruled-paper texture. */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-8 shadow-lift sm:p-10">
            <div aria-hidden="true" className="absolute inset-0 bg-ruled-lines opacity-70" />

            <div className="relative flex flex-col gap-8">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-light">
                Today&rsquo;s learning loop
              </p>

              <ol className="flex flex-col gap-0">
                {TRAIL.map((step, index) => (
                  <li key={step.label} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span
                        className={`flex h-11 w-11 flex-none items-center justify-center rounded-full text-white ${step.color}`}
                      >
                        <step.icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      {index < TRAIL.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="my-1 h-10 w-px border-l-2 border-dashed border-ink/20"
                        />
                      ) : null}
                    </div>
                    <div className="pb-8 pt-2 last:pb-0">
                      <p className="font-display text-lg font-semibold text-ink">{step.label}</p>
                      <p className="text-sm text-ink-light">
                        {index === 0 && "Bite-sized lessons on real secondary-school topics."}
                        {index === 1 && "Daily questions that build habits, not just answers."}
                        {index === 2 && "Confidence that shows up on tests and beyond."}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Soft background accent shapes -- decorative only. */}
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-practice-100 blur-2xl sm:h-40 sm:w-40"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-8 -z-10 h-36 w-36 rounded-full bg-learn-100 blur-2xl sm:h-44 sm:w-44"
          />
        </div>
      </Container>
    </section>
  );
}
