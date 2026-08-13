import Image from "next/image";
import {
  Quote,
  Scale,
  PiggyBank,
  TrendingUp,
  Globe,
} from "lucide-react";
import Container from "@/components/ui/Container";

const THEMES = [
  { icon: Scale, label: "Equal access to education" },
  { icon: PiggyBank, label: "Affordable learning" },
  { icon: TrendingUp, label: "Long-term academic growth" },
  { icon: Globe, label: "Helping students across Africa" },
];

export default function FounderStory() {
  return (
    <section id="story" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-2xl border border-ink/10 bg-white px-6 py-12 text-center shadow-card sm:px-12 sm:py-16">
          <span className="kicker w-fit">From the Founder</span>

          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Why I Started FreeEduCamp
          </h2>

          <Quote
            aria-hidden="true"
            className="h-8 w-8 text-mastery-100"
            strokeWidth={2.5}
          />

          <blockquote className="max-w-2xl font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
            <p>
              As a mathematics teacher, I have seen talented students struggle
              not because they lacked ability, but because they lacked access
              to quality learning resources outside the classroom. Too often,
              academic success is determined by what a family can afford rather
              than a student’s willingness to learn.
            </p>

            <p className="mt-5">
              I created FreeEduCamp to help change that. My vision is to make
              high-quality educational resources freely accessible to every
              student, regardless of background, and to build a platform where
              consistent practice leads to genuine mastery.
            </p>
          </blockquote>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Image
              src="/founder.jpg"
              alt="Michael Adesina"
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-full object-cover ring-4 ring-mastery-100"
            />

            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-ink">
                Michael Adesina
              </p>

              <p className="text-sm font-medium text-mastery-600">
                Founder & Lead Educator, FreeEduCamp
              </p>

              <p className="mt-1 text-sm text-ink-light">
                B.Sc. Pure Mathematics (University of Lagos)
              </p>

              <p className="text-sm text-ink-light">
                6+ Years Teaching Mathematics
              </p>

              <p className="text-sm text-ink-light">
                Mathematics Teacher • Software Engineer
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div>
              <p className="text-xl font-bold text-mastery-600">6+</p>
              <p className="text-xs text-ink-light">Years Teaching</p>
            </div>

            <div>
              <p className="text-xl font-bold text-mastery-600">1600+</p>
              <p className="text-xs text-ink-light">Students Taught</p>
            </div>
          </div>

          <div className="h-px w-24 bg-mastery-100" />

          <ul className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {THEMES.map((theme) => (
              <li
                key={theme.label}
                className="flex items-center gap-2 rounded-full border border-mastery-100 bg-paper-soft px-4 py-2 text-xs font-medium text-ink-light sm:text-sm"
              >
                <theme.icon
                  aria-hidden="true"
                  className="h-4 w-4 text-mastery-600"
                />
                {theme.label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}