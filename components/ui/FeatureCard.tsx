import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * FeatureCard displays a single upcoming platform capability. Used inside
 * a responsive grid in the Features section. Purely presentational --
 * takes an icon component (from lucide-react) rather than a name string,
 * so the parent stays in control of which icons are used.
 */
export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-6 shadow-card transition-transform duration-150 hover:-translate-y-1">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mastery-50 text-mastery-600">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-light">{description}</p>
      </div>
    </div>
  );
}
