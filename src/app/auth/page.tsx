
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const supabase = createClient();
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        setMsg("تم إنشاء الحساب. يمكنك الدخول الآن إذا لم يتم تسجيلك تلقائيًا.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        router.push("/dashboard");
        router.refresh();
      }
    } catch (err: any) {
      setMsg(err.message || "حدث خطأ غير متوقع");
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
        display: "grid",
        placeItems: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 24,
          padding: 28,
        }}
      >
        <h1 style={{ margin: 0, marginBottom: 10 }}>Oxora</h1>
        <p style={{ color: "#9fb0c8", marginTop: 0, marginBottom: 24 }}>
          {mode === "signup" ? "أنشئ حسابك وابدأ التجربة" : "سجّل الدخول للوحة التجربة"}
        </p>

        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
          <button
            onClick={() => setMode("signup")}
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)",
              background: mode === "signup" ? "#7c5cff" : "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            تسجيل
          </button>
          <button
            onClick={() => setMode("login")}
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)",
              background: mode === "login" ? "#7c5cff" : "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            دخول
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: 14,
              borderRadius: 14,
              border: "none",
              background: "linear-gradient(135deg,#6ea8fe,#8b5cf6)",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {loading
              ? "جارٍ التنفيذ..."
              : mode === "signup"
              ? "إنشاء الحساب"
              : "دخول"}
          </button>
        </form>

        {msg && (
          <p style={{ marginTop: 16, color: "#c9d7ea", lineHeight: 1.7 }}>
            {msg}
          </p>
        )}
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  outline: "none",
};
