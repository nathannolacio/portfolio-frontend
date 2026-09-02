"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, { error: false });

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg p-4">
      <form
        action={formAction}
        className="flex w-full max-w-sm flex-col gap-4 rounded-sm border border-border bg-surface p-8"
      >
        <h1 className="font-display text-xl font-medium text-text">Admin login</h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm text-text-muted">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoFocus
            className="rounded-sm border border-border bg-bg px-3 py-2 text-text outline-none focus:border-accent"
          />
        </div>

        {state.error ? (
          <p className="text-sm text-red-600">Incorrect password.</p>
        ) : null}

        <button
          type="submit"
          disabled={isPending}
          className="mt-2 rounded-sm bg-text px-4 py-2 text-sm font-medium text-bg transition-colors duration-300 ease-in-out hover:bg-accent disabled:opacity-60"
        >
          {isPending ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
