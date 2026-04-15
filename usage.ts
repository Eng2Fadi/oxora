import { auth } from "@clerk/nextjs/server";
import { hasClerk } from "./env";
import { getSupabaseAdminClient } from "./supabase";
import { normalizePlan, planLimits, type PlanKey } from "./plans";

export type UsageSummary = {
  plan: PlanKey;
  limit: number | null;
  usedThisMonth: number;
  remaining: number | null;
};

function monthRange() {
  const now = new Date();
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)).toISOString();
  const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1)).toISOString();
  return { start, end };
}

export async function getUsageSummary(userId: string): Promise<UsageSummary> {
  const supabase = getSupabaseAdminClient();
  const fallback: UsageSummary = { plan: "free", limit: planLimits.free, usedThisMonth: 0, remaining: planLimits.free };
  if (!supabase) return fallback;

  const { data: profile } = await supabase.from("profiles").select("plan").eq("clerk_user_id", userId).maybeSingle();
  const plan = normalizePlan(profile?.plan);
  const limit = planLimits[plan];
  const { start, end } = monthRange();

  const { count } = await supabase
    .from("usage_logs")
    .select("id", { count: "exact", head: true })
    .eq("clerk_user_id", userId)
    .gte("created_at", start)
    .lt("created_at", end);

  const usedThisMonth = count ?? 0;
  return {
    plan,
    limit,
    usedThisMonth,
    remaining: limit === null ? null : Math.max(limit - usedThisMonth, 0)
  };
}

export async function requireUsage(moduleName: string) {
  const userId = hasClerk() ? auth().userId : "demo-user";
  if (!userId) {
    return { ok: false as const, status: 401, error: "Unauthorized" };
  }

  const summary = await getUsageSummary(userId);
  if (summary.remaining !== null && summary.remaining <= 0) {
    return { ok: false as const, status: 403, error: "Usage limit reached", summary };
  }

  return { ok: true as const, userId, summary, moduleName };
}

export async function trackUsage(userId: string, moduleName: string, input: string, output: string) {
  const supabase = getSupabaseAdminClient();
  if (!supabase) return;

  await supabase.from("usage_logs").insert({
    clerk_user_id: userId,
    module: moduleName,
    prompt_input: input,
    output_excerpt: output.slice(0, 1000)
  });
}
