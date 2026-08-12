/**
 * Shared types for the FreeEduCamp landing page.
 * Kept in one file since v0.1 has a small, stable surface area.
 */

/** A single row collected by the waitlist form. */
export interface WaitlistEntry {
  name: string;
  email: string;
  /** Client-side timestamp, used only for the console log / local state. */
  submittedAt: string;
}

/** Field-level validation errors for the waitlist form. */
export interface WaitlistFormErrors {
  name?: string;
  email?: string;
}
