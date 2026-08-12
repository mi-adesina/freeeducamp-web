import {
  Calculator,
  CalendarCheck,
  Flame,
  Award,
  Target,
  BarChart3,
  MessageCircleQuestion,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

// v0.1 is a landing page only -- none of these are built yet. Listing
// them here sets expectations and doubles as an early roadmap for the
// waitlist audience.
const UPCOMING_FEATURES = [
  {
    icon: Calculator,
    title: "Mathematics Learning Paths",
    description: "Structured, topic-by-topic paths that build secondary-school maths from the ground up.",
  },
  {
    icon: CalendarCheck,
    title: "Question of the Day",
    description: "One focused question a day, designed to keep concepts fresh without eating your whole evening.",
  },
  {
    icon: Flame,
    title: "Daily Streaks",
    description: "A simple, visible way to track how consistently you're showing up to practice.",
  },
  {
    icon: Award,
    title: "Points & Academic Ranks",
    description: "Progress that's recognized -- earn points and ranks as your mastery of a subject grows.",
  },
  {
    icon: Target,
    title: "Weekly Challenges",
    description: "Timed, topic-specific challenges to stress-test what you've learned during the week.",
  },
  {
    icon: BarChart3,
    title: "Leaderboards",
    description: "Friendly progress tracking that encourages consistency and celebrates learning achievements.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Ask a Teacher",
    description: "A direct line to real teachers when a concept doesn't click from a lesson or a question alone.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          kicker="Coming Soon"
          title="What we're building next"
          description="These are the tools we're building into FreeEduCamp after launch. Join the waitlist to help shape them and be first to try each one."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {UPCOMING_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
