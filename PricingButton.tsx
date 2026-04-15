"use client";

import { useState } from "react";

export function PricingButton({ planName, userId, priceIdEnv }: { planName: string; userId: string | null; priceIdEnv?: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    if (!userId) {
      window.location.href = "/sign-in";
      return;
    }

    setLoading(true);
    setError("");
    const response = await fetch("/api/billing/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planName, priceIdEnv })
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error || "تعذر بدء عملية الدفع.");
      setLoading(false);
      return;
    }
    window.location.href = data.url;
  }

  return (
    <div className="mt-6">
      <button onClick={startCheckout} disabled={loading} className="btn-primary w-full disabled:opacity-60">
        {loading ? "جارٍ التحويل..." : `اشترك في ${planName}`}
      </button>
      {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
    </div>
  );
}
