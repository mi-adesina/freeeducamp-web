import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<Variant, string> = {
  primary: "bg-mastery-500 text-white hover:bg-mastery-600",
  secondary:
    "bg-white text-ink border border-ink/15 hover:border-ink/30",
  ghost: "text-ink hover:text-mastery-600",
};

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonAsButton | ButtonAsLink;

/**
 * Button renders either a real <button> or an <a> styled identically,
 * depending on whether an href is supplied. Keeping both in one component
 * means CTAs stay visually consistent whether they submit a form or link
 * to an in-page anchor like #waitlist.
 */
export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
