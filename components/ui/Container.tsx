import { HTMLAttributes } from "react";

/**
 * Container centers page content and applies consistent horizontal
 * padding across breakpoints. Every section should use this instead of
 * repeating max-width/padding utility classes.
 */
export default function Container({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-6 sm:px-8 lg:px-10 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
