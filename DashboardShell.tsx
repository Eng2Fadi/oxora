"use client";

import { useMemo, useState } from "react";

type ModuleKey = "generate" | "hooks" | "ideas" | "improve";

const moduleMeta: Record<ModuleKey, { title: string; placeholder: string }> = {
  generate: { title: "مولد البوست", placeholder: "اكتب فكرة أو درس أو موقفًا تريد تحويله إلى بوست" },
  hooks: { title: "مولد الـ Hooks", placeholder: "اكتب الموضوع الذي تريد hooks له" },
  ideas: { title: "مولد الأفكار", placeholder: "اشرح niche والجمهور والعرض" },
  improve: { title: "مطور البوست", placeholder: "الصق البوست الحالي ليتم تحسينه" }
};

export function DashboardShell({ initialUsage }: { initialUsage: { plan: string; usedThisMonth: number; remaining: number | null; limit: number | null } }) {
  const [moduleName, setModuleName] = useState<ModuleKey>("generate");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const meta = useMemo(() => moduleMeta[moduleName], [moduleName]);

  async function run() {
    setLoading(true);
    setError("");
    setOutput("");

    const response = await fetch(`/api/ai/${moduleName}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input })
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.error || "حدث خطأ غير متوقع.");
      setLoading(false);
      return;
    }

    setOutput(data.result || "");
    setLoading(false);
  }

  return (
    <div className="container-shell section-space">
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="card h-fit">
          <h2 className="text-xl font-bold">الخطة الحالية</h2>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
            <div><span className="font-semibold text-white">Plan:</span> {initialUsage.plan}</div>
            <div className="mt-2"><span className="font-semibold text-white">Used:</span> {initialUsage.usedThisMonth}</div>
            <div className="mt-2"><span className="font-semibold text-white">Remaining:</span> {initialUsage.remaining === null ? "Unlimited" : initialUsage.remaining}</div>
            <div className="mt-2"><span className="font-semibold text-white">Limit:</span> {initialUsage.limit === null ? "Unlimited" : initialUsage.limit}</div>
          </div>

          <div className="mt-6 grid gap-2">
            {(Object.keys(moduleMeta) as ModuleKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setModuleName(key)}
                className={`rounded-2xl border px-4 py-3 text-right transition ${moduleName === key ? "border-primary/40 bg-primary/10 text-white" : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06]"}`}
              >
                {moduleMeta[key].title}
              </button>
            ))}
          </div>
        </aside>

        <section className="card">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-3xl font-extrabold">{meta.title}</h1>
              <p className="mt-2 text-slate-300">منتج صغير لكنه منطقي: module واحد، input واضح، output قابل للاستخدام.</p>
            </div>
            <a href="/pricing" className="btn-secondary">Upgrade</a>
          </div>

          <div className="mt-8 grid gap-4">
            <textarea
              rows={8}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={meta.placeholder}
              className="input"
            />
            <div className="flex flex-wrap gap-3">
              <button disabled={loading || !input.trim()} onClick={run} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
                {loading ? "جارٍ التنفيذ..." : "تشغيل"}
              </button>
              <span className="kbd">POST /api/ai/{moduleName}</span>
            </div>
            {error ? <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-200">{error}</div> : null}
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <div className="mb-3 text-sm font-semibold text-slate-300">النتيجة</div>
              <pre className="whitespace-pre-wrap text-sm leading-7 text-slate-100">{output || "ستظهر النتيجة هنا بعد التنفيذ."}</pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
