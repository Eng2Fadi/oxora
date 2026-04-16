import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container" style={{ padding: "80px 0", textAlign: "center" }}>
      <h1 style={{ fontSize: "42px", marginBottom: 16 }}>Oxora</h1>
      <p style={{ color: "#9db0d1", marginBottom: 24 }}>
        نحول لينكدان إلى مصدر عملاء باستخدام الذكاء الاصطناعي والأتمتة.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/pricing">Pricing</Link>
      </div>
    </section>
  );
}

export default function HomeSections() {
  return <HeroSection />;
}
