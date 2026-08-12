import { Sigma, Infinity as InfinityIcon, Atom, FlaskConical, Dna, Languages } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

// Core secondary-school subjects available at launch. Reuses FeatureCard
// (icon + title + description) so the visual language matches the
// "Coming Soon" grid below it, rather than introducing a one-off card
// style for what is structurally the same kind of content.
const SUBJECTS = [
  {
    icon: Sigma,
    title: "Mathematics",
    description: "Build strong foundations in algebra, geometry, trigonometry, statistics, and problem solving.",
  },
  {
    icon: InfinityIcon,
    title: "Further Mathematics",
    description: "Extend core maths into calculus, mechanics, and more advanced problem-solving techniques.",
  },
  {
    icon: Atom,
    title: "Physics",
    description: "Explore the laws that govern motion, energy, and matter through clear, practical explanations.",
  },
  {
    icon: FlaskConical,
    title: "Chemistry",
    description: "Understand chemical reactions, structures, and the building blocks of the material world.",
  },
  {
    icon: Dna,
    title: "Biology",
    description: "Study living systems, from cells to ecosystems, with clarity and real-world context.",
  },
  {
    icon: Languages,
    title: "English Language",
    description: "Strengthen comprehension, grammar, and writing skills for exams and everyday communication.",
  },
];

export default function Subjects() {
  return (
    <section id="subjects" className="bg-paper-soft py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          kicker="Subjects at Launch"
          title="Where students will start"
          description="FreeEduCamp will begin with core secondary-school subjects and expand over time."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.map((subject) => (
            <FeatureCard
              key={subject.title}
              icon={subject.icon}
              title={subject.title}
              description={subject.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
