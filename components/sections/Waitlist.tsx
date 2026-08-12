"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { WaitlistFormErrors } from "@/lib/types";
import { supabase } from "@/lib/supabase";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validates the raw form values and returns any field errors found. */
function validate(name: string, email: string): WaitlistFormErrors {
  const errors: WaitlistFormErrors = {};

  if (!name.trim()) {
    errors.name = "Enter your name.";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!email.trim()) {
    errors.email = "Enter your email.";
  } else if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<WaitlistFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(name, email);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const { error } = await supabase
      .from("waitlist")
      .insert({
        name: name.trim(),
        email: email.trim(),
      });

    if (error) {
      if (error.code === "23505") {
        alert("This email is already on the waitlist.");
      } else {
        alert("Unable to join waitlist. Please try again.");
      }

      console.error(error);
      return;
    }

    setIsSubmitted(true);
    setName("");
    setEmail("");
  }

  return (
    <section id="waitlist" className="bg-mastery-500 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-10">
        {/* Custom (not SectionHeading) so text color can be flipped to
            white for contrast against the solid green background. */}
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Join the Waitlist
          </h2>
          <p className="text-base leading-relaxed text-white/85 sm:text-lg">
            Be among the first students, teachers, and parents to know when FreeEduCamp launches.
          </p>
        </div>

        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lift sm:p-8">
          {isSubmitted ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-mastery-500" />
              <h3 className="font-display text-xl font-semibold text-ink">You&rsquo;re on the list</h3>
              <p className="text-sm text-ink-light">
                We&rsquo;ll email you as soon as FreeEduCamp opens up. Thanks for the early support.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-sm font-medium text-mastery-600 hover:text-mastery-500"
              >
                Add another person
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="waitlist-name" className="text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="waitlist-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "waitlist-name-error" : undefined}
                  className="rounded-xl border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-light/60 focus:border-mastery-500"
                  placeholder="Ada Lovelace"
                />
                {errors.name ? (
                  <p id="waitlist-name-error" role="alert" className="text-xs text-red-600">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="waitlist-email" className="text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "waitlist-email-error" : undefined}
                  className="rounded-xl border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-light/60 focus:border-mastery-500"
                  placeholder="ada@example.com"
                />
                {errors.email ? (
                  <p id="waitlist-email-error" role="alert" className="text-xs text-red-600">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Join Waitlist
              </Button>

              <p className="text-center text-xs text-ink-light">
                No spam. Just one email when we launch.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
