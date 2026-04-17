
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Props = {
  email: string;
  credits: number;
};

export default function DashboardClient({ email, credits }: Props) {
  const supabase = createClient();

  const [industry, setIndustry] = useState("");
  const [audience, setAudience] = useState("");
  const [goal, setGoal] = useState("");
  const [contentType, setContentType] = useState("linkedin_post");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  async function signOut() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  async function generate() {
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ industry, audience, goal, contentType }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "فشل توليد المحتوى");
      }

      setResult(data.output);
    } catch (err: any) {
      setError(err.message || "حدث خطأ");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050d1a",
        color: "white",
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <div>
            <h1 style={{ margin: 0 }}>لوحة التجربة</h1>
            <p style={{ color: "#9fb0c8", marginTop: 8 }}>
              {email} — الرصيد المتبقي: {credits}
            </p>
          </div>

          <button onClick={signOut} style={btnGhost}>
            تسجيل الخروج
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          <div style={card}>
            <h2 style={{ marginTop: 0 }}>جرّب Oxora فعليًا</h2>

            <div style={{ display: "grid", gap: 14 }}>
              <input
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="مجالك — مثال: SaaS / عقارات / تصميم"
                style={input}
              />

              <input
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                placeholder="جمهورك — مثال: founders / freelancers / marketers"
                style={input}
              />

              <input
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="هدفك — مثال: جذب عملاء / بناء ثقة / زيادة التفاعل"
                style={input}
              />

              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                style={input}
              >
                <option value="linkedin_post">منشور LinkedIn</option>
                <option value="hook_ideas">Hooks فقط</option>
                <option value="content_ideas">أفكار محتوى</option>
              </select>

              <button onClick={generate} disabled={loading} style={btnPrimary}>
                {loading ? "جارٍ التوليد..." : "توليد"}
              </button>
            </div>

            {error && (
              <p style={{ color: "#fca5a5", marginTop: 16, lineHeight: 1.7 }}>
                {error}
              </p>
            )}
          </div>

          <div style={card}>
            <h2 style={{ marginTop: 0 }}>النتيجة</h2>
            <div
              style={{
                minHeight: 420,
                whiteSpace: "pre-wrap",
                lineHeight: 1.9,
                color: "#d7e3f2",
              }}
            >
              {result || "سيظهر هنا الناتج بعد التوليد"}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 24,
  padding: 24,
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  outline: "none",
};

const btnPrimary: React.CSSProperties = {
  padding: "14px 16px",
  borderRadius: 14,
  border: "none",
  background: "linear-gradient(135deg,#6ea8fe,#8b5cf6)",
  color: "white",
  fontWeight: 700,
  cursor: "pointer",
};

const btnGhost: React.CSSProperties = {
  padding: "12px 16px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "transparent",
  color: "white",
  cursor: "pointer",
};
