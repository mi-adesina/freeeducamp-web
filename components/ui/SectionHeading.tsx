interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/**
 * SectionHeading standardises the "kicker / title / description" pattern
 * used at the top of every major section, so heading sizes and spacing
 * stay consistent without repeating classes in each section component.
 */
export default function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {kicker ? <span className="kicker">{kicker}</span> : null}
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base leading-relaxed text-ink-light sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
