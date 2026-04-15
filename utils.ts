import { clsx } from "clsx";

export function cn(...inputs: Array<string | false | undefined | null>) {
  return clsx(inputs);
}

export function formatPlanLimit(limit: number | null) {
  return limit === null ? "Unlimited" : `${limit} runs / month`;
}
