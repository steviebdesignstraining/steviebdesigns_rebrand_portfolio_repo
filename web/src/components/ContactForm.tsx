"use client";

import { useCallback, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  honeypot: string;
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>({ name: "", email: "", message: "", honeypot: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isValidEmail = useCallback((value: string) => /.+@.+\..+/.test(value), []);

  const disabled = useMemo(() => {
    return (
      submitting ||
      state.name.trim().length < 2 ||
      !isValidEmail(state.email) ||
      state.message.trim().length < 10
    );
  }, [submitting, state, isValidEmail]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    if (state.honeypot) return; // bot
    
    // Additional validation
    if (!state.name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!state.email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!isValidEmail(state.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!state.message.trim()) {
      setError("Message is required.");
      return;
    }
    
    setSubmitting(true);
    try {
      // In a real implementation, this would send to steviebdesigns1@gmail.com
      await new Promise((r) => setTimeout(r, 600));
      setSuccess("Thanks! Your message has been sent to steviebdesigns1@gmail.com.");
      setState({ name: "", email: "", message: "", honeypot: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="mt-6 grid gap-3" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-1">
        <label className="text-sm" htmlFor="name">Name</label>
        <input id="name" className="rounded-md border border-foreground/20 px-3 py-2 bg-background" placeholder="Your name" value={state.name} onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))} required />
      </div>
      <div className="grid gap-1">
        <label className="text-sm" htmlFor="email">Email</label>
        <input id="email" className="rounded-md border border-foreground/20 px-3 py-2 bg-background" placeholder="you@example.com" type="email" value={state.email} onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))} required />
      </div>
      <div className="grid gap-1">
        <label className="text-sm" htmlFor="message">Message</label>
        <textarea id="message" className="rounded-md border border-foreground/20 px-3 py-2 bg-background" placeholder="How can I help?" rows={5} value={state.message} onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))} required />
      </div>
      {/* Honeypot field */}
      <input className="hidden" tabIndex={-1} autoComplete="off" value={state.honeypot} onChange={(e) => setState((s) => ({ ...s, honeypot: e.target.value }))} aria-hidden="true" />

      <div className="flex items-center gap-3">
        <button type="submit" className="px-5 py-2 rounded-md bg-foreground text-background w-fit disabled:opacity-50" disabled={disabled}>
          {submitting ? "Sending..." : "Send"}
        </button>
        {success ? <span className="text-green-600 text-sm">{success}</span> : null}
        {error ? <span className="text-red-600 text-sm">{error}</span> : null}
      </div>
    </form>
  );
}


