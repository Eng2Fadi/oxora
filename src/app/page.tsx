export default function Home() {
  return (
    <main className="container" style={{padding: "80px 0", textAlign: "center"}}>
      <h1 style={{fontSize: "42px", marginBottom: "16px"}}>
        Oxora
      </h1>

      <p style={{color: "#9db0d1", marginBottom: "24px"}}>
        نظام ذكي لتحويل لينكدان إلى مصدر عملاء
      </p>

      <div style={{display: "flex", justifyContent: "center", gap: "12px"}}>
        <a href="/dashboard" style={{padding: "12px 18px", background: "#4f8cff", borderRadius: "10px"}}>
          Dashboard
        </a>
        <a href="/pricing" style={{padding: "12px 18px", border: "1px solid #2a3a5a", borderRadius: "10px"}}>
          Pricing
        </a>
      </div>
    </main>
  );
}
