export type PlanKey = "free" | "starter" | "pro" | "team";

export const planLimits: Record<PlanKey, number | null> = {
  free: 5,
  starter: 50,
  pro: 250,
  team: null
};

export function normalizePlan(value?: string | null): PlanKey {
  if (value === "starter" || value === "pro" || value === "team") return value;
  return "free";
}
